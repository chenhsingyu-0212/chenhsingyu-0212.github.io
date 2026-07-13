+++
title = "1493. Longest Subarray of 1's After Deleting One Element"
date = 2023-07-05 12:09:53
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming", "Sliding Window"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/boats-to-save-people/)

Given a binary array `nums`, you should delete one element from it.

Return *the size of the longest non-empty subarray containing only `1`'s in the resulting array*. Return `0` if there is no such subarray.

### Example 1
> **Input**: nums = [1,1,0,1]
**Output**: 3
**Explanation**: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

### Example 2
> **Input**: nums = [0,1,1,1,0,1,1,0,1]
**Output**: 5
**Explanation**: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

### Example 3
> **Input**: nums = [1,1,1]
**Output**: 2
**Explanation**: You must delete one element.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int longestSubarray(int[] nums) {
        int n = nums.length;

        int left = 0;
        int zeros = 0;
        int ans = 0;

        for (int right = 0; right < n; right++) {
            if (nums[right] == 0) {
                zeros++;
            }
            while (zeros > 1) {
                if (nums[left] == 0) {
                    zeros--;
                }
                left++;
            }
            ans = Math.max(ans, right - left + 1 - zeros);
        }
        return (ans == n) ? ans - 1 : ans;
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