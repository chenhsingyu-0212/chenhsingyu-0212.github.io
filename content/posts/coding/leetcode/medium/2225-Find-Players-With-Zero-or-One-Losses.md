+++
title = "2225. Find Players With Zero or One Losses"
date = 2024-01-15 11:35:46
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Sorting", "Counting"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/?envType=daily-question&envId=2024-01-15)

You are given an integer array `matches` where `matches[i] = [winneri, loseri]` indicates that the player `winneri` defeated player `loseri` in a match.

Return a *list `answer` of size `2` where*:

- `answer[0]` is a list of all players that have **not** lost any matches.
- `answer[1]` is a list of all players that have lost exactly **one** match.

The values in the two lists should be returned in **increasing** order.

**Note:**
- You should only consider the players that have played **at least one** match.
- The testcases will be generated such that **no** two matches will have the **same** outcome.

### Example 1
> **Input:** matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
**Output:** [[1,2,10],[4,5,7,8]]
**Explanation:**
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].

### Example 2
> **Input:** matches = [[2,3],[1,3],[5,4],[6,4]]
**Output:** [[1,2,5,6],[]]
**Explanation:**
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public List<List<Integer>> findWinners(int[][] matches) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> noLost = new ArrayList<>();
        List<Integer> oneLost = new ArrayList<>();
        Map<Integer, Integer> map = new HashMap<>();

        for(int[] matche : matches){
            if(!map.containsKey(matche[0])){
                map.put(matche[0], 0);
            }

            if(!map.containsKey(matche[1])){
                map.put(matche[1], 1);
            }else if(map.get(matche[1]) == 0){
                map.put(matche[1], 1);
            }else{
                map.put(matche[1], 2);
            }
        }

        for(int m : map.keySet()){
            if(map.get(m) == 0){
                noLost.add(m);
            }else if(map.get(m) == 1){
                oneLost.add(m);
            }
        }

        Collections.sort(noLost);
        Collections.sort(oneLost);
        ans.add(noLost);
        ans.add(oneLost);

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