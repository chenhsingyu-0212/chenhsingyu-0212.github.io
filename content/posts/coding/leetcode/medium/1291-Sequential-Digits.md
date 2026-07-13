+++
title = "1291. Sequential Digits"
date = 2024-02-02 09:49:31
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Enumeration"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/sequential-digits/?envType=daily-question&envId=2024-02-02)

An integer has *sequential digits* if and only if each digit in the number is one more than the previous digit.

Return a **sorted** list of all the integers in the range `[low, high]` inclusive that have sequential digits.

### Example 1
> **Input:** low = 100, high = 300
**Output:** [123,234]

### Example 2
> **Input:** low = 1000, high = 13000
**Output:** [1234,2345,3456,4567,5678,6789,12345]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> ans = new ArrayList<>();

        for(int i = 1; i <= 9; i++){
            int num = i;
            int next = i + 1;

            while (num <= high && next <= 9) {
                num = num * 10 + next;
                next = next + 1;
                if(num >= low && num <= high){
                    ans.add(num);
                }
            }
        }
        
        Collections.sort(ans);

        return ans;
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