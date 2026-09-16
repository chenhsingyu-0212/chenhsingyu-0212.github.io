+++
title = "1658. Minimum Operations to Reduce X to Zero"
date = 2023-09-20 09:23:58
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Binary Search", "Sliding Window", "Prefix Sum"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/?envType=daily-question&envId=2023-09-20)

You are given an integer array `nums` and an integer `x`. In one operation, you can either remove the leftmost or the rightmost element from the array `nums` and subtract its value from `x`. Note that this **modifies** the array for future operations.

Return *the **minimum number** of operations to reduce `x` to **exactly** `0` if it is possible, otherwise, return `-1`*.

### Example 1
> **Input**: nums = [1,1,4,2,3], x = 5
**Output**: 2
**Explanation**: The optimal solution is to remove the last two elements to reduce x to zero.

### Example 2
> **Input**: nums = [5,6,7,8,9], x = 4
**Output**: -1

### Example 3
> **Input**: nums = [3,2,20,1,1,3], x = 10
**Output**: 5
**Explanation**: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
public class Solution {
    public int minOperations(int[] nums, int x) {
        int total = 0;
        for (int num : nums) {
            total += num;
        }

        int target = total - x;
        int left = 0;
        int n = nums.length;
        int maxWindow = -1;
        int sum = 0;

        for (int right = 0; right < n; right++) {
            sum += nums[right];

            while (sum > target && left <= right) {
                sum -= nums[left];
                left++;
            }

            if (sum == target) {
                maxWindow = Math.max(maxWindow, right - left + 1);
            }
        }

        return maxWindow != -1 ? n - maxWindow : -1;
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