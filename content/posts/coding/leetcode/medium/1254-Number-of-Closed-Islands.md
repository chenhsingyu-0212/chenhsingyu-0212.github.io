+++
title = "1254. Number of Closed Islands"
date = 2023-04-06 13:47:04
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/number-of-closed-islands/)

Given a 2D `grid` consists of `0s` (land) and `1s` (water).  An island is a maximal 4-directionally connected group of `0s` and a *closed island* is an island **totally** (all left, top, right, bottom) surrounded by `1s`.

Return *the number of closed islands*.

### Example 1:
![](https://i.imgur.com/buypsiR.png)

> **Input:** grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
> **Output:** 2
> **Explanation:** 
> Islands in gray are closed because they are completely surrounded by water (group of 1s).


### Example 2:
![](https://i.imgur.com/nyVk2iD.png)

> **Input:** grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
> **Output:** 1

### Example 3:
> **Input:** grid = [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,0,1,0,1],
> [1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]]
> **Output:** 2

## 解題思路
利用 `dfs(Depth-First Search)` 去檢查如果該陣列為 `0`，他前後左右是否會碰到 `1`，如果碰到邊界表示封閉，如果碰到 `0` 再繼續找。

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int closedIsland(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        boolean[][] visit = new boolean[m][n];

        int ans = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0 && !visit[i][j]) {
                    if(dfs(i, j, m, n, grid, visit)) ans++;
                }
            }
        }

        return ans;
    }

    public boolean dfs(int x, int y, int m, int n, int[][] grid, boolean[][] visit) {
        if (x < 0 || x >= m || y < 0 || y >= n) {
            return false;
        }
        if (grid[x][y] == 1 || visit[x][y]) {
            return true;
        }

        visit[x][y] = true;
        boolean isClosed = true;
        int[] dirx = {0, 1, 0, -1};
        int[] diry = {-1, 0, 1, 0};

        for (int i = 0; i < 4; i++) {
            int r = x + dirx[i];
            int c = y + diry[i];
            isClosed &= dfs(r, c, m, n, grid, visit);
        }

        return isClosed;
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