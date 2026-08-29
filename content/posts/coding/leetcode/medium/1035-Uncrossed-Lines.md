+++
title = "1035. Uncrossed Lines"
date = 2023-05-11 09:31:10
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/uncrossed-lines/)

You are given two integer arrays `nums1` and `nums2`. We write the integers of `nums1` and `nums2` (in the order they are given) on two separate horizontal lines.

We may draw connecting lines: a straight line connecting two numbers `nums1[i]` and `nums2[j]` such that:

- `nums1[i] == nums2[j]`, and
- the line we draw does not intersect any other connecting (non-horizontal) line.

Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).

Return *the maximum number of connecting lines we can draw in this way*.

### Example 1:
![](https://hackmd.io/_uploads/rkIjNpKN3.png =400x)

> **Input:** nums1 = [1,4,2], nums2 = [1,2,4]
> **Output:** 2
> **Explanation:** We can draw 2 uncrossed lines as in the diagram.
> We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.


### Example 2:

> **Input:** nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
> **Output:** 3

### Example 3:
> **Input:** nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
> **Output:** 2

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int maxUncrossedLines(int[] nums1, int[] nums2) {
        int n = nums1.length, m = nums2.length;
        int[][] dp = new int[n + 1][m + 1];

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                dp[i][j] = (nums1[i - 1] == nums2[j - 1] ? 1 + dp[i - 1][j - 1] : Math.max(dp[i][j - 1], dp[i - 1][j]));
            }
        }

        return dp[n][m];
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