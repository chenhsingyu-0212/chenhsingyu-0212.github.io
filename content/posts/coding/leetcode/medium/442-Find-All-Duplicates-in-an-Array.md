+++
title = "442. Find All Duplicates in an Array"
date = 2024-03-25 13:39:05
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/find-all-duplicates-in-an-array/?envType=daily-question&envId=2024-03-25)

Given an integer array `nums` of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice**.*

You must write an algorithm that runs in `O(n)` time and uses only constant extra space.

### Example 1
> **Input:** nums = [4,3,2,7,8,2,3,1]
**Output:** [2,3]

### Example 2
> **Input:** nums = [1,1,2]
**Output:** [1]

### Example 3
> **Input:** nums = [1]
**Output:** []

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            int index = Math.abs(nums[i]) - 1;
            if (nums[index] < 0) {
                result.add(index + 1);
            }
            nums[index] = -nums[index];
        }
        
        return result;
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