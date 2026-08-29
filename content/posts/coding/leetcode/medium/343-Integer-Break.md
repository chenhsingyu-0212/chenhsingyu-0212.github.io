+++
title = "343. Integer Break"
date = 2023-10-06 13:59:24
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Math", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/integer-break/description/?envType=daily-question&envId=2023-10-06)

Given an integer `n`, break it into the sum of `k` **positive integers**, where `k >= 2`, and maximize the product of those integers.

Return *the maximum product you can get*.

### Example 1
> **Input**: n = 2
**Output**: 1
**Explanation**: 2 = 1 + 1, 1 × 1 = 1.

### Example 2
> **Input**: n = 10
**Output**: 36
**Explanation**: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int integerBreak(int n) {
        if (n <= 3)
            return n - 1;
        int quotient = n / 3, remainder = n % 3;

        if(remainder == 0){
            return (int) Math.pow(3, quotient);
        }else if(remainder == 1){
            return (int) Math.pow(3, quotient - 1) * 4;
        }else{
            return (int) Math.pow(3, quotient) * 2;
        }
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