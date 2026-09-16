+++
title = "946. Validate Stack Sequences"
date = 2023-04-13 09:21:33
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Stack", "Simulation"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/validate-stack-sequences/)

Given two integer arrays `pushed` and `popped` each with distinct values, return *`true` if this could have been the result of a sequence of push and pop operations on an initially empty stack, or `false` otherwise*.

### Example 1:

> **Input:** pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
> **Output:** true
> **Explanation:** We might do the following sequence:
> push(1), push(2), push(3), push(4),
> pop() -> 4,
> push(5),
> pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

### Example 2:

> **Input:** pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
> **Output:** false
> **Explanation:** 1 cannot be popped before 2.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Stack;

class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        Stack<Integer> stack = new Stack<>();
        
        int index = 0;
        
        for(int p : pushed){
            stack.push(p);
            while(!stack.isEmpty() && stack.peek() == popped[index]){
                stack.pop();
                index++;
            }
        }
        return stack.isEmpty();
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