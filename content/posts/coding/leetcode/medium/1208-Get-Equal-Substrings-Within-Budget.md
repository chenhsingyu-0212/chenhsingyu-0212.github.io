+++
title = "1208. Get Equal Substrings Within Budget"
date = 2024-05-28 21:51:13
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Binary Search", "Sliding Window", "Prefix Sum"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/get-equal-substrings-within-budget/description/?envType=daily-question&envId=2024-05-28)

You are given two strings `s` and `t` of the same length and an integer `maxCost`.

You want to change `s` to `t`. Changing the `ith` character of `s` to `ith` character of `t` costs `|s[i] - t[i]|` (i.e., the absolute difference between the ASCII values of the characters).

Return *the maximum length of a substring of `s` that can be changed to be the same as the corresponding substring of `t` with a cost less than or equal to `maxCost`.* If there is no substring from `s` that can be changed to its corresponding substring from `t`, return `0`.

### Example 1

> **Input:** s = "abcd", t = "bcdf", maxCost = 3
**Output:** 3
**Explanation:** "abc" of s can change to "bcd".
That costs 3, so the maximum length is 3.

### Example 2

> **Input:** s = "abcd", t = "cdef", maxCost = 3
**Output:** 1
**Explanation:** Each character in s costs 2 to change to character in t,  so the maximum length is 1.

### Example 3

> **Input:** s = "abcd", t = "acde", maxCost = 0
**Output:** 1
**Explanation:** You cannot make any change, so the maximum length is 1.

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int[] diff = new int[s.length()];

        for(int i = 0; i < s.length(); i++) {
            diff[i] = Math.abs(s.charAt(i) - t.charAt(i));
        }

        int start = 0;
        int count = 0;

        for(int i = 0; i < s.length(); i++) {
            maxCost -= diff[i];
            if(maxCost < 0) maxCost += diff[start++];
            count = Math.max(count, i - start + 1);
        }

        return count;
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