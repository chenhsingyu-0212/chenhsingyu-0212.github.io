+++
title = "629. K Inverse Pairs Array"
date = 2024-01-27 10:37:51
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Dynamic Programming"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/k-inverse-pairs-array/description/?envType=daily-question&envId=2024-01-27)

For an integer array `nums`, an **inverse pair** is a pair of integers `[i, j]` where `0 <= i < j < nums.length` and `nums[i] > nums[j]`.

Given two integers n and k, return the number of different arrays consist of numbers from `1` to `n` such that there are exactly `k` **inverse pairs**. Since the answer can be huge, return it **modulo** `10^9 + 7`.

### Example 1
> **Input:** n = 3, k = 0
**Output:** 1
**Explanation:** Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.

### Example 2
> **Input:** n = 3, k = 1
**Output:** 2
**Explanation:** The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    private static final int MOD = 1000000007;
    
    public static int kInversePairs(int n, int k) {
        int[][] dp = new int[n + 1][k + 1];

        for (int i = 0; i <= n; i++) {
            dp[i][0] = 1;
        }

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= k; j++) {
                dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % MOD;
                if (j >= i) {
                    dp[i][j] = (dp[i][j] - dp[i - 1][j - i] + MOD) % MOD;
                }
            }
        }

        return dp[n][k];
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