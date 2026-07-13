+++
title = "1020. Number of Enclaves"
date = 2023-04-07 09:25:06
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/number-of-enclaves/)

You are given an `m x n` binary matrix `grid`, where `0` represents a sea cell and `1` represents a land cell.

A **move** consists of walking from one land cell to another adjacent (**4-directionally**) land cell or walking off the boundary of the `grid`.

Return *the number of land cells in `grid` for which we cannot walk off the boundary of the grid in any number of **moves***.

### Example 1:
![](https://i.imgur.com/4Gu6b5S.png)

> **Input:** grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
> **Output:** 3
> **Explanation:** There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

### Example 2:
![](https://i.imgur.com/3tAclvn.png)

> **Input:** grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
> **Output:** 0
> **Explanation:** All 1s are either on the boundary or can reach the boundary.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int numEnclaves(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        int ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && grid[i][j] == 1) {
                    dfs(i, j, m, n, grid);
                }
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    ans++;
                }
            }
        }

        return ans;
    }

    public void dfs(int x, int y, int m, int n, int[][] grid) {
        grid[x][y] = 0;
        int[] dirx = { 0, 1, 0, -1 };
        int[] diry = { -1, 0, 1, 0 };

        for (int i = 0; i < 4; i++) {
            int r = x + dirx[i];
            int c = y + diry[i];
            if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == 1) {
                dfs(r, c, m, n, grid);
            }
        }
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