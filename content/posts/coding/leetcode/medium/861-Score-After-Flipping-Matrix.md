+++
title = "861. Score After Flipping Matrix"
date = 2024-05-13 22:33:04
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Greedy", "Bit Manipulation", "Matrix"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/score-after-flipping-matrix/description/?envType=daily-question&envId=2024-05-13)

You are given an `m x n` binary matrix `grid`.

A **move** consists of choosing any row or column and toggling each value in that row or column (i.e., changing all `0`'s to `1`'s, and all `1`'s to `0`'s).

Every row of the matrix is interpreted as a binary number, and the **score** of the matrix is the sum of these numbers.

Return *the highest possible **score** after making any number of **moves** (including zero moves).*

### Example 1

![](https://assets.leetcode.com/uploads/2021/07/23/lc-toogle1.jpg)

> **Input:** grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
**Output:** 39
**Explanation:** 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

### Example 2

> **Input:** grid = [[0]]
**Output:** 1

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public int matrixScore(int[][] grid) {
        int row = grid.length, col = grid[0].length, ans = 0;

        for(int i = 0; i < row; i++){
            if(grid[i][0] == 0) Flipping(grid, col, i, true);
        }

        for(int i = 0; i < col; i++){
            int zero = 0;
            for(int j = 0; j < row; j++) if(grid[j][i] == 0) zero++;
            if(row / 2 < zero) Flipping(grid, row, i, false);
        }
        
        for(int i = 0; i < row; i++){
            int tmp = 0;
            for(int j = 0; j < col; j++) tmp = tmp * 2 + grid[i][j]; 
            ans += tmp;
        }

        return ans;
    }

    private void Flipping(int[][] grid, int len, int i, boolean isRow){
        for(int j = 0; j < len; j++){
            if(isRow) grid[i][j] = grid[i][j] ^ 1;
            else grid[j][i] = grid[j][i] ^ 1;
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