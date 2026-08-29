+++
title = "Job Scheduling & Resource Management System"
date = 2025-08-23 17:48:13
draft = false
categories = ["Computer Science", "Infrastructure", "HPC"]
+++

## 什麼是作業調度和資源管理系統?

在 HPC(高效能運算叢集) 或大型伺服器環境裡，有很多人同時會需要使用計算資源(CPU、GPU、記憶體、網路)

資源管理與作業調度系統就是專門負責:
1. 資源管理(Resource Management)
   - 管理哪些節點(nodes)、CPU/GPU、記憶體是**可用的**
   - 把資源分配給不同使用者的工作(jobs)
   - 確保不會**撞車**或是浪費資源
2. 作業調度(Job Scheduling)
   - 決定**誰的工作先跑、誰後跑**
   - 根據策略(FIFO、優先權、fairshare 公平分配、backfill...)安排順序
   - 提供排隊機制，讓大家公平使用叢集

### 系統需要完成的事情

- 工作提交: 使用者把程式丟進系統
- 資源分配: 系統分配 CPU/GPU/記憶體
- 排程決策: 誰先跑、誰排隊
- 監控工作: 可以查詢狀態(排隊中、執行中、完成、失敗)
- 錯誤處理: 如果節點掛掉、系統能重新安排
- 資源利用率最佳化: 盡量避免閒置

### 舉例

{{% callout "warning" %}}
假設一個 HPC 叢集有 10 台伺服器，每台 32 核心 CPU + 4 張 GPU
- A 要跑流體力學模擬，要 64 核心
- B 要跑深度學習模型，要 2 張 GPU
- C 要跑小的測試程式，要 4 核心

系統會:
1. 先檢查有哪些資源是空的
2. 幫他們分配到合適的節點
3. 如果資源不足，工作就會排隊等候
4. 調度策略可能讓小任務先插隊跑 backfill，避免資源浪費
{{% /callout %}}

## 常見的系統

- Slurm: 目前 HPC 主流，擴展性強
- PBS/Torque/OpenPBS: 老牌系統，很多傳統機構還在用
- LSF(IBM Spectrum LSF): 商業系統，大型企業使用
- HTCondor: 常用於學術研究和分散式資源

## Slurm

Slurm (Simple Linux Utility for Resource Management)，最早由 Lawrence Livermore National Laboratory (LLNL) 在 2000 年代初期開發，目前由 SchedMD 維護，是開源且免費的。

現今 TOP500 中相當高比例的超級電腦都採用 Slurm，台灣的台灣杉系列也是。

{{% callout "info" %}}
**Slurm 的定位**

- 同時扮演資源管理與作業調度兩種角色，不需要另外搭配排程器。
- 外掛式 (plugin) 架構，排程策略、帳務、資源限制都可以抽換。
- 對 GPU、容器等較新的資源型態支援快，社群活躍。
{{% /callout %}}

### 優缺點

**優點**
- 擴展性極佳，可管理數萬個節點
- 對 GPU 等資源有原生支援 (`--gres=gpu:N`)
- 指令直觀，錯誤訊息清楚
- 開源免費，社群與文件豐富

**缺點**
- 設定檔 (`slurm.conf`) 選項繁多，初期上手成本高
- 各站台設定差異大，換一個叢集常要重新熟悉 partition 與資源限制
- 帳務功能要另外部署 `slurmdbd` 與資料庫

### Slurm 的主要組件

- Slurm Controller (`slurmctld`)
  - 整個系統的核心，管理佇列與排程決策
  - 接收使用者提交的 job (透過 `sbatch`)
  - 可以另外設一台備援 controller
- Slurm Daemon (`slurmd`)
  - 部署在每一台計算節點上
  - 負責啟動與監控 job，並回報節點狀態給 controller
- Slurm Database Daemon (`slurmdbd`，選用)
  - 搭配 MySQL/MariaDB 記錄帳務資料
  - `sacct` 查詢歷史工作紀錄時會用到
- MUNGE
  - 節點之間的身分驗證服務，Slurm 依賴它確認訊息來源

{{% callout "info" %}}
對照前面 PBS 的角色比喻:

- `slurmctld`: 櫃台兼排班經理 → PBS 的 Server 與 Scheduler 合而為一
- `slurmd`: 廚房師傅 → 對應 PBS 的 Mom
- `slurmdbd`: 帳本 → PBS 沒有直接對應的組件
{{% /callout %}}

