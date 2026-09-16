+++
title = "403. Frog Jump"
date = 2023-08-27 20:45:36
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Dynamic Programming"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/frog-jump/)

A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of `stones`' positions (in units) in sorted **ascending order**, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be `1` unit.

If the frog's last jump was `k` units, its next jump must be either `k - 1`, `k`, or `k + 1` units. The frog can only jump in the forward direction.

### Example 1
> **Input**: stones = [0,1,3,5,6,8,12,17]
**Output**: true
**Explanation**: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.

### Example 2
> **Input**: stones = [0,1,2,3,4,8,9,11]
**Output**: false
**Explanation**: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
    public boolean canCross(int[] stones) {
        int n = stones.length;

        Map<Integer, Set<Integer>> dp = new HashMap<>();
        for (int stone : stones) {
            dp.put(stone, new HashSet<>());
        }
        dp.get(0).add(0);

        for (int i = 0; i < n; i++) {
            for (int k : dp.get(stones[i])) {
                for (int step = k - 1; step <= k + 1; step++) {
                    if (step != 0 && dp.containsKey(stones[i] + step)) {
                        dp.get(stones[i] + step).add(step);
                    }
                }
            }
        }

        return !dp.get(stones[n - 1]).isEmpty();
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
[**river**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/river)
河
>  a natural wide flow of fresh water across the land into the sea, a lake, or another river
- We sailed slowly down the river.
{{% /callout %}}