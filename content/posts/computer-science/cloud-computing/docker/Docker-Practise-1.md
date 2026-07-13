+++
title = "Docker Practise - 1"
date = 2023-05-16 19:32:34
draft = false
categories = ["Computer Science", "Cloud Computing", "Docker"]
+++

## 實作說明
當一個軟體完成後要進行發布網站，我們並不會使用絕對路徑，顯示檔案位置，會使用取得主機（hosting）和網域名稱（domain name）的方式來達到。

而他人只需要訪問你的 hosting IP 或為其申請的 domain name 來 request 資料。

而常見的有兩種工具來做:
- Apache
- nginx

{{% callout "warning" %}}
舉個大家比較熟悉的例子就是 xampp，
可以將檔案丟進去，訪問 localhost 進行訪問。

但是因為 xampp 是一個類似於 LAMP 的環境，
他除了 Apache 以外，還包含了 phpmyadmin、PHP、Perl 等其他東西，
如果不需要用到 php 等東西，就會比較沒有必要。
{{% /callout %}}

## 創建一個 docker images 
- **ubuntu**
    ```
    docker run -it -p 80:80 ubuntu:focal bash
    ```

## 更新 apt
```
apt update
```

## 下載 nginx
```
apt install nginx
```

## 開啟 nginx
```
nginx -s reload
```

{{% callout "danger" %}}
**\# 可能出現錯誤資訊:**
```
nginx: [error] open() "/var/run/nginx.pid" failed (2: No such file or directory)
```

**解決方法:**
1. 輸入以下指令
```
nginx -c /etc/nginx/nginx.conf
```

2. 查看 `/etc/nginx/nginx.conf` 修改內容
```
nano /etc/nginx/nginx.conf
```

3. 將其中內容修改成下方 `pid    /var/run/nginx.pid;`
```
#pid   /run/nginx.pid;
pid    /var/run/nginx.pid;
```

4. 再試一次 `nginx -s reload`
{{% /callout %}}

## 網頁連接設定
```
nano /etc/nginx/sites-available/default
```

<img src="https://i.imgur.com/t8nW6eF.png" alt="" width="550">

- port 連接設定
- 根目錄檔案位置
- 預先載入檔案
- server_name 用於設定 DNS 域名

## 最後將 APP 檔案加入根目錄檔案位置
原本顯示完整檔案位置

![](https://i.imgur.com/vHOYfUJ.png)

經過修改剩下 `locolhost = 127.0.0.1`

![](https://i.imgur.com/ddHfdCk.png)


**`^D = exit`: 離開 container**

{{% callout "danger" %}}
如果在 Terminal 無法離開 container

1. 再開起一個 Terminal
2. `docker ps`: 檢查還未關閉的 container
3. `docker stop [container ID]`: 這裡 container ID 可以打前兩個字就好
{{% /callout %}}