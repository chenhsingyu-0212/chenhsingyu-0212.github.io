+++
title = "859. Buddy Strings"
date = 2023-07-03 22:43:19
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Hash Table", "String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/buddy-strings/)

Given two strings `s` and `goal`, return *true if you can swap two letters in `s` so the result is equal to `goal`, otherwise, return `false`*.

Swapping letters is defined as taking two indices `i` and `j` (0-indexed) such that `i != j` and swapping the characters at `s[i]` and `s[j]`.

- For example, swapping at indices `0` and `2` in `"abcd"` results in `"cbad"`.

### Example 1
> **Input**: s = "ab", goal = "ba"
**Output**: true
**Explanation**: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

### Example 2
> **Input**: s = "ab", goal = "ab"
**Output**: false
**Explanation**: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

### Example 3
> **Input**: s = "aa", goal = "aa"
**Output**: true
**Explanation**: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean buddyStrings(String s, String goal) {
        int n = s.length();
        
        if (s.equals(goal)) {
            Set<Character> temp = new HashSet<>();
            for (char c : s.toCharArray()) {
                temp.add(c);
            }
            return temp.size() < goal.length(); // Swapping same characters
        } // two string equal

        int i = 0;
        int j = n - 1;

        while (i < j && s.charAt(i) == goal.charAt(i)) {
            i++;
        }

        while (j >= 0 && s.charAt(j) == goal.charAt(j)) {
            j--;
        }

        if (i < j) {
            char[] clone = s.toCharArray();
            char temp = clone[i];
            clone[i] = clone[j];
            clone[j] = temp;
            s = new String(clone);
        } // Find two letter to swap, when two letter on deference string in same index isn't equal

        return s.equals(goal);
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