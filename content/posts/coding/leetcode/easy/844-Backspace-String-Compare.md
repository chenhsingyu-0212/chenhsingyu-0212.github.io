+++
title = "844. Backspace String Compare"
date = 2023-10-19 09:24:51
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Two Pointers", "String", "Stack", "Simulation"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/backspace-string-compare/?envType=daily-question&envId=2023-10-19)

Given two strings `s` and `t`, return `true` *if they are equal when both are typed into empty text editors*. `'#'` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

### Example 1
> **Input**: s = "ab#c", t = "ad#c"
**Output**: true
**Explanation**: Both s and t become "ac".

### Example 2
> **Input**: s = "ab##", t = "c#d#"
**Output**: true
**Explanation**: Both s and t become "".

### Example 3
> **Input**: s = "a#c", t = "b"
**Output**: false
**Explanation**: s becomes "c" while t becomes "b".

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Stack;

class Solution {
    public boolean backspaceCompare(String s, String t) {
        Stack<Character> stackS = new Stack<>();
        Stack<Character> stackT = new Stack<>();

        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '#'){
                if(stackS.size() != 0)
                    stackS.pop();
            }else{
                stackS.push(s.charAt(i));
            }
        }

        for(int i = 0; i < t.length(); i++){
            if(t.charAt(i) == '#'){
                if(stackT.size() != 0)
                    stackT.pop();
            }else{
                stackT.push(t.charAt(i));
            }
        }

        if(stackS.size() != stackT.size()){
            return false;
        }

        String compareS = stackS.toString();
        String compareT = stackT.toString();

        return compareS.equals(compareT);
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