+++
title = "1411. Number of Ways to Paint N  3 Grid"
date = 2026-01-03 22:49:32
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/description/?envType=daily-question&envId=2026-01-03)

You have a `grid` of size `n x 3` and you want to paint each cell of the grid with exactly one of the three colors: **Red**, **Yellow**, or **Green** while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

Given `n` the number of rows of the grid, return **the number of ways you can paint this `grid`.** As the answer may grow large, the answer **must be** computed modulo `10^9 + 7`.

### Example 1

![](https://assets.leetcode.com/uploads/2020/03/26/e1.png)

> **Input:** n = 1
**Output:** 12
**Explanation:** There are 12 possible way to paint the grid as shown.

### Example 2

> **Input:** n = 5000
**Output:** 30228214

## 解題思路

可以先看一下 `n = 1` 的情況並將其分為兩類:
- 三個都為不同顏色(Different)
  - RYG
  - RGY
  - YGR
  - YRG
  - GRY
  - GYR
- 兩個為同顏色，一個為不同顏色(Same)
  - RYR
  - RGR
  - YGY
  - YRY
  - GRG
  - GYG

接著我們可以看 `n = 2` 規律:
- Different
  - 如果 `n = 1` 為 Different 總共會有 2 種搭配可能
  - 如果 `n = 1` 為 Same 總共會有 2 種搭配可能
- Same
  - 如果 `n = 1` 為 Different 總共會有 2 種搭配可能
  - 如果 `n = 1` 為 Same 總共會有 3 種搭配可能

並且我們可以知道 `n = 3` 的時候，他的情況主要也是看 `n = 2` 的 Different 跟 Same 而來，也就是說我們可以單從 `n = 2` 的可能性就得之 `n = 3`，那以此類推，如果我要知道 n = input 的數字，只要一路推到 input 數字即可。

## Complexity
- Time complexity: $O(n)$

- Space complexity: $O(1)$

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java DP
class Solution {
    public int numOfWays(int n) {
        long MOD = 1_000_000_007;

        long diffDP = 6; // Three colors all different
        long sameDP = 6; // Two colors same, one different

        for (int i = 2; i <= n; i++) {
            long newSameDP = (sameDP * 3 + diffDP * 2) % MOD;
            long newDiffDP = (sameDP * 2 + diffDP * 2) % MOD;
            diffDP = newDiffDP;
            sameDP = newSameDP;
        }

        return (int) ((diffDP + sameDP) % MOD);
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