+++
title = "542. 01 Matrix"
date = 2023-08-17 21:27:38
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming", "Breadth-First Search", "Matrix"]
+++

:star::star::star::star:

## [題目敘述](https://leetcode.com/problems/01-matrix/)

Given an `m x n` binary matrix `mat`, return *the distance of the nearest `0` for each cell*.

The distance between two adjacent cells is `1`.

### Example 1
![](https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg)

> **Input**: mat = [[0,0,0],[0,1,0],[0,0,0]]
**Output**: [[0,0,0],[0,1,0],[0,0,0]]

### Example 2
![](https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg)

> **Input**: mat = [[0,0,0],[0,1,0],[1,1,1]]
**Output**: [[0,0,0],[0,1,0],[1,2,1]]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public int[][] updateMatrix(int[][] mat) {
        Queue<int[]> q = new LinkedList<>();
        int rows = mat.length;
        int cols = mat[0].length;
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (mat[i][j] == 0) {
                    q.offer(new int[]{i, j});
                } else {
                    mat[i][j] = -1;
                }
            }
        }
        
        int[] dirX = {1, -1, 0, 0};
        int[] dirY = {0, 0, 1, -1};
        
        int length = 0;
        while (!q.isEmpty()) {
            int size = q.size();
            length++;
            while (size-- > 0) {
                int[] front = q.poll();
                int r = front[0];
                int c = front[1];
                for (int i = 0; i < 4; i++) {
                    int newRow = r + dirX[i];
                    int newCol = c + dirY[i];
                    if (newRow < 0 || newCol < 0 || newRow >= rows || newCol >= cols || mat[newRow][newCol] >= 0) {
                        continue;
                    }
                    mat[newRow][newCol] = length;
                    q.offer(new int[]{newRow, newCol});
                }
            }
        }
        
        return mat;
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