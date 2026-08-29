+++
title = "Ubuntu 套件安裝"
date = 2025-09-07 11:32:20
draft = false
categories = ["Computer Science", "Infrastructure", "Linux"]
+++

## 系統更新

剛安裝好的 Ubuntu，套件版本與安全性更新通常已經落後，建議先做這幾步：

```bash
sudo apt update           # 更新套件索引
sudo apt upgrade -y       # 升級已安裝套件
sudo apt dist-upgrade     # （可選）處理有相依性變動的套件
```

## 安裝 C++ 等套件

```shell
sudo apt install build-essential
```

## 安裝 Java 預設 JRE/JDK

```shell
# 更新包
sudo apt update
# 檢查 java 是否已經安裝過
java --version
# 安裝預設 JRE
sudo apt install default-jre
# 安裝預設 JDK
sudo apt install default-jdk
# 檢查 javac，java 編譯器版本
javac --version
```

## 安裝下載的 .deb 軟體或套件

**安裝指令**

```bash
sudo apt install -fy ./<filename>.deb
```

**查詢已安裝軟體或套件完整名稱**

```bash
dpkg -l | grep <部分軟體或套件名稱>
```

**刪除軟體**

```bash
sudo apt remove <軟體或套件名稱>
sudo apt purge <軟體或套件名稱>      # 連設定檔案一起刪除
```

## 安裝及設定 SSH

**安裝 SSH**

```bash
sudo apt install openssh-server
```

**設定 SSH**

設定檔位置在 `/etc/ssh/sshd_config`，可以利用自己熟悉的文字編輯工具調整 SSH 的設定，以符合自己的需求。

```bash
sudo nano /etc/ssh/sshd_config    # 安裝 ubuntu 時會裝
sudo vi /etc/ssh/sshd_config      # 安裝 ubuntu 時會裝

sudo vim /etc/ssh/sshd_config     # 需要先安裝 vim
```

文件中可能會修改的內容

```bash
Port 22                              # SSH使用的Port，建議不要改
PasswordAuthentication <yes/no>      # 是否用 password 驗證登入
PubkeyAuthentication <yes/no>        # 是否用 public key 驗證登入
PermitRootLogin yes                  # 是否開放 root 登入
```

**重新啟動 SSH 服務**

```bash
sudo systemctl restart ssh
```

**SSH 公鑰**

<mark>在本地端產生一組公鑰與私鑰：</mark>

```bash
ssh-keygen -t ed25519 -C "備註"
```

執行後會問：
1. 儲存檔案路徑（直接 Enter，預設是 `~/.ssh/id_ed25519` 和 `~/.ssh/id_ed25519.pub`）
2. 是否設定密碼（可空白直接 Enter，不用密碼）

產生結果：
- 私鑰：`~/.ssh/id_ed25519`（請勿外洩）
- 公鑰：`~/.ssh/id_ed25519.pub`（可以分享給伺服器）

<mark>把公鑰複製到目標機器：</mark>

1. 自動方式（建議）

   ```bash
   ssh-copy-id -i ~/.ssh/id_ed25519.pub username@server-ip
   ```

   這會自動把公鑰存到目標機器的 `~/.ssh/authorized_keys` 裡。

2. 手動方式

   - 登入目標機器（先用密碼登入）：
     ```bash
     ssh username@server-ip
     ```
   - 建立 .ssh 目錄並設定權限：
     ```bash
     mkdir -p ~/.ssh
     chmod 700 ~/.ssh
     ```
   - 在 authorized_keys 檔案中加入公鑰內容：
     ```bash
     echo "<public key>" | tee -a ~/.ssh/authorized_keys
     # or nano ~/.ssh/authorized_keys
     ```
     把 id_ed25519.pub 的內容貼進去，存檔。
   - 設定正確權限：
     ```bash
     chmod 600 ~/.ssh/authorized_keys
     ```

{{% callout "warning" %}}

每個使用者的公鑰存放在：

```bash
/home/<使用者名稱>/.ssh/authorized_keys
```

權限要求（很重要，否則 SSH 會拒絕）：

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chown -R <使用者名稱>:<使用者名稱> ~/.ssh
```
{{% /callout %}}

## 安裝 Tailscale

Tailscale 以 WireGuard 為基礎建立點對點的虛擬區域網路，讓不同網段、甚至在 NAT 後方的機器可以直接互連。

### 安裝

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

### 相關設定

```bash
sudo systemctl enable --now tailscaled

# 檢查服務狀態
sudo systemctl status tailscaled

# 重新啟動
sudo systemctl restart tailscaled
```

### 裝置加入 Tailscale 網路

```bash
sudo tailscale up
```

執行後會給一個授權網址，用瀏覽器開啟並登入帳號，該台機器就會加入你的 Tailscale 網路。

### 檢查是否有正確啟動 Tailscale

```bash
tailscale status
```

## 安裝 tmux

```bash
sudo apt install tmux
```

使用方式、設定檔與快捷鍵見 [Tmux](/posts/tmux/)。

## 安裝 htop

```bash
sudo apt install htop
```

## 安裝 tree

```bash
sudo apt install tree
```

## 安裝 CMake

在 C/C++ 開發中，管理專案的編譯流程是一個重要的課題。傳統的 Makefile 雖然能夠自動化編譯，但維護起來並不方便，特別是在跨平台開發時會遇到許多問題。

CMake 是跨平台的 C/C++ 專案編譯工具，它的主要用途是生成適合不同環境的 Makefile 或 IDE 專案檔案，並自動化編譯過程。

- Ubuntu

  ```bash
  sudo apt update
  sudo apt install cmake
  ```

- conda

  ```bash
  conda install -c conda-forge cmake ninja -y  # 安裝 CMake + Ninja
  ```

## 安裝 docker

```bash
curl -fsSL https://get.docker.com/ -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

## 安裝 conda

Anaconda 與 Miniconda 的安裝流程、虛擬環境操作見 [Anaconda & Miniconda](/posts/anaconda/)。

## 安裝 GPU Driver & CUDA + CuDNN

NVIDIA driver、CUDA Toolkit 與 cuDNN 的完整安裝步驟（含虛擬環境做法、移除舊版、PyTorch 驗證）見 [Ubuntu 安裝 CUDA 環境](/posts/ubuntu-安裝-cuda-環境/)。

## 安裝 NVIDIA Container Toolkit

> [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)

1. 加入 GPG 金鑰與套件庫
   ```bash
   curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
   && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
       sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
       sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
   ```
2. 更新套件索引
   ```bash
   sudo apt-get update
   ```
3. 安裝指定版本的套件
   ```bash
   export NVIDIA_CONTAINER_TOOLKIT_VERSION=1.17.8-1
   sudo apt-get install -y \
         nvidia-container-toolkit=${NVIDIA_CONTAINER_TOOLKIT_VERSION} \
         nvidia-container-toolkit-base=${NVIDIA_CONTAINER_TOOLKIT_VERSION} \
         libnvidia-container-tools=${NVIDIA_CONTAINER_TOOLKIT_VERSION} \
         libnvidia-container1=${NVIDIA_CONTAINER_TOOLKIT_VERSION}
   ```
4. 重啟 docker 讓設定生效
   ```bash
   sudo systemctl restart docker
   ```