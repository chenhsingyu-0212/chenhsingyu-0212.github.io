+++
title = "1458. Max Dot Product of Two Subsequences"
date = 2026-01-08 17:04:57
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Dynamic Programming"]
+++

:star::star::star::star:

## [題目敘述](https://leetcode.com/problems/max-dot-product-of-two-subsequences/description/?envType=daily-question&envId=2026-01-08)

Given two arrays `nums1` and `nums2`.

Return the maximum dot product between **non-empty** subsequences of nums1 and nums2 with the same length.

A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `[2,3,5]` is a subsequence of `[1,2,3,4,5]` while `[1,5,3]` is not).

### Example 1

> **Input:** nums1 = [2,1,-2,5], nums2 = [3,0,-6]
**Output:** 18
**Explanation:** Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18.

### Example 2

> **Input:** nums1 = [3,-2], nums2 = [2,-6,7]
**Output:** 21
**Explanation:** Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21.

### Example 3

> **Input:** nums1 = [-1,-1], nums2 = [1,1]
**Output:** -1
**Explanation:** Take subsequence [-1] from nums1 and subsequence [1] from nums2.
Their dot product is -1.

## 解題思路

## Complexity
- Time complexity: $O(nm)$

- Space complexity: $O(nm)$

## Solution

{{< tabs >}}
{{% tab "Java DP" %}}

```java
class Solution {
    public int maxDotProduct(int[] nums1, int[] nums2) {
        int[][] dp = new int[nums1.length + 1][nums2.length + 1];

        for (int i = 0; i <= nums1.length; i++) {
            for (int j = 0; j <= nums2.length; j++) {
                dp[i][j] = Integer.MIN_VALUE / 2;
            }
        }

        for (int i = nums1.length - 1; i >= 0; i--) {
            for (int j = nums2.length - 1; j >= 0; j--) {
                int product = nums1[i] * nums2[j];
                dp[i][j] = Math.max(product, Math.max(dp[i + 1][j], dp[i][j + 1]));
                dp[i][j] = Math.max(dp[i][j], product + dp[i + 1][j + 1]);
            }
        }
        return dp[0][0];
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