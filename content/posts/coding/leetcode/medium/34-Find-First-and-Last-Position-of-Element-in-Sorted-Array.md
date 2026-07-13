+++
title = "34. Find First and Last Position of Element in Sorted Array"
date = 2023-10-09 12:54:28
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Binary Search"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=daily-question&envId=2023-10-09)

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given ``target`` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

### Example 1
> **Input**: nums = [5,7,7,8,8,10], target = 8
**Output**: [3,4]

### Example 2
> **Input**: nums = [5,7,7,8,8,10], target = 6
**Output**: [-1,-1]

### Example 3
> **Input**: nums = [], target = 0
**Output**: [-1,-1]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] ans = {-1, -1};

        for(int i = 0; i < nums.length; i++){
            if(target == nums[i] && ans[0] == -1){
                ans[0] = i;
            }
            if(target == nums[i]){
                ans[1] = Math.max(ans[1], i);
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