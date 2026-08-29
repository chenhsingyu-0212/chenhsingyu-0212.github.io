+++
title = "Kubeadm create k8s cluster"
date = 2025-02-17 16:48:49
draft = false
categories = ["Computer Science", "Cloud Computing", "K8s"]
+++

## 實驗題目

將使用 kubeadm 來建構 k8s cluster，並建構兩個以上的 node

## 實驗環境

- 兩個以上的虛擬機或是實體機
- 最小硬體需求:
  - CPU: 2 cores
  - RAM: 2GB
- 必須可以連上網際網路
- 所有節點之間可以互相連線(在相同的 LAN 中、或有公網 IP、或是可以透過 router 互連)

## 實驗內容

### 安裝 Docker

```bash
curl -fsSL https://get.docker.com/ -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```