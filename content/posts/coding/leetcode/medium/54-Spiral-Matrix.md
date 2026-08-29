+++
title = "54. Spiral Matrix"
date = 2023-05-09 12:53:03
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Matrix", "Simulation"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/spiral-matrix/)

Given an `m x n` `matrix`, return *all elements of the `matrix` in spiral order.*

### Example 1:
![](https://hackmd.io/_uploads/rJiuimwNh.png)
> **Input**: matrix = [[1,2,3],[4,5,6],[7,8,9]]
**Output**: [1,2,3,6,9,8,7,4,5]

### Example 2:
![](https://hackmd.io/_uploads/rJgtsmDVn.png)
> **Input**: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
**Output**: [1,2,3,4,8,12,11,10,9,5,6,7]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        List<Integer> ans = new ArrayList<>();
        if (rows == 0) {
            return ans;
        }
        
        int left = 0, right = cols - 1, top = 0, bottom = rows - 1;
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++) {
                ans.add(matrix[top][i]);
            }
            top++;
            
            for (int i = top; i <= bottom; i++) {
                ans.add(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    ans.add(matrix[bottom][i]);
                }
                bottom--;
            }
            
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    ans.add(matrix[i][left]);
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