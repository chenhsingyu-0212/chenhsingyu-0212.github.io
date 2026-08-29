+++
title = "HPC 叢集架構"
date = 2026-08-29 18:00:00
draft = false
categories = ["Computer Science", "Infrastructure", "HPC"]
+++

一台 GPU 伺服器不需要「架構」——裝好驅動、登入、跑程式就結束了。但當使用者從一個人變成整個學校、機器從一台變成一整櫃，就會冒出一堆單機時代不存在的問題：誰可以用、怎麼排隊、資料放哪、機器之間怎麼溝通、帳號怎麼統一。

HPC 叢集的架構基本上就是在回答這幾個問題。這篇整理各個角色的分工，以及一個工作從送出到執行到底經過了什麼。

## 節點的分工

叢集裡的機器不是每一台都做同樣的事，通常至少分成三種角色。

### Login Node（登入節點）

使用者 SSH 進來的地方，也是唯一對外開放的入口。

在這裡編輯程式、準備資料、寫工作腳本，然後把工作**提交**出去。它刻意不是拿來算東西的——如果每個人都直接在登入節點上跑訓練，這台機器會立刻被吃垮，所有人都連不進來。

{{% callout "warning" %}}
在登入節點直接執行運算是叢集上最常見的違規行為。多數站台會有機制自動砍掉這類程序，因為它影響的是所有其他使用者。
{{% /callout %}}

### Head Node / Controller Node（管理節點）

跑排程器主程式的地方，是整個叢集的大腦。

它維護工作佇列、決定誰先跑誰後跑、追蹤每個節點還剩多少資源，並把工作派送到計算節點。以 Slurm 為例，這裡跑的是 `slurmctld`。

管理節點通常不開放使用者登入。有些站台會配置第二台備援的管理節點，因為它一掛掉整個叢集就無法派工。

### Compute Node（計算節點）

真正做事的機器，也是 GPU 和大量 CPU 核心所在的地方。

每台計算節點上跑一個排程器的代理程式（Slurm 是 `slurmd`），負責接收管理節點派來的工作、實際執行、回報狀態與資源使用量。使用者一般不會直接 SSH 進計算節點——要用它就透過排程器申請。

## 排程器：叢集的作業系統

排程器（scheduler / workload manager）是把一堆機器變成「一個叢集」的關鍵元件。沒有它，這些機器只是恰好放在同一個機房裡的獨立伺服器。

它做兩件事：

1. **資源管理** —— 知道每個節點有多少 CPU、GPU、記憶體，哪些正被佔用
2. **作業調度** —— 依照策略（FIFO、優先權、fairshare、backfill）決定工作的執行順序

目前 HPC 的主流是 **Slurm**，細節整理在
[Job Scheduling & Resource Management System](/posts/job-scheduling-resource-management-system/)。

### Partition：把節點分組

Partition（Slurm 的用語，PBS 叫 queue）是把計算節點分組管理的機制。一個 partition 可以定義包含哪些節點、預設與最大的資源限制、誰可以使用、以及排程優先序。

實務上會這樣分，是因為叢集裡的卡通常不只一種。舉例來說，H100 和 H200 的節點會分成不同 partition，讓使用者能指定要哪一種；另外還可能有一個 **MIG** 分區——把單張 GPU 切成多個實例，給只需要一小塊算力的工作用，避免整張卡被一個小任務佔住。

## 儲存：為什麼不能只用 NFS

計算節點需要讀同一份資料、寫到同一個地方，所以要有共享儲存。問題是規模。

當幾十張 GPU 同時讀同一個資料集，傳統的 NFS 很快就會變成瓶頸——GPU 空轉等 I/O，昂貴的算力就浪費掉了。所以 HPC 環境會用**平行檔案系統**（parallel filesystem），例如 Lustre、BeeGFS、GPFS，或商用的 **WEKA**。

它們的共通做法是把資料**打散在多台儲存節點上**，讀寫時多個節點同時提供頻寬，而不是全部擠向單一台伺服器。

## 網路：為什麼需要 InfiniBand

叢集裡通常有兩套網路，用途完全不同：

| 網路 | 用途 |
| --- | --- |
| **乙太網路（Ethernet）** | 管理流量、對外連線、一般服務 |
| **InfiniBand** | 計算節點之間的運算通訊 |

需要 InfiniBand 是因為**跨節點的平行運算**。當一個訓練工作橫跨多台機器，各節點之間必須頻繁交換梯度；這類通訊對**延遲**極度敏感，而 InfiniBand 提供的低延遲與 RDMA（讓網卡直接存取記憶體、繞過作業系統核心）正是為此而生。

單節點的工作感受不到差別，但多節點工作的效率會直接被網路決定。

{{% callout "info" %}}
**儲存走哪一條？** 這要看站台怎麼配置。平行檔案系統可以架在 InfiniBand 上，也可以走高速乙太網路（搭配 RoCE）。所以看到一座叢集有 InfiniBand，不代表儲存流量也走它——要看實際的佈線。
{{% /callout %}}

