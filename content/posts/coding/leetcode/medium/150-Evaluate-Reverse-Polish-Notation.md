+++
title = "150. Evaluate Reverse Polish Notation"
date = 2024-01-30 14:23:24
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Math", "Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/?envType=daily-question&envId=2024-01-30)

You are given an array of strings `tokens` that represents an arithmetic expression in a [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Evaluate the expression. Return *an integer that represents the value of the expression*.

**Note** that:
- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bit** integer.

### Example 1
> **Input:** tokens = ["2","1","+","3","*"]
**Output:** 9
**Explanation:** ((2 + 1) * 3) = 9

### Example 2
> **Input:** tokens = ["4","13","5","/","+"]
**Output:** 6
**Explanation:** (4 + (13 / 5)) = 6

### Example 3
> **Input:** tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
**Output:** 22
**Explanation:** ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.*;

class Solution {
    public int evalRPN(String[] tokens) {
        ArrayList<Integer> arr = new ArrayList<>();

        for(int i = 0; i < tokens.length; i++){
            if(tokens[i].equals("+") || tokens[i].equals("-") || tokens[i].equals("*") || tokens[i].equals("/")){
                int temp = math(arr.get(arr.size() - 2),arr.get(arr.size() - 1),tokens[i]);
                arr.remove(arr.size() - 1);
                arr.remove(arr.size() - 1);
                arr.add(temp);
            }
            else{
                arr.add(Integer.parseInt(tokens[i]));
            }
        }

        return arr.get(0);
    }

    public int math(int a, int b, String s) {
        switch (s) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
        }
        return 0;
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <string>
#include <vector>
#include <iostream>
using namespace std;

class Solution {
 public:
  int evalRPN(vector<string>& tokens) {
    vector<int> arr;

    for (int i = 0; i < tokens.size(); i++) {
      if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" ||
          tokens[i] == "/") {
        int tmp = math(arr[arr.size() - 2], arr[arr.size() - 1], tokens[i]);
        arr.pop_back();
        arr.pop_back();
        arr.push_back(tmp);
      } else {
        arr.push_back(stoi(tokens[i]));
      }
    }

    return arr[0];
  }

  int math(int a, int b, string s) {
    switch (s[0]) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }

    return 0;
  }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}