+++
title = "1584. Min Cost to Connect All Points"
date = 2023-09-15 09:28:00
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Union Find", "Graph", "Minimum Spanning Tree"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/min-cost-to-connect-all-points/?envType=daily-question&envId=2023-09-15)

You are given an array `points` representing integer coordinates of some points on a 2D-plane, where `points[i] = [xi, yi]`.

The cost of connecting two points `[xi, yi]` and `[xj, yj]` is the **manhattan distance** between them: `|xi - xj| + |yi - yj|`, where `|val|` denotes the absolute value of `val`.

Return *the minimum cost to make all points connected*. All points are connected if there is **exactly one** simple path between any two points.

### Example 1
![](https://assets.leetcode.com/uploads/2020/08/26/d.png)

> **Input**: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
**Output**: 20
**Explanation**: 
![](https://assets.leetcode.com/uploads/2020/08/26/c.png)
We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.

### Example 2
> **Input**: points = [[3,12],[-2,5],[-4,1]]
**Output**: 18

## 解題思路
- 先將 `points[][]` 中兩兩點連線，並運算其長度(使用 manhattan distance)，將其存於 `W[][]` 中。
- 從第一個節點出發，也就是 `W[0]` 開始，將其與其他節點的值存於 `distance[]` 中。
- 接著就開始使用 MST(Minimum Spanning Trees) 演算法進行尋找最佳路徑。

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int minCostConnectPoints(int[][] points) {
        int V = points.length;
        int ans = 0;

        int[] distance = new int[V];
        int[][] W = new int[V][V];

        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (i == j) {
                    W[i][j] = 0;
                } else {
                    W[i][j] = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                }
            }
        }

        for (int i = 0; i < V; i++) {
            distance[i] = W[0][i];
        }
        
        return prim(distance, W, V);
    }

    private int prim(int[] distance, int[][] W, int V) {
        int res = 0;
        int count = 0;

        while (count < V - 1) {
            int min = Integer.MAX_VALUE;
            int vnear = 0;

            for (int i = 0; i < V; i++) {
                if (distance[i] > 0 && distance[i] < min) {
                    min = distance[i];
                    vnear = i;
                }
            }

            distance[vnear] = -1;

            for (int i = 0; i < V; i++) {
                if (W[i][vnear] < distance[i]) {
                    distance[i] = W[i][vnear];
                }
            }

            res += min;
            count++;
        }

        return res;
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
[**coordinates**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/coordinates)
座標 n.
> one of a pair of numbers and/or letters that show the exact position of a point on a map or graph
- X and y coordinates are the horizontal and vertical addresses of a point in any 2D space and help identify the exact location of a point.
{{% /callout %}}