## 身分：叢集需要統一的帳號

使用者要能在登入節點和所有計算節點上有**一致的帳號、UID 與家目錄**——否則工作跑到不同節點上，會發生檔案權限對不上、找不到家目錄之類的問題。

所以叢集會用集中式的目錄服務，最常見的是 **LDAP**。帳號建立一次，全叢集生效。

## 叢集管理工具

節點數量上去之後，逐台手動安裝與設定不再可行。這時會用叢集管理軟體來做節點佈署、映像檔管理、監控與韌體更新，例如 **NVIDIA Base Command Manager (BCM)**、xCAT、Warewulf。

這類工具通常會提供 **API**，讓外部系統（例如帳號申請系統）能程式化地查詢叢集狀態或建立資源，而不需要有人手動登入去改設定。

## 一個工作的完整路徑

把上面的角色串起來，一個工作實際上是這樣跑完的：

<figure>
<div class="figbox">
<svg viewBox="0 0 900 544" role="img" aria-label="一個工作的完整路徑：使用者、Login Node、Head Node 排程器、Compute Node，到工作結束">
  <defs><marker id="ah-path" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--mut)"/></marker></defs>
  <rect class="svg-box" x="230" y="16" width="440" height="56" rx="8"/>
  <text class="svg-t" x="450" y="42" text-anchor="middle">使用者</text>
  <text class="svg-s" x="450" y="61" text-anchor="middle">SSH 進 Login Node，準備程式與資料</text>
  <path class="svg-line" d="M 450 72 V 130" marker-end="url(#ah-path)"/>
  <text class="svg-l" x="466" y="94">sbatch job.sh</text>
  <rect class="svg-box" x="230" y="130" width="440" height="56" rx="8"/>
  <text class="svg-t" x="450" y="156" text-anchor="middle">Login Node</text>
  <text class="svg-s" x="450" y="175" text-anchor="middle">提交工作，進入佇列</text>
  <path class="svg-line" d="M 450 186 V 244" marker-end="url(#ah-path)"/>
  <text class="svg-l" x="466" y="208">工作進入佇列</text>
  <rect class="svg-box-a" x="230" y="244" width="440" height="56" rx="8"/>
  <text class="svg-t" x="450" y="270" text-anchor="middle">Head Node · 排程器</text>
  <text class="svg-s" x="450" y="289" text-anchor="middle">依策略與資源狀況決定何時、派到哪個節點</text>
  <path class="svg-line" d="M 450 300 V 358" marker-end="url(#ah-path)"/>
  <text class="svg-l" x="466" y="322">派送工作</text>
  <rect class="svg-box" x="230" y="358" width="440" height="56" rx="8"/>
  <text class="svg-t" x="450" y="384" text-anchor="middle">Compute Node</text>
  <text class="svg-s" x="450" y="403" text-anchor="middle">從平行檔案系統讀輸入，多節點工作經 InfiniBand 通訊</text>
  <path class="svg-line" d="M 450 414 V 472" marker-end="url(#ah-path)"/>
  <text class="svg-l" x="466" y="429">寫出結果</text>
  <text class="svg-l" x="466" y="444">stdout / stderr 落地</text>
  <rect class="svg-box" x="230" y="472" width="440" height="56" rx="8"/>
  <text class="svg-t" x="450" y="498" text-anchor="middle">工作結束</text>
  <text class="svg-s" x="450" y="517" text-anchor="middle">資源釋放，使用量寫入帳務資料庫</text>
</svg>
</div>
<figcaption>每一段都對應到前面介紹的一個角色：入口、大腦、手腳，最後回到帳務。</figcaption>
</figure>

{{% callout "info" %}}
**各元件的角色一句話總結**

- **Login node** — 大門，人在這裡準備工作
- **Head node** — 大腦，決定誰先跑、跑在哪
- **Compute node** — 手腳，實際執行
- **平行檔案系統** — 共享的桌面，大家讀寫同一份資料
- **InfiniBand** — 節點之間的專用高速通道
- **LDAP** — 統一的身分證
- **叢集管理工具** — 讓上面這些能被大量佈署與監控
{{% /callout %}}

## 一個實際的例子

陽明交大的 HPC 平台大致就是這個形狀：**5 台 NVIDIA DGX 計算節點**（H100 與 H200 兩種），節點之間以 **InfiniBand** 互連；**WEKA** 平行檔案系統則掛在**乙太網路**這一側，兩張網路各司其職。叢集由 **Slurm** 排程、**NVIDIA BCM** 管理，帳號走 **LDAP**。partition 依 GPU 型號切分，另有 MIG 分區供小型工作使用。

我在校計中參與這個平台的維運，並負責在其上建置推論服務的 PaaS 平台——相關整理放在
[NYCU HPC PaaS Platform](/projects/nycu-hpc-paas/)。
