+++
title = "1436. Destination City"
date = 2023-12-15 14:32:19
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Hash Table", "String"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/destination-city/description/?envType=daily-question&envId=2023-12-15)

You are given the array `paths`, where` paths[i] = [cityAi, cityBi]` means there exists a direct path going from `cityAi` to `cityBi`. *Return the destination city, that is, the city without any path outgoing to another city.*

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

### Example 1
> **Input:** paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
**Output:** "Sao Paulo" 
**Explanation:** Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

### Example 2
> **Input:** paths = [["B","C"],["D","B"],["C","A"]]
**Output:** "A"
**Explanation:** All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".

### Example 3
> **Input:** paths = [["A","Z"]]
**Output:** "Z"

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public String destCity(List<List<String>> paths) {
        Map<String, Integer> map = new HashMap<>();
        ArrayList<String> tmp = new ArrayList<>();
        
        for(List<String> p : paths){
            String start = p.get(0);
            String end = p.get(1);

            map.put(start, map.getOrDefault(start, 0) + 1);
            map.put(end, map.getOrDefault(end, 0) - 1);

            if(map.get(start) == 0 && tmp.contains(start)) tmp.remove(start);
            if(map.get(end) == -1) tmp.add(end);
        }

        return tmp.get(0);
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