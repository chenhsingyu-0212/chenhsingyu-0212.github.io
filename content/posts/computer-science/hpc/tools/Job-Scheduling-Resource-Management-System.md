+++
title = "Job Scheduling & Resource Management System"
date = 2025-08-23 17:48:13
draft = false
categories = ["Computer Science", "HPC", "Tools"]
+++

## 什麼是作業調度和資源管理系統?

在 HPC(高效能運算叢集) 或大型伺服器環境裡，有很多人同時會需要使用計算資源(CPU、GPU、記憶體、網路)

資源管理與作業調度系統就是專門負責:
1. 資源管理(Resource Management)
   - 管理那些節點(nodes)、CPU/GPU、記憶體是**可用的**
   - 把資源分配給不同使用者的工作(jobs)
   - 確保不會**撞車**或是浪費資源
2. 作業調度(Job Scheduling)
   - 決定**誰的工作先跑、誰後跑**
   - 根據策略(FIFO、優先權、fairshare、公平分配、backfill...)安排順序
   - 提供排隊機制，讓大家公平使用叢集

### 系統需要完成的事情

- 工作提交: 使用者把程式丟進系統
- 資源分配: 系統分配 CPU/GPU/記憶體
- 排成決策: 誰先跑、誰排隊
- 監控工作: 可以查詢狀態(排隊中、執行中、完成、失敗)
- 錯誤處理: 如果節點掛掉、系統能重新安排
- 資源利用率最佳化: 盡量避免閒置

### 舉例

{{% callout "warning" %}}
假設一個 HPC 叢集有 10 台伺服器，每台 32 核心 CPU + 4 張 GPU
- A 要跑流體力學模擬，要 64 核心
- B 要跑深度學習模型，要 2 張 GPU
- c 要跑小的測試程式，要 4 核心

系統會:
1. 先檢查有那些資源是空的
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
- ==GPU、容器支援較慢==
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

![](https://hpclib.com/images/pbspro_jg.png)

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
- Server: 工作櫃台 $\rightarrow$ 負責登記與排隊
- Scheduler: 排班經理 $\rightarrow$ 決定誰先誰後
- Mom: 廚房師傅 $\rightarrow$ 實際執行工作
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
```bash!
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
```bash!
qsub job.pbs
```
{{% /callout %}}

### PBS Torque 安裝

- [Torque GitHub](https://github.com/adaptivecomputing/torque)

更新系統套件

```bash!
sudo apt update
sudo apt upgrade
```

下載相關必要套件

```bash!
sudo apt install build-essential libssl-dev libxml2-dev libboost-all-dev libz-dev liblzma-dev libevent-dev libsqlite3-dev libmysqld-dev mysql-client mysql-server libmunge-dev libmunge2
```

## Slurm vs. PBS

## 參考文件

- [Taiwania 1 與 Taiwania 3 排程系統指令對照](https://man.twcc.ai/@TWCC-III-manual/rk-0legNt)
- [Ubuntu 22.04 上作業調度管理軟體 - PBS Torque 的安裝、配置及主要使用](https://blog.csdn.net/weixin_40192882/article/details/136106361)
- [PBS-Torque 叢集部署](https://www.cnblogs.com/liu-shaobo/p/13526084.html)