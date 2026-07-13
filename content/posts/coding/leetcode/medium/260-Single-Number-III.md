+++
title = "260. Single Number III"
date = 2024-05-31 16:20:32
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Bit Manipulation"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/single-number-iii/description/?envType=daily-question&envId=2024-05-31)

Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in **any order**.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

### Example 1

> **Input:** nums = [1,2,1,3,2,5]
**Output:** [3,5]
**Explanation:**  [5, 3] is also a valid answer.

### Example 2

> **Input:** nums = [-1,0]
**Output:** [-1,0]

### Example 3

> **Input:** nums = [0,1]
**Output:** [1,0]

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java HashMap" %}}

```java Solution.java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] singleNumber(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int[] result = new int[2];
        int index = 0;
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                result[index++] = entry.getKey();
            }
        }

        return result;
    }
}
```

{{% /tab %}}
{{% tab "Java Bit Manipulation" %}}

```java Solution.java
class Solution {
    public int[] singleNumber(int[] nums) {
        int xor = 0;
        for (int num : nums) xor ^= num;

        int mask = 1;
        while ((xor & mask) == 0) mask <<= 1;

        int a = 0;
        for (int num : nums) {
            if ((num & mask) == 0) a ^= num;
        }

        return new int[] {a, xor ^ a};
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