+++
title = "NYCU HPC PaaS Platform"
date = 2026-08-29
weight = 5
featured = false
badge = "System"
summary = "A PaaS inference platform being built on NYCU's HPC cluster — 5 NVIDIA DGX nodes (H100 / H200) scheduled with Slurm, over InfiniBand and a WEKA parallel filesystem. Work in progress at the university's IT Service Center."
tags = ["HPC", "Slurm", "NVIDIA DGX", "PaaS", "Inference"]
+++

> Work in progress. The cluster described below already existed when I joined — my part
> is the **PaaS inference platform** being built on top of it, plus operations work on
> the platform itself.

## The platform

NYCU's high-performance computing service runs GPU workloads for researchers across the
university. The cluster is built around **NVIDIA DGX** nodes and managed as a single
Slurm-scheduled resource pool:

- **5 DGX compute nodes** — two with **H100** GPUs, three with **H200**
- **InfiniBand** interconnect *between compute nodes*, so multi-node jobs are not
  bottlenecked by the general-purpose network
- **WEKA** parallel filesystem for shared storage, reached over the Ethernet fabric —
  the two networks carry different traffic
- **Slurm** for scheduling, with partitions separating the H100 and H200 pools, plus a
  MIG partition for jobs that only need a fraction of a GPU
- **NVIDIA Base Command Manager (BCM)** for cluster provisioning and management, with a
  REST API that lets other systems query and drive the cluster
- **LDAP** for identity, so accounts are consistent across the login and compute nodes

<figure>
<div class="figbox">
<svg viewBox="0 0 900 590" role="img" aria-label="NYCU HPC 平台架構：研究者經 Login Node 或 PaaS 推論平台進入；Headnode 上的 slurmctld、BCM、LDAP 組成控制層；五台 DGX 計算節點分別以 InfiniBand 互連、以 Ethernet 存取 WEKA 平行檔案系統">
  <defs>
    <marker id="ah-hpc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--mut)"/>
    </marker>
  </defs>

  <rect class="svg-box" x="370" y="14" width="160" height="52" rx="8"/>
  <text class="svg-t" x="450" y="40" text-anchor="middle">研究者</text>
  <text class="svg-s" x="450" y="58" text-anchor="middle">全校使用者</text>

  <path class="svg-line" d="M 400 66 L 400 84 L 190 84 L 190 104" marker-end="url(#ah-hpc)"/>
  <path class="svg-line" d="M 500 66 L 500 84 L 700 84 L 700 104" marker-end="url(#ah-hpc)"/>
  <text class="svg-l" x="212" y="78">HTTPS</text>
  <text class="svg-l" x="660" y="78">SSH</text>

  <rect class="svg-box-a" x="80" y="104" width="220" height="76" rx="8"/>
  <text class="svg-t" x="190" y="134" text-anchor="middle">PaaS 推論平台</text>
  <text class="svg-s" x="190" y="156" text-anchor="middle">建置中 · 模型即服務</text>

  <rect class="svg-box" x="590" y="104" width="220" height="76" rx="8"/>
  <text class="svg-t" x="700" y="134" text-anchor="middle">Login Node</text>
  <text class="svg-s" x="700" y="156" text-anchor="middle">準備與提交工作</text>

  <path class="svg-line" d="M 190 180 L 190 206 L 450 206 L 450 232" marker-end="url(#ah-hpc)"/>
  <path class="svg-line" d="M 700 180 L 700 206 L 450 206"/>

  <rect class="svg-line-d" x="40" y="232" width="820" height="104" rx="10" fill="none"/>
  <text class="svg-l" x="56" y="252">Headnode[1-2] · 控制層</text>
  <rect class="svg-box" x="62" y="262" width="240" height="60" rx="8"/>
  <text class="svg-t" x="182" y="288" text-anchor="middle">slurmctld</text>
  <text class="svg-s" x="182" y="308" text-anchor="middle">排程與資源配置</text>
  <rect class="svg-box" x="330" y="262" width="240" height="60" rx="8"/>
  <text class="svg-t" x="450" y="288" text-anchor="middle">BCM</text>
  <text class="svg-s" x="450" y="308" text-anchor="middle">叢集管理 · REST API</text>
  <rect class="svg-box" x="598" y="262" width="240" height="60" rx="8"/>
  <text class="svg-t" x="718" y="288" text-anchor="middle">LDAP</text>
  <text class="svg-s" x="718" y="308" text-anchor="middle">統一身分與帳號</text>

  <path class="svg-line" d="M 450 336 L 450 372" marker-end="url(#ah-hpc)"/>
  <text class="svg-l" x="462" y="360">派送工作</text>

  <g>
    <rect class="svg-box" x="40" y="372" width="148" height="72" rx="8"/>
    <text class="svg-t" x="114" y="402" text-anchor="middle" font-size="13">slurmd</text>
    <text class="svg-s" x="114" y="424" text-anchor="middle">DGX-1 · H100</text>
    <rect class="svg-box" x="208" y="372" width="148" height="72" rx="8"/>
    <text class="svg-t" x="282" y="402" text-anchor="middle" font-size="13">slurmd</text>
    <text class="svg-s" x="282" y="424" text-anchor="middle">DGX-2 · H100</text>
    <rect class="svg-box" x="376" y="372" width="148" height="72" rx="8"/>
    <text class="svg-t" x="450" y="402" text-anchor="middle" font-size="13">slurmd</text>
    <text class="svg-s" x="450" y="424" text-anchor="middle">DGX-3 · H200</text>
    <rect class="svg-box" x="544" y="372" width="148" height="72" rx="8"/>
    <text class="svg-t" x="618" y="402" text-anchor="middle" font-size="13">slurmd</text>
    <text class="svg-s" x="618" y="424" text-anchor="middle">DGX-4 · H200</text>
    <rect class="svg-box" x="712" y="372" width="148" height="72" rx="8"/>
    <text class="svg-t" x="786" y="402" text-anchor="middle" font-size="13">slurmd</text>
    <text class="svg-s" x="786" y="424" text-anchor="middle">DGX-5 · H200</text>
  </g>

  <path class="svg-line" d="M 114 444 V 470 M 282 444 V 470 M 450 444 V 470 M 618 444 V 470 M 786 444 V 470"/>
  <path class="svg-line" d="M 114 470 H 786"/>
  <path class="svg-line" d="M 240 470 V 506" marker-end="url(#ah-hpc)"/>
  <path class="svg-line" d="M 640 470 V 506" marker-end="url(#ah-hpc)"/>

  <rect class="svg-box" x="90" y="506" width="300" height="62" rx="8"/>
  <text class="svg-t" x="240" y="532" text-anchor="middle">InfiniBand</text>
  <text class="svg-s" x="240" y="552" text-anchor="middle">節點間運算通訊 · QM9700</text>

  <rect class="svg-box" x="510" y="506" width="300" height="62" rx="8"/>
  <text class="svg-t" x="660" y="532" text-anchor="middle">WEKA</text>
  <text class="svg-s" x="660" y="552" text-anchor="middle">平行檔案系統 · 走 Ethernet</text>
