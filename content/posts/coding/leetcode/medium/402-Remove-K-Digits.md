+++
title = "402. Remove K Digits"
date = 2024-04-12 00:37:32
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Stack", "Greedy", "Monotonic Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/remove-k-digits/description/?envType=daily-question&envId=2024-04-11)

Given string num representing a non-negative integer `num`, and an integer `k`, return *the smallest possible integer after removing `k` digits from `num`*.

### Example 1

> **Input:** num = "1432219", k = 3
**Output:** "1219"
**Explanation:** Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

### Example 2

> **Input:** num = "10200", k = 1
**Output:** "200"
**Explanation:** Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

### Example 3

> **Input:** num = "10", k = 2
**Output:** "0"
**Explanation:** Remove all the digits from the number and it is left with nothing which is 0.5)

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
import java.util.Stack;

class Solution {
    public String removeKdigits(String num, int k) {
        if (num.length() == k) {
            return "0";
        }
        
        Stack<Character> stack = new Stack<>();
        
        for (char c : num.toCharArray()) {
            while (k > 0 && !stack.isEmpty() && stack.peek() > c) {
                stack.pop();
                k--;
            }
            stack.push(c);
        }
        
        while (k > 0) {
            stack.pop();
            k--;
        }
        
        StringBuilder sb = new StringBuilder();
        while (!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        
        sb.reverse();
        
        while (sb.length() > 1 && sb.charAt(0) == '0') {
            sb.deleteCharAt(0);
        }
        
        return sb.toString();
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