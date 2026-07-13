+++
title = "2024. Maximize the Confusion of an Exam"
date = 2023-07-07 09:40:57
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["String", "Binary Search", "Sliding Window", "Prefix Sum"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/boats-to-save-people/)

A teacher is writing a test with `n` true/false questions, with `'T'` denoting true and `'F'` denoting false. He wants to confuse the students by **maximizing** the number of **consecutive** questions with the **same** answer (multiple trues or multiple falses in a row).

You are given a string `answerKey`, where `answerKey[i]` is the original answer to the `ith` question. In addition, you are given an integer `k`, the maximum number of times you may perform the following operation:

- Change the answer key for any question to `'T'` or `'F'` (i.e., set `answerKey[i]` to `'T'` or `'F'`).

Return *the **maximum** number of consecutive `'T'`s or `'F'`s in the answer key after performing the operation at most `k` times*.

### Example 1
> **Input**: answerKey = "TTFF", k = 2
**Output**: 4
**Explanation**: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
There are four consecutive 'T's.

### Example 2
> **Input**: answerKey = "TFFT", k = 1
**Output**: 3
**Explanation**: We can replace the first 'T' with an 'F' to make answerKey = "FFFT".
Alternatively, we can replace the second 'T' with an 'F' to make answerKey = "TFFF".
In both cases, there are three consecutive 'F's.

### Example 3
> **Input**: answerKey = "TTFTTFTT", k = 1
**Output**: 5
**Explanation**: We can replace the first 'F' to make answerKey = "TTTTTFTT"
Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT". 
In both cases, there are five consecutive 'T's.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int maxConsecutiveAnswers(String answerKey, int k) {
        int n = answerKey.length();
        int left = k, right = n;
        
        while (left < right) {
            int mid = (left + right + 1) / 2;
            
            if (isValid(answerKey, mid, k)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
    
    public boolean isValid(String answerKey, int size, int k) {
        int n = answerKey.length();
        Map<Character, Integer> counter = new HashMap<>();
        
        for (int i = 0; i < size; i++) {
            char c = answerKey.charAt(i);
            counter.put(c, counter.getOrDefault(c, 0) + 1);
        }
        
        if (Math.min(counter.getOrDefault('T', 0), counter.getOrDefault('F', 0)) <= k) {
            return true;
        }
        
        for (int i = size; i < n; i++) {
            char c1 = answerKey.charAt(i);
            counter.put(c1, counter.getOrDefault(c1, 0) + 1);
            char c2 = answerKey.charAt(i - size);
            counter.put(c2, counter.getOrDefault(c2, 0) - 1);
            
            if (Math.min(counter.getOrDefault('T', 0), counter.getOrDefault('F', 0)) <= k) {
                return true;
            }
        }
        
        return false;
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