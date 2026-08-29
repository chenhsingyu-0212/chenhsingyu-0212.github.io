+++
title = "Git 基本指令與觀念"
date = 2023-05-18 14:59:43
draft = false
categories = ["Computer Science", "Website", "Git"]
+++

# 基本指令與觀念
![](https://i.imgur.com/AHgQEPd.png)
**提交訊息**是查看其他人提交的修改內容或自己檢查歷史記錄時重要的資料。
所以要**用心填寫**讓人容易理解的提交訊息。

{{% callout "success" %}}
**Git的標準提交(commit)訊息：**

*第1行：提交時修改內容的摘要*
*第2行：空行*
*第3行以後：修改的理由*
{{% /callout %}}

{{% callout "danger" %}}
建議以這種形式填寫提交訊息，詳細可以參考[Git commit specification](/posts/git-commit-specification/)
{{% /callout %}}

## 基本指令
```bash
git init
# 建立新的本地端儲存庫(Repository)

git clone [URL]
# 複製遠端的 Repository 檔案到本地端。

git status
# 檢查本地端檔案異動狀態。
```

{{% callout "success" %}}
沒事常用 `git status` 檢查 `git` 的情況
{{% /callout %}}

{{% callout "danger" %}}
**clone v.s. download**

clone 可以做 git 後續的一些指令，但 download 無法。
{{% /callout %}}

## 常用指令

### add
```bash
git add [檔案或資料夾]
# 將指定的檔案(或資料夾)加入版本控制。用 git add . 可加入全部。
```

### commit
```bash
git commit -m "[修改內容]"
# 提交(commit)目前的異動並透過 -m 參數設定摘要說明文字。

git commit
# 提交(commit)目前的異動，可以打超過一行的 commit information。
```

### push
```bash
git push
# 將本地端 Repository 的 commit 發佈到遠端。

git push origin [BRANCH_NAME]
# 發佈至遠端指定的分支(Branch)。
```

### pull
```bash
git pull
# 檔案抓取下來到自己的本地端。
```