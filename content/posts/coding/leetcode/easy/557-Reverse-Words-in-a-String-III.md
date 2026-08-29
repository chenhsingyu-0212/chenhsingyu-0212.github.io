+++
title = "557. Reverse Words in a String III"
date = 2023-10-01 20:49:17
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Two Pointers", "String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/reverse-words-in-a-string-iii/description/?envType=daily-question&envId=2023-10-01)

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Example 1
> **Input**: s = "Let's take LeetCode contest"
**Output**: "s'teL ekat edoCteeL tsetnoc"

### Example 2
> **Input**: s = "God Ding"
**Output**: "doG gniD"

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public String reverseWords(String s) {
        String[] str = s.split(" ");
        StringBuilder ans = new StringBuilder();

        for(String st : str){
            StringBuilder sb = new StringBuilder(st);
            ans.append(sb.reverse());
            ans.append(" ");
        }
        ans.deleteCharAt(ans.length() - 1);

        return ans.toString();
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