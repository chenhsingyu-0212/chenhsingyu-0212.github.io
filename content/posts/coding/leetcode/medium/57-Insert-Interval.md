+++
title = "57. Insert Interval"
date = 2024-03-17 14:03:29
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/insert-interval/description/?envType=daily-question&envId=2024-03-17)

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return *`intervals` after the insertion.*

**Note** that you don't need to modify `intervals` in-place. You can make a new array and return it.

### Example 1
> **Input:** intervals = [[1,3],[6,9]], newInterval = [2,5]
**Output:** [[1,5],[6,9]]

### Example 2
> **Input:** intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
**Output:** [[1,2],[3,10],[12,16]]
**Explanation:** Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> ans = new ArrayList<>();
        int index = 0;

        while(index < intervals.length && intervals[index][1] < newInterval[0]) {
            ans.add(intervals[index++]);
        }
        
        while(index < intervals.length && intervals[index][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
            index++;
        }
        
        ans.add(newInterval);
        
        while(index < intervals.length) {
            ans.add(intervals[index++]);
        }
        
        return ans.toArray(new int[0][2]);
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <vector>
using namespace std;

class Solution {
 public:
  vector<vector<int>> insert(vector<vector<int>>& intervals,
                             vector<int>& newInterval) {
    vector<vector<int>> res;
    int idx = 0;
    int size = intervals.size();

    while (idx < size && intervals[idx][1] < newInterval[0]) {
      res.push_back(intervals[idx++]);
    }

    while (idx < size && intervals[idx][0] <= newInterval[1]) {
      newInterval[0] = min(newInterval[0], intervals[idx][0]);
      newInterval[1] = max(newInterval[1], intervals[idx][1]);
      idx++;
    }

    res.push_back(newInterval);

    while (idx < size) {
      res.push_back(intervals[idx++]);
    }

    return res;
  }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}