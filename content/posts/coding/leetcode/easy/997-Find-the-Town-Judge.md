+++
title = "997. Find the Town Judge"
date = 2024-02-22 17:33:41
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table", "Graph"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/find-the-town-judge/description/?envType=daily-question&envId=2024-02-22)

In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties **1** and **2**.

You are given an array `trust` where `trust[i] = [ai, bi]` representing that the person labeled `ai` trusts the person labeled `bi`. If a trust relationship does not exist in `trust` array, then such a trust relationship does not exist.

Return *the label of the town judge if the town judge exists and can be identified, or return `-1` otherwise.*

### Example 1
> **Input:** n = 2, trust = [[1,2]]
**Output:** 2

### Example 2
> **Input:** n = 3, trust = [[1,3],[2,3]]
**Output:** 3

### Example 3
> **Input:** n = 3, trust = [[1,3],[2,3],[3,1]]
**Output:** -1

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] townJudge = new int[n];
        int[] hastrust = new int[n];

        for (int i = 0; i < trust.length; i++) {
            hastrust[trust[i][0] - 1]++;
            townJudge[trust[i][1] - 1]++;
        }

        for (int i = 0; i < n; i++) {
            if (townJudge[i] == n - 1 && hastrust[i] == 0) {
                return i + 1;
            }
        }

        return -1;
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <vector>
#include <string.h>
using namespace std;

class Solution {
 public:
  int findJudge(int n, vector<vector<int>>& trust) {
    int townJudge[n];
    memset(townJudge, 0, n * sizeof(int));
    int hasTrust[n];
    memset(hasTrust, 0, n * sizeof(int));

    for (int i = 0; i < trust.size(); i++) {
      hasTrust[trust[i][0] - 1]++;
      townJudge[trust[i][1] - 1]++;
    }

    for (int i = 0; i < n; i++) {
      if (townJudge[i] == n - 1 && hasTrust[i] == 0) {
        return i + 1;
      }
    }

    return -1;
  }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}