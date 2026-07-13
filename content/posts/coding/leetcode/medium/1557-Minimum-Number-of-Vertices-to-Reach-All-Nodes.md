+++
title = "1557. Minimum Number of Vertices to Reach All Nodes"
date = 2023-05-18 09:57:45
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Graph"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/)

Given a **directed acyclic graph**, with `n` vertices numbered from `0` to `n - 1`, and an array `edges` where `edges[i] = [fromi, toi]` represents a directed edge from node `fromi` to node `toi`.

Find the *smallest set of vertices from which all nodes in the graph are reachable*. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.

### Example 1:
![](https://assets.leetcode.com/uploads/2020/07/07/untitled22.png)

> **Input**: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
**Output**: [0,3]
**Explanation**: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].


### Example 2:
![](https://assets.leetcode.com/uploads/2020/07/07/untitled.png)

> **Input**: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
**Output**: [0,2,3]
**Explanation**: Notice that vertices 0, 3 and 2 are not reachable from any other node, so we must include them. Also any of these vertices can reach nodes 1 and 4.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public List<Integer> findSmallestSetOfVertices(int n, List<List<Integer>> edges) {
        Set<Integer> link = new HashSet<>();
        for (List<Integer> edge : edges) {
            link.add(edge.get(1));
        }
        
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (!link.contains(i)) {
                ans.add(i);
            }
        }
        
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