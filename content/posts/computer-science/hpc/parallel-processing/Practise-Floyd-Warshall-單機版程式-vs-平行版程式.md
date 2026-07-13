+++
title = "Practise Floyd-Warshall 單機版程式 vs. 平行版程式"
date = 2023-12-20 13:15:25
draft = false
categories = ["Computer Science", "HPC", "Parallel Processing"]
+++

# 題目
- [Floyd-Warshall演算法 wiki](https://zh.wikipedia.org/zh-tw/Floyd-Warshall%E7%AE%97%E6%B3%95)
撰寫出 Floyd-Warshall 演算法，處理點到點的最短路徑

# 單機版程式
```cpp
#include <bits/stdc++.h>
#define N 1000
using namespace std;

int main() {
  srand(36);

  long start = clock();
  int **D;
  D = (int **)malloc(N * sizeof(int *));
  for (int i = 0; i < N; i++) {
    D[i] = (int *)malloc(N * sizeof(int));
    for (int j = 0; j < N; j++) {
      if (i == j)
        D[i][j] = 0;
      else
        D[i][j] = rand() % 100 + 1;
    }
  }

  for (int k = 0; k < N; k++) {
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        if (D[i][k] + D[k][j] < D[i][j]) {
          //   P[i][j] = k + 1;
          D[i][j] = D[i][k] + D[k][j];
        }
      }
    }
    // cout << "k = " << (k + 1) << endl;
  }
  long end = clock();

  for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
      cout << setw(3) << D[i][j];
    }
    cout << endl;
  }

  cout << "\033[36mTotal: " << (end - start) / 1000.0 << " (sec)\033[0m"
       << endl;

  free(D);
  return 0;
}
```

# 平行版程式
```cpp
#include <bits/stdc++.h>
#include <mpi.h>
#define N 1000
using namespace std;

int main() {
  MPI_Init(NULL, NULL);
  int world_size, world_rank;
  MPI_Comm_size(MPI_COMM_WORLD, &world_size);
  MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

  srand(36);

  double start = MPI_Wtime();
  int **D;
  D = (int **)malloc(N * sizeof(int *));
  for (int i = 0; i < N; i++) {
    D[i] = (int *)malloc(N * sizeof(int));
  }

  if (world_rank == 0) {
    for (int k = 0; k < N; k++) {
      for (int j = 0; j < N; j++) {
        if (k == j)
          D[k][j] = 0;
        else
          D[k][j] = rand() % 100 + 1;
      }
    }

    for (int k = 0; k < N; k += world_size) {
      for (int i = 1; i < world_size; i++) {
        if (k + i < N) {
          MPI_Send(D[k + i], N, MPI_INT, i, k, MPI_COMM_WORLD);
        }
      }
    }
  } else {
    for (int k = 0; k < N; k += world_size) {
      if (k + world_rank < N) {
        MPI_Recv(D[k + world_rank], N, MPI_INT, 0, k, MPI_COMM_WORLD,
                 MPI_STATUS_IGNORE);
      }
    }
  }

  for (int k = 0; k < N; k++) {
    MPI_Bcast(D[k], N, MPI_INT, k % world_size, MPI_COMM_WORLD);
    for (int i = 0; i < N; i += world_size) {
      for (int j = 0; j < N; j++) {
        if (i + world_rank < N) {
          D[i + world_rank][j] =
              min(D[i + world_rank][j], D[i + world_rank][k] + D[k][j]);
        }
      }
    }
  }

  if (world_rank == 0) {
    for (int k = 0; k < N; k += world_size) {
      for (int i = 1; i < world_size; i++) {
        if (k + i < N) {
          MPI_Recv(D[k + i], N, MPI_INT, i, k, MPI_COMM_WORLD,
                   MPI_STATUS_IGNORE);
        }
      }
    }
  } else {
    for (int k = 0; k < N; k += world_size) {
      if (k + world_rank < N) {
        MPI_Send(D[k + world_rank], N, MPI_INT, 0, k, MPI_COMM_WORLD);
      }
    }
  }
  double end = MPI_Wtime();

  if (world_rank == 0) {
    for (int i = 0; i < 5; i++) {
      for (int j = 0; j < 5; j++) {
        cout << setw(3) << D[i][j];
      }
      cout << endl;
    }

    cout << "\033[36mTotal: " << (end - start) << " (sec)\033[0m" << endl;
  }

  free(D);
  MPI_Finalize();
  return 0;
}
```