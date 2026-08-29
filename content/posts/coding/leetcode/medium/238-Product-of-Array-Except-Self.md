+++
title = "238. Product of Array Except Self"
date = 2024-03-15 16:03:19
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Prefix Sum"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/product-of-array-except-self/description/?envType=daily-question&envId=2024-03-15)

Given an integer array `nums`, return *an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.*

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

### Example 1
> **Input:** nums = [1,2,3,4]
**Output:** [24,12,8,6]

### Example 2
> **Input:** nums = [-1,1,0,-3,3]
**Output:** [0,0,9,0,0]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] prefixSum = new int[n];
        int[] suffixSum = new int[n];
        int[] res = new int[n];

        prefixSum[0] = 1;
        suffixSum[n - 1] = 1;
        for(int i = 0; i < n - 1; i++){
            prefixSum[i + 1] = prefixSum[i] * nums[i];
            suffixSum[n - i - 2] = suffixSum[n - i - 1] * nums[n - i - 1];
        }

        for(int i = 0; i < n; i++){
            res[i] = prefixSum[i] * suffixSum[i];
        }

        return res;
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