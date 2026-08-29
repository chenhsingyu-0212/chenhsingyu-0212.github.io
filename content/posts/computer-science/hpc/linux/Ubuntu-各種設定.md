+++
title = "Ubuntu 各種設定"
date = 2024-07-12 11:25:01
draft = false
categories = ["Computer Science", "HPC", "Linux"]
+++

## module 簡介

專門管理環境變數的工具，全稱是 module environment，一般應用於軟體或運行庫等設備有多個版本，且需要分別配置這些環境變數。

```shell
module ava
```

## 使用權限

切換為根使用者

```shell
user@vm:~$ sudo su -
```

### 增加使用者 sudo 權限

```bash
user@vm:~$ sudo adduser [user name] sudo
```

### 移除使用者 sudo 權限

```bash
user@vm:~$ sudo deluser [user name] sudo
```

## 使用者相關設定

### 新增使用者

執行下方指令可以新增一位使用者，在`user name`的地方輸入需要的使用者名稱。接續可以參考下方圖片，依照提示完成新增使用者。

```shell
user@vm:~$ sudo adduser [user name]
```

![image](https://hackmd.io/_uploads/Hye4pymCwA.png)

### 更改密碼

```shell
user@vm:~$ sudo passwd [user name]
```

### 刪除使用者

###