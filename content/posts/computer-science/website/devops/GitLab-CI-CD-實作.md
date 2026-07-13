+++
title = "GitLab CI/CD 實作"
date = 2024-09-20 15:30:28
draft = false
categories = ["Computer Science", "Website", "DevOps"]
+++

這篇從**自架 GitLab** 開始，一路做到用 **`.gitlab-ci.yml`** 完成自動化建置、測試與部署。概念的部分可以先看 [What is CI/CD?](/posts/what-is-ci-cd/)。

本篇**同時涵蓋 Docker 與 Podman** 兩種容器引擎——[Podman](https://podman.io/) 是**無 daemon（daemonless）**、可**免 root（rootless）**的容器引擎，CLI 幾乎與 Docker 相同（`alias docker=podman` 就能通）。指令有差異的地方，我會用**分頁**對照。

{{% callout "info" %}}
整體流程：**架設 GitLab → 建立專案 → 安裝並註冊 Runner → 撰寫 `.gitlab-ci.yml` → 推 code 觸發 Pipeline**。

Docker 與 Podman 的三個關鍵差異，剛好對應這篇的重點：

1. **有無 daemon** → Podman build image 不需要 `docker:dind`，直接 `podman build`。
2. **Runner 的 socket** → Podman 提供 Docker 相容 socket，Runner 的 docker executor 可直接接上。
3. **自動更新** → Docker 用 Watchtower，Podman 用內建的 `podman auto-update`。
{{% /callout %}}

# 一、架設 GitLab（self-hosted）

用一個 `docker-compose.yml` 起 **GitLab CE**（社群版）。這份設定 Docker / Podman 通用：

```yaml
services:
  gitlab:
    image: gitlab/gitlab-ce:latest
    container_name: gitlab
    restart: always
    hostname: gitlab.example.com
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'http://gitlab.example.com'
        # 22 埠常被主機的 SSH 佔用，把 GitLab 的 SSH 改到 2222
        gitlab_rails['gitlab_shell_ssh_port'] = 2222
    ports:
      - '80:80'
      - '443:443'
      - '2222:22'
    volumes:
      - ./config:/etc/gitlab      # 設定檔
      - ./logs:/var/log/gitlab    # log
      - ./data:/var/opt/gitlab    # 資料（repo、DB…）
    shm_size: '256m'
```

{{% callout "warning" %}}
**這裡要改成你自己的位址**：`hostname` 與 `external_url` 要填**瀏覽器 / git 實際連進來的網址**，GitLab 會用它產生 clone URL 等各種連結。

- **內網自用**：直接填機器的 LAN IP 最簡單，例如 `external_url 'http://10.8.4.xxx'`（不依賴 DNS）。
- **主機名 / FQDN**：例如 `http://gitlab.example.com`（機器換 IP 也不用改，但需 DNS 解析得到）。

以下為其他設定的注意事項：
- **埠號要一致**：GitLab 內建 nginx 會監聽 `external_url` 裡的埠。80 沒被占用就用預設；若被占用，改成 `http://<位址>:8929` 這種，並把 `ports` 的對外映射也改成一致的 `8929:8929`。
- **別挑到 8080**：GitLab 的 **puma 內部預設就聽 `8080`**，若 `external_url` 也用 8080 會**埠衝突**（nginx 先佔了 → puma 綁不到 → `Errno::EADDRINUSE` → 一直卡在 502）。
  1. 換別的 port（如 `8929`）
  2. 如果要用 8080，需要加一行 `puma['port'] = 8081` 讓 puma 改走其他的內部 port
- `gitlab_shell_ssh_port` 是 git-over-SSH 的埠（此處設 2222，對應 `ports` 的 `2222:22`）。
{{% /callout %}}

{{% details "只有 rootless Podman 要注意：volumes 改用 named volumes（點開）" %}}
上面 `./config`、`./data` 這種**主機 bind-mount**，在 rootless Podman 下會因 user-namespace 的 UID 對應，讓 reconfigure 在 chown 檔案時噴 `Errno::EPERM`（Operation not permitted）→ 容器一直 crash 重啟、連不上。把 `volumes` 改成 Podman 自管的 **named volumes** 就好（Docker 或 rootful Podman 用原本的 bind-mount 沒問題）：

```yaml
    # 把 gitlab 服務的 volumes 改成：
    volumes:
      - gitlab-config:/etc/gitlab
      - gitlab-logs:/var/log/gitlab
      - gitlab-data:/var/opt/gitlab

# 並在檔案最外層宣告這些 named volumes：
volumes:
  gitlab-config:
  gitlab-logs:
  gitlab-data:
```
{{% /details %}}

啟動：

{{< tabs >}}
{{% tab "Docker" %}}
```bash
docker compose up -d
```
{{% /tab %}}
{{% tab "Podman" %}}
```bash
pip install podman-compose   # 若尚未安裝
podman-compose up -d
```
{{% /tab %}}
{{< /tabs >}}

{{% callout "warning" %}}
GitLab 第一次啟動需要幾分鐘初始化，可用 `docker logs -f gitlab`（或 `podman logs -f gitlab`）觀察，直到 healthy 才連得進去。它也相當吃記憶體，建議主機至少 **4GB RAM**。
{{% /callout %}}

{{% details "只有 rootless Podman 要注意：無法綁 80/443 這種低位埠（點開）" %}}
rootless Podman 預設**不能綁 1024 以下的埠**（如 80/443）。三個做法擇一：

- 改用 rootful：`sudo podman-compose up -d`
- 把服務對應到高位埠（例如 `8080:80`）
- 放寬系統限制：`sudo sysctl net.ipv4.ip_unprivileged_port_start=80`
{{% /details %}}

## 取得初始 root 密碼

GitLab 會產生一組隨機的 `root` 密碼，放在容器內（有效 24 小時）：

{{< tabs >}}
{{% tab "Docker" %}}
```bash
docker exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password
```
{{% /tab %}}
{{% tab "Podman" %}}
```bash
podman exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password
```
{{% /tab %}}
{{< /tabs >}}

## 首次登入

用 `root` + 上面那組初始密碼登入 `http://gitlab.example.com`。

- 第一次登入可能會要你**填寫個人資料（set profile，名稱等）**——因為你是用 `root` 登入，這是在**設定 `root` 這個管理員帳號**的資料，**不是**建立新帳號；名稱隨意填（例如 `Administrator` 或你的名字）即可。
  - 慣例上 `root` 只用來做管理，日常開發建議另建一個**個人帳號**，`root` 保留給後台管理。
- 進去後**立刻改密碼**：右上角頭像 → **Edit profile → Password**（初始密碼檔 24 小時後會被自動清掉）。

# 二、建立專案並推上程式碼

登入後 **New project → Create blank project**，建立一個 repo，然後把本地專案推上去：

```bash
git remote add origin http://gitlab.example.com/your-name/your-project.git
git branch -M main
git push -u origin main
```

# 三、安裝並註冊 GitLab Runner

Pipeline 實際跑在 **Runner** 上。Runner 一律用 **docker executor**，差別只在它背後接的是 Docker daemon 還是 Podman 的相容 socket。

Podman 需要先啟用它的 Docker 相容 socket（Docker 本身就有 `docker.sock`，可略過這步）：

```bash
# 僅 Podman：啟用 socket，會出現在 /run/podman/podman.sock
sudo systemctl enable --now podman.socket
```

Runner 容器把對應的 socket 掛進去當作 `docker.sock`：

{{< tabs >}}
{{% tab "Docker" %}}
```yaml
  gitlab-runner:
    image: gitlab/gitlab-runner:latest
    container_name: gitlab-runner
    restart: always
    volumes:
      - ./runner-config:/etc/gitlab-runner
      - /var/run/docker.sock:/var/run/docker.sock
```
{{% /tab %}}
{{% tab "Podman" %}}
```yaml
  gitlab-runner:
    image: docker.io/gitlab/gitlab-runner:latest
    container_name: gitlab-runner
    restart: always
    volumes:
      - ./runner-config:/etc/gitlab-runner
      - /run/podman/podman.sock:/var/run/docker.sock   # ← 改指向 Podman
```
{{% /tab %}}
{{< /tabs >}}

## 註冊 Runner

到專案的 **Settings → CI/CD → Runners**，取得註冊用的 **URL** 與 **token**，接著：

{{< tabs >}}
{{% tab "Docker" %}}
```bash
docker exec -it gitlab-runner gitlab-runner register \
  --non-interactive \
  --url "http://gitlab.example.com" \
  --token "YOUR_RUNNER_TOKEN" \
  --executor "docker" \
  --docker-image "docker:24" \
  --docker-privileged \
  --description "docker-runner"
```
{{% /tab %}}
{{% tab "Podman" %}}
```bash
podman exec -it gitlab-runner gitlab-runner register \
  --non-interactive \
  --url "http://gitlab.example.com" \
  --token "YOUR_RUNNER_TOKEN" \
  --executor "docker" \
  --docker-host "unix:///var/run/docker.sock" \
  --docker-image "quay.io/podman/stable" \
  --docker-privileged \
  --description "podman-runner"
```
{{% /tab %}}
{{< /tabs >}}

- **executor = docker**：每個 job 都在一個乾淨的容器裡執行。
- **docker-image**：job 沒指定 `image` 時的預設映像。
- **`--docker-privileged`**：等一下要在 job 裡 build image 會用到。

註冊完成後，Runners 頁面會出現一個**綠色**的 Runner，代表已上線待命。

# 四、撰寫 `.gitlab-ci.yml`

在專案**根目錄**放一個 `.gitlab-ci.yml`，GitLab 偵測到就會自動驅動 Pipeline。基本結構：

```yaml
stages:            # 定義階段與順序
  - build
  - test
  - deploy

job-name:
  stage: build     # 屬於哪個階段
  image: node:20   # 這個 job 用的容器映像
  script:          # 實際要執行的指令
    - echo "hello CI"
```

{{% callout "info" %}}
- **`stages`**：階段依序執行；**同一階段的 job 會並行**，全部成功才進下一階段。
- **`script`**：job 的主要指令；`before_script` / `after_script` 可放前置與收尾。
- **`rules` / `only`**：控制 job 何時執行（例如只在 `main` 分支）。
- **`artifacts`** / **`cache`**：傳遞 build 產物 / 快取相依套件加速。
- **內建變數**：`$CI_COMMIT_SHORT_SHA`、`$CI_COMMIT_BRANCH`、`$CI_REGISTRY`、`$CI_REGISTRY_IMAGE`… 由 GitLab 自動注入。
{{% /callout %}}

# 五、實作範例：build → test → deploy

以「**把服務容器化、推上 registry、再自動部署**」為例（這也是我在系上網站採用的流程）。**只有 build 這一段 Docker / Podman 不同**，`test` 與 `deploy` 兩者共用。

**建置階段**——Docker 需要 `docker:dind`（Docker-in-Docker）；Podman 無 daemon，直接 `podman build` 即可：

{{< tabs >}}
{{% tab "Docker" %}}
```yaml
build-image:
  stage: build
  image: docker:24
  services:
    - docker:24-dind          # Docker-in-Docker
  script:
    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" "$CI_REGISTRY"
    - docker build -t "$IMAGE" -t "$CI_REGISTRY_IMAGE:latest" .
    - docker push "$IMAGE"
    - docker push "$CI_REGISTRY_IMAGE:latest"
```
{{% /tab %}}
{{% tab "Podman" %}}
```yaml
build-image:
  stage: build
  image: quay.io/podman/stable
  variables:
    STORAGE_DRIVER: vfs       # 巢狀環境最穩定，免 dind
  script:
    - podman login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" "$CI_REGISTRY"
    - podman build -t "$IMAGE" -t "$CI_REGISTRY_IMAGE:latest" .
    - podman push "$IMAGE"
    - podman push "$CI_REGISTRY_IMAGE:latest"
```
{{% /tab %}}
{{< /tabs >}}

**測試與部署階段**（共用）：

```yaml
stages:
  - build
  - test
  - deploy

variables:
  IMAGE: "$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA"

# （build-image 見上方，依引擎擇一）

test:
  stage: test
  image: node:20
  cache:
    key: "$CI_COMMIT_REF_SLUG"
    paths:
      - node_modules/
  script:
    - npm ci
    - npm test

deploy:
  stage: deploy
  image: alpine:latest
  script:
    - echo "觸發部署：新版 image 已推上 registry"
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
```

## 保護 main 分支的部署

實務上，讓 `main` 的整合**只能透過 Merge Request**：開發者在自己的分支開發 → 開 MR → 通過 review 才 merge 進 `main` → 觸發 `deploy`。這樣可以避免快速開發時把有問題的程式直接部署上線。

# 六、部署主機的自動更新

CI 把新 image 推上 registry 後，讓部署主機**自動拉新版、重啟容器**：Docker 生態用 [Watchtower](/posts/what-is-watchtower/)，Podman 則用內建的 `podman auto-update`。

{{< tabs >}}
{{% tab "Docker (Watchtower)" %}}
```yaml
# 部署主機的 docker-compose.yml 加一個 watchtower 服務
services:
  watchtower:
    image: containrrr/watchtower
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 300   # 每 5 分鐘檢查一次
```
{{% /tab %}}
{{% tab "Podman (auto-update)" %}}
```bash
# 容器帶上 auto-update label，並產生 systemd 服務
podman run -d --name app \
  --label io.containers.autoupdate=registry \
  your-registry/your-app:latest
podman generate systemd --new --files --name app

# 之後（可搭配 podman-auto-update.timer 定期執行）
podman auto-update
```
{{% /tab %}}
{{< /tabs >}}

{{% callout "success" %}}
這樣一來 `deploy` 階段其實只要把新 image 推上 registry，剩下的更新交給部署主機自動完成，連 SSH 都免了，交接與維護也更容易——快速開發、便利維護、低成本。
{{% /callout %}}

# 小結

| 面向 | Docker | Podman |
| --- | --- | --- |
| 架設 GitLab | `docker compose` | `podman-compose`（注意 rootless 埠號）|
| Runner socket | `docker.sock` | `podman.sock`（Docker API 相容）|
| Job 內建置 image | `docker:dind` + `docker build` | 直接 `podman build`（免 daemon）|
| 自動更新部署 | Watchtower | `podman auto-update` + systemd |

Podman 的優勢主要在**免 daemon**與**可 rootless**（安全性較佳），且大部分指令與 Docker 相容，遷移成本很低；核心的 GitLab CI/CD 流程兩者完全一致。
