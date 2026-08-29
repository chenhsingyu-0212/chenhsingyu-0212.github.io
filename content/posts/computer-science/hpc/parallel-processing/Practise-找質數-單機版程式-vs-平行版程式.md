+++
title = "Practise 找質數 - 單機版程式 vs. 平行版程式"
date = 2023-12-13 23:57:58
draft = false
categories = ["Computer Science", "HPC", "Parallel Processing"]
+++

# 題目
利用 The Sieve of Eratosthenes 演算法找出質數

# 單機版程式
```cpp
#include <bits/stdc++.h>
#define ALLNUM 100000000
using namespace std;

long long arr[ALLNUM + 1] = {0};

int main() {
  int k = 2;

  long start = clock();
  for (int i = 2; i <= ALLNUM;) {
    k = i;

    if (k * k > ALLNUM) {
      break;
    }

    int mark = k + k;
    while (mark <= ALLNUM) {
      arr[mark] = 1;
      mark += k;
    }

    i++;
    while (arr[i] != 0) {
      i++;
    }
  }
  long end = clock();

  int ans = 0;
  for (int i = 2; i <= ALLNUM; i++) {
    if (arr[i] == 0) {
      ans++;
    }
  }
  printf("%d\n", ans);
  cout << "\033[36mTotal: " << (end - start) / 1000.0 << " (sec)\033[0m"
       << endl;

  return 0;
}
```

# 平行版程式
```cpp
#include <bits/stdc++.h>
#include <mpi.h>
#define ALLNUM 100000000
using namespace std;

long long arr[ALLNUM + 1] = {0};
long long ans = 0;

int main() {
  MPI_Init(NULL, NULL);
  int world_size, world_rank;
  MPI_Comm_size(MPI_COMM_WORLD, &world_size);
  MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

  int size = ALLNUM / world_size;
  int from = world_rank * size;
  int to =
      (world_rank != world_size - 1 ? (world_rank + 1) * size - 1 : ALLNUM);

  int k = 2;
  arr[0] = 1;
  arr[1] = 1;

  double start = MPI_Wtime();
  for (int i = from; i <= to;) {
    MPI_Bcast(&k, 1, MPI_INT, 0, MPI_COMM_WORLD);

    if (k * k > ALLNUM) {
      break;
    }

    if (k < to) {
      int mark = from;

      while (mark % k != 0 || mark == 0) {
        mark += 1;
      }

      if (mark == k) {
        mark += k;
      }

      while (mark <= to) {
        arr[mark] = 1;
        mark += k;
      }  // marking

      i++;
      while (arr[i] != 0) {
        i++;
      }  // find K
    }

    int newK = i;
    MPI_Reduce(&newK, &k, 1, MPI_INT, MPI_MIN, 0, MPI_COMM_WORLD);
  }

  int count = 0;
  for (int i = from; i <= to; i++) {
    if (arr[i] == 0 && i != 0 && i != 1) {
      count++;
    }
  }

  MPI_Reduce(&count, &ans, 1, MPI_INT, MPI_SUM, 0, MPI_COMM_WORLD);

  double end = MPI_Wtime();
  MPI_Finalize();

  if (world_rank == 0) {
    cout << ans << endl;
    cout << "\033[36mTotal: " << (end - start) << " (sec)\033[0m" << endl;
  }

  return 0;
}
```