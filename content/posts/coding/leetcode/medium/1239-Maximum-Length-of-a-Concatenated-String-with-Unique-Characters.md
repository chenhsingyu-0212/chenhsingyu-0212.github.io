+++
title = "1239. Maximum Length of a Concatenated String with Unique Characters"
date = 2024-01-23 10:31:55
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "String", "Backtracking", "Bit Manipulation"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/?envType=daily-question&envId=2024-01-23)

You are given an array of strings `arr`. A string `s` is formed by the **concatenation** of a **subsequence** of `arr` that has **unique characters**.

Return *the **maximum** possible length of `s`*.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

### Example 1
> **Input:** arr = ["un","iq","ue"]
> **Output:** 4
> **Explanation:** All the valid concatenations are:
> - ""
> - "un"
> - "iq"
> - "ue"
> - "uniq" ("un" + "iq")
> - "ique" ("iq" + "ue")
> Maximum length is 4.

### Example 2
> **Input:** arr = ["cha","r","act","ers"]
**Output:** 6
**Explanation:** Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").

### Example 3
> **Input:** arr = ["abcdefghijklmnopqrstuvwxyz"]
**Output:** 26
**Explanation:** The only string in arr has all 26 characters.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int maxLength(List<String> arr) {
        List<Integer> list = new ArrayList<>();
        list.add(0);

        int res = 0;

        for (String str : arr) {
            int strValue = 0, checkSame = 0;
            
            for (char c : str.toCharArray()) {
                checkSame |= strValue & (1 << (c - 'a'));
                strValue |= 1 << (c - 'a');
            }

            if (checkSame > 0)
                continue;

            for (int i = list.size() - 1; i >= 0; i--) {
                if ((list.get(i) & strValue) > 0)
                    continue;
                list.add(list.get(i) | strValue);
                
                res = Math.max(res, Integer.bitCount(list.get(i) | strValue));
            }
        }
        return res;
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