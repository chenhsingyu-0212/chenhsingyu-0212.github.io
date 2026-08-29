+++
title = "137. Single Number II"
date = 2023-07-04 10:26:24
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Bit Manipulation"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/single-number-ii/)

Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. *Find the single element and return it.*

You must implement a solution with a linear runtime complexity and use only constant extra space.

### Example 1
> **Input**: nums = [2,2,3,2]
**Output**: 3

### Example 2
> **Input**: nums = [0,1,0,1,0,1,99]
**Output**: 99

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java with Bit Manipulation" %}}
```java
class Solution {
    public int singleNumber(int[] nums) {
        int once = 0, twice = 0;
        
        for(int num : nums){
            once = (num ^ once) & (~twice);
            twice = (num ^ twice) & (~once);
        }

        return once;
    }
}
```
{{% /tab %}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> mp = new HashMap<>();

        for(int i = 0; i < nums.length; i++){
            mp.put(nums[i], mp.getOrDefault(nums[i], 0) + 1);

            if(mp.get(nums[i]) == 3){
                mp.remove(nums[i]);
            }
        }

        int ans = 0;
        for(int m : mp.keySet()){
            ans = m;
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