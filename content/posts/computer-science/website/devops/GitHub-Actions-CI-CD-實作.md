+++
title = "GitHub Actions CI/CD 實作"
date = 2026-07-17 02:20:00
draft = false
categories = ["Computer Science", "Website", "DevOps"]
+++

這篇用 **GitHub Actions** 從零做到「**推 code 到 `main` → 自動 build → 自動部署**」。概念的部分可以先看 [What is CI/CD?](/posts/what-is-ci-cd/)；GitLab 的做法我另外寫在 [GitLab CI/CD 實作](/posts/gitlab-ci-cd-實作/)，兩篇可以對照著看。

重點會放在 **self-hosted runner**——也就是把 job 跑在**你自己的機器**上。因為很多實際場景（部署目標在**內網 / 校內網路**、需要 **GPU**、要碰**私有資源**）下，GitHub 的雲端 runner 根本連不進去，一定得自架 runner。這也是我在一個部署到內網主機的專案裡實際採用的方式，過程踩到的坑一併記下來。

{{% callout "info" %}}
整體流程：**建立 repo → 在部署主機安裝並註冊 self-hosted runner → 把 runner 設成常駐服務 → 在 `.github/workflows/` 寫 workflow → 推 code 觸發**。

和 GitLab 的心智模型對照：

| GitLab | GitHub Actions |
| --- | --- |
| `.gitlab-ci.yml`（放根目錄） | `.github/workflows/*.yml`（可多份） |
| Pipeline → Stage → Job | Workflow → Job → Step |
| Runner（自架） | Runner（GitHub-hosted 或 self-hosted） |
| `script:` 一行行指令 | `run:` 指令 或 `uses:` 現成 Action |
{{% /callout %}}

# 一、GitHub Actions 的組成

一個 **workflow** 就是一個 YAML 檔，放在 repo 的 `.github/workflows/` 底下（可以有很多份，各自獨立觸發）。階層是：

```
Workflow (一個 .yml 檔，由事件觸發)
└── Job (跑在某一台 runner 上；多個 job 預設並行)
    └── Step (依序執行；每步是一行 run: 指令，或一個 uses: 現成 Action)
```

- **`on`**：什麼事件會觸發（push、pull_request、排程、手動…）。
- **`jobs`**：一個 workflow 底下的工作；每個 job 用 `runs-on` 指定跑在哪種 runner。
- **`steps`**：job 內依序執行的步驟。`run:` 執行 shell 指令；`uses:` 套用別人寫好的 Action（例如 `actions/checkout` 幫你 clone 程式碼）。
- **Action**：可重用的封裝步驟，是 GitHub Actions 生態的核心（相當於把常見動作模組化）。

# 二、GitHub-hosted vs self-hosted runner

Job 一定要有 runner 來執行，有兩種：

- **GitHub-hosted**：GitHub 提供的雲端機器（`runs-on: ubuntu-latest`）。免安裝、用完即丟，適合純測試 / build / 公開部署。
- **self-hosted**：**你自己的機器**上跑一個 runner agent，`runs-on: [self-hosted, <label>]`。

{{% callout "warning" %}}
**什麼時候一定要 self-hosted？** 當 GitHub 的雲端 runner「碰不到」你的部署目標時：

- 部署目標在**內網 / 校內網路**（例如 `10.x.x.x`），雲端 runner 無法 SSH 進去。
- Job 需要**特定硬體**（GPU、大記憶體）或**本機資源**（本地 registry、私有資料庫）。
- 不想把部署用的**憑證 / SSH key** 丟到雲端。

self-hosted runner 反過來是 runner 主動**對外**連 GitHub 拉 job，所以**不需要對內網開任何 inbound 埠**，內網部署特別合適。
{{% /callout %}}

# 三、安裝並註冊 self-hosted runner

到 repo 的 **Settings → Actions → Runners → New self-hosted runner**，選對 **OS 與架構**（x64 或 ARM64——ARM 機器一定要選 ARM64，抓錯版本會跑不起來），GitHub 會給你一段安裝指令。核心就三步：

```bash
# 1) 下載並解壓 runner（版本 / 架構依頁面提供的為準）
mkdir actions-runner && cd actions-runner
curl -o runner.tar.gz -L https://github.com/actions/runner/releases/download/vX.Y.Z/actions-runner-linux-arm64-X.Y.Z.tar.gz
tar xzf runner.tar.gz

# 2) 註冊到這個 repo（token 從上面那頁複製，短效約 1 小時）
./config.sh --url https://github.com/OWNER/REPO \
  --token YOUR_REGISTRATION_TOKEN \
  --labels my-runner \
  --unattended

# 3) 先手動跑跑看
./run.sh
```

