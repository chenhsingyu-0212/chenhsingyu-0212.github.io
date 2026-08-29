+++
title = "1372. Longest ZigZag Path in a Binary Tree"
date = 2023-04-19 09:58:24
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Dynamic Programming", "Tree", "Depth-First Search", "Binary Tree"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/)

You are given the `root` of a binary tree.

A ZigZag path for a binary tree is defined as follow:

- Choose **any** node in the binary tree and a direction (right or left).
- If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
- Change the direction from right to left or from left to right.
- Repeat the second and third steps until you can't move in the tree.

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return *the longest **ZigZag** path contained in that tree*.

### Example 1
![](https://i.imgur.com/c7mfyjz.png)
> **Input**: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
**Output**: 3
**Explanation**: Longest ZigZag path in blue nodes (right -> left -> right).

### Example 2
![](https://i.imgur.com/A23S6gD.png)
> **Input**: root = [1,1,1,null,1,null,null,1,1,null,1]
**Output**: 4
**Explanation**: Longest ZigZag path in blue nodes (left -> right -> left -> right).

### Example 3:
> **Input**: root = [1]
**Output**: 0

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    int ans = 0;

    public int longestZigZag(TreeNode root) {
        dfs(root, false, 0);
        dfs(root, true, 0);
        return ans;
    }

    public void dfs(TreeNode node, boolean goLeft, int steps) {
        if (node == null) {
            return ;
        }

        ans = Math.max(ans, steps);

        if (goLeft) {
            dfs(node.left, false, steps + 1);
            dfs(node.right, true, 1);
        } else {
            dfs(node.left, false, 1);
            dfs(node.right, true, steps + 1);
        }
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