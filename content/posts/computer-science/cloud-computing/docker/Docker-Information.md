+++
title = "Docker Information"
date = 2023-05-16 15:52:43
draft = false
categories = ["Computer Science", "Cloud Computing", "Docker"]
+++

# 簡介

## 什麼是Docker?
Docker 是一個開源軟體，出現於2013年初，最初是 Dotcloud 公司內部的 Side-Project。
它基於 Google 公司推出的Go語言實作。(Dotcloud 公司後來改名為 Docker)

## 為什麼要使用Docker?
* 更有效率的利用資源
* 統一環境
* 對於DevOps的好處
* 使開發高效且可以預測
* 消除了重複的、平凡的配置任務，在整個開發生命週期中用於快速、簡單和可移植的應用程序開發。

{{% callout "info" %}}
* Docker 想解決的問題:
    改善傳統虛擬機器因為需要額外安裝作業系統（Guest OS），導致啟動慢、佔較大記憶體的問題。
    
* Docker 要提供的解法：
    以應用程式為核心虛擬化，取代傳統需要 Guest OS 的虛擬化技術。
{{% /callout %}}

# 概念

{{% callout "warning" %}}
**Docker 是一種工具，可用來建立、部署及執行使用容器的應用程式。** 容器可讓開發人員封裝含有其所需全部元件 (程式庫、架構、相依性等) 的應用程式，且全部**以一個套件的形式出貨**。

使用容器可確保應用程式會以相同的方式執行，而不管任何自訂的設定或先前在執行該應用程式的電腦 (可能與用來撰寫和測試應用程式程式碼的電腦不同) 上安裝的程式庫。

這可讓開發人員專注於撰寫程式碼，而不需擔心程式碼將在其上執行的系統。
{{% /callout %}}

![](https://i.imgur.com/fXopYNz.png)

## Docker 三元素
{{% callout "info" %}}
**要使用 Docker 時最重要的三個元素：
映像檔(Image)、 容器(Container)、 倉庫(Repository)。**

> **用一個簡單的比喻來解釋 :**
> 如果映像檔是一個做蛋糕的模具，容器則是用該模具烤出來的蛋糕，而倉庫是用來集中放置模具們的收納櫃。
{{% /callout %}}
![](https://i.imgur.com/15l7FD3.png)

## Image
* 映像檔為一個唯獨的模板。
* 內可包含完整的ubuntu作業系統環境。
* 映像檔可用來快速生產Docker容器，並可重複產生。
* 映像檔可以透過(撰寫由命令行構成的)Dockerfile 建立，或是開放公開下載的地方取得。

> 舉例來說，如果我今天想要一個 node.js 的執行環境跑我寫好的程式，我可以直接到上 Docker Hub 找到相對應的 node.js 映像檔 ，而不需要自己想辦法打包一個執行環境。

{{% callout "info" %}}
* 它是 Docker 的映像檔主要是一個唯讀的檔案， 是啟動 Docker container 要使用到的檔案。

* 另外 Docker 的 image 可以像是堆積木一樣， 一層一層的把 Docker image 堆起來。

    如右圖：<img src="https://i.imgur.com/g3WXbWn.png" alt="" width="200">
{{% /callout %}}

## Container
* 容器是由映像檔建立出來的實例。
* Docker 即是利用容器來執行關鍵技術。
* 容器可以被啟動、開始、停止、刪除。
* 且容器與容器之間是相互隔離、保證安全的。

> 可以把容器看做是一個執行的應用程式加上執行它的簡易版 Linux 環境（包括 root 使用者權限、程式空間、使用者空間和網路空間等）

{{% callout "info" %}}
* Docker Container 是透過 Docker image 執行起來的 Process，同一個 Docker image 可以啟動多個 Docker Container。

* Docker container 和 Docker container 之間的環境是隔離開離來的，不會發生 container1 開 8080 的 port，container2 開 8080 的 port 有衝到的問題
{{% /callout %}}

## Repository
* 倉庫是集中存放映像檔檔案的場所，每個倉庫中又包含了多個映像檔。
* 每個映像檔有不同的標籤（tag）。
* 倉庫分為公開倉庫（Public）和私有倉庫（Private）兩種形式
* 而最大的公開倉庫為Docker Hub，裡面存放了大量的現成、實用映像檔供使用者下載。

> 而 Docker 倉庫註冊伺服器的概念就跟 Github 類似，你可以在上面建立多個倉庫，然後透過 push、pull 的方式上傳、存取。