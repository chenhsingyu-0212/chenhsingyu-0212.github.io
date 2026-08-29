+++
title = "MiniZero: Training new computer game"
date = 2025-09-06 20:27:48
draft = true
categories = ["Computer Science", "Artificial Intelligence", "Game AI"]
tags = ["Game AI"]
+++

[MiniZero GitHub](https://github.com/rlglab/minizero)

如果想要使用 MiniZero 框架訓練其原先就有寫好環境的遊戲，或是想要嘗試用他來訓練其他的遊戲，那可以參考這篇文章輔助理解流程。

## Fork MiniZero GitHub

首先，可以先透過 git fork 的方式，將 MiniZero Framework 到自己的 github 下來進行版本控及更改。

## 必要套件安裝

- Docker or Podman
- GPU Driver
- Cuda
- NVIDIA Container Toolkit

## MiniZero Framework

```bash
.
├── build
├── CMakeLists.txt
├── docker
│   └── Dockerfile
├── docs
│   ├── Console.md
│   ├── Development.md
│   ├── Evaluation.md
│   ├── imgs
│   └── Training.md
├── minizero
│   ├── actor
│   ├── CMakeLists.txt
│   ├── config
│   ├── console
│   ├── environment
│   ├── learner
│   ├── minizero.cpp
│   ├── network
│   ├── utils
│   └── zero
├── README.md
├── scripts
│   ├── build.sh
│   ├── start-container.sh
│   ├── zero-server.sh
│   └── zero-worker.sh
└── tools
    ├── analysis.py
    ├── dependency_graph_generator
    ├── eval.py
    ├── fight-eval.sh
    ├── handle_obs.sh
    ├── plot_board.py
    ├── quick-run.sh
    ├── self-eval.sh
    ├── to-sgf.py
    └── to-video.py
```

## Create Training Container

```bash
cd minizero                        # 首先進入 minizero 檔案
bash scripts/start-container.sh    # 執行 start-container 腳本
```

如果腳本過程中都沒有出現任何錯誤，執行腳本結束應該會直接進入啟動好的 container

```bash
root@HsingYu:/workspace#
```

## Build Game Env

這邊以 Go 為範例

```bash
bash ./scripts/build.sh go
```

完成之後可以在 `/build` 下看到 go 的資料夾，並可以看到 `minizero_go` 這個檔案，我們將用此來執行。

我們可以透過下方指令來確認其環境是否有參數可以設定:

```bash
./build/go/minizero_go -h
```

接著可以利用 `-gen` 參數來產生 configuration file，其內容會是原先預設好的，之後可以再從檔案裡面修改。

```bash
./build/go/minizero_go -gen go.cfg
```

通常 `# Environment` 以上都不需要更動，至於 Environment 可以根據所需訓練的遊戲環境進行調整，如下為 Go 環境產生出來的 Environment configuration file 內容。

```bash
# Program
...

# Environment
env_board_size=9 # the size of board
env_go_komi=7.5 # the komi in Go
env_go_ko_rule=positional # the ko rules in Go: positional (only consider stones), situational (consider stones and the turn)
```

## Create Server

{{% callout "warning" %}}
在 MiniZero Framework 中有 Quick-Run 的 shell script 檔案，他可以幫助啟動包括:

- Server
- Self-play worker
- Optimization worker

雖然這樣可以很方便的開始使用環境進行訓練，但這樣有一個缺點就是很難 debug，因此我們接下來會遵循創建 server，並創建 worker 的步驟。

![](https://github.com/chenhsingyu-0212/minizero/blob/main/docs/imgs/minizero-architecture.svg)
{{% /callout %}}

接著我們在獲得遊戲環境 config 後就可以創建 zero server

```bash
bash scripts/zero-server.sh go go.cfg 100 # port default 8888, 100 define for training iteration
# -conf_str: allows setting or overriding configuration parameters directly
# e.g., bash scripts/zero-server.sh go go.cfg 100 -conf_str zero_server_port=11111
```

部分參數設定說明:
- Iteration = 100 —— 一輪包含「自我對弈 → 蒐集資料 → 最佳化網路」，總共進行 100 輪。
- Simulation per move（actor_num_simulation）= 50 —— 每一步的 MCTS 模擬次數；決定搜尋深度/廣度與計算量。
- Network（nn_num_blocks × nn_num_hidden_channels）= 1 × 256 —— 1 個殘差區塊、每層 256 個 hidden channels。
- Training batch（learner_batch_size）= 1024 —— 優化器訓練批量（反向傳播用）。
- Self-play inference batch（sp -b）= 64 —— 自我對弈推論批量（worker 端預設值）。
- Games per iteration (zero_num_games_per_iteration) = 2000 —— 一輪要進行幾次自我對弈。

```bash
(Version: 04a589)
[2025/09/07_16:55:04.381] [Version] 04a589
[2025/09/07_16:55:04.381] Server initialize over.
[2025/09/07_16:55:04.381] [Iteration] =====1=====
[2025/09/07_16:55:04.381] [SelfPlay] Start 0
```

## Create Worker

那將 server 啟動後，我們就會需要至少一個 self-play worker 以及一個 optimization worker。

**創建 self-play worker**
```bash
bash scripts/zero-worker.sh go localhost 9999 sp -g 0
# -g: setup gpu number
# can create more self-play worker. e.g., 
# bash scripts/zero-worker.sh go localhost 9999 sp -g 0
# bash scripts/zero-worker.sh go localhost 9999 sp -g 1
```

{{% callout "success" %}}
```bash
[2025/09/07_18:57:37.503] [Worker Connection] HsingYu-MS-7D18_0 sp
[2025/09/07_18:57:37.507] [Log] HsingYu-MS-7D18_0 sp: CUDA_VISIBLE_DEVICES=0 build/go/minizero_go -mode sp -conf_file go_9x9_az_1bx256_n50-04a589/go_9x9_az_1bx256_n50-04a589.cfg -conf_str "nn_file_name=go_9x9_az_1bx256_n50-04a589/model/weight_iter_0.pt:program_auto_seed=false:program_seed=581869302:zero_training_directory=go_9x9_az_1bx256_n50-04a589:zero_num_threads=4:zero_num_parallel_games=64"
```
{{% /callout %}}

**創建 optimization worker**
```bash
bash scripts/zero-worker.sh go localhost 9999 op
```

{{% callout "success" %}}
```bash
[2025/09/07_18:59:49.660] [Worker Connection] HsingYu-MS-7D18_0 op
[2025/09/07_18:59:49.661] [Log] HsingYu-MS-7D18_0 op: CUDA_VISIBLE_DEVICES=0 PYTHONPATH=. python minizero/learner/train.py go go_9x9_az_1bx256_n50-04a589 go_9x9_az_1bx256_n50-04a589/go_9x9_az_1bx256_n50-04a589.cfg
```
{{% /callout %}}

開始 self play 時可以在 self-play worker 中看到遊戲的過程，在 server 也可以看到目前的 self play 進度。