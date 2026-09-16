+++
title = "1456. Maximum Number of Vowels in a Substring of Given Length"
date = 2023-05-05 10:32:53
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Sliding Window"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

Given a string `s` and an integer `k`, return *the maximum number of vowel letters in any substring of `s` with length `k`*.

**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

### Example 1:

> **Input:** s = "abciiidef", k = 3
> **Output:** 3
> **Explanation:** The substring "iii" contains 3 vowel letters.

### Example 2:

> **Input:** s = "aeiou", k = 2
> **Output:** 2
> **Explanation:** Any substring of length 2 contains 2 vowels.

### Example 3:

> **Input:** s = "leetcode", k = 3
> **Output:** 2
> **Explanation:** "lee", "eet" and "ode" contain 2 vowels.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int maxVowels(String s, int k) {
        int ans = 0;

        String temp = s.substring(0, k);
        for (char t : temp.toCharArray()) {
            if (isVowel(t)){
                ans++;
            }
        }

        int cur = ans;
        for (int i = k; i < s.length(); i++) {
            if (isVowel(s.charAt(i)))
                cur++;
            if (isVowel(s.charAt(i - k)))
                cur--;
            ans = Math.max(ans, cur);
        }

        return ans;
    }

    public boolean isVowel(char c) {
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
            return true;
        return false;
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