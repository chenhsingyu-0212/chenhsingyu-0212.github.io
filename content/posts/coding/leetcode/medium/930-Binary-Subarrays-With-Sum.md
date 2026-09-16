+++
title = "930. Binary Subarrays With Sum"
date = 2024-03-14 13:46:08
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Sliding Window", "Prefix Sum"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/binary-subarrays-with-sum/description/?envType=daily-question&envId=2024-03-14)

Given a binary array `nums` and an integer `goal`, return *the number of non-empty **subarrays** with a sum `goal`.*

A **subarray** is a contiguous part of the array.

### Example 1
> **Input:** nums = [1,0,1,0,1], goal = 2
**Output:** 4
**Explanation:** The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

### Example 2
> **Input:** nums = [0,0,0,0,0], goal = 0
**Output:** 15

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        int n = nums.length;
        int[] prefixSum = new int[n + 1];

        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        Map<Integer, Integer> count = new HashMap<>();
        int ans = 0;
        for (int i = 0; i < n + 1; i++) {
            ans += count.getOrDefault(prefixSum[i] - goal, 0);
            count.put(prefixSum[i], count.getOrDefault(prefixSum[i], 0) + 1);
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