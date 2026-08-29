+++
title = "979. Distribute Coins in Binary Tree"
date = 2024-05-18 08:58:54
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Tree", "Depth-First Search", "Binary Tree"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/distribute-coins-in-binary-tree/description/?envType=daily-question&envId=2024-05-18)

You are given the `root` of a binary tree with `n` nodes where each `node` in the tree has `node.val` coins. There are `n` coins in total throughout the whole tree.

In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent.

Return *the **minimum** number of moves required to make every node have **exactly** one coin.*

### Example 1

![](https://assets.leetcode.com/uploads/2019/01/18/tree1.png)

> **Input:** root = [3,0,0]
**Output:** 2
**Explanation:** From the root of the tree, we move one coin to its left child, and one coin to its right child.

### Example 2

![](https://assets.leetcode.com/uploads/2019/01/18/tree2.png)

> **Input:** root = [0,3,0]
**Output:** 3
**Explanation:** From the left child of the root, we move two coins to the root [taking two moves]. Then, we move one coin from the root of the tree to the right child.

{{% callout "info" %}}
**TreeNode 的 class 內容**

```java TreeNode
// Definition for a binary tree node.

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

{{% /callout %}}

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    private int moves = 0;
    
    public int distributeCoins(TreeNode root) {
        moves = 0;
        dfs(root);
        return moves;
    }

    public int dfs(TreeNode root) {
        if(root == null) {
            return 0;
        }
        int left = dfs(root.left);
        int right = dfs(root.right);
        moves += Math.abs(left) + Math.abs(right);
        return root.val + left + right - 1;
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