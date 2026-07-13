+++
title = "231. Power of Two"
date = 2024-02-19 12:02:11
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Math", "Bit Manipulation", "Recursion"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/power-of-two/description/?envType=daily-question&envId=2024-02-19)

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

### Example 1
> **Input:** n = 1
**Output:** true
**Explanation:** 20 = 1

### Example 2
> **Input:** n = 16
**Output:** true
**Explanation:** 24 = 16

### Example 3
> **Input:** n = 3
**Output:** false

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
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