+++
title = "What is MPI?"
date = 2023-12-13 15:02:33
draft = false
categories = ["Computer Science", "HPC", "Parallel Processing"]
+++

{{% callout "info" %}}
訊息傳遞介面（英語：Message Passing Interface，縮寫 MPI）是一個平行計算的應用程式接口（API），常在超級電腦、電腦叢集等**非共享記憶體**環境程序設計。
{{% /callout %}}

## Process vs. Thread

> 在多功作業系統(Multitasking Operating System)中，可以同時執行數個 Process ，然而一個 CPU 一次只能執行一個 Process (因此才有現在的多核處理器)，而 Process 的運行量總量不會少於 CPU 的總量，又 Process 會佔用記憶體，因此如何排程(Scheduling，恐龍本第五章) 、如何有效管理記憶體(恐龍本第八章)則是 OS 所關注的事。

- Process: 旨已經執行並且 load 到記憶體中的 Program。
  - 每一個 Process 是互相獨立的。
  - Process 間不會共享記憶體。
- Thread: 在同一個 Process 中會有很多個 Thread ，每一個 Thread 負責某一項功能。
  - 同一個 Process 底下的 Thread 共享資源，如 記憶體、變數等，不同的 Process 則否。

## MPI vs. MP

- MP: 讓程式可以在單節點上，使用多核心（cores）平行跑。
  - 平行出來的部分叫做 thread
  - 記憶體使用：Shared Memory Processor（SMP）架構
    - CPU 的核心使用同節點上的記憶體
- MPI: 讓程式可以跨計算節點（nodes）平行跑。
  - 平行出來的部分叫做rank
  - 記憶體使用：Distributed memory 架構
    - CPU 的核心使用不同的記憶體，透過網路溝通

## MPI 語法

- `MPI_Init()`: Initialize the MPI enviroment
- `MPI_Comm_size(MPI_COMM_WORLD, &world_size)`: Get the number of processes
- `MPI_Comm_rank(MPI_COMM_WORLD, &process_rank)`: Get the rank of process
- `MPI_Finalize()`: Finalize the MPI enviroment
- `MPI_Wtime()`: process time， return type is double
- `MPI_Reduce(&send, &recv, count, dataType, MPI_Op, root, MPI_COMM_WORLD)`: 把 send 的值經過 MPI_Op 的運算處理過後丟到 recv 中，變成 recv 的新值
- `MPI_Bcast(&bcast, count, dataType, root, MPI_COMM_WORLD)`: 把 root 的 bcast 廣播給大家
- `MPI_Recv(&value, count, dataType, source, tag, MPI_COMM_WORLD, MPI_STATUS_IGNORE)`: 將 source 的直接收
- `MPI_Send(&value, count, dataType, dest, tag, MPI_COMM_WORLD)`: 將值發送給 dest
- `MPI_ALLreduce`: 包括 MPI_Reduce 和 MPI_Bcast
- `MPI_Scatter`: 與 MPI_Bcast 很像，但區別於他是用於接收一個陣列，幫他分隔成不同區塊，然後同區塊傳給不同人
- `MPI_Gather`: 與 MPI_Scatter 剛好相反，將不同的東西收到一起，集中到其中一個
- `MPI_Barrier()`: 保證在通訊域內，所有的進程都已經執行完了呼叫之前的所有操作
  1. 可以用於要確保其他 processor 前面計算正確，到後面使用
  2. 在計算時間時可以確保計算大家都跑完的時間

### MPI_Op

- `MPI_MIN`: 找最小值
- `MPI_SUM`: 計算總值

## MPI Hello World Code

```c hello.c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    // Initialize the MPI environment
    MPI_Init(&argc, &argv);

    // Get the number of processes
    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);

    // Get the rank of the process
    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    // Get the name of the processor
    char processor_name[MPI_MAX_PROCESSOR_NAME];
    int name_len;
    MPI_Get_processor_name(processor_name, &name_len);

    // Print off a hello world message
    printf("Hello world from processor %s, rank %d out of %d processors\n",
           processor_name, world_rank, world_size);

    // Finalize the MPI environment.
    MPI_Finalize();
    return 0;
}
```