- **`--labels`**：自訂標籤，workflow 用 `runs-on: [self-hosted, my-runner]` 指定要用它。
- 註冊成功後，Runners 頁面會出現一個 **Idle（綠色）** 的 runner，代表已上線待命。
- checkout 用的是 GitHub 自動注入的 `GITHUB_TOKEN`，所以 **runner 不需要另外設 SSH key** 就能 clone 私有 repo。

## 把 runner 設成常駐服務

`./run.sh` 一關掉就停了。要讓它**開機自啟、登出不死**，得設成服務。官方提供 `svc.sh`，但它會裝**系統層級的 systemd 服務、需要 root**：

{{< tabs >}}
{{% tab "有 root：官方 svc.sh" %}}
```bash
sudo ./svc.sh install    # 安裝成系統服務
sudo ./svc.sh start      # 啟動
sudo ./svc.sh status
```
{{% /tab %}}
{{% tab "無 root：systemd --user（推薦用在共用主機）" %}}
沒有 sudo（例如共用的實驗室 / 公司主機）時，用**使用者層級**的 systemd，完全不需要 root：

```bash
# 讓自己的 user services 在登出後仍常駐（開機自動起）
loginctl enable-linger "$USER"

mkdir -p ~/.config/systemd/user
cat > ~/.config/systemd/user/gh-runner.service <<'EOF'
[Unit]
Description=GitHub Actions self-hosted runner
After=network-online.target

[Service]
WorkingDirectory=%h/actions-runner
ExecStart=%h/actions-runner/run.sh
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
EOF

systemctl --user daemon-reload
systemctl --user enable --now gh-runner.service
```
{{% /tab %}}
{{< /tabs >}}

{{% callout "info" %}}
`loginctl enable-linger` 是無 root 方案的關鍵：一般 `systemd --user` 的服務會在你登出時被收掉，**開了 linger 之後**系統會為你保留一個常駐的 user manager，服務就能像系統服務一樣一直活著、開機也會自動起。
{{% /callout %}}

{{% details "踩坑：runner 跑 docker 指令噴 permission denied（點開）" %}}
如果你的 job 要在 runner 上跑 `docker`（例如 build image、`docker compose up`），常會遇到一個很難察覺的坑：

**症狀**：job 一啟動就在 build/deploy 那步以 exit code 1 秒殺失敗，訊息是 `permission denied ... /var/run/docker.sock`——即使你已經 `usermod -aG docker $USER` 把自己加進 docker 群組了。

**原因**：你的 `systemd --user` **管理器（user manager）是在你被加進 docker 群組「之前」就啟動的**，它**快取了舊的群組清單**（沒有 docker）。它衍生出來的 runner 服務自然也繼承不到 docker 群組 → 連不上 docker socket。

**解法**：讓 runner 透過 `sg docker` 啟動，它會**重讀 `/etc/group`** 直接補上 docker 群組，非侵入、也不用重啟整台機器：

```ini
# gh-runner.service 的 ExecStart 改成：
ExecStart=/usr/bin/sg docker -c "%h/actions-runner/run.sh"
```

（機器**重開機**後 user manager 會重新讀到 docker 群組，其實也能解；但用 `sg docker` 不必重開、最省事。）
{{% /details %}}

# 四、撰寫 workflow

在 repo 根目錄建立 `.github/workflows/deploy.yml`，GitHub 偵測到就會依 `on` 的事件自動驅動。基本結構：

```yaml
name: Deploy

on:
  push:
    branches: [main]      # 只在推到 main 時觸發
  workflow_dispatch: {}   # 也允許在網頁上手動按一下觸發

jobs:
  deploy:
    runs-on: [self-hosted, my-runner]   # 指定用我們的 runner
    steps:
      - uses: actions/checkout@v4       # 現成 Action：clone 程式碼
      - run: echo "hello CI"            # 一行指令
```

{{% callout "info" %}}
- **`on`**：事件驅動。常用 `push`、`pull_request`、`schedule`（cron）、`workflow_dispatch`（手動）。
- **`runs-on`**：挑 runner。self-hosted 用 `[self-hosted, <label>]`；雲端用 `ubuntu-latest`。
- **`uses:` vs `run:`**：`uses` 套現成 Action（如 `actions/checkout`、`actions/setup-node`）；`run` 執行 shell 指令。
- **`concurrency`**：避免同一目標被多個部署同時打（見下方範例）。
- **內建變數**：`${{ github.sha }}`、`${{ github.ref_name }}`、`${{ secrets.XXX }}`、`${{ vars.XXX }}` 等由 GitHub 注入。
{{% /callout %}}

# 五、實作範例：push → build → deploy

以「**把服務容器化、在 self-hosted runner 上直接 build 並用 Docker Compose 重啟**」為例。因為 runner 就跑在部署主機上（且在 docker 群組裡），可以直接操作本機 Docker，連推 registry、SSH 都免了：

