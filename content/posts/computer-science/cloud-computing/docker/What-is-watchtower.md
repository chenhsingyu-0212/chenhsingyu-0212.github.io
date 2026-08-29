+++
title = "What is watchtower?"
date = 2023-10-20 15:24:42
draft = false
categories = ["Computer Science", "Cloud Computing", "Docker"]
+++

{{% callout "info" %}}
一個可以全自動幫你升級到最新 image 的工具 **WatchTower**
{{% /callout %}}

> 官方文件
> https://containrrr.github.io/watchtower/

# 介紹

WatchTower 啓動後，會開始幫你監控機器上所有正在執行的 container，每隔一段時間發現有新的 image 後，它就會幫你下載最新 image 並且使用你當初建立該container 時的相同環境設定去幫你重新啓動容器。

# 開啟 WatchTower

接下來會介紹兩個方式開啟 WatchTower:

## docker 開啟 WatchTower

```shell
docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower
```

## docker compose 開啟 WatchTower

- 基礎版 (單純開啟 watchtower)
```yml docker-compose.yml
version: '1.0'

services:
  nginx:
    image: nginx
    container_name: nginx
    ports:
      - 80:80
  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

networks:
  site:
```

- 參考詳細版 (包含建立 docker container website_frontend 和 website_backend)
```yml docker-compose.yml
version: '1.0'

services:
  nginx:
    build: .
    container_name: nginx
    restart: always
    environment:
      - TZ=Asia/Taipei
    volumes:
      - ./site:/var/www/html
      - ./nginx:/etc/nginx/conf.d
      - ./nginx/ssl/:/etc/nginx/ssl/:ro
      - ./nginx/log:/var/log/nginx
    ports:
      - 80:80
      - 443:443
      - 1337:1337
    networks:
      - site

  website_frontend:
    image: [The-image-on-the-docker-hub-need-to-use:${MODE}]
    container_name: website_frontend
    restart: always
    expose:
      - 3000
    networks:
      - site

  website_backend:
    image: [The-image-on-the-docker-hub-need-to-use:${MODE}]
    container_name: website_backend
    restart: always
    environment:
      - PUBLIC_URL=[]
    expose:
      - 1337
    volumes:
      - ./website_backend/.backend_env:/opt/app/.env
      - ./website_backend/database/:/opt/app/.tmp/
      - ./website_backend/media/:/opt/app/public/uploads
    networks:
      - site
    # 設置日誌
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 30 website_frontend website_backend

networks:
  site:
```

## 進階設置指令