+++
title = "70. Climbing Stairs"
date = 2024-01-18 17:18:48
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Math", "Dynamic Programming", "Memoization"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/climbing-stairs/description/?envType=daily-question&envId=2024-01-18)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Example 1
> **Input:** n = 2
> **Output:** 2
> **Explanation:** There are two ways to climb to the top.
> 1. 1 step + 1 step
> 2. 2 steps

### Example 2
> **Input:** n = 3
> **Output:** 3
> **Explanation:** There are three ways to climb to the top.
> 1. 1 step + 1 step + 1 step
> 2. 1 step + 2 steps
> 3. 2 steps + 1 step

## 解題思路

**利用 DP 來解決:**
DP 是一種動態編程，我們解決第一個小問題，然後當我們處理下一個問題或下一步時，我們只需使用先前計算的值，就可以求出答案。

1. 先初始化陣列，爬 0 層樓梯只有一個方法，爬 1 層也只有一個方法。
2. 接下來，爬 2 層就可以有 2 種
   - 1 step + 1 step
   - 2 step
3. 爬 3 層是 3 種
   - 1 step + 2 step
   - 2 step + 1 step
   - 1 step + 1 step + 1 step
4. 爬 4 層是 5 種
   - 1 step + 2 step + 1 step
   - 2 step + 1 step + 1 step
   - 1 step + 1 step + 2 step
   - 2 step + 2 step
   - 1 step + 1 step + 1 step + 1 step
5. 經過觀察，可以統整出是利用最後兩個數值相加求解，如同: F(n) = F(n - 1) + F(n - 2)。

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int climbStairs(int n) {
        int[] arr = new int[n + 1];
        arr[0] = 1;
        arr[1] = 1;

        for(int i = 2; i <= n; i++){
            arr[i] = arr[i-1] + arr[i-2];
        }

        return arr[n];
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
class Solution {
public:
    int climbStairs(int n) {
        int arr[n + 1];
        arr[0] = 1;
        arr[1] = 1;

        for(int i = 2; i <= n; i++){
            arr[i] = arr[i-1] + arr[i-2];
        }

        return arr[n];
    }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}