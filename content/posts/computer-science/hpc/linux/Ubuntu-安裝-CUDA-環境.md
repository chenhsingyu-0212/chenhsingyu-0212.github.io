+++
title = "Ubuntu 安裝 CUDA 環境"
date = 2024-05-19 18:06:04
draft = false
categories = ["Computer Science", "HPC", "Linux"]
+++

## GPU 環境安裝(在虛擬環境上的做法)

RTX 3090 on Ubuntu 22.04.4 LTS + anaconda

### 安裝 nvidia driver (驅動)

```shell
sudo apt-get install nvidia-common
# add nvidia ppa
sudo add-apt-respository ppa:graphics-drivers/ppa
sudo apt update
ubuntu-drivers devices
# install nvidia driver
sudo apt install nvidia-driver-535
```

#### 重新開機

```shell
reboot
```

#### 確認是否有安裝成功

```shell
nvidia-smi
```

![Imgur](https://i.imgur.com/8OoM6KG.png)

### 在 Anaconda 中安裝 cuda & cuDNN

1. 創建 conda 虛擬環境，並進入虛擬環境

    ```shell
    conda create -n [虛擬環境名稱] python=3.9
    conda activate [虛擬環境名稱]
    ```

2. 查看 conda 環境中可以安裝的 cuda toolkit 版本

    ```bash
    conda search cudatoolkit
    conda search cudatoolkit --info
    ```

3. 在 [conda](https://anaconda.org/nvidia/repo/installers?label=cuda-11.8.0&type=conda) 環境中安裝 cuda toolkit

    ```bash
    conda install --channel "nvidia/label/cuda-11.8.0" cuda
    conda install --channel "nvidia/label/cuda-12.4.1" package
    ```

4. 查看 conda 環境中可以安裝的 cuDNN 版本

    ```bash
    conda search cudnn
    conda search cudnn --info
    ```

5. 在 conda 環境中安裝 cuDNN

    ```bash
    # 指定版本
    conda install cudnn=8.9
    # 不指定版本，會自動選與 cuda 相匹配的 cuDNN 版本
    conda install cudnn
    ```

## GPU 環境安裝(在本機上的做法)

RTX 3090 on Ubuntu 22.04.4 LTS

### 移除 nvidia & cuda

```shell
sudo apt autoremove
sudo apt remove --purge '^nvidia-.*'
sudo apt remove --purge '^cuda-.*'
```

### 安裝 nvidia driver (驅動)

{{% callout "warning" %}}
在安裝 cuda 的時候 driver 會被自動安裝，可以選擇直接到到安裝 cuda 的部分
{{% /callout %}}

```shell
sudo apt-get install nvidia-common
# add nvidia ppa
sudo add-apt-respository ppa:graphics-drivers/ppa
sudo apt update
ubuntu-drivers devices
# install nvidia driver
sudo apt install nvidia-driver-535
```

#### 重新開機

```shell
reboot
```

#### 確認是否有安裝成功

```shell
nvidia-smi
```

![Imgur](https://i.imgur.com/8OoM6KG.png)

### 安裝 Cuda

[CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive)
[CUDA Toolkit 11.7 Update 1 Downloads Linux](https://developer.nvidia.com/cuda-11-7-1-download-archive?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=22.04&target_type=deb_local)

![CUDA Toolkit setting](https://i.imgur.com/6v7ETkw.png)

```shell
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/12.2.2/local_installers/cuda-repo-ubuntu2204-12-2-local_12.2.2-535.104.05-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2204-12-2-local_12.2.2-535.104.05-1_amd64.deb
sudo cp /var/cuda-repo-ubuntu2204-12-2-local/cuda-*-keyring.gpg /usr/share/keyrings/
sudo apt-get update
sudo apt-get -y install cuda
```

#### 設置環境

```shell
sudo vim ~/.bashrc
```

```vim
export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda/lib64
```

#### 重新載入

```shell
source ~/.bashrc
sudo ldconfig
```

#### 檢查 CUDA 是否有安裝成功

```shell
nvcc -V
```

![Imgur](https://i.imgur.com/mxP3zNx.png)

#### 安裝完成後重新開機

```shell
reboot
```

### cuDNN

CUDNN 要去 [nvidia](https://developer.nvidia.com/rdp/cudnn-archive) 登入下載，必須有開發者身份。

![Imgur](https://i.imgur.com/qOfp703.png)

```shell
tar -xvf 下載的 tar 名稱
cd 解壓縮的名稱
sudo cp include/* /usr/local/cuda-12.2/include
sudo cp lib/libcudnn* /usr/local/cuda-12.2/lib64
sudo chmod a+r /usr/local/cuda-12.2/include/cudnn*
sudo chmod a+r /usr/local/cuda-12.2/lib64/libcudnn*

cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2
```

![Imgur](https://i.imgur.com/HFdjhDP.png)

## 安裝 pytorch & 檢測

### pytorch

```bash
conda install pytorch torchvision torchaudio -c hcc -c pytorch
```

```bash
pip install pytorch torchvision torchaudio
```

### 檢測

```shell
python

>>> import torch

>>> torch.cuda.is_available()
True

>>> torch.cuda.device_count()
1

>>> torch.cuda.current_device()
0

>>> torch.cuda.device(0)
<torch.cuda.device at 0x7efcc0b03be0>

>>> torch.cuda.get_device_name(0)
'GeForce GTX 3090'
```

## 參考資料

- [安裝 Nvidia driver 545 CUDA 12.3 cudnn 12.x on Ubuntu 22.04](https://jackfrisht.medium.com/install-nvidia-driver-via-ppa-in-ubuntu-18-04-fc9a8c4658b9)