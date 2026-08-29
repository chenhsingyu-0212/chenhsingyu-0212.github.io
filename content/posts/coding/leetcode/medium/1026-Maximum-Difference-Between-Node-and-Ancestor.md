+++
title = "1026. Maximum Difference Between Node and Ancestor"
date = 2024-01-11 19:10:36
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Tree", "Depth-First Search", "Binary Tree"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/?envType=daily-question&envId=2024-01-11)

Given the `root` of a binary tree, find the maximum value `v` for which there exist **different** nodes `a` and `b` where `v = |a.val - b.val|` and `a` is an ancestor of `b`.

A node `a` is an ancestor of `b` if either: any child of `a` is equal to `b` or any child of `a` is an ancestor of `b`.

### Example 1
![](https://assets.leetcode.com/uploads/2020/11/09/tmp-tree.jpg)
> **Input:** root = [8,3,10,1,6,null,14,null,null,4,7,13]
**Output:** 7
**Explanation:** We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

### Example 2
![](https://assets.leetcode.com/uploads/2020/11/09/tmp-tree-1.jpg)
> **Input:** root = [1,null,2,null,0,3]
**Output:** 3

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
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int maxAncestorDiff(TreeNode root) {
        int Max = 0;
        ArrayList<TreeNode> tree = new ArrayList<>();

        toNode(root, tree);

        for (TreeNode t : tree) {
            ArrayList<Integer> arr = new ArrayList<>();
            int min = 0;
            int max = 0;
            getAllValue(t, arr);
            if ((arr.size() - 1) != 0) {
                Collections.sort(arr);
                min = arr.get(0);
                max = arr.get(arr.size() - 1);
                if (Max < Math.abs(t.val - min)) {
                    Max = Math.abs(t.val - min);
                }
                if (Max < Math.abs(t.val - max)) {
                    Max = Math.abs(t.val - max);
                }
            }
        }

        return Max;
    }

    public void toNode(TreeNode root, ArrayList<TreeNode> tree) {
        if (root != null) {
            tree.add(root);
        }
        if (root.left != null) {
            toNode(root.left, tree);
        }
        if (root.right != null) {
            toNode(root.right, tree);
        }
    }

    public void getAllValue(TreeNode root, ArrayList<Integer> arr) {
        if (root.left != null) {
            getAllValue(root.left, arr);
        }
        if (root.right != null) {
            getAllValue(root.right, arr);
        }
        if (root != null) {
            arr.add(root.val);
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