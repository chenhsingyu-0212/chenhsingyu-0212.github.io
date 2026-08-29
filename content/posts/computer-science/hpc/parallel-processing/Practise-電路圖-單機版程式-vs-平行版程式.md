+++
title = "Practise 電路圖 - 單機版程式 vs. 平行版程式"
date = 2023-12-13 23:51:59
draft = false
categories = ["Computer Science", "HPC", "Parallel Processing"]
+++

# 題目
![Imgur](https://i.imgur.com/zsUeyjk.png)

# 單機版程式
```cpp
#include <bits/stdc++.h>

using namespace std;

int circuit(int *in)
{
    int res = (in[0] | in[1]) & (~in[1] | ~in[3]) & (in[2] | in[3]) & (~in[3] | ~in[4]) &
              (in[4] | ~in[5]) & (in[5] | in[6]) & (in[5] | ~in[6]) & (in[7] | ~in[8]) &
              (in[8] | in[9]) & (in[8] | ~in[9]) & (~in[9] | ~in[10]) & (in[10] | in[11]) &
              (in[11] | in[9]) & (in[12] | in[13]) & (in[14] | in[15]) & (~in[15] | in[6]) &
              (in[13] | ~in[14]) & (~in[7] | ~in[13]);
    return res;
}

int main()
{
    int count = 0;

    long start = clock();
    for (int i = 0; i < 65536; i++)
    {
        int in[16] = {0};
        for (int j = 0; j < 16; j++)
        {
            in[j] = (i >> (15 - j)) & 1;
        }

        if (circuit(in) == 1)
        {
            cout << "Without Parallel Ans: ";
            for(int j = 0; j < 16; j++){
                cout << in[j];
            }
            cout << endl;
            count += 1;
        }
    }
    long end = clock();

    cout << count << endl;
    cout << "\033[36mTotal: " << (end - start) / 1000.0 << " (sec)\033[0m\n" << endl;
}
```

# 平行版程式
```cpp
#include <bits/stdc++.h>
#include <mpi.h>

using namespace std;

int circuit(int *in)
{
    int res = (in[0] | in[1]) & (~in[1] | ~in[3]) & (in[2] | in[3]) & (~in[3] | ~in[4]) &
              (in[4] | ~in[5]) & (in[5] | in[6]) & (in[5] | ~in[6]) & (in[7] | ~in[8]) &
              (in[8] | in[9]) & (in[8] | ~in[9]) & (~in[9] | ~in[10]) & (in[10] | in[11]) &
              (in[11] | in[9]) & (in[12] | in[13]) & (in[14] | in[15]) & (~in[15] | in[6]) &
              (in[13] | ~in[14]) & (~in[7] | ~in[13]);
    return res;
}

int main()
{
    MPI_Init(NULL, NULL);
    int world_size, world_rank;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    int count = 0;

    int size = 65536 / world_size;
    int from = world_rank * size;
    int to = (world_rank + 1) * size;

    double start = MPI_Wtime();
    for (int i = from; i < to; i++)
    {
        int in[16] = {0};
        for (int j = 0; j < 16; j++)
        {
            in[j] = (i >> (15 - j)) & 1;
        }

        if (circuit(in) == 1)
        {
            cout << "From rank " << world_rank << " out of " << world_size << " processors: ";
            for(int j = 0; j < 16; j++){
                cout << in[j];
            }
            cout << endl;
            count += 1;
        }
    }

    if (world_rank == 0)
    {
        int tmp;
        for (int i = 1; i < world_size; i++)
        {
            MPI_Recv(&tmp, 1, MPI_INT, i, 0, MPI_COMM_WORLD,
                     MPI_STATUS_IGNORE);
            count += tmp;
        }
    }
    else
    {
        MPI_Send(&count, 1, MPI_INT, 0, 0, MPI_COMM_WORLD);
    }

    double end = MPI_Wtime();
    MPI_Finalize();
    if (world_rank == 0)
    {
        cout << count << endl;
        cout << "\033[36mTotal: " << (end - start) << " (sec)\033[0m" << endl;
    }
}
```