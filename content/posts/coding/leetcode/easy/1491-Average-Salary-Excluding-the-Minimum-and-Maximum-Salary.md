+++
title = "1491. Average Salary Excluding the Minimum and Maximum Salary"
date = 2023-05-01 13:46:14
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Sorting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

You are given an array of **unique** integers `salary` where `salary[i]` is the salary of the `ith` employee.

Return *the average salary of employees excluding the minimum and maximum salary*. Answers within `10-5` of the actual answer will be accepted.

### Example 1:

> **Input:** salary = [4000,3000,1000,2000]
> **Output:** 2500.00000
> **Explanation:** Minimum salary and maximum salary are 1000 and 4000 respectively.
> Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

### Example 2:

> **Input:** salary = [1000,2000,3000]
> **Output:** 2000.00000
> **Explanation:** Minimum salary and maximum salary are 1000 and 3000 respectively.
> Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public double average(int[] salary) {
        Arrays.sort(salary);
        long sum = 0;
        for(int i = 1; i < salary.length - 1; i++){
            sum += salary[i];
        }
        
        return sum / (salary.length - 2 * 1.0);
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