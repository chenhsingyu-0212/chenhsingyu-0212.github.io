+++
title = "Work Flow"
date = 2023-05-18 15:34:08
draft = false
categories = ["Computer Science", "Website", "Git"]
+++

{{% callout "warning" %}}
當大家一起開發專案時，專案撰寫的內容越來越多，Git Commit 內容增加，就很容易有 Git Graph 非常雜亂的問題，對某一個功能重複撰寫等等。
這個時候就非常需要工作流程 (Work Flow)，讓大家有規劃，更效率地開發。
{{% /callout %}}

# 常見 Work Flow
- Git Flow
- GitHub Flow
- GitLab Flow

# 定義部署的環境
1. 開發環境（工程師的電腦）
2. 測試環境（讓審核人員測試使用，像是 QA 測試）
3. 展示環境（讓早期用戶或是驗收使用）
4. 產品環境（正式讓所有用戶使用）

# Git Flow
Git Flow 是上述三種 Work Flow 中最早出現的。

{{% callout "info" %}}
* **master**
    負責**管理發布的狀態**。當準備好發佈指定版本時，最後的提交會給予一個發布版本標籤。
    
* **develop**
    Develop 分支是針對**日常開發的分支**。所有新功能開發最終都會合併到這裡。
    
* **feature**
    這個分支是**新功能的開發**或**修復錯誤**的時候從 develop 分支分開出來的。
    
* **release**
    Release分支是**為了發布而準備的**。通常這種分支的名稱最前面會加上 "**release-**"。
    
* **hotfit**
    Hot fix分支是在**發布的產品需要緊急修改**時，從 master 分支建立的分支。
    通常會在分支名稱的最前面會加上 "**hotfix-**"。
{{% /callout %}}

## 開發過程

1. 從 master 分支拉出一條分支 develop 進行日常開發。
2. 要開發新功能/修復錯誤時，從 develop 分支拉取一條 feature 分支。
3. 開發完成後，將 feature 分支合入到 develop 分支，並進行開發環境的驗證。
4. 確認完成後，從 develop 分支拉取一條 release 分支，到測試環境進行 SIT/UAT 測試。
5. 測試完成後，可將 release 分支合入 master 分支並將現在內容給回 develop 分支。
6. 版本部屬時，直接將 master 分支程式碼部署到最終環境。

![](https://i.imgur.com/5jV889I.png)

{{% callout "primary" %}}
**優點:**
- 每個分支都有明確的定義，嚴格按照 Git Flow 管理專案程式碼的話，很難出現程式碼混亂

**缺點:**
- 如果 feature 分支過多的話很容易造成程式碼衝突，從而提高了合入的成本
- 由於每次提交都涉及多個分支，所以 Git Flow 也太不適合提交頻率較高的項目
{{% /callout %}}

# GitHub Flow & GitLab Flow

By 因為我還沒研究過 GitHub Flow & GitLab Flow，所以這裡提供我覺得寫得很不錯的文章給大家參考

**文章**