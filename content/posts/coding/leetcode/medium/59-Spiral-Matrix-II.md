+++
title = "59. Spiral Matrix II"
date = 2023-05-10 09:32:58
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Matrix", "Simulation"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/spiral-matrix-ii/)

Given a positive integer `n`, generate an `n x n` `matrix` filled with elements from `1` to `n^2` in spiral order.

### Example 1:
![](https://hackmd.io/_uploads/SyE0X_OVn.png)

> **Input:** n = 3
**Output:** [[1,2,3],[8,9,4],[7,6,5]]

### Example 2:

> **Input:** n = 1
**Output:** [[1]]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int[][] generateMatrix(int n) {
        int[][] ans = new int[n][n];
        int count = 1;

        int left = 0, right = n - 1, top = 0, bottom = n - 1;
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++) {
                ans[top][i] = count++;
            }
            top++;
            
            for (int i = top; i <= bottom; i++) {
                ans[i][right] = count++;
            }
            right--;
            
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    ans[bottom][i] = count++;
                }
                bottom--;
            }
            
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    ans[i][left] = count++;
                }
                left++;
            }
        }
        
        return ans;
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