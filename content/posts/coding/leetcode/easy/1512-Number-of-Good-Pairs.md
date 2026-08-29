+++
title = "1512. Number of Good Pairs"
date = 2023-10-03 11:46:46
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table", "Math", "Counting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/number-of-good-pairs/description/?envType=daily-question&envId=2023-10-03)

Given an array of integers `nums`, return *the number of **good pairs***.

A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i` < `j`.

### Example 1
> **Input**: nums = [1,2,3,1,1,3]
**Output**: 4
**Explanation**: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

### Example 2
> **Input**: nums = [1,1,1,1]
**Output**: 6
**Explanation**: Each pair in the array are good.

### Example 3
> **Input**: nums = [1,2,3]
**Output**: 0

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int numIdenticalPairs(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int ans = 0;
        for(int key : map.keySet()){
            for(int i = map.get(key) - 1; i > 0; i--){
                ans += i;
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