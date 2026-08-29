+++
title = "956. Tallest Billboard"
date = 2023-06-24 11:43:15
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Dynamic Programming"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/tallest-billboard/)

You are installing a billboard and want it to have the largest height. The billboard will have two steel supports, one on each side. Each steel support must be an equal height.

You are given a collection of `rods` that can be welded together. For example, if you have rods of lengths `1`, `2`, and `3`, you can weld them together to make a support of length `6`.

Return *the largest possible height of your billboard installation*. If you cannot support the billboard, return `0`.

### Example 1
> **Input**: rods = [1,2,3,6]
**Output**: 6
**Explanation**: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.

### Example 2
> **Input**: rods = [1,2,3,4,5,6]
**Output**: 10
**Explanation**: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.

### Example 3
> **Input**: rods = [1,2]
**Output**: 0
**Explanation**: The billboard cannot be supported, so we return 0.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

public class Solution {
    public int tallestBillboard(int[] rods) {
        int maxSize = 0;
        for(int rod : rods){
            maxSize += rod;
        }

        int[] dp = new int[maxSize + 1];
        Arrays.fill(dp, -1);
        dp[0] = 0;

        for(int rod : rods){
            int[] dpCopy = dp.clone();

            for (int i = 0; i <= maxSize - rod; i++) {
                if (dpCopy[i] < 0) continue;

                dp[i + rod] = Math.max(dp[i + rod], dpCopy[i]);
                dp[Math.abs(i - rod)] = Math.max(dp[Math.abs(i - rod)], dpCopy[i] + Math.min(i, rod));
            }
        }

        return dp[0];
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
[**installing**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/install)
安裝 v. (READY TO USE)
> to put furniture, a machine, or a piece of equipment into position and make it ready to use
> to put a computer program onto a computer so that the computer can use it

[**billboard**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/billboard)
廣告牌 n.
> a very large board on which advertisements are shown, especially at the side of a road

[**steel**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/steel)
鋼 n.
> a strong metal that is a mixture of iron and carbon, used for making things that need a strong structure, especially vehicles and buildings

[**support**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/support)
支持 v.
> to agree with and give encouragement to someone or something because you want him, her, or it to succeedn
{{% /callout %}}