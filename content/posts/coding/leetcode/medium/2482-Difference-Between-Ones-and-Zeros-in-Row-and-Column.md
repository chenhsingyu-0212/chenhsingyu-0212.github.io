+++
title = "2482. Difference Between Ones and Zeros in Row and Column"
date = 2023-12-14 14:41:28
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Matrix", "Simulation"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/?envType=daily-question&envId=2023-12-14)

You are given a **0-indexed** `m x n` binary matrix `grid`.

A **0-indexed** `m x n` difference matrix `diff` is created with the following procedure:

- Let the number of ones in the `ith` row be `onesRowi`.
- Let the number of ones in the `jth` column be `onesColj`.
- Let the number of zeros in the `ith` row be `zerosRowi`.
- Let the number of zeros in the `jth` column be `zerosColj`.
- `diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj`

Return *the difference matrix `diff`.*

### Example 1
![](https://assets.leetcode.com/uploads/2022/11/06/image-20221106171729-5.png)
> **Input:** grid = [[0,1,1],[1,0,1],[0,0,1]]
> **Output:** [[0,0,4],[0,0,4],[-2,-2,2]]
> **Explanation:**
> - diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0 
> - diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0 
> - diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4 
> - diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0 
> - diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0 
> - diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4 
> - diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2
> - diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2
> - diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2

### Example 2
![](https://assets.leetcode.com/uploads/2022/11/06/image-20221106171747-6.png)
> **Input:** grid = [[1,1,1],[1,1,1]]
> **Output:** [[5,5,5],[5,5,5]]
> **Explanation:**
> - diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5
> - diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5
> - diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5
> - diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5
> - diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5
> - diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int[][] onesMinusZeros(int[][] grid) {
        int lenRow = grid.length;
        int lenCol = grid[0].length;
        int[] onesRow = new int[lenRow];
        int[] onesCol = new int[lenCol];
        int[] zeroRow = new int[lenRow];
        int[] zeroCol = new int[lenCol];

        for(int i = 0; i < lenRow; i++){
            for(int j = 0; j < lenCol; j++){
                int num = grid[i][j];
                if(num == 0){
                    zeroRow[i]++;
                    zeroCol[j]++;
                }else{
                    onesRow[i]++;
                    onesCol[j]++;
                }
            }
        }

        int[][] ans = new int[lenRow][lenCol];
        for(int i = 0; i < lenRow; i++){
            for(int j = 0; j < lenCol; j++){
                ans[i][j] = onesRow[i] + onesCol[j] - zeroRow[i] - zeroCol[j];
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