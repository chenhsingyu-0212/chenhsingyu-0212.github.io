+++
title = "3005. Count Elements With Maximum Frequency"
date = 2024-03-08 15:50:12
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table", "Counting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/count-elements-with-maximum-frequency/description/?envType=daily-question&envId=2024-03-08)

You are given an array `nums` consisting of **positive** integers.

Return *the **total frequencies** of elements in `nums` such that those elements all have the **maximum** frequency.*

The **frequency** of an element is the number of occurrences of that element in the array.

### Example 1
> **Input:** nums = [1,2,2,3,1,4]
**Output:** 4
**Explanation:** The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.

### Example 2
> **Input:** nums = [1,2,3,4,5]
**Output:** 5
**Explanation:** All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int maxFrequencyElements(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int max = 0;

        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
            max = Math.max(max, map.get(num));
        }

        int res = 0;
        for(int key : map.keySet()){
            if(map.get(key) == max){
                res += max;
            }
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