+++
title = "1975. Maximum Matrix Sum"
date = 2026-01-05 20:29:58
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Greedy", "Matrix"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/maximum-matrix-sum/description/?envType=daily-question&envId=2026-01-05)

You are given an `n x n` integer `matrix`. You can do the following operation **any** number of times:

- Choose any two **adjacent** elements of `matrix` and multiply each of them by `-1`.

Two elements are considered **adjacent** if and only if they share a **border**.

Your goal is to **maximize** the summation of the matrix's elements. Return *the **maximum** sum of the matrix's elements using the operation mentioned above*.

### Example 1

![](https://assets.leetcode.com/uploads/2021/07/16/pc79-q2ex1.png)

> **Input:** matrix = [[1,-1],[-1,1]]
> **Output:** 4
> **Explanation:** We can follow the following steps to reach sum equals 4:
> - Multiply the 2 elements in the first row by -1.
> - Multiply the 2 elements in the first column by -1.

### Example 2

![](https://assets.leetcode.com/uploads/2021/07/16/pc79-q2ex2.png)

> **Input:** matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
> **Output:** 16
> **Explanation:** We can follow the following step to reach sum equals 16:
> - Multiply the 2 last elements in the second row by -1.

## 解題思路

## Complexity
- Time complexity: $O(n^2)$

- Space complexity: $O(1)$

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java Bitwise
class Solution {
    public long maxMatrixSum(int[][] matrix) {
        long result = 0;
        long isOdd = 0;
        int min = Integer.MAX_VALUE;

        for(int matrixRow[] : matrix) {
            for(int num : matrixRow) {
                int abs = Math.abs(num);
                result += abs;
                min = Math.min(min, abs);
                isOdd ^= (num >>> 31);
            }
        }

        return result - ((min << 1) & -isOdd);
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