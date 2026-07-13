+++
title = "Git 安裝"
date = 2023-05-18 14:55:23
draft = false
categories = ["Computer Science", "Website", "Git"]
+++

# 安裝 git - Ubuntu

```bash
sudo apt install git
```

# 安裝 git - Windows
{{% callout "info" %}}
**git官網:** https://git-scm.com/download/win
然後開啟 Git Bash
{{% /callout %}}
![](https://i.imgur.com/eUbZCcs.png)

## 設定 git 識別資料
在你安裝 Git 後首先應該做的事是設定使用者名稱及電子郵件。
這一點非常重要，因為每次 Git 的提交會使用這些資訊，而且提交後不能再被修改。
```bash
git config --global user.name "[使用者名字]"

git config --global user.email "[電子信箱]"
```
若你有傳遞 --global 參數，只需要做這工作一次，因為在此系統，不論 Git 做任何事都會採用此資訊。

## 檢查讀者的設定
```bash
git config --list
```

## 建立全新的儲存庫
```bash
echo "# test" >> README.md

git init
git add README.md
git commit –m “first commit”
git remote add origin [github_repository URL]
git push –u origin main
```