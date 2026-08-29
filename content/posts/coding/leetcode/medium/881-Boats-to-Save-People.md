+++
title = "881. Boats to Save People"
date = 2023-04-03 16:26:41
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Two Pointers", "Greedy", "Sorting"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/boats-to-save-people/)

You are given an array `people` where `people[i]` is the weight of the `ith` person, and an **infinite number of boats** where each boat can carry a maximum weight of `limit`. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most `limit`.

Return the *minimum* number of boats to carry every given person.

### Example 1
>
> **Input:** people = [1,2], limit = 3
> **Output:** 1
> **Explanation:** 1 boat (1, 2)

### Example 2
>
> **Input:** people = [3,2,2,1], limit = 3
> **Output:** 3
> **Explanation:** 3 boats (1, 2), (2) and (3)

### Example 3
>
> **Input:** people = [3,5,3,4], limit = 5
> **Output:** 4
> **Explanation:** 4 boats (3), (3), (4), (5)

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java Solution.java
import java.util.Arrays;

class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int ans = 0;

        int left = 0, right = people.length - 1;
        while (left <= right) {
            if (people[left] + people[right--] <= limit) {
                left++;
            }
            ans++;
        }

        return ans;
    }
}
```

{{% /tab %}}
{{% tab "C++ Solution.cc" %}}

```cpp
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort(people.begin(), people.end());
        int ans = 0;

        int left = 0, right = people.size() - 1;
        while (left <= right) {
            if (people[left] + people[right--] <= limit) {
                left++;
            }
            ans++;
        }

        return ans;
    }
};
```

{{% /tab %}}
{{% tab "Python" %}}

```pyhton

```

{{% /tab %}}
{{< /tabs >}}