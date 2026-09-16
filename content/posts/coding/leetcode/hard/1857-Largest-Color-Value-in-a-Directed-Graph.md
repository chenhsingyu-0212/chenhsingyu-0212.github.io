+++
title = "1857. Largest Color Value in a Directed Graph"
date = 2023-04-09 12:05:26
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Hash Table", "Dynamic Programming", "Graph", "Topological Sort", "Memoization"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/)

There is a **directed graph** of `n` colored nodes and `m` edges. The nodes are numbered from `0` to `n - 1`.

You are given a string `colors` where `colors[i]` is a lowercase English letter representing the color of the ith node in this graph **(0-indexed)**. You are also given a 2D array `edges` where `edges[j] = [aj, bj]` indicates that there is a **directed edge** from node `aj` to node `bj`.

A valid **path** in the graph is a sequence of nodes `x1 -> x2 -> x3 -> ... -> xk` such that there is a directed edge from `xi` to `xi+1` for every `1 <= i < k`. The **color value** of the path is the number of nodes that are colored the **most frequently** occurring color along that path.

Return *the largest color value of any valid path in the given graph, or `-1` if the graph contains a cycle*.

### Example 1:
![](https://i.imgur.com/Ezl9LHW.png)

> **Input:** colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
> **Output**: 3
> **Explanation:** The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored `"a" (red in the above image)`.

### Example 2:
![](https://i.imgur.com/fX0Rnyq.png)

> **Input:** colors = "a", edges = [[0,0]]
> **Output:** -1
> **Explanation:** There is a cycle from 0 to 0.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class Solution {
    public int largestPathValue(String colors, int[][] edges) {
        List<List<Integer>> graph = new ArrayList<>();
        int length = colors.length();
        int inDegree[] = new int[length];
        int colorsDP[][] = new int[length][26];
        int visited = 0;

        for (int i = 0; i < length; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < edges.length; i++) {
            int start = edges[i][0];
            int end = edges[i][1];
            graph.get(start).add(end);
            inDegree[end]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < inDegree.length; i++) {
            if (inDegree[i] == 0) {
                queue.add(i);
            }
        }

        while (!queue.isEmpty()) {
            int parent = queue.poll();
            int parentColor = colors.charAt(parent) - 'a';
            colorsDP[parent][parentColor] = colorsDP[parent][parentColor] + 1;

            for (Integer child : graph.get(parent)) {
                inDegree[child]--;
                if (inDegree[child] == 0) {
                    queue.add(child);
                }

                for (int i = 0; i < 26; i++) {
                    colorsDP[child][i] = Math.max(colorsDP[child][i], colorsDP[parent][i]);
                }
            }
            visited++;
        }

        if (visited != length)
            return -1;

        int maxColor = 0;
        for (int i = 0; i < colorsDP.length; i++) {
            for (int j = 0; j < 26; j++) {
                maxColor = Math.max(maxColor, colorsDP[i][j]);
            }
        }

        return maxColor;
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