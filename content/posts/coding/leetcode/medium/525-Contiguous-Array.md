+++
title = "525. Contiguous Array"
date = 2024-03-16 11:58:00
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Prefix Sum"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/contiguous-array/?envType=daily-question&envId=2024-03-16)

Given a binary array `nums`, return *the maximum length of a contiguous subarray with an equal number of `0` and `1`.*

### Example 1
> **Input:** nums = [0,1]
**Output:** 2
**Explanation:** [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

### Example 2
> **Input:** nums = [0,1,0]
**Output:** 2
**Explanation:** [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int findMaxLength(int[] nums) {
        int len = nums.length;
        int[] prefixSum = new int[len + 1];

        for (int i = 1; i <= len; i++) {
            prefixSum[i] = prefixSum[i - 1] + (nums[i - 1] == 0 ? -1 : 1);
        }

        int max = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i <= len; i++) {
            if (map.containsKey(prefixSum[i])) {
                max = Math.max(max, i - map.get(prefixSum[i]));
            } else {
                map.put(prefixSum[i], i);
            }
        }

        return max;
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