```yaml
name: Deploy to server

on:
  push:
    branches: [main]
  workflow_dispatch: {}

# 同時只跑一個部署，後到的排隊、不互相打架
concurrency:
  group: deploy
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: [self-hosted, my-runner]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Provide production env
        # 機密放在部署主機上（見下一節），部署時才複製進工作目錄
        run: cp "$HOME/.config/myapp/env.prod" .env

      - name: Build & deploy
        run: docker compose -f docker-compose.prod.yml --env-file .env up -d --build --remove-orphans

      - name: Prune old images
        run: docker image prune -f
```

{{% callout "success" %}}
這條流程的精神：**runner 就在部署主機上**，所以「部署」= runner 直接 `docker compose up -d --build`。資料庫資料放在具名 volume（`pgdata` 之類）裡，重建容器**不會**掉資料；有新的 DB migration 也能在容器啟動指令裡自動套用。整條線 push 完全自動，維護成本很低。
{{% /callout %}}

{{% details "小技巧：固定 compose 專案名稱，避免資料 volume 被拆開（點開）" %}}
Docker Compose 預設用**工作目錄名稱**當專案名稱。若你「手動第一次部署」和「runner 的 checkout 目錄」路徑不同，會被當成兩個不同專案 → 各自建立獨立的 volume → runner 首次部署可能開一個**全新空的資料庫**、把你先前的資料「蓋掉」（其實是連到另一份 volume）。

在 compose 檔最上面**固定專案名稱**就能一勞永逸，讓每次部署共用同一組 volume：

```yaml
name: myapp        # 固定專案名稱
services:
  db:
    # ...
```
{{% /details %}}

# 六、Secrets 管理

機密（DB 密碼、API key…）**絕對不要**寫進 workflow 或 commit 進 repo。兩種常見做法：

{{< tabs >}}
{{% tab "GitHub Secrets（通用）" %}}
到 **Settings → Secrets and variables → Actions** 新增 secret，workflow 裡用 `${{ secrets.XXX }}` 取用：

```yaml
      - name: Deploy
        run: |
          echo "DB_PASSWORD=${{ secrets.DB_PASSWORD }}" >> .env
          docker compose --env-file .env up -d --build
```

- 適合雲端 runner、團隊共用。
- Secret 值在 log 會被自動遮罩（masked）。
{{% /tab %}}
{{% tab "主機檔案（self-hosted 專用，最簡單）" %}}
既然 runner 就是你自己的主機，機密可以直接放在**主機上、工作目錄之外**的檔案，部署時複製進來：

```yaml
      - name: Provide env
        run: cp "$HOME/.config/myapp/env.prod" .env
```

```bash
# 主機上（只做一次）：產生機密檔並收好權限
mkdir -p ~/.config/myapp
umask 077
cat > ~/.config/myapp/env.prod <<'EOF'
DB_PASSWORD=一組夠強的隨機密碼
DJANGO_SECRET_KEY=一長串隨機字串
EOF
chmod 600 ~/.config/myapp/env.prod
```

- 機密**完全不進 GitHub**，適合單一 self-hosted 主機。
- 注意：DB 密碼一旦被 volume 初始化就**不能亂改**（改了會對不上舊資料庫），產生一次就固定。
{{% /tab %}}
{{< /tabs >}}

# 七、保護 main 分支

和 GitLab 一樣，實務上讓 `main` 只能透過 **Pull Request** 合併：開發者在自己分支開發 → 開 PR → 通過 review / 檢查才 merge → 觸發部署。到 **Settings → Branches** 加一條 **branch protection rule**（要求 PR、要求檢查通過），就能避免把有問題的 code 直接推上線。

# 小結

| 面向 | GitHub Actions | GitLab CI/CD |
| --- | --- | --- |
| 設定檔 | `.github/workflows/*.yml`（可多份） | `.gitlab-ci.yml`（一份，放根目錄） |
| 階層 | Workflow → Job → Step | Pipeline → Stage → Job |
| 現成步驟 | `uses:` Action（生態豐富） | 自己寫 `script:` / include template |
| 觸發 | `on: push / pull_request / schedule …` | `rules:` / `only:` |
| 自架執行者 | self-hosted runner（`runs-on`） | GitLab Runner（executor） |
| 機密 | GitHub Secrets / 主機檔案 | CI/CD Variables |

GitHub Actions 的最大優勢是 **`uses:` 的 Action 生態**（很多事有現成模組），而 **self-hosted runner** 讓你能把 CI/CD 延伸到**內網、私有硬體**的環境——runner 主動對外連 GitHub，不必為內網開任何 inbound 埠，這點對校內 / 公司內部的部署特別實用。核心心智模型和 GitLab 幾乎一樣，遷移成本不高。
