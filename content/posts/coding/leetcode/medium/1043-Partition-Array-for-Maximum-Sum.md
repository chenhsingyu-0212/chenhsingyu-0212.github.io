+++
title = "1043. Partition Array for Maximum Sum"
date = 2024-02-03 14:22:14
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/partition-array-for-maximum-sum/description/?envType=daily-question&envId=2024-02-03)

Given an integer array `arr`, partition the array into (contiguous) subarrays of length **at most** `k`. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return *the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a **32-bit** integer.*

### Example 1
> **Input:** arr = [1,15,7,9,2,5,10], k = 3
**Output:** 84
**Explanation:** arr becomes [15,15,15,9,10,10,10]

### Example 2
> **Input:** arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
**Output:** 83

### Example 3
> **Input:** arr = [1], k = 1
**Output:** 1

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int maxSumAfterPartitioning(int[] arr, int k) {
        int dp[] = new int[arr.length + 1];
        
        for (int index = arr.length - 1; index >= 0; index--) {
            int max = Integer.MIN_VALUE;
            int ans = Integer.MIN_VALUE;
            int len = 0;
            for (int i = index; i < index + k && i < arr.length; i++) {
                len++;
                max = Math.max(max, arr[i]);
                ans = Math.max(ans, len * max + dp[i + 1]);
            }
            dp[index] = ans;
        }
        
        return dp[0];
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