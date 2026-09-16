+++
title = "516. Longest Palindromic Subsequence"
date = 2023-04-15 01:08:29
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/longest-palindromic-subsequence/)

Given a string `s`, find *the longest palindromic **subsequence**'s length in* `s`.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

### Example 1:
> **Input:** s = "bbbab"
> **Output:** 4
> **Explanation:** One possible longest palindromic subsequence is "bbbb".

### Example 2:
> **Input:** s = "cbbd"
> **Output:** 2
> **Explanation:** One possible longest palindromic subsequence is "bb".

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int longestPalindromeSubseq(String s) {
        int n = s.length();
        int[] dp = new int[n];

        for (int i = n - 1; i >= 0; i--) {
            int[] newdp = new int[n];
            newdp[i] = 1;
            for (int j = i + 1; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    newdp[j] = 2 + dp[j-1];
                } else {
                    newdp[j] = Math.max(dp[j], newdp[j-1]);
                }
            }
            dp = newdp;
        }
        
        return dp[n-1];
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