+++
title = "Docker Practise - 2"
date = 2023-05-16 19:41:31
draft = false
categories = ["Computer Science", "Cloud Computing", "Docker"]
+++

## 實作說明
在前一個實作中我們先創建了一個 images `ubuntu`，在裡面安裝 nginx ，但其實我們只需要使用 nginx 而已，並不需要 ubuntu 這個作業系統。

所以接下來我們要實作撰寫一個 Dockerfile，在自己的專案中，run Dockerfile 進行部屬，而且不包含 ubuntu。

## 撰寫一個 Project
當然要現在馬上生出一個 project 有點費時，所以如果手邊沒有撰寫好的 project 也沒關係，接下來分兩部分來說:
1. **已經有可以實作的 project**
    這個就很簡單，先進入 project 的資料夾。

2. **沒有可實作的 project**
    這個其實也不難，創建一個新資料夾，名稱隨意，如果想不到可以用: [docker-test]，在裡面撰寫一個 `index.html`。
    以下是個簡單的 html 可以參考:
    ```html index.html
    <h1>My Project</h1>
    ```

## 撰寫 nignx.conf
這個其實沒寫也沒關係，沒有寫就是原本 nignx.conf 的預設，寫了可以更改其原本預設。

```
server{
  listen       80 default_server;
  listen       [::]:80 default_server;
  server_name  _;
  root         /usr/share/nginx/html;
  index        index.html;
  charset utf-8;
  access_log /var/log/nginx/access_log;
  error_log /var/log/nginx/error_log;
}
```
> 內容細節說明可以去看 [docker practise - 1](/posts/docker-practise-1/)，那邊有稍微說明一下內容涵意。

## 創建一個 Dockerfile 的檔案
創建一個 Dockerfile 檔，沒有副檔名，純檔案。

Dockerfile 內容如下:
```dockerfile
FROM nginx
MAINTAINER HsingYu

# 複製一整個在根目錄專案的檔案進去
COPY / /usr/share/nginx/html
# 如果只有一個檔案，如: index.html 可以寫 
# COPY index.html /usr/share/nginx/html

# 把 nignx.conf 加入預設 conf 裡面
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 容器對外連接 80 port
EXPOSE 80
```

這樣就完成撰寫 Dockerfile 了。

## 利用 Dockerfile 建立 images
```
docker bulid -t ["images name"] .
```

- `-t`: 後面接為 images 命名的名稱，注意不可以是大寫字母，要是小寫喔~~
- `.`: 指在這個地方下的 Dockerfile

建立完成會如下圖:
![success](https://i.imgur.com/oD6OTUB.png)

## 執行建立的 images
```
docker run -p 80:80 ["images name"]
```

- `-p`: 後面寫通信的 port 
- `80:80`: 為了方便區分冒號(:)前後 port 代表的不同意思，接下來會以 `8080:80` 來解釋，容器將在端口 8080 上的主機上可用，但它與端口 80 上的容器（和應用程序）通信，簡單來說就是在 bowser 中輸入容器運行所在的 Docker 主機的 DNS 名稱或者 IP 位址，並在後面加上 port 8080，例如: `localhost:8080`

執行成功會如下圖:
![succes](https://i.imgur.com/3atzvMI.png)

> [localhost](http://localhost)
> port 80 不用特別寫，localhost:80 => localhost

![Imgur](https://i.imgur.com/Bsv8vzi.png)