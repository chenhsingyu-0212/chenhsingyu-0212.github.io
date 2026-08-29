+++
title = "242. Valid Anagram"
date = 2023-12-16 22:45:12
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Hash Table", "String", "Sorting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/valid-anagram/description/?envType=daily-question&envId=2023-12-16)

Given two strings `s` and `t`, return *`true` if `t` is an anagram of `s`, and `false` otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example 1
> **Input:** s = "anagram", t = "nagaram"
**Output:** true

### Example 2
> **Input:** s = "rat", t = "car"
**Output:** false

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;

        char[] arrs = s.toCharArray();
        char[] arrt = t.toCharArray();

        Arrays.sort(arrs);
        Arrays.sort(arrt);

        for(int i = 0; i < arrs.length; i++){
            if(arrs[i] != arrt[i]) return false;
        }

        return true;
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