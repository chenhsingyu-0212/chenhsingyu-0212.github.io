+++
title = "1758. Minimum Changes To Make Alternating Binary String"
date = 2023-12-24 14:58:51
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/?envType=daily-question&envId=2023-12-24)

You are given a string `s` consisting only of the characters `'0'` and `'1'`. In one operation, you can change any `'0'` to `'1'` or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string `"010"` is alternating, while the string `"0100"` is not.

Return *the **minimum** number of operations needed to make `s` alternating.*

### Example 1
> **Input:** s = "0100"
**Output:** 1
**Explanation:** If you change the last character to '1', s will be "0101", which is alternating.

### Example 2
> **Input:** s = "10"
**Output:** 0
**Explanation:** s is already alternating.

### Example 3
> **Input:** s = "1111"
**Output:** 2
**Explanation:** You need two operations to reach "0101" or "1010".5)

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int minOperations(String s) {
        int len = s.length();
        int diff = 0;

        for (int i = 0; i < len; i++) {
            if (i % 2 == 0 && s.charAt(i) != '1') {
                diff++;
            }else if (i % 2 == 1 && s.charAt(i) != '0') {
                diff++;
            }
        }

        return Math.min(diff, len - diff);
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