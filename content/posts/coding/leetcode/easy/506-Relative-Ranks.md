+++
title = "506. Relative Ranks"
date = 2024-05-08 13:04:00
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Sorting", "Heap (Priority Queue)"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/relative-ranks/description/?envType=daily-question&envId=2024-05-08)

You are given an integer array `score` of size `n`, where `score[i]` is the score of the `ith` athlete in a competition. All the scores are guaranteed to be **unique**.

The athletes are **placed** based on their scores, where the `1st` place athlete has the highest score, the `2nd` place athlete has the `2nd` highest score, and so on. The placement of each athlete determines their rank:

- The `1st` place athlete's rank is `"Gold Medal"`.
- The `2nd` place athlete's rank is `"Silver Medal"`.
- The `3rd` place athlete's rank is `"Bronze Medal"`.
- For the `4th` place to the `nth` place athlete, their rank is their placement number (i.e., the `xth` place athlete's rank is `"x"`).

Return an array `answer` of size `n` where `answer[i]` is the **rank** of the `ith` athlete.

### Example 1

> **Input:** score = [5,4,3,2,1]
**Output:** ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
**Explanation:** The placements are [1st, 2nd, 3rd, 4th, 5th].

### Example 2

> **Input:** score = [10,3,8,9,4]
**Output:** ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
**Explanation:** The placements are [1st, 5th, 3rd, 2nd, 4th].

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
import java.util.Arrays;

class Solution {
    public String[] findRelativeRanks(int[] score) {
        int[] sorted = Arrays.copyOf(score, score.length);

        Arrays.sort(sorted);

        String[] result = new String[score.length];

        for (int i = 0; i < score.length; i++) {
            int index = Arrays.binarySearch(sorted, score[i]);
            if (index == score.length - 1) {
                result[i] = "Gold Medal";
            } else if (index == score.length - 2) {
                result[i] = "Silver Medal";
            } else if (index == score.length - 3) {
                result[i] = "Bronze Medal";
            } else {
                result[i] = String.valueOf(score.length - index);
            }
        }

        return result;
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