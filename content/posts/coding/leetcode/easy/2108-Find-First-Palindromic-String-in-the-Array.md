+++
title = "2108. Find First Palindromic String in the Array"
date = 2024-02-13 13:12:26
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Two Pointers", "String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/?envType=daily-question&envId=2024-02-13)

Given an array of strings `words`, return *the first **palindromic** string in the array.* If there is no such string, return *an **empty string*** `""`.

A string is **palindromic** if it reads the same forward and backward.

### Example 1
> **Input:** words = ["abc","car","ada","racecar","cool"]
**Output:** "ada"
**Explanation:** The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

### Example 2
> **Input:** words = ["notapalindrome","racecar"]
**Output:** "racecar"
**Explanation:** The first and only string that is palindromic is "racecar".

### Example 3
> **Input:** words = ["def","ghi"]
**Output:** ""
**Explanation:** There are no palindromic strings, so the empty string is returned.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public String firstPalindrome(String[] words) {
        boolean isPalindrome = true;

        for (int i = 0; i < words.length; i++) {
            isPalindrome = true;

            for (int j = 0; j < words[i].length() / 2; j++) {
                if (words[i].charAt(j) != words[i].charAt(words[i].length() - j - 1)) {
                    isPalindrome = false;
                    break;
                }
            }

            if (isPalindrome) {
                return words[i];
            }
        }

        return "";
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