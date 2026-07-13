+++
title = "879. Profitable Schemes"
date = 2023-04-21 09:21:14
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Dynamic Programming"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/profitable-schemes/)

There is a group of `n` members, and a list of various crimes they could commit. The `ith` crime generates a `profit[i]` and requires `group[i]` members to participate in it. If a member participates in one crime, that member can't participate in another crime.

Let's call a **profitable scheme** any subset of these crimes that generates at least `minProfit` profit, and the total number of members participating in that subset of crimes is at most `n`.

Return the number of schemes that can be chosen. Since the answer may be very large, **return it modulo** `10^9 + 7`.

### Example 1:

> **Input:** n = 5, minProfit = 3, group = [2,2], profit = [2,3]
> **Output:** 2
> **Explanation:** To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1.
> In total, there are 2 schemes.

### Example 2:

> **Input:** n = 10, minProfit = 5, group = [2,3,5], profit = [6,7,8]
> **Output:** 7
> **Explanation:** To make a profit of at least 5, the group could commit any crimes, as long as they commit one.
> There are 7 possible schemes: (0), (1), (2), (0,1), (0,2), (1,2), and (0,1,2).

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int mod = (int) 1e9 + 7;

    public int profitableSchemes(int n, int minProfit, int[] group, int[] profit) {
        int[][] dp = new int[n + 1][minProfit + 1];
        
        dp[0][0] = 1;
        for (int k = 1; k <= group.length; k++) {
            int g = group[k - 1];
            int p = profit[k - 1];
            for (int i = n; i >= g; i--) {
                for (int j = minProfit; j >= 0; j--) {
                    dp[i][j] = (dp[i][j] + dp[i - g][Math.max(0, j - p)]) % mod;
                }
            }
        }

        int sum = 0;
        for (int i = 0; i <= n; i++) {
            sum = (sum + dp[i][minProfit]) % mod;
        }

        return sum;
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