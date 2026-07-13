+++
title = "787. Cheapest Flights Within K Stops"
date = 2024-02-23 19:43:13
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Dynamic Programming", "Depth-First Search", "Breadth-First Search", "Graph", "Heap (Priority Queue)", "Shortest Path"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/cheapest-flights-within-k-stops/description/?envType=daily-question&envId=2024-02-23)

There are `n` cities connected by some number of flights. You are given an array `flights` where `flights[i] = [fromi, toi, pricei]` indicates that there is a flight from city `fromi` to city `toi` with cost `pricei`.

You are also given three integers `src`, `dst`, and `k`, return ***the cheapest price** from `src` to `dst` with at most `k` stops.* If there is no such route, return `-1`.

### Example 1

![](https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png)

> **Input:** n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
**Output:** 700
**Explanation:**
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

### Example 2

![](https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png)

> **Input:** n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
**Output:** 200
**Explanation:**
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

### Example 3

![](https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png)

> **Input:** n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
**Output:** 500
**Explanation:**
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int[] price = new int[n];
        Arrays.fill(price, 100000);
        price[src] = 0;

        for (int i = 0; i <= k; i++) {
            int[] temp = new int[n];
            Arrays.fill(temp, 100000);
            temp[src] = 0;
            for (int[] flight : flights) {
                temp[flight[1]] = Math.min(temp[flight[1]], price[flight[0]] + flight[2]);
            }
            price = temp;
        }

        return (price[dst] >= 100000) ? -1 : price[dst];
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