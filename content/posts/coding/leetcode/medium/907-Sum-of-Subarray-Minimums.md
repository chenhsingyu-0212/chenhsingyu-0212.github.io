+++
title = "907. Sum of Subarray Minimums"
date = 2024-01-20 11:46:44
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming", "Stack", "Monotonic Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/sum-of-subarray-minimums/description/?envType=daily-question&envId=2024-01-20)

Given an array of integers arr, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer **modulo** `10^9 + 7`.

### Example 1
> **Input:** arr = [3,1,2,4]
**Output:** 17
**Explanation:** 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

### Example 2
> **Input:** arr = [11,81,94,43,3]
**Output:** 444

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Stack;

class Solution {
    public int sumSubarrayMins(int[] arr) {
        final int MOD = (int) 1e9 + 7;
        Stack<Integer> stack = new Stack<>();
        long sum = 0;

        for (int i = 0; i <= arr.length; i++) {
            while (!stack.empty() && (i == arr.length || arr[stack.peek()] >= arr[i])) {
                int mid = stack.pop();
                int leftBoundary = stack.empty() ? -1 : stack.peek();
                int rightBoundary = i;

                long count = (mid - leftBoundary) * (rightBoundary - mid) % MOD;

                sum += (count * arr[mid]) % MOD;
                sum %= MOD;
            }
            stack.push(i);
        }

        return (int) sum;
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