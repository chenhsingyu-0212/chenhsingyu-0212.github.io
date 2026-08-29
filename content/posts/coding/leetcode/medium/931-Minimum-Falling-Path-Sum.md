+++
title = "931. Minimum Falling Path Sum"
date = 2024-01-19 16:35:04
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming", "Matrix"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/minimum-falling-path-sum/?envType=daily-question&envId=2024-01-19)

Given an `n x n` array of integers `matrix`, return *the **minimum sum** of any **falling path** through `matrix`*.

A **falling path** starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position `(row, col)` will be `(row + 1, col - 1)`, `(row + 1, col)`, or `(row + 1, col + 1)`.

### Example 1

![](https://assets.leetcode.com/uploads/2021/11/03/failing1-grid.jpg)

> **Input:** matrix = [[2,1,3],[6,5,4],[7,8,9]]
**Output:** 13
**Explanation:** There are two falling paths with a minimum sum as shown.

### Example 2

![](https://assets.leetcode.com/uploads/2021/11/03/failing2-grid.jpg)

> **Input:** matrix = [[-19,57],[-40,-5]]
**Output:** -59
**Explanation:** The falling path with a minimum sum is shown.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int minFallingPathSum(int[][] matrix) {
        int size = matrix.length;
        int min = Integer.MAX_VALUE;

        for (int i = 1; i < size; i++) {
            for (int j = 0; j < size; j++) {
                min = matrix[i - 1][j];
                if (j > 0) {
                    min = Math.min(matrix[i - 1][j - 1], min);
                }
                if (j < size - 1) {
                    min = Math.min(matrix[i - 1][j + 1], min);
                }
                matrix[i][j] = matrix[i][j] + min;
            }
        }

        min = Integer.MAX_VALUE;

        for (int i = 0; i < size; i++) {
            if (min > matrix[size - 1][i]) {
                min = matrix[size - 1][i];
            }
        }

        return min;
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int size = matrix.size();
        int ans = INT_MAX;

        for (int i = 1; i < size; i++) {
            for (int j = 0; j < size; j++) {
                ans = matrix[i - 1][j];
                if (j > 0) {
                    ans = min(matrix[i - 1][j - 1], ans);
                }
                if (j < size - 1) {
                    ans = min(matrix[i - 1][j + 1], ans);
                }
                matrix[i][j] = matrix[i][j] + ans;
            }
        }

        ans = INT_MAX;

        for (int i = 0; i < size; i++) {
            if (ans > matrix[size - 1][i]) {
                ans = matrix[size - 1][i];
            }
        }

        return ans;
    }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}