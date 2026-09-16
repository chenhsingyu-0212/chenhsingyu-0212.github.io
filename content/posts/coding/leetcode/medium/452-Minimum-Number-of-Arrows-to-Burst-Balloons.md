+++
title = "452. Minimum Number of Arrows to Burst Balloons"
date = 2024-03-18 11:01:48
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Greedy", "Sorting"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/?envType=daily-question&envId=2024-03-18)

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There is **no limit** to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons.*

### Example 1
> **Input:** points = [[10,16],[2,8],[1,6],[7,12]]
> **Output:** 2
> **Explanation:** The balloons can be burst by 2 arrows:
> - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
> - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

### Example 2
> **Input:** points = [[1,2],[3,4],[5,6],[7,8]]
**Output:** 4
**Explanation:** One arrow needs to be shot for each balloon for a total of 4 arrows.

### Example 3
> **Input:** points = [[1,2],[2,3],[3,4],[4,5]]
> **Output:** 2
> **Explanation:** The balloons can be burst by 2 arrows:
> - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
> - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public int findMinArrowShots(int[][] points) {
        if (points.length == 0)
            return 0;

        int ans = 0;
        long end = Long.MIN_VALUE;

        Arrays.sort(points, (a, b) -> Integer.compare(a[1], b[1]));

        for (int[] p : points) {
            if (p[0] > end) {
                end = p[1];
                ans++;
            }
        }

        return ans;
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <vector>
#include "../../../../../mingw64/include/c++/12.3.0/bits/algorithmfwd.h"
#include <climits>
using namespace std;

class Solution {
public:
    static bool cmp(vector<int>& a, vector<int>& b) {
        return a[1] < b[1]; // ascending order
    }

    int findMinArrowShots(vector<vector<int>>& points) {
        if (points.size() == 0) {
            return 0;
        }
        
        int arrows = 0;
        long long min =  LLONG_MIN;

        sort(points.begin(), points.end(), cmp);

        for (int i = 0; i < points.size(); i++) {
            if (points[i][0] > min) {
                arrows++;
                min = points[i][1];
            }
        }

        return arrows;
    }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}