</svg>
</div>
<figcaption>研究者從 Login Node 提交批次工作，或（建置中）透過 PaaS 平台把模型部署成服務；兩條路徑的資源最終都由同一組 Slurm 排程配置到 DGX 節點上。計算節點同時接上兩張網路：多節點運算走 InfiniBand，存取 WEKA 儲存則走 Ethernet。</figcaption>
</figure>


Users submit work from a login node; the scheduler places it on whichever compute node
has the resources free. The architecture behind this — and why HPC clusters are shaped
this way — is written up separately in
[HPC 叢集架構](/posts/hpc-叢集架構/).

## What I am building

A **PaaS inference platform** on top of the cluster.

The gap it fills: Slurm is built for **batch** work — you submit a job, it queues, it
runs to completion, it releases the resources. That model fits training runs well, but
it fits *inference services* badly. Someone who wants to expose a model as an endpoint
does not want to write a batch script and wait in a queue; they want a service that stays
up and answers requests.

The goal is to let researchers deploy and serve models as a platform service, while the
underlying GPUs remain part of the same shared, accounted-for resource pool — rather than
having inference workloads quietly squat on nodes outside the scheduler's view.

## Operations

Alongside the platform work, the day-to-day side of running a shared service:

- Responding to user problems — quota, connectivity, and billing questions
- Maintaining the account-application system that provisions cluster access
- Keeping the platform documentation current

## Related

- [HPC 叢集架構](/posts/hpc-叢集架構/) — how the pieces fit together, and why
- [Job Scheduling & Resource Management System](/posts/job-scheduling-resource-management-system/) — Slurm and PBS in depth
