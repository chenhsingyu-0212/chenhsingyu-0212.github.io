+++
title = "Docker Compose"
date = 2023-05-16 19:29:28
draft = false
categories = ["Computer Science", "Cloud Computing", "Docker"]
+++

# Docker Compose

## 為什麼要用 Docker Compose?

1. 之前有介紹過使用 `docker run` 指令就可以把 Docker Container 啟動起來，但是如果我們要啟動很多個 Docker Container 時，就需要輸入很多次 `docker run` 指令。
2. 另外 container 和 container 之間要做關聯的話也要記得它們之間要如何的連結(link) Container，這樣在要啟動多個 Container 的情況下，就會顯得比較麻煩。

## 如何運作?
{{% callout "success" %}}
**Docker-Compose:** 寫一個 `docker-compose.yml`，把所有要使用 Docker Image 寫上去，也可以把 Container 之間的關係連結(link)起來。

最後只要下 `docker-compose up` 指令，就可以把所有的 Docker Container 執行起來，這樣就可以很快速和方便的啟動多個 container。
{{% /callout %}}

## Docker Compose 常用指令
| 指令                       | 說明                                             |
| -------------------------- | ------------------------------------------------ |
| `$ docker-compose up`      | **\# 啟動所有的 Docker Container**               |
| `$ docker-compose up -d`   | **\# 啟動所有的 Docker Container，且在背景執行** |
| `$ docker-compose ps`      | **\# 查看 Docker Container 的執行狀態**          |
| `$ docker-compose logs`    | **\# 看執行的 log**                              |
| `$ docker-compose stop`    | **\# 停止 docker-compose 執行的所有 Container**  |
| `$ docker-compose rm`      | **\# 刪除 docker-compose 的所有 Container**      |
| `$ docker-compose restart` | **\# 重啟 docker-compose 的所有 Container**      |

# Docker Compose 實作

1. 實作的部份主要就是要把 Docker-Compose 安裝起來
2. 然後撰寫一個 `docker-compose.yml`
3. 並且使用 `docker-compose up`，指令把所有的 Docker Container 啟動起來

## 安裝 Docker-Compose
```shell
$ cd /usr/bin
$ wget https://github.com/docker/compose/releases/download/1.18.0/docker-compose-Linux-x86_64
$ mv docker-compose-Linux-x86_64 docker-compose
$ chmod 755 docker-compose
```

## 撰寫 docker-compose.yml
```yml docker-compose.yml
version: '2'
services:
  db:
     image: mysql
     environment:
        MYSQL_ROOT_PASSWORD: 123456
  admin:
     image: adminer
     ports:
       - 8080:8080
```
> 主要的功能是要啟動 2 個 Docker Container，一個是 mysql 的 Container，另外一個是 admin 管理 mysql Web UI 的 container

> MYSQL_ROOT_PASSWORD 的環境變數用來設定登入 mysql 的密碼

> 參考網站: https://hub.docker.com/_/mysql/

## 啟動所有的 Docker Container
```shell
$ docker-compose up -d
```
- `-d` 參數代表要執行在背景的方式

## 查看 Docker Container 的執行狀態
```shell
$ docker-compose ps
```

## admin 執行
> http://localhost:8080

{{% callout "warning" %}}
**其他指令可以參考官方網站:** 
https://docs.docker.com/compose/compose-file/compose-file-v2/
{{% /callout %}}

# 參考文章