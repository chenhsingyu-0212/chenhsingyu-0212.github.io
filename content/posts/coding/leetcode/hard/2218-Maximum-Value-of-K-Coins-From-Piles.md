+++
title = "2218. Maximum Value of K Coins From Piles"
date = 2023-04-15 12:01:24
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Dynamic Programming", "Prefix Sum"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/)

There are `n` **piles** of coins on a table. Each pile consists of a **positive number** of coins of assorted denominations.

In one move, you can choose any coin on **top** of any pile, remove it, and add it to your wallet.

Given a list `piles`, where `piles[i]` is a list of integers denoting the composition of the `ith` pile from **top to bottom**, and a positive integer `k`, return *the maximum total value of coins you can have in your wallet if you choose exactly `k` coins optimally*.

### Example 1:
![](https://i.imgur.com/VAvp6Hr.png)

> **Input:** piles = [[1,100,3],[7,8,9]], k = 2
> **Output:** 101
> **Explanation:**
> The above diagram shows the different ways we can choose k coins.
> The maximum total we can obtain is 101.

### Example 2:

> **Input:** piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7
> **Output:** 706
> **Explanation:**
> The maximum total can be obtained if we choose all coins from the last pile.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;
import java.util.List;

class Solution {
    public int maxValueOfCoins(List<List<Integer>> piles, int k) {
        int[][] dp = new int[piles.size() + 1][k + 1];
        Arrays.fill(dp[0], 0);
        
        for (int i = 1; i <= piles.size(); i++) {
            dp[i][0] = 0;
        }
        
        for (int i = 1; i <= piles.size(); i++) {
            for (int j = 1; j <= k; j++) {
                int curr = 0;
                for (int x = 0; x < Math.min(piles.get(i - 1).size(), j); x++) {
                    curr += piles.get(i - 1).get(x);
                    dp[i][j] = Math.max(dp[i][j], curr + dp[i - 1][j - x - 1]);
                }
                
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
            }
        }
        
        return dp[piles.size()][k];
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

{{% callout "success" "單字" %}}
[**denoting**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/denoting)
表示
>  to represent something
{{% /callout %}}

{{% callout "info" "片語 & 搭配詞" %}}
**assorted denominations**
個種面額
{{% /callout %}}