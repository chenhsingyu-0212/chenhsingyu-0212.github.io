+++
title = "1027. Longest Arithmetic Subsequence"
date = 2023-06-23 16:25:06
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Binary Search", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/longest-arithmetic-subsequence/)

Given an array `nums` of integers, return *the length of the longest arithmetic subsequence in `nums`*.

**Note** that:

- A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
- A sequence `seq` is arithmetic if `seq[i + 1] - seq[i]` are all the same value (for `0 <= i < seq.length - 1`).

### Example 1
> **Input**: nums = [3,6,9,12]
**Output**: 4
**Explanation**:  The whole array is an arithmetic sequence with steps of length = 3.

### Example 2
> **Input**: nums = [9,4,7,2,10]
**Output**: 3
**Explanation**:  The longest arithmetic subsequence is [4,7,10].

### Example 3
> **Input**: nums = [20,1,15,3,10,5,8]
**Output**: 4
**Explanation**:  The longest arithmetic subsequence is [20,15,10,5].

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int longestArithSeqLength(int[] nums) {
        Map<Integer, Integer>[] dp = new HashMap[nums.length];
        int longest = 2;
        
        for(int i = 0; i < nums.length; i++){
            dp[i] = new HashMap<>();
            for(int j = 0; j < i; j++){
                int diff = nums[i] - nums[j];
                dp[j].put(diff, dp[i].getOrDefault(diff, 1) + 1);
                longest = Math.max(longest, dp[j].get(diff));
            }
        }

        return longest;
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

{{% callout "success" "單字" %}}
[**arithmetic**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/arithmetic)
算數 n.
> the part of mathematics that involves the adding and multiplying, etc. of numbers

[**subsequence**](https://zh.wikipedia.org/zh-tw/%E5%AD%90%E5%BA%8F%E5%88%97)
子序列 n.
> something that follows something else
{{% /callout %}}