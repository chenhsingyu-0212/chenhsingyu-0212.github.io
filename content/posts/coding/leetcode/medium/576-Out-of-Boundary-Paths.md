+++
title = "576. Out of Boundary Paths"
date = 2024-01-26 11:42:18
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Dynamic Programming"]
+++

:star::star::star::star:

## [題目敘述](https://leetcode.com/problems/out-of-boundary-paths/description/?envType=daily-question&envId=2024-01-26)

There is an `m x n` grid with a ball. The ball is initially at the position `[startRow, startColumn]`. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply **at most** `maxMove` moves to the ball.

Given the five integers `m`, `n`, `maxMove`, `startRow`, `startColumn`, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it **modulo** `10^9 + 7`.

### Example 1

![](https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_1.png)

> **Input:** m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
**Output:** 6

### Example 2

![](https://assets.leetcode.com/uploads/2021/04/28/out_of_boundary_paths_2.png)

> **Input:** m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
**Output:** 12

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int findPaths(int m, int n, int N, int x, int y) {
        final int MOD = (int) (1e9 + 7);

        int[][] dp = new int[m][n];
        dp[x][y] = 1;
        int count = 0;

        for (int moves = 1; moves <= N; moves++) {
            int[][] tmp = new int[m][n];

            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (i == m - 1)
                        count = (count + dp[i][j]) % MOD;
                    if (j == n - 1)
                        count = (count + dp[i][j]) % MOD;
                    if (i == 0)
                        count = (count + dp[i][j]) % MOD;
                    if (j == 0)
                        count = (count + dp[i][j]) % MOD;
                    tmp[i][j] = (((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) % MOD +
                            ((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) % MOD) % MOD;
                }
            }
            dp = tmp;
        }

        return count;
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp

```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}