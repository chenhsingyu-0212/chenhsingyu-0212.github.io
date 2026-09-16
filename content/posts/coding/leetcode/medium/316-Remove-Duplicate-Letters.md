+++
title = "316. Remove Duplicate Letters"
date = 2023-09-26 11:48:36
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Stack", "Greedy", "Monotonic Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/remove-duplicate-letters/description/?envType=daily-question&envId=2023-09-26)

Given a string `s`, remove duplicate letters so that every letter appears once and only once. You must make sure your result is **the smallest in lexicographical order** among all possible results.

{{% callout "info" %}}
**Lexicographically Smaller**

A string a is lexicographically smaller than a string b if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
If the first min(a.length, b.length) characters do not differ, then the shorter string is the lexicographically smaller one.
{{% /callout %}}

### Example 1
> **Input**: s = "bcabc"
**Output**: "abc"

### Example 2
> **Input**: s = "cbacdcbc"
**Output**: "acdb"

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

public class Solution {
    public String removeDuplicateLetters(String s) {
        Stack<Character> stack = new Stack<>();
        Set<Character> inStack = new HashSet<>();
        Map<Character, Integer> lastCharIdx = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            lastCharIdx.put(s.charAt(i), i);
        } // get and save the last index with the char
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            
            if (!inStack.contains(c)) {
                while (!stack.isEmpty() && c < stack.peek() && i < lastCharIdx.get(stack.peek())) {
                    inStack.remove(stack.pop());
                } // i < lastCharIdx.get(stack.peek()) mean if stack.pop() value has next at behind we can remove that value.

                inStack.add(c);
                stack.push(c);
            }
        }
        
        StringBuilder ans = new StringBuilder();
        for (char c : stack) {
            ans.append(c);
        }

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