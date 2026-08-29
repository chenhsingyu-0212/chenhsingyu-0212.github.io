+++
title = "349. Intersection of Two Arrays"
date = 2024-03-10 11:34:13
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table", "Two Pointers", "Binary Search", "Sorting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/intersection-of-two-arrays/description/?envType=daily-question&envId=2024-03-10)

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection.* Each element in the result must be **unique** and you may return the result in **any order**.

### Example 1
> **Input:** nums1 = [1,2,2,1], nums2 = [2,2]
**Output:** [2]

### Example 2
> **Input:** nums1 = [4,9,5], nums2 = [9,4,9,8,4]
**Output:** [9,4]
**Explanation:** [4,9] is also accepted.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        ArrayList<Integer> result = new ArrayList<>();
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        
        for(int i = 0, j = 0; i < nums1.length && j < nums2.length;) {
            if(nums1[i] == nums2[j]) {
                if(result.size() == 0 || result.get(result.size() - 1) != nums1[i]) {
                    result.add(nums1[i]);
                }
                i++;
                j++;
            } else if(nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }

        return result.stream().mapToInt(i -> i).toArray();
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