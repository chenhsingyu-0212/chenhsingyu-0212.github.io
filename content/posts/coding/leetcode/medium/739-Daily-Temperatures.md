+++
title = "739. Daily Temperatures"
date = 2024-01-31 17:57:46
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["nullArray", "Stack", "Monotonic Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/daily-temperatures/description/?envType=daily-question&envId=2024-01-31)

Given an array of integers `temperatures` represents the daily temperatures, return *an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature*. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

### Example 1
> **Input:** temperatures = [73,74,75,71,69,72,76,73]
**Output:** [1,1,4,2,1,1,0,0]

### Example 2
> **Input:** temperatures = [30,40,50,60]
**Output:** [1,1,1,0]

### Example 3
> **Input:** temperatures = [30,60,90]
**Output:** [1,1,0]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;
import java.util.Stack;

class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;

        int[] answers = new int[n];
        Arrays.fill(answers, 0);

        Stack<Integer> s = new Stack<>();

        for(int i = 0; i < n; i++){
            while(!s.isEmpty() && temperatures[s.peek()] < temperatures[i]){
                answers[s.peek()] = i - s.pop();
            }
            s.push(i);
        }
        return answers;
     }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <vector>
#include <stack>
using namespace std;

class Solution {
 public:
  vector<int> dailyTemperatures(vector<int>& temperatures) {
    int n = temperatures.size();

    vector<int> answers(n);
    stack<int> stack;

    for(int i = 0; i < n; i++){
        while (!stack.empty() && temperatures[stack.top()] < temperatures[i])
        {
            answers[stack.top()] = i - stack.top();
            stack.pop();
        }
        stack.push(i);
    }

    return answers;
  }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}