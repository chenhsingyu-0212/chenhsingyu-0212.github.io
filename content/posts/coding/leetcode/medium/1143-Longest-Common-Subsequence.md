+++
title = "1143. Longest Common Subsequence"
date = 2024-01-25 11:07:04
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/longest-common-subsequence/?envType=daily-question&envId=2024-01-25)

Given two strings `text1` and `text2`, return *the length of their longest **common subsequence**.* If there is no **common subsequence**, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

- For example, `"ace"` is a subsequence of `"abcde"`.

A **common subsequence** of two strings is a subsequence that is common to both strings.

### Example 1
> **Input:** text1 = "abcde", text2 = "ace" 
**Output:** 3  
**Explanation:** The longest common subsequence is "ace" and its length is 3.

### Example 2
> **Input:** text1 = "abc", text2 = "abc"
**Output:** 3
**Explanation:** The longest common subsequence is "abc" and its length is 3.

### Example 3
> **Input:** text1 = "abc", text2 = "def"
**Output:** 0
**Explanation:** There is no such common subsequence, so the result is 0.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int[][] DP = new int[text1.length()+1][text2.length()+1];

        for (int i = 1; i <= text1.length(); i++) {
            for (int j = 1; j <= text2.length(); j++) {
                if (text1.substring(i - 1, i).equals(text2.substring(j - 1, j))) {
                    DP[i][j] = DP[i - 1][j - 1] + 1;
                } else {
                    DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
                }
            }
        }

        return DP[text1.length()][text2.length()];
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <string>
#include <string.h>
using namespace std;

class Solution {
 public:
  int longestCommonSubsequence(string text1, string text2) {
    int len1 = text1.size();
    int len2 = text2.size();
    int DP[len1 + 1][len2 + 1];

    memset(DP, 0, sizeof DP);

    for (int i = 1; i <= len1; i++) {
      for (int j = 1; j <= len2; j++) {
        if (text1[i - 1] == text2[j - 1]) {
          DP[i][j] = DP[i - 1][j - 1] + 1;
        } else {
          DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]);
        }
      }
    }

    return DP[len1][len2];
  }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}