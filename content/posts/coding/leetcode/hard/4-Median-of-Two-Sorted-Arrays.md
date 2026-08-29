+++
title = "4. Median of Two Sorted Arrays"
date = 2023-09-21 12:11:55
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Binary Search", "Divide and Conquer"]
+++

:star::star::star::star:

## [題目敘述](https://leetcode.com/problems/median-of-two-sorted-arrays/description/?envType=daily-question&envId=2023-09-21)

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

### Example 1
> **Input**: nums1 = [1,3], nums2 = [2]
**Output**: 2.00000
**Explanation**: merged array = [1,2,3] and median is 2.

### Example 2
> **Input**: nums1 = [1,2], nums2 = [3,4]
**Output**: 2.50000
**Explanation**: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] nums = new int[nums1.length + nums2.length];
        int index = 0;

        for (int num : nums1) {
            nums[index++] = num;
        }

        for (int num : nums2) {
            nums[index++] = num;
        }

        Arrays.sort(nums);
        double ans = 0;
        int len = nums.length;

        if (len % 2 == 0) {
            ans = (nums[len / 2 - 1] + nums[len / 2]) / 2.0;
        } else {
            ans = nums[len / 2];
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