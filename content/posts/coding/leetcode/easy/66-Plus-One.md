+++
title = "66. Plus One"
date = 2026-01-02 19:09:03
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Math"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/plus-one/description/?envType=daily-question&envId=2026-01-01)

You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return *the resulting array of digits*.

### Example 1

> **Input:** digits = [1,2,3]
**Output:** [1,2,4]
**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

### Example 2

> **Input:** digits = [4,3,2,1]
**Output:** [4,3,2,2]
**Explanation:** The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

### Example 3

> **Input:** digits = [9]
**Output:** [1,0]
**Explanation:** The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].

## 解題思路

從陣列的最後面開始進行 `+1`:
- 如果該數字為 `0~8`，將該數字 `+1`，回傳整個陣列。
- 如果該數字為 `9`，將該數字記為 `0`，繼續向前一位的陣列數字 `+1`。

如果一直加到最前面的陣列數字都還是 `9`，我們就需要創建一個比原先傳入陣列還要大一位的陣列，將首位數字設為 `1`，其餘為 `0`。

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public int[] plusOne(int[] digits) {
        
        for(int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }

        int[] newNumber = new int[digits.length + 1];
        newNumber[0] = 1;
        return newNumber;
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