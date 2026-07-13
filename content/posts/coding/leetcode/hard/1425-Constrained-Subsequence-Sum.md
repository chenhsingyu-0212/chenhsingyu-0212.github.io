+++
title = "1425. Constrained Subsequence Sum"
date = 2023-10-21 16:30:01
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Dynamic Programming", "Queue", "Sliding Window", "Heap (Priority Queue)", "Monotonic Queue"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/constrained-subsequence-sum/?envType=daily-question&envId=2023-10-21)

Given an integer array `nums` and an integer `k`, return the maximum sum of a **non-empty** subsequence of that array such that for every two **consecutive** integers in the subsequence, `nums[i]` and `nums[j]`, where `i < j`, the condition `j - i <= k` is satisfied.

A *subsequence* of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.

### Example 1
> **Input**: nums = [10,2,-10,5,20], k = 2
**Output**: 37
**Explanation**: The subsequence is [10, 2, 5, 20].

### Example 2
> **Input**: nums = [-1,-2,-3], k = 1
**Output**: -1
**Explanation**: The subsequence must be non-empty, so we choose the largest number.

### Example 3
> **Input**: nums = [10,-2,-10,-5,20], k = 2
**Output**: 23
**Explanation**: The subsequence is [10, -2, -5, 20].

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;
import java.util.Deque;
import java.util.LinkedList;

public class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        Deque<Integer> dq = new LinkedList<>();
        for (int i = 0; i < nums.length; i++) {
            nums[i] += !dq.isEmpty() ? nums[dq.peekFirst()] : 0;
            
            while (!dq.isEmpty() && (i - dq.peekFirst() >= k || nums[i] >= nums[dq.peekLast()])) {
                if (nums[i] >= nums[dq.peekLast()]) dq.pollLast();
                else dq.pollFirst();
            }
            
            if (nums[i] > 0) {
                dq.offerLast(i);
            }
        }
        return Arrays.stream(nums).max().getAsInt();
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