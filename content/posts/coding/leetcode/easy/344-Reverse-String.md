+++
title = "344. Reverse String"
date = 2024-06-02 16:46:34
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Two Pointers", "String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/reverse-string/description/?envType=daily-question&envId=2024-06-02)

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

### Example 1

> **Input:** s = ["h","e","l","l","o"]
**Output:** ["o","l","l","e","h"]

### Example 2

> **Input:** s = ["H","a","n","n","a","h"]
**Output:** ["h","a","n","n","a","H"]

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public void reverseString(char[] s) {
        int i = 0, j = s.length - 1;
        
        while(i < j) {
            char temp = s[i];
            s[i++] = s[j];
            s[j--] = temp;
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