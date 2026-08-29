+++
title = "2966. Divide Array Into Arrays With Max Difference"
date = 2024-02-01 19:36:47
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Greedy", "Sorting"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/?envType=daily-question&envId=2024-02-01)

You are given an integer array `nums` of size `n` and a positive integer `k`.

Divide the array into one or more arrays of size `3` satisfying the following conditions:

- **Each** element of `nums` should be in **exactly** one array.
- The difference between **any** two elements in one array is less than or equal to `k`.

Return *a **2D** array containing all the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return **any** of them.*

### Example 1
> **Input:** nums = [1,3,4,8,7,9,3,5,1], k = 2
**Output:** [[1,1,3],[3,4,5],[7,8,9]]
**Explanation:** We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9].
The difference between any two elements in each array is less than or equal to 2.
Note that the order of elements is not important.

### Example 2
> **Input:** nums = [1,3,3,2,7,3], k = 3
**Output:** []
**Explanation:** It is not possible to divide the array satisfying all the conditions.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public int[][] divideArray(int[] nums, int k) {
        int size = nums.length;
        if(size % 3 != 0){
            return new int[0][0];
        }

        Arrays.sort(nums);

        int[][] ans = new int[(size / 3)][3];

        for(int i = 0, j = 0; j < (size / 3); i += 3, j++){
            if(i + 2 < size && nums[i + 2] - nums[i] <= k){
                ans[j][0] = nums[i];
                ans[j][1] = nums[i + 1];
                ans[j][2] = nums[i + 2];
            }else{
                return new int[0][0];
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