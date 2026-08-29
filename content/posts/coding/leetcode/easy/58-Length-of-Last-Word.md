+++
title = "58. Length of Last Word"
date = 2024-04-01 10:52:14
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/boats-to-save-people/)

Given a string `s` consisting of words and spaces, return *the length of the **last** word in the string.*

A **word** is a maximal substring consisting of non-space characters only.

> Substring
> A **substring** is a contiguous **non-empty** sequence of characters within a string.

### Example 1

> **Input:** s = "Hello World"
**Output:** 5
**Explanation:** The last word is "World" with length 5.

### Example 2

> **Input:** s = "   fly me   to   the moon  "
**Output:** 4
**Explanation:** The last word is "moon" with length 4.

### Example 3

> **Input:** s = "luffy is still joyboy"
**Output:** 6
**Explanation:** The last word is "joyboy" with length 6.

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public int lengthOfLastWord(String s) {
        String[] words = s.split(" ");
        
        for(int i = words.length - 1; i >= 0; i--) {
            if(words[i].length() > 0) {
                return words[i].length();
            }
        }

        return 0;
    }
}
```

{{% /tab %}}
{{% tab "C++" %}}

```cpp
#include <string>
#include <sstream>
#include <vector>
using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        vector<string> words;
        stringstream ss(s);
        string word;
        while (ss >> word) {
            words.push_back(word);
        }
        if (words.empty()) {
            return 0;
        }
        return words.back().length();
    }
};
```

{{% /tab %}}
{{% tab "Python" %}}

```pyhton

```

{{% /tab %}}
{{< /tabs >}}