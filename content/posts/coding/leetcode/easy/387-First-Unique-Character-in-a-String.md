+++
title = "387. First Unique Character in a String"
date = 2024-02-05 18:43:55
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Hash Table", "String", "Queue", "Counting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=daily-question&envId=2024-02-05)

Given a string `s`, *find the first non-repeating character in it and return its index.* If it does not exist, return `-1`.

### Example 1
> **Input:** s = "leetcode"
**Output:** 0

### Example 2
> **Input:** s = "loveleetcode"
**Output:** 2

### Example 3
> **Input:** s = "aabb"
**Output:** -1

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> map = new HashMap<>();

        for(int i = 0; i < s.length(); i++){
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
        }

        for(int i = 0; i < s.length(); i++){
            if(map.get(s.charAt(i)) == 1){
                return i;
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