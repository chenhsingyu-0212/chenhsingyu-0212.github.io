+++
title = "1457. Pseudo-Palindromic Paths in a Binary Tree"
date = 2024-01-24 10:04:05
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Bit Manipulation", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/description/?envType=daily-question&envId=2024-01-24)

Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be **pseudo-palindromic** if at least one permutation of the node values in the path is a palindrome.

*Return the number of **pseudo-palindromic** paths going from the root node to leaf nodes.*

### Example 1

![](https://assets.leetcode.com/uploads/2020/05/06/palindromic_paths_1.png)

> **Input:** root = [2,3,1,3,1,null,1]
**Output:** 2 
**Explanation:** The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).

### Example 2

![](https://assets.leetcode.com/uploads/2020/05/07/palindromic_paths_2.png)

> **Input:** root = [2,1,1,1,3,null,null,null,null,null,1]
**Output:** 1 
**Explanation:** The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).

### Example 3
> **Input:** root = [9]
**Output:** 1

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
import java.util.Stack;

class Solution {
    private int ans;

    public int pseudoPalindromicPaths(TreeNode root) {
        ans = 0;
        Stack<Object[]> stack = new Stack<>();
        stack.push(new Object[]{root, 0});

        while (!stack.isEmpty()) {
            Object[] tmp = stack.pop();
            TreeNode curr = (TreeNode) tmp[0];
            int val = (int) tmp[1];

            if(curr != null){
                val = val ^ (1 << curr.val);

                if(curr.left == null && curr.right == null){
                    if((val & (val - 1)) == 0){
                        ans++;
                    }
                }else{
                    stack.push(new Object[]{curr.left, val});
                    stack.push(new Object[]{curr.right, val});
                }
            }
        }

        return ans;
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