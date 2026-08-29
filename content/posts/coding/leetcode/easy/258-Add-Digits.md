+++
title = "258. Add Digits"
date = 2023-04-26 09:27:56
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Math", "Simulation", "Number Theory"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/add-digits/description/)

Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

### Example 1:
> **Input**: num = 38
**Output**: 2
**Explanation**: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

### Example 2:
> **Input**: num = 0
**Output**: 0

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int addDigits(int num) {
        
        while(num >= 10){
            String str = Integer.toString(num);
            num = 0;
            for(int i = 0; i < str.length(); i++){
                num += Integer.parseInt(str.substring(i, i + 1));
            }
        }

        return num;
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