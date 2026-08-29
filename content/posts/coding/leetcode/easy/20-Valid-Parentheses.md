+++
title = "20. Valid Parentheses"
date = 2023-04-10 09:44:58
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["String", "Stack"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/valid-parentheses/)

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.

Every close bracket has a corresponding open bracket of the same type.

### Example 1:

> **Input:** s = "()"
> **Output:** true

### Example 2:

> **Input:** s = "()[]{}"
> **Output:** true

### Example 3:

> **Input:** s = "(]"
> **Output:** false

## 解題思路
利用 stack。

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        if (s.length() % 2 != 0) {
            return false;
        }

        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            switch(c){
                case '(': case '{': case '[':
                    stack.push(c);
                    break;
                case ')':
                    if(stack.isEmpty() || stack.pop() != '(') return false;
                    break;
                case '}':
                    if(stack.isEmpty() || stack.pop() != '{') return false;
                    break;
                case ']':
                    if(stack.isEmpty() || stack.pop() != '[') return false;
                    break;
            }
        }

        return (stack.isEmpty());
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