```
[User @ Login Node]
       │
       │  sbatch job.sh
       │
       ▼
[slurmctld]───(排隊/排程/資源配置)
       │
       │  (MUNGE 驗證)
       ▼
[slurmd @ Compute Node]
       │
       ├─► 設定 SLURM_* 環境變數
       ├─► 直接在提交目錄下執行 (不需自行 cd)
       │
       ▼
[Job 執行中]
       │
       ├─► stdout/stderr → slurm-12345.out
       │
       ▼
[Job 結束 → 資源釋放 → 紀錄寫入 slurmdbd]
```

### Slurm 的常用指令

| 功能 | 指令 | 範例 |
| -------- | -------- | -------------- |
| 提交工作 | `sbatch` | `sbatch <job.sh>` |
| 查詢工作 | `squeue` | `squeue -u <user01>` |
| 刪除工作 | `scancel` | `scancel <12345>` |
| 修改工作 | `scontrol` | `scontrol update jobid=<12345> timelimit=04:00:00` |
| 查看節點/分區 | `sinfo` | `sinfo -N -l` |
| 互動式取得資源 | `salloc` | `salloc -N1 -t 00:30:00` |
| 執行平行程式 | `srun` | `srun -n 16 ./my_mpi_program` |
| 查詢歷史帳務 | `sacct` | `sacct -j <12345>` |

{{% callout "warning" %}}
Slurm 把 PBS 的 queue 稱為 **partition**，用 `-p` / `--partition` 指定。`sinfo` 看到的就是各 partition 的狀態。
{{% /callout %}}

### Slurm 工作腳本範例

{{% callout "success" %}}
提交一個 MPI 程式的腳本(`job.sh`):
```bash
#!/bin/bash
#SBATCH --job-name=myjob         # Job 名稱
#SBATCH --nodes=2                # 要求 2 台節點
#SBATCH --ntasks-per-node=8      # 每台 8 個 task
#SBATCH --time=02:00:00          # 最長執行時間 2 小時
#SBATCH --partition=batch        # 指定 partition (等同 PBS 的 queue)
#SBATCH --output=jobresult.out
#SBATCH --error=jobresult.err

srun ./my_mpi_program
```
提交方式：
```bash
sbatch job.sh
```
{{% /callout %}}

{{% callout "danger" %}}
Slurm 預設就在**提交腳本時所在的目錄**執行，不像 PBS 需要自己 `cd $PBS_O_WORKDIR`。如果真的需要這個路徑，可以用環境變數 `$SLURM_SUBMIT_DIR`。
{{% /callout %}}

要用 GPU 的話加上 `--gres`:

```bash
#SBATCH --gres=gpu:2             # 每個節點要 2 張 GPU
```

## PBS

PBS(Portable Batch System)，最早由 NASA 的 Ames 研究中心，在 1990 年代開發。

{{% callout "info" %}}
**PBS 的版本**

- OpenPBS：開源版本，社群維護。
- PBS Pro：由 Altair 公司維護，有商業版與開源版。
- Torque：從 OpenPBS 分支出來，但已經停止維護。
{{% /callout %}}

### 優缺點

**優點**
- 歷史悠久，設計穩定
- 有商業支援（PBS Pro, Altair）
- 適合中小型叢集

**缺點**
- 設計較舊，擴展性不如 Slurm
- <mark>GPU、容器支援較慢</mark>
- 指令較傳統（不像 Slurm 那麼直觀）
- 社群活躍度下降

### PBS 的主要組件

PBS 採 Client-Server-Mom 的架構，分工如下:
- PBS Server (`pbs_server`)
  - 整個系統的核心，管理所有 job 佇列
  - 接收使用者的 job (透過 `qsub`)
- PBS Scheduler (`pbs_sched`)
  - 決定哪些 job 可以執行、何時執行
  - 支援 FIFO、優先權、fairshare 等策略
- PBS Mom (Machine Oriented Mini-server, `pbs_mom`)
  - 部署在計算節點 (compute node) 上
  - 負責真正執行 job，並回報狀態給 server

![PBS Pro 架構](/img/posts/pbspro-architecture.png)

```
[User @ Login Node]
       │
       │  qsub job.pbs
       │
       ▼
[PBS Server]───(排隊/排程)───►[PBS Scheduler]
       │
       ▼
[PBS Mom @ Compute Node]
       │
       ├─► 設定環境變數
       ├─► 切換到 $PBS_O_WORKDIR (共享 FS)
       ├─► (可選) Stage-in → Local scratch
       │
       ▼
[Job 執行中]
       │
       ├─► 讀取輸入檔 (FS or scratch)
       ├─► 寫出輸出檔 (scratch → FS)
       ├─► stdout/stderr → job.o12345, job.e12345
       │
       ▼
[Job 結束 → 資源釋放]
```

