+++
title = "1442. Count Triplets That Can Form Two Arrays of Equal XOR"
date = 2024-05-30 16:53:44
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Math", "Bit Manipulation", "Prefix Sum"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/?envType=daily-question&envId=2024-05-30)

Given an array of integers `arr`.

We want to select three indices `i`, `j` and `k` where `(0 <= i < j <= k < arr.length)`.

Let's define `a` and `b` as follows:

- `a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]`
- `b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]`
Note that **^** denotes the **bitwise-xor** operation.

Return *the number of triplets (`i`, `j` and `k`) Where `a == b`.*

### Example 1

> **Input:** arr = [2,3,1,6,7]
**Output:** 4
**Explanation:** The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

### Example 2

> **Input:** arr = [1,1,1,1,1]
**Output:** 10

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java Prefix Sum" %}}

```java Solution.java
class Solution {
    public int countTriplets(int[] arr) {
        int[] prefix = new int[arr.length + 1];

        for (int i = 0; i < arr.length; i++) {
            prefix[i + 1] = prefix[i] ^ arr[i];
        }

        int count = 0;

        for (int i = 0; i < arr.length; i++) {
            for (int k = i + 1; k < arr.length; k++) {
                if (prefix[i] == prefix[k + 1]) {
                    count += k - i;
                }
            }
        }

        return count;
    }
} 
```

{{% /tab %}}
{{% tab "Java" %}}

```java Solution.java
class Solution {
    public int countTriplets(int[] arr) {
        int count = 0;

        for (int i = 0; i < arr.length; i++) {
            int curr_XOR = 0;
            for (int k = i; k < arr.length; k++) {
                curr_XOR ^= arr[k];
                if(curr_XOR == 0) count += k - i;
            }
        }

        return count;
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