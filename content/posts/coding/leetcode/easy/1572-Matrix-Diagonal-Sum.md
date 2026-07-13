+++
title = "1572. Matrix Diagonal Sum"
date = 2023-05-08 09:28:16
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Matrix"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/matrix-diagonal-sum/)

Given a square matrix `mat`, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

### Example 1:
![](https://hackmd.io/_uploads/rJ0RgRHVh.png)

> **Input:** mat = 
> [[1,2,3],
> [4,5,6],
> [7,8,9]]
> **Output:** 25
> **Explanation:** Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
> Notice that element mat[1][1] = 5 is counted only once.

### Example 2:

> **Input:** mat = 
> [[1,1,1,1],
> [1,1,1,1],
> [1,1,1,1],
> [1,1,1,1]]
> **Output:** 8

### Example 3:
> **Input:** mat = [[5]]
> **Output:** 5

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int diagonalSum(int[][] mat) {
        int m = mat.length - 1; 
        int ans = 0;

        for(int i = 0; i <= m; i++){
            ans += mat[i][i];
            ans += mat[i][m - i];
        }

        if(m % 2 == 0){
            ans -= mat[m / 2][m / 2];
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