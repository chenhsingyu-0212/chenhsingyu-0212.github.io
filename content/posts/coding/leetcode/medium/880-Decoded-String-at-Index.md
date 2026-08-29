+++
title = "880. Decoded String at Index"
date = 2023-09-27 21:00:06
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/decoded-string-at-index/description/?envType=daily-question&envId=2023-09-27)

You are given an encoded string `s`. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

- If the character read is a letter, that letter is written onto the tape.
- If the character read is a digit `d`, the entire current tape is repeatedly written `d - 1` more times in total.

Given an integer `k`, return *the `kth` letter **(1-indexed)** in the decoded string*.

### Example 1
> **Input**: s = "leet2code3", k = 10
**Output**: "o"
**Explanation**: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10th letter in the string is "o".

### Example 2
> **Input**: s = "ha22", k = 5
**Output**: "h"
**Explanation**: The decoded string is "hahahaha".
The 5th letter is "h".

### Example 3
> **Input**: s = "a2345678999999999999999", k = 1
**Output**: "a"
**Explanation**: The decoded string is "a" repeated 8301530446056247680 times.
The 1st letter is "a".

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public String decodeAtIndex(String s, int k) {
        long decodedLength = 0; 

        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                decodedLength *= (c - '0');
            } else {
                decodedLength++;
            }
        }

        for (int i = s.length() - 1; i >= 0; i--) {
            char currChar = s.charAt(i);

            if (Character.isDigit(currChar)) {
                decodedLength /= (currChar - '0');
                k %= decodedLength;
            } else {
                if (k == 0 || decodedLength == k) {
                    return String.valueOf(currChar);
                }
                decodedLength--;
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