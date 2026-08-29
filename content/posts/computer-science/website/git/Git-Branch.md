+++
title = "Git Branch"
date = 2023-05-18 15:31:13
draft = false
categories = ["Computer Science", "Website", "Git"]
+++

# 什麼是 branch?
在開發軟體時，可能同時會有**多人在開發同一功能或修復錯誤**，也可能會有多個發佈版本的存在，並且需要針對每個版本進行維護，同一個數據庫可以同時進行多個修改。
{{% callout "info" %}}
**現在最常用來管理 Git 分支的方法:**
* master
* develop
* feature
* release
* hotfix
{{% /callout %}}

# 分支常用指令
```bash
git branch
# 查看分支。

git branch [BRANCH_NAME]
# 建立分支。

git checkout [BRANCH_NAME]
# 取出指定的分支。

git checkout -b [BRANCH_NAME]
# 建立並跳到該分支。

git branch -D [BRANCH_NAME]
# 強制刪除指定分支(須先切換至其他分支再做刪除)。

git branch -m [OLD_BRANCH_NAME] [NEW_BRANCH_NAME]
# 修改分支名稱。

git merge [要合併的分支]
# 切換到合併後的分支，再合併分支
```

{{% callout "success" %}}
**合併分支:**

例: 把 release-1.0 分支的修改合併到 master。

1. 先將分支切換到 master 
    ```
    git checkout master
    ```
2. 合併 release-1.0 分支
    ```
    git merge release-v1.0
    ```
{{% /callout %}}

# 分支命名和標記
如果可能，請創建不包含特殊字符的分支和標記名稱，因為這些字符需要轉義。用於分支名稱和標記名稱的安全默認字符集為：

* 英文字母 `（a-z 和 A-Z）`
* 數字 `(0-9)`
* 有限的標點字符集：
    * 句點 `(.)`
    * 連字符 `(-)`
    * 下劃線 `(_)`
    * 正斜杠 `(/)`

為避免混淆，分支名稱應以字母開頭。