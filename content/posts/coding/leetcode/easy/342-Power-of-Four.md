+++
title = "342. Power of Four"
date = 2023-10-23 08:21:01
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Math", "Bit Manipulation", "Recursion"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/power-of-four/description/?envType=daily-question&envId=2023-10-23)

Given an integer `n`, return *`true` if it is a power of four. Otherwise, return `false`*.

An integer `n` is a power of four, if there exists an integer `x` such that `n == 4^x`.

### Example 1
> **Input**: n = 16
**Output**: true

### Example 2
> **Input**: n = 5
**Output**: false

### Example 3
> **Input**: n = 1
**Output**: true

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public boolean isPowerOfFour(int n) {
        while (n % 4 == 0 && n > 0) {
            n /= 4;
        }

        return n == 1;
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