+++
title = "373. Find K Pairs with Smallest Sums"
date = 2023-06-27 23:01:24
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Heap (Priority Queue)"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)

You are given two integer arrays `nums1` and `nums2` sorted in **ascending order** and an integer `k`.

Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.

Return *the `k` pairs `(u1, v1), (u2, v2), ..., (uk, vk)` with the smallest sums*.

### Example 1
> **Input**: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
**Output**: [[1,2],[1,4],[1,6]]
**Explanation**: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

### Example 2
> **Input**: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
**Output**: [[1,1],[1,1]]
**Explanation**: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

### Example 3
> **Input**: nums1 = [1,2], nums2 = [3], k = 3
**Output**: [[1,3],[2,3]]
**Explanation**: All possible pairs are returned from the sequence: [1,3],[2,3]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Set;

class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        int m = nums1.length;
        int n = nums2.length;

        List<List<Integer>> ans = new ArrayList<>();
        Set<Pair<Integer, Integer>> visited = new HashSet<>();

        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b)->(a[0] - b[0]));
        minHeap.offer(new int[]{nums1[0] + nums2[0], 0, 0});
        visited.add(new Pair<Integer, Integer>(0, 0));

        while (k-- > 0 && !minHeap.isEmpty()) {
            int[] top = minHeap.poll();
            int i = top[1];
            int j = top[2];

            ans.add(List.of(nums1[i], nums2[j]));

            if (i + 1 < m && !visited.contains(new Pair<Integer, Integer>(i + 1, j))) {
                minHeap.offer(new int[]{nums1[i + 1] + nums2[j], i + 1, j});
                visited.add(new Pair<Integer, Integer>(i + 1, j));
            }

            if (j + 1 < n && !visited.contains(new Pair<Integer, Integer>(i, j + 1))) {
                minHeap.offer(new int[]{nums1[i] + nums2[j + 1], i, j + 1});
                visited.add(new Pair<Integer, Integer>(i, j + 1));
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