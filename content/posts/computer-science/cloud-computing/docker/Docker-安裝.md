+++
title = "Docker-安裝"
date = 2023-05-16 18:33:53
draft = false
categories = ["Computer Science", "Cloud Computing", "Docker"]
+++

# Windows
{{% callout "warning" %}}
Docker 並非是一个通用的容器工具，它依賴於已存在並運行的 Linux 内核環境。
在 Windows 上部署 Docker 的方法都是先安装一个虛擬機，並在安装 Linux 系統的的虛擬機中運行 Docker。
{{% /callout %}}

<img src="https://i.imgur.com/g0tyGnD.png" alt="" width="500">

## 使用 WSL 在 Windows 上安裝 Linux
開發人員可以在 Windows 電腦上同時存取 Windows 和 Linux 的功能。
 Windows 子系統 Linux 版 (WSL) 可讓開發人員直接在 Windows 上安裝 Linux 散發套件， (例如 Ubuntu、OpenSUSE、Type、Debian、Arch Linux 等) 並使用 Linux 應用程式、公用程式和 Bash 命令列工具，不需要傳統虛擬機器或雙佈設定的額外負荷。

### 必要條件
您必須Windows 10版本 2004 和更新版本執行， (組建 19041 和更新版本) 或Windows 11。 檢查更新。

### 安裝 WSL 命令
開啟 PowerShell 或 Windows 命令提示字元(cmd)，輸入命令，**然後重新開機電腦**。

```cmd
wsl --install
```

* 啟用選用的 WSL 和虛擬機器平台元件
* 下載並安裝最新的 Linux 核心
* 將 WSL 2 設定為預設值
* 可能需要下載並安裝 Ubuntu Linux 發行版本 (重新開機)
* 您必須在此安裝程式期間重新開機電腦

若已有其他版本，可以以此指令來下載Ubuntu

```cmd
wsl --install -d Ubuntu
```

### 檢查 WSL 狀態
```cmd
wsl --status
```
使用 `wsl --install` 命令安裝的新 Linux 安裝預設會設定為 WSL 2。

### 開啟 WSL
```cmd
wsl.exe
```

### 設定 Linux 使用者名稱和密碼
**系統會要求您為 Linux 發行版本建立使用者名稱和密碼。**

* 此使用者名稱和密碼是每個各自 Linux 發行版本專屬，不會影響您的 Windows 使用者名稱。
* 請注意，在輸入 密碼時，畫面上不會顯示任何專案。 這稱為盲目輸入。 您不會看到您輸入的內容，這完全正常。
* 一旦您建立使用者名稱和密碼，帳戶就會是您散發套件的預設使用者，而且會在啟動時自動登入。
* 此帳戶將會被視為 Linux 系統管理員，並且能夠執行 sudo (超級使用者執行) 系統管理命令。
* 在 WSL 上執行的每個 Linux 發行版本都有自己的 Linux 使用者帳戶和密碼。 每當您新增散發套件、重新安裝或重設時，都必須設定 Linux 使用者帳戶。

<img src="https://i.imgur.com/I8a6qys.png" alt="" width="600">

<img src="https://i.imgur.com/MjAL9QQ.png" alt="" width="600">

若要變更或重設密碼，請開啟 Linux 發行版本，然後輸入命令： `passwd` 。 
系統會要求您輸入目前的密碼，然後要求您輸入新密碼，然後確認您的新密碼。

## 使用 Docker 設定遠端開發容器
使用 WSL 2 (Windows 子系統 Linux 版 版本 2) 設定適用于 Windows 的 Docker Desktop。

### 必要條件
* **安裝 WSL**，並為在 WSL 2 中執行的 Linux 發行版本設定使用者名稱和密碼。
* **安裝Visual Studio Code (選擇性)**。 這會提供最佳體驗，包括能夠在遠端 Docker 容器內撰寫程式碼和偵錯，並聯機到您的 Linux 散發套件。
* **安裝Windows 終端機 (選擇性)**。 這可提供最佳體驗，包括在同一個介面中自訂和開啟多個終端機的能力， (包括 Ubuntu、Debian、PowerShell、Azure CLI，或任何您想要使用)。
* **在 Docker Hub 註冊 Docker 識別碼， (選擇性)**。

### 安裝 Docker Desktop
請先到 Docker 官網
https://www.docker.com/docker-windows

<img src="https://i.imgur.com/xERZ8J1.png" alt="" width="600">

<img src="https://i.imgur.com/tUBd3Tu.png" alt="" width="600">

> 在cmd上輸入以下指令可以確認是否下載成功

<img src="https://i.imgur.com/z1P9eef.png" alt="" width="400">

<img src="https://i.imgur.com/ozFgwh2.png" alt="" width="600">

<img src="https://i.imgur.com/FH6AIDV.png" alt="" width="600">

> 開啟 Docker Desktop

<img src="https://i.imgur.com/7niSOCt.png" alt="" width="600">

> 確定已核取 [設定>一般] 中的 [使用 WSL 2 型引擎]。

<img src="https://i.imgur.com/bfIPVwm.png" alt="" width="600">

> 移至 [設定>資源>WSL 整合]，從您想要啟用 Docker 整合的已安裝 WSL 2 散發套件中選取。

> 若要確認已安裝 Docker，請開啟 WSL 散發套件 (例如 Ubuntu) ，並輸入下列命令來顯示版本和組建編號： `docker --version`

<img src="https://i.imgur.com/aoHGr1q.png" alt="" width="600">

### 使用下列方式執行簡單的內建 Docker 映射，以測試您的安裝是否正常運作：
```msl
docker run hello-world
```

<img src="https://i.imgur.com/8lN0f6o.png" alt="" width="600">

### 尋找 Docker 映射儲存體資料夾
{{% callout "success" %}}
Docker 會建立兩個散發資料夾來儲存資料：
 
* `\wsl$\docker-desktop`
* `\wsl$\docker-desktop-data`

您可以開啟 WSL Linux 發行版本並輸入： `explorer.exe` . 
在 Windows 檔案總管中檢視資料夾，以找到這些資料夾。 
輸入： `\\wsl$`

<img src="https://i.imgur.com/cIVVeGe.png" alt="" width="600">

{{% /callout %}}