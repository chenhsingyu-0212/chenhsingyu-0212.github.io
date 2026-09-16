+++
title = "1339. Maximum Product of Splitted Binary Tree"
date = 2026-01-07 16:10:12
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Tree", "Depth-First Search", "Binary Tree"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/description/?envType=daily-question&envId=2026-01-07)

Given the `root` of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return *the maximum product of the sums of the two subtrees*. Since the answer may be too large, return it **modulo** `10^9 + 7`.

**Note** that you need to maximize the answer before taking the mod and not after taking it.

### Example 1

![](https://assets.leetcode.com/uploads/2020/01/21/sample_1_1699.png)

> **Input:** root = [1,2,3,4,5,6]
**Output:** 110
**Explanation:** Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)

### Example 2

![](https://assets.leetcode.com/uploads/2020/01/21/sample_2_1699.png)

> **Input:** root = [1,null,2,3,4,null,null,5,6]
**Output:** 90
**Explanation:** Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)

## 解題思路

1. 先用 DFS 把整棵樹的數值相加起來
2. 接著再跑一次 DFS 計算每個 edge 切開後，其中一側的數值。
3. 將 DFS 


## Complexity
- Time complexity: $O(n)$

- Space complexity: 
  - Worst Case: $O(n)$
  - Average Case / Best Case: $O(\log n)$

## Solution

{{< tabs >}}
{{% tab "Java DFS" %}}

```java
class Solution {
    int MOD = 1_000_000_007;
    long result = 0;
    long sum = 0;

    public int maxProduct(TreeNode root) { 
        sum = totalSum(root);
        maxProductHelper(root);

        return (int)(result % MOD);
    }

    private long maxProductHelper(TreeNode node) {
        if (node == null) return 0;

        long leftSum = maxProductHelper(node.left);
        long rightSum = maxProductHelper(node.right);
        long currentSum = node.val + leftSum + rightSum;

        long product = currentSum * (sum - currentSum);
        result = Math.max(result, product);

        return currentSum;
    }

    private long totalSum(TreeNode node) {
        if (node == null)  return 0;
        return node.val + totalSum(node.left) + totalSum(node.right);
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