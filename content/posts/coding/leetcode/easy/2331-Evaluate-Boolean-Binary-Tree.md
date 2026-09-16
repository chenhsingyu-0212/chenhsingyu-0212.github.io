+++
title = "2331. Evaluate Boolean Binary Tree"
date = 2024-05-16 16:36:18
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Tree", "Depth-First Search", "Binary Tree"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/evaluate-boolean-binary-tree/description/?envType=daily-question&envId=2024-05-16)

You are given the `root` of a **full binary tree** with the following properties:

- **Leaf nodes** have either the value `0` or `1`, where `0` represents `False` and `1` represents `True`.
- **Non-leaf nodes** have either the value `2` or `3`, where `2` represents the boolean `OR` and `3` represents the boolean `AND`.

The **evaluation** of a node is as follows:

- If the node is a leaf node, the evaluation is the **value** of the node, i.e. `True` or `False`.
- Otherwise, **evaluate** the node's two children and **apply** the boolean operation of its value with the children's evaluations.

Return *the boolean result of **evaluating** the `root` node.*

A **full binary tree** is a binary tree where each node has either `0` or `2` children.

A **leaf node** is a node that has zero children.

### Example 1

![](https://assets.leetcode.com/uploads/2022/05/16/example1drawio1.png)

> **Input:** root = [2,1,3,null,null,0,1]
**Output:** true
**Explanation:** The above diagram illustrates the evaluation process.
The AND node evaluates to False AND True = False.
The OR node evaluates to True OR False = True.
The root node evaluates to True, so we return true.

### Example 2

> **Input:** root = [0]
**Output:** false
**Explanation:** The root node is a leaf node and it evaluates to false, so we return false.

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
    public boolean evaluateTree(TreeNode root) {
        return dfs(root);
    }

    public boolean dfs(TreeNode root) {
        if(root.val == 3) return dfs(root.left) && dfs(root.right);
        else if(root.val == 2) return dfs(root.left) || dfs(root.right);
        
        return root.val == 1 ? true : false;
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