{{% callout "info" %}}
- Server: 工作櫃台 → 負責登記與排隊
- Scheduler: 排班經理 → 決定誰先誰後
- Mom: 廚房師傅 → 實際執行工作
{{% /callout %}}

### PBS 的常用指令

| 功能     | 指令     | 範例           |
| -------- | -------- | -------------- |
| 提交工作 | `qsub`   | `qsub <job.pbs>` |
| 查詢工作 | `qstat`  | `qstat -u <user01>` |
| 刪除工作 | `qdel`   | `qdel <12345>` |
| 修改工作 | `qalter` | `qsub -l nodes=2:ppn=8 <12345>` |

### PBS 工作腳本範例

{{% callout "success" %}}
提交一個 MPI 程式的腳本(`job.pbs`):
```bash
#!/bin/bash
#PBS -N myjob               # Job 名稱
#PBS -l select=2:ncpus=8    # 要求 2 台節點，每台 8 核心
#PBS -l walltime=02:00:00   # 最長執行時間 2 小時
#PBS -q batch               # 指定 queue
#PBS -o jobresult.out
#PBS -e jobresult.err

cd $PBS_O_WORKDIR           # 切到提交工作時的目錄
mpirun -np 16 ./my_mpi_program
```
提交方式：
```bash
qsub job.pbs
```
{{% /callout %}}

### PBS Torque 安裝

- [Torque GitHub](https://github.com/adaptivecomputing/torque)

更新系統套件

```bash
sudo apt update
sudo apt upgrade
```

下載相關必要套件

```bash
sudo apt install build-essential libssl-dev libxml2-dev libboost-all-dev libz-dev liblzma-dev libevent-dev libsqlite3-dev libmysqld-dev mysql-client mysql-server libmunge-dev libmunge2
```

## Slurm vs. PBS

### 指令對照

| 功能 | PBS | Slurm |
| --- | --- | --- |
| 提交工作 | `qsub job.pbs` | `sbatch job.sh` |
| 查詢工作 | `qstat -u <user>` | `squeue -u <user>` |
| 刪除工作 | `qdel <jobid>` | `scancel <jobid>` |
| 修改工作 | `qalter` | `scontrol update` |
| 節點狀態 | `pbsnodes -a` | `sinfo -N -l` |
| 佇列/分區狀態 | `qstat -q` | `sinfo` |
| 互動式取得資源 | `qsub -I` | `salloc` 或 `srun --pty bash` |
| 歷史紀錄 | `tracejob` | `sacct` |

### 腳本指令對照

| 用途 | PBS | Slurm |
| --- | --- | --- |
| Job 名稱 | `#PBS -N myjob` | `#SBATCH --job-name=myjob` |
| 節點與核心數 | `#PBS -l select=2:ncpus=8` | `#SBATCH --nodes=2 --ntasks-per-node=8` |
| 執行時間上限 | `#PBS -l walltime=02:00:00` | `#SBATCH --time=02:00:00` |
| 佇列 / 分區 | `#PBS -q batch` | `#SBATCH --partition=batch` |
| 標準輸出 / 錯誤 | `#PBS -o` / `#PBS -e` | `#SBATCH --output=` / `--error=` |
| GPU | `#PBS -l ngpus=2` | `#SBATCH --gres=gpu:2` |
| 提交目錄 | 需自行 `cd $PBS_O_WORKDIR` | 預設就在提交目錄 |

### 特性比較

| 面向 | PBS | Slurm |
| --- | --- | --- |
| 架構 | Server / Scheduler / Mom 三個組件 | `slurmctld` 同時負責管理與排程 |
| 擴展性 | 適合中小型叢集 | 可管理數萬節點 |
| GPU / 容器支援 | 較慢 | 原生支援，跟進快 |
| 授權 | OpenPBS 開源、PBS Pro 有商業版 | 開源免費 (SchedMD 提供商業支援) |
| 社群 | 活躍度下降 | 活躍，文件豐富 |

{{% callout "primary" %}}
兩者的概念是相通的 — 都是「描述需要多少資源 → 丟進佇列 → 等排程器分配 → 在計算節點執行」。真正要重新熟悉的通常不是指令，而是**各站台自己的 partition 設定與資源上限**。
{{% /callout %}}

## 參考文件

- [Taiwania 1 與 Taiwania 3 排程系統指令對照](https://man.twcc.ai/@TWCC-III-manual/rk-0legNt)
- [Ubuntu 22.04 上作業調度管理軟體 - PBS Torque 的安裝、配置及主要使用](https://blog.csdn.net/weixin_40192882/article/details/136106361)
- [PBS-Torque 叢集部署](https://www.cnblogs.com/liu-shaobo/p/13526084.html)