+++
title = "1002. Find Common Characters"
date = 2024-06-05 23:42:10
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table", "String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/find-common-characters/description/?envType=daily-question&envId=2024-06-05)

Given a string array `words`, return *an array of all characters that show up in all strings within the `words` (including duplicates).* You may return the answer in **any order**.

### Example 1

> **Input:** words = ["bella","label","roller"]
**Output:** ["e","l","l"]

### Example 2

> **Input:** words = ["cool","lock","cook"]
**Output:** ["c","o"]

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> commonChars(String[] words) {
        int len = words.length;
        int[][] freq = new int[len][26];
        for (int i = 0; i < len; i++) {
            for (char c : words[i].toCharArray()) {
                freq[i][c - 'a']++;
            }
        }

        List<String> result = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            int min = Integer.MAX_VALUE;
            for (int j = 0; j < len; j++) {
                min = Math.min(min, freq[j][i]);
                if(min == 0)  break;
            }
            for (int j = 0; j < min; j++) {
                result.add(String.valueOf((char) (i + 'a')));
            }
        }

        return result;
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