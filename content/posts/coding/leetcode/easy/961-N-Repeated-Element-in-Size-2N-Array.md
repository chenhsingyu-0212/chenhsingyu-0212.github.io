+++
title = "961. N-Repeated Element in Size 2N Array"
date = 2026-01-02 21:43:58
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/?envType=daily-question&envId=2026-01-02)

You are given an integer array `nums` with the following properties:

- `nums.length == 2 * n`.
- `nums` contains `n + 1` **unique** elements.
- Exactly one element of `nums` is repeated `n` times.

Return *the element that is repeated `n` times*.

### Example 1

> **Input:** nums = [1,2,3,3]
**Output:** 3

### Example 2

> **Input:** nums = [2,1,2,5,3,2]
**Output:** 2

### Example 3

> **Input:** nums = [5,1,5,2,5,3,5,4]
**Output:** 5

## 解題思路

這題主要的解法就是使用資料結構，包括: Set、HashTable、Map，都可以很簡單的完成這個題目。

## Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

## Solution

{{< tabs >}}
{{% tab "Java HashSet" %}}

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int repeatedNTimes(int[] nums) {
        Set<Integer> hashSet = new HashSet<>();

        for (int num : nums) {
            if (!hashSet.add(num)) {
                return num;
            }
        }
        
        return -1;
    }
}
```

{{% /tab %}}
{{% tab "Java HashMap" %}}

```java
import java.util.Map;

class Solution {
    public int repeatedNTimes(int[] nums) {
        Map<Integer, Integer> hashTable = new java.util.HashMap<>();

        for (int num : nums) {
            if (hashTable.containsKey(num)) {
                return num;
            } else {
                hashTable.put(num, 1);
            }
        }

        return -1;
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