+++
title = "169. Majority Element"
date = 2024-02-12 11:20:40
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table", "Divide and Conquer", "Sorting", "Counting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/majority-element/description/?envType=daily-question&envId=2024-02-12)

Given an array `nums` of size `n`, return *the majority element.*

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

### Example 1
> **Input:** nums = [3,2,3]
**Output:** 3

### Example 2
> **Input:** nums = [2,2,1,1,1,2,2]
**Output:** 2

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int majorityElement(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int max = 0;
        int ans = 0;

        for(int i = 0; i < nums.length; i++){
            int tmp = map.getOrDefault(nums[i], 0) + 1;
            map.put(nums[i], tmp);
            if(max < tmp){
                max = tmp;
                ans = nums[i];
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