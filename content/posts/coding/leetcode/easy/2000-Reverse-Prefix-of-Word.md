+++
title = "2000. Reverse Prefix of Word"
date = 2024-05-01 13:53:21
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Two Pointers", "String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/reverse-prefix-of-word/description/?envType=daily-question&envId=2024-05-01)

Given a **0-indexed** string `word` and a character `ch`, **reverse** the segment of `word` that starts at index `0` and ends at the index of the **first occurrence** of `ch` (**inclusive**). If the character `ch` does not exist in `word`, do nothing.

- For example, if `word = "abcdefd"` and `ch = "d"`, then you should **reverse** the segment that starts at `0` and ends at `3` (**inclusive**). The resulting string will be `"dcbaefd"`.

Return *the resulting string.*

### Example 1

> **Input:** word = "abcdefd", ch = "d"
**Output:** "dcbaefd"
**Explanation:** The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

### Example 2

> **Input:** word = "xyxzxe", ch = "z"
**Output:** "zxyxxe"
**Explanation:** The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

### Example 3

> **Input:** word = "abcd", ch = "z"
**Output:** "abcd"
**Explanation:** "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public String reversePrefix(String word, char ch) {
        int j = word.indexOf(ch);
        
        if (j != -1) {
            return new StringBuilder(word.substring(0, j + 1)).reverse().toString() + word.substring(j + 1);
        }

        return word;
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