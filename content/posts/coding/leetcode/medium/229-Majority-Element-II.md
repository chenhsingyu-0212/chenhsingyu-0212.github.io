+++
title = "229. Majority Element II"
date = 2023-10-05 16:12:24
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Sorting", "Counting"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/majority-element-ii/description/?envType=daily-question&envId=2023-10-05)

Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

### Example 1
> **Input**: nums = [3,2,3]
**Output**: [3]

### Example 2
> **Input**: nums = [1]
**Output**: [1]

### Example 3
> **Input**: nums = [1,2]
**Output**: [1,2]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> ans = new ArrayList<>();
        Map<Integer, Integer> map = new HashMap<>();
        int up = nums.length / 3;

        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        for(int key : map.keySet()){
            if(map.get(key) > up){
                ans.add(key);
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