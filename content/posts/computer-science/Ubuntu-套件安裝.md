+++
title = "Ubuntu 套件安裝"
date = 2025-09-07 11:32:20
draft = false
categories = ["Computer Science"]
+++

## 安裝 C++ 等套件

```shell
sudo apt install build-essential
```

## 安裝 java 默認 JRE/JDK

```shell
# 更新包
sudo apt update
# 檢查 java 是否已經安裝過
java --version
# 安裝默認 JRE
sudo apt install default-jre
# 安裝默認 JDK
sudo apt install default-jdk
# 檢查 javac，java 編譯器版本
javac --version
```

剛安裝好的 Ubuntu 系統裡的套件版本與安全性更新可能已經舊了，通常會先做這兩步：

```bash
sudo apt update           # 更新套件索引
sudo apt upgrade -y       # 升級已安裝套件
sudo apt dist-upgrade     # （可選）處理有相依性變動的套件  
```

## 安裝下載的 .deb 軟體或套件軟體或套件

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

設定檔位置在 `/etc/ssh/sshd_config`，可以裡用自己熟悉的文字編輯工具調整 SSH 的設定，已符合自己的需求。

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

==在本地端產生一組公鑰與私鑰：==

```bash
ssh-keygen -t ed25519 -C "備註"
```

執行後會問：
1. 儲存檔案路徑（直接 Enter，預設是 `~/.ssh/id_ed25519` 和 `~/.ssh/id_ed25519.pub`）
2. 是否設定密碼（可空白直接 Enter，不用密碼）

產生結果：
- 私鑰：`~/.ssh/id_ed25519`（請勿外洩）
- 公鑰：`~/.ssh/id_ed25519.pub`（可以分享給伺服器）

==把公鑰複製到目標機器:==

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

## 安裝 tmux

```bash
sudo apt install tmux
```

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

- ubuntu
```bash!
sudo apt update
sudo apt install cmake
```
- conda
```bash!
conda install -c conda-forge cmake ninja -y  # 安裝 CMake + Ninja
```

## 安裝 docker

```bash!
curl -fsSL https://get.docker.com/ -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

## 安裝 conda

![](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*G4QA2olHnFamlV3Z.png =500x)

- [Miniconda Docs](https://www.anaconda.com/docs/getting-started/miniconda/install)

1. 下載 miniconda shell script
   ```bash
   wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
   ```
2. 執行 miniconda shell script 檔案
   ```bash
   bash ~/Miniconda3-latest-Linux-x86_64.sh
   ```
   - Please, press ENTER to continue 
     **Enter** 
   - Do you accept the license terms? 
     **yes**
   - Miniconda3 will now be installed into this location:
     /home/hsingyu/miniconda3
     **Enter**
   - Do you wish to update your shell profile to automatically initialize conda?
     This will activate conda on startup and change the command prompt when activated.
     If you'd prefer that conda's base environment not be activated on startup,
     run the following command when conda is activated:
     `conda config --set auto_activate_base false`
     You can undo this by running `conda init --reverse $SHELL`? [yes|no]
     [no] >>> **no**
   - Thank you for installing Miniconda3!
3. 執行在當前 shell 臨時啟用 conda
   ```bash!
   sh=$(basename "$SHELL"); eval "$(/home/hsingyu/miniconda3/bin/conda shell.$sh hook)"
   conda init
   ```

- [Anaconda Docs](https://www.anaconda.com/docs/getting-started/anaconda/install)

```bash
curl -O https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-x86_64.sh
```

## 安裝 GPU Driver & CUDA + CuDNN

### GPU Driver

```bash!
sudo apt update
sudo apt upgrade

sudo apt install ubuntu-drivers-common
sudo ubuntu-drivers devices

sudo apt install nvidia-driver-535
sudo reboot now
```

### CUDA

1. 確認 GPU 可支援的 CUDA 版本
2. 到 [CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive) 找到所需的版本
3. 根據設備環境點擊
   ![image](https://hackmd.io/_uploads/B1vwa2F5eg.png)
4. 執行它提供的腳本
   ```bash!
   wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
   sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
   wget https://developer.download.nvidia.com/compute/cuda/12.2.0/local_installers/cuda-repo-ubuntu2204-12-2-local_12.2.0-535.54.03-1_amd64.deb
   sudo dpkg -i cuda-repo-ubuntu2204-12-2-local_12.2.0-535.54.03-1_amd64.deb
   sudo cp /var/cuda-repo-ubuntu2204-12-2-local/cuda-*-keyring.gpg /usr/share/keyrings/
   sudo apt-get update
   sudo apt-get -y install cuda
   ```
5. 重新開機
   ```bash
   sudo reboot now
   ```
6. 設定環境變數
   ```bash!
   export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
   export LD_LIBRARY_PATH=/usr/local/cuda-12.2/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
   ```

### CuDNN

1. 到 [cuDNN Archive](https://developer.nvidia.com/rdp/cudnn-archive) 找與 cuda 配對的版本
2. 下載 tar 檔
3. 將 tar 解壓縮 - [解壓縮指令參考](https://note.drx.tw/2008/04/command.html)
4. 將解壓縮檔案內容覆蓋到 cuda 資料夾裡面
   ```bash!
   sudo cp cuda/include/cudnn*.h /usr/local/cuda/include
   sudo cp -P cuda/lib/libcudnn* /usr/local/cuda/lib64
   sudo chmod a+r /usr/local/cuda/include/cudnn*.h /usr/local/cuda/lib64/libcudnn*
   ```
5. 檢查是否安裝成功
   ```bash
   cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR
   ```
    ![image](https://hackmd.io/_uploads/S1BhD1ccex.png)

## 安裝 NVIDIA Container Toolkit

>[NVIDIA Container Toolkit>](https://docs.nvidia.com/datacenter/clou>d-native/container-toolkit/latest/install-guide.html)

```bash!
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
&& curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

```bash!
sudo apt-get update
```

```bash!
export NVIDIA_CONTAINER_TOOLKIT_VERSION=1.17.8-1
sudo apt-get install -y \
      nvidia-container-toolkit=${NVIDIA_CONTAINER_TOOLKIT_VERSION} \
      nvidia-container-toolkit-base=${NVIDIA_CONTAINER_TOOLKIT_VERSION} \
      libnvidia-container-tools=${NVIDIA_CONTAINER_TOOLKIT_VERSION} \
      libnvidia-container1=${NVIDIA_CONTAINER_TOOLKIT_VERSION}
```

```bash!
sudo systemctl restart docker
```