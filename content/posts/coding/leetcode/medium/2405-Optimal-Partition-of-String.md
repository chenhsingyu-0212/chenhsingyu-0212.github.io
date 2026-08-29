+++
title = "2405. Optimal Partition of String"
date = 2023-04-04 12:02:30
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Hash Table", "String", "Greedy"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/optimal-partition-of-string/)

Given a string `s`, partition the string into one or more **substrings** such that the characters in each substring are **unique**. That is, no letter appears in a single substring more than **once**.

Return the ***minimum*** number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

### Example 1:
> **Input:** s = "abacaba"
> **Output:** 4
> **Explanation:**
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.

### Example 2:
> **Input:** s = "ssssss"
> **Output:** 6
> **Explanation:**
The only valid partition is ("s","s","s","s","s","s").

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java Solution.java
class Solution {
    public int partitionString(String s) {
        int[] hashTable = new int[26];
        int ans = 0;

        for(int i = 0; i < s.length(); i++){
            int temp = s.charAt(i) - 'a';
            if(hashTable[temp] == 1){
                hashTable = new int[26];
                ans++;
                hashTable[temp]++;
            }else{
                hashTable[temp]++;
            }
        }

        return ans + 1;
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

{{% callout "success" "單字" %}}
[**exactly**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/exactly)
確切地
> used when you are giving or asking for information that is completely correct
{{% /callout %}}