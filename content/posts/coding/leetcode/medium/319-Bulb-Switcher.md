+++
title = "319. Bulb Switcher"
date = 2023-04-27 09:54:17
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Math", "Brainteaser"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/bulb-switcher/)

There are `n` bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the `ith` round, you toggle every `i` bulb. For the `nth` round, you only toggle the last bulb.

Return *the number of bulbs that are on after `n` rounds*.

### Example 1:
![](https://i.imgur.com/JSh0QO5.png)

> **Input:** n = 3
> **Output:** 1
> **Explanation:** At first, the three bulbs are [off, off, off].
> After the first round, the three bulbs are [on, on, on].
> After the second round, the three bulbs are [on, off, on].
> After the third round, the three bulbs are [on, off, off]. 
> So you should return 1 because there is only one bulb is on.

### Example 2:
> **Input:** n = 0
> **Output:** 0

### Example 3:
> **Input:** n = 1
> **Output:** 1

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int bulbSwitch(int n) {
        return (int)Math.sqrt(n);
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