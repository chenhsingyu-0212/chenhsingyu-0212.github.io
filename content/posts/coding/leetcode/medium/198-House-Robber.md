+++
title = "198. House Robber"
date = 2024-01-21 13:31:57
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/house-robber/description/?envType=daily-question&envId=2024-01-21)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return *the maximum amount of money you can rob tonight **without alerting the police***.

### Example 1
> **Input:** nums = [1,2,3,1]
**Output:** 4
**Explanation:** Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

### Example 2
> **Input:** nums = [2,7,9,3,1]
**Output:** 12
**Explanation:** Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int rob(int[] nums) {
        int max = 0;

        for (int i = 2; i < nums.length; i++) {
            if (i - 3 < 0) {
                max = nums[i - 2];
            } else {
                max = Math.max(nums[i - 2], nums[i - 3]);
            }
            nums[i] = nums[i] + max;
        }

        max = 0;

        for (int i = 0; i < nums.length; i++) {
            if (max < nums[i]) {
                max = nums[i];
            }
        }

        return max;
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <vector>
#include <math.h>
using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        int res = 0;

        for (int i = 2; i < nums.size(); i++) {
            if (i - 3 < 0) {
                res = nums[i - 2];
            } else {
                res = max(nums[i - 2], nums[i - 3]);
            }
            nums[i] = nums[i] + res;
        }

        res = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (res < nums[i]) {
                res = nums[i];
            }
        }

        return res;
    }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}