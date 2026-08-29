+++
title = "1347. Minimum Number of Steps to Make Two Strings Anagram"
date = 2024-01-13 11:15:52
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Hash Table", "String", "Counting"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/?envType=daily-question&envId=2024-01-13)

You are given two strings of the same length `s` and `t`. In one step you can choose **any character** of t and replace it with **another character**.

Return *the minimum number of steps* to make `t` an anagram of `s`.

An **Anagram** of a string is a string that contains the same characters with a different (or the same) ordering.

### Example 1
> **Input:** s = "bab", t = "aba"
**Output:** 1
**Explanation:** Replace the first 'a' in t with b, t = "bba" which is anagram of s.

### Example 2
> **Input:** s = "leetcode", t = "practice"
**Output:** 5
**Explanation:** Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

### Example 3
> **Input:** s = "anagram", t = "mangaar"
**Output:** 0
**Explanation:** "anagram" and "mangaar" are anagrams. 

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
public class Solution {
    public int minSteps(String s, String t) {
        int[] countS = new int[26];
        int[] countT = new int[26];

        for (char ch : s.toCharArray()) {
            countS[ch - 'a']++;
        }

        for (char ch : t.toCharArray()) {
            countT[ch - 'a']++;
        }

        int steps = 0;
        for (int i = 0; i < 26; i++) {
            steps += Math.abs(countS[i] - countT[i]);
        }

        return steps / 2;  
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