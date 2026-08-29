+++
title = "746. Min Cost Climbing Stairs"
date = 2023-10-13 12:32:48
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Dynamic Programming"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=daily-question&envId=2023-10-13)

You are given an integer array `cost` where `cost[i]` is the cost of `ith` step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index `0`, or the step with index `1`.

Return *the minimum cost to reach the top of the floor*.

### Example 1
> **Input**: cost = [10,15,20]
> **Output**: 15
> **Explanation**: You will start at index 1.
> - Pay 15 and climb two steps to reach the top. 
> The total cost is 15.

### Example 2
> **Input**: cost = [1,100,1,1,1,100,1,1,100,1]
> **Output**: 6
> **Explanation**: You will start at index 0.
> - Pay 1 and climb two steps to reach index 2.
> - Pay 1 and climb two steps to reach index 4.
> - Pay 1 and climb two steps to reach index 6.
> - Pay 1 and climb one step to reach index 7.
> - Pay 1 and climb two steps to reach index 9.
> - Pay 1 and climb one step to reach the top.
> The total cost is 6.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int len = cost.length;
        int[] dp = new int[len];
        Arrays.fill(dp, Integer.MAX_VALUE);

        dp[0] = cost[0];
        dp[1] = cost[1];
        for (int i = 1; i < len; i++) {
            dp[i] = Math.min(cost[i] + dp[i - 1], dp[i]);

            if (i + 1 != len) {
                dp[i + 1] = Math.min(cost[i + 1] + dp[i - 1], dp[i + 1]);
            }
        }

        return Math.min(dp[len - 2], dp[len - 1]);
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