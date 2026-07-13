+++
title = "Dockerfile"
date = 2023-05-16 19:11:57
draft = false
categories = ["Computer Science", "Cloud Computing", "Docker"]
+++

# Dockerfile
{{% callout "info" %}}
Dockerfile 由一行行命令語句組成，並且支援以 # 開頭的註解行。

**Dockerfile 分為四部分：**
* 基底映像檔資訊
* 維護者資訊
* 映像檔操作指令
* 容器啟動時執行指令。
{{% /callout %}}

```dockerfile
# This dockerfile uses the ubuntu image 
# VERSION 2 - EDITION 1 # Author: docker_user 
# Command format: Instruction [arguments / command] .. 

# 基本映像檔，必須是第一個指令 
FROM ubuntu

# 維護者： docker_user <docker_user at email.com> (@docker_user) 
MAINTAINER docker_user docker_user@email.com 

# 更新映像檔的指令 
RUN echo "deb http://archive.ubuntu.com/ubuntu/ raring main universe" >> /etc/apt/sources.list 
RUN apt-get update && apt-get install -y nginx 
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf 

# 建立新容器時要執行的指令 
CMD /usr/sbin/nginx
```

## Dockerfile 基本語法

![](https://i.imgur.com/XjKhkvB.png)

## Example
```dockerfile
FROM centos:7
MAINTAINER jack

RUN yum install -y wget

RUN cd /

ADD jdk-8u152-linux-x64.tar.gz /

RUN wget http://apache.stu.edu.tw/tomcat/tomcat-7/v7.0.82/bin/apache-tomcat-7.0.82.tar.gz
RUN tar zxvf apache-tomcat-7.0.82.tar.gz

ENV JAVA_HOME=/jdk1.8.0_152
ENV PATH=$PATH:/jdk1.8.0_152/bin
CMD ["/apache-tomcat-7.0.82/bin/catalina.sh", "run"]
```
{{% callout "info" %}}
**FROM：** 使用到的 Docker Image 名稱，今天使用 CentOS

**MAINTAINER：** 用來說明，撰寫和維護這個 Dockerfile 的人是誰，也可以給 E-mail的資訊

**RUN：** RUN 指令後面放 Linux 指令，用來執行安裝和設定這個 Image 需要的東西

**ADD：** 把 Local 的檔案複製到 Image 裡，如果是 tar.gz 檔複製進去 Image 時會順便自動解壓縮。Dockerfile 另外還有一個複製檔案的指令 COPY 未來還會再介紹

**ENV：** 用來設定環境變數

**CMD：** 在指行 docker run 的指令時會直接呼叫開啟 Tomcat Service
{{% /callout %}}

# Dockerfile 實作

> 已經體驗過使用 Docker 的指令，把 Docker Image Pull 到 local，並且執行 container，然後在 container 上安裝 HTTP Service，就類似是在使用 VM。

{{% callout "warning" %}}
直接進入 Docker Container 裡面下一些指令安裝程式和改設定檔，不夠自動化，可能需要常常的重覆在做同一件事，這樣會很沒效率。

寫 Dockerfile，只要下 `docker build` 的指令就可以把 Docker Image 建構起來，未來要使用就直接 Run 此 Image。
{{% /callout %}}

## 實作目標:
{{% callout "success" %}}
1. 要做到在 Dockerfile 裡面，撰寫安裝 Java 和 Tomcat 的指令，包成 Docker Image， 
2. 之後只要呼叫到 docker run 指令，就可以把 Tomcat Service 啟動起來。
 
**主要目的用來體驗如何撰寫 Dockerfile 和 Build Image 以及執行 Docker container。**
{{% /callout %}}

**記住要使用 WSL2 此虛擬機 來實作 Docker**
> 可參考前面 安裝 Windows，或以下訊息
{{% callout "warning" %}}
Docker 並非是一个通用的容器工具，它依賴於已存在並運行的 Linux 内核環境。
在 Windows 上部署 Docker 的方法都是先安装一个虛擬機，並在安装 Linux 系統的的虛擬機中運行 Docker。
{{% /callout %}}

### 第一步:
> 建立 Dockerfile

1. 建立寫 Dockerfile 會用到的資料夾，指令如下
    ```msl
    $ mkdir docker-test
    $ cd docker-test
    ```
    
2. 下載JDK 的安裝檔放在 docker-test資料夾裡，使用的版本是 jdk-19.0.2
    > 下載連結
    > https://download.java.net/java/GA/jdk19.0.2/fdb695a9d9064ad6b064dc6df578380c/7/GPL/openjdk-19.0.2_linux-x64_bin.tar.gz

    ```
    sudo apt install
    ```

    將檔案移至路徑 \\wsl$\Ubuntu\home\\[user name]\docker-test
    
3. 撰寫Dockerfile
    ```msl
    $ vi Dockerfile
    ```
    > Dockerfile 的內容如下
    ```dockerfile
    FROM centos:7
    MAINTAINER HsingYu
    
    # 安裝 wget，yum 是 centos 的安裝指令
    RUN yum install -y wget

    RUN cd /
    
    # 加入 jdk-19.0.2 壓縮檔案，加入後會自動解壓縮
    ADD openjdk-19.0.2_linux-x64_bin.tar.gz /

    # 下載 apache-tomcat-10.1.7.tar.gz
    RUN wget --no-check-certificate https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.7/bin/apache-tomcat-10.1.7.tar.gz
    # 解壓縮 apache-tomcat-10.1.7.tar.gz
    RUN tar zxvf apache-tomcat-10.1.7.tar.gz
    
    # 設置 java 的環境變數
    ENV JAVA_HOME=/jdk-19.0.2
    ENV PATH=$PATH:/jdk-19.0.2/bin
    CMD ["/apache-tomcat-10.1.7/bin/catalina.sh", "run"]
    ```

4. 撰寫完 Dockerfile 之後資料夾的結構如下圖

<img src="https://i.imgur.com/ijrOBPR.png" alt="" width="300">

{{% callout "success" %}}
> 或者將下載 jdk19.0.2 也寫入 Dockerfile
```dockerfile
FROM centos:7
MAINTAINER HsingYu

RUN yum install -y wget

RUN cd /

RUN wget https://download.java.net/java/GA/jdk19.0.2/fdb695a9d9064ad6b064dc6df578380c/7/GPL/openjdk-19.0.2_linux-x64_bin.tar.gz
RUN tar zxvf openjdk-19.0.2_linux-x64_bin.tar.gz

RUN wget --no-check-certificate https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.7/bin/apache-tomcat-10.1.7.tar.gz
RUN tar zxvf apache-tomcat-10.1.7.tar.gz

ENV JAVA_HOME=/jdk-19.0.2
ENV PATH=$PATH:/jdk-19.0.2/bin
CMD ["/apache-tomcat-10.1.7/bin/catalina.sh", "run"]
```
{{% /callout %}}

### 第二步:
> Build Docker Image

1. 預設在和 Dockerfile 檔案同層的資料夾底下輸入， docker build 指令，如下

    ```wsl
    $ docker build -t mytomcat . --no-cache
    ```
    
    > 使用 --no-cache 的主要原因，是避免在 Build Docker image 時被 cache 住，而造成沒有 build 到修改過的 Dockerfile。

    > Build 完的結果如下圖：

<img src="https://i.imgur.com/cgeexf7.png" alt="" width="500">

2. Build 完 Docker Image 之後，使用 docker images 指令查看是否有 build 成功如下圖

<img src="https://i.imgur.com/sBnXeZO.png" alt="" width="500">

### 第三步:
> 在 Build 完 Docker Image 之後就可以執行 Docker Container，這時Tomcat 的 Service 也會跟者被執行起來，指令如下

在瀏覽器跑
```msl
$ docker run -p 8080:8080 mytomcat
```

在虛擬機跑
```msl
$ docker run mytomcat
```
Tomcat Service 會被執行起來的主要原因是在 Dockerfile 裡面有寫 CMD 指令，呼叫啟動 Tomcat Service

### 第四步:
> 打開 Browser 確認

* 要打開 Browser 確認 Tomcat Service 有沒有被執行起來時，發現我們不知道 Docker Container 的 IP，這時侯只能使用 docker exec 進入 docker container查詢 IP 。

要使用 docker exec 指令之前需要先知道 Container 的 ID 所以需要先使用 docker ps 指令查詢 Container ID，如下圖：

<img src="https://i.imgur.com/ePNiypK.png" alt="" width="500">

{{% callout "warning" %}}
* 有了 IP 之後就可以打開 Browser 輸入 http://172.17.0.2:8080 URL的位置，確認 Tomcat Service 是否有啟動，如下圖：

<img src="https://i.imgur.com/IfxZSjY.png" alt="" width="500">

直接進入 Docker Container 去看 IP 的位址其實有點麻煩，會故意這樣 Daemon 主要的原因，是讓大家了解到我們把 Docker Container 執行啟來時並不會知道它的 IP 位址在哪，這需要透過設定有關於 Docker 的 Network 來解決這個問題。
{{% /callout %}}

{{% callout "info" %}}
目前使用最簡單的方法，就是在run docker container 時用 Port 的 Mapping 來解決此問題，重新再一次 run docker container，指令如下：

```msl!
$ docker run -p 8080:8080 mytomcat
```

Container 的 8080 port mapping到 localhost 的 8080 port ，這樣只要輸入 http://localhost:8080 就可以看到 tomcat service 的 WebUI 畫面了。

<img src="https://i.imgur.com/BWhrRm7.png" alt="" width="500">

{{% /callout %}}

# 參考文章