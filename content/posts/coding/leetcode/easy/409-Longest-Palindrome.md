+++
title = "409. Longest Palindrome"
date = 2024-06-04 21:31:00
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Hash Table", "String", "Greedy"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/longest-palindrome/?envType=daily-question&envId=2024-06-04)

Given a string `s` which consists of lowercase or uppercase letters, return the length of the **longest palindrome** that can be built with those letters.

Letters are **case sensitive**, for example, `"Aa"` is not considered a palindrome.

{{% callout "info" %}}
**Palindrome**
A palindrome is a string that reads the same forward and backward.
{{% /callout %}}

### Example 1

> **Input:** s = "abccccdd"
**Output:** 7
**Explanation:** One longest palindrome that can be built is "dccaccd", whose length is 7.

### Example 2

> **Input:** s = "a"
**Output:** 1
**Explanation:** The longest palindrome that can be built is "a", whose length is 1.

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public int longestPalindrome(String s) {
        int[] hashtable = new int[52];
        for (char c : s.toCharArray()) {
            if (c >= 'a' && c <= 'z')  hashtable[c - 'a']++;
            else hashtable[c - 'A' + 26]++;
        }

        int result = 0;
        boolean hasOdd = false;
        for (int value : hashtable) {
            if(value % 2 == 0) {
                result += value;
            } else {
                result += value - 1;
                hasOdd = true;
            }
        }

        return hasOdd ? result + 1 : result;
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