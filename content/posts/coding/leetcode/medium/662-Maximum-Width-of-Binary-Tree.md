+++
title = "662. Maximum Width of Binary Tree"
date = 2023-04-20 09:23:38
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/maximum-width-of-binary-tree/)

Given the `root` of a binary tree, return *the maximum width of the given tree*.

The **maximum width** of a tree is the maximum **width** among all levels.

The **width** of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is **guaranteed** that the answer will in the range of a **32-bit** signed integer.

### Example 1:
![](https://i.imgur.com/BjIsiaN.png)

> **Input:** root = [1,3,2,5,3,null,9]
> **Output:** 4
> **Explanation:** The maximum width exists in the third level with length 4 (5,3,null,9).

### Example 2:
![](https://i.imgur.com/uRAtVHp.png)

> **Input:** root = [1,3,2,5,null,null,9,6,null,7]
> **Output:** 7
> **Explanation:** The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).

### Example 3:
![](https://i.imgur.com/ykiXotC.png)

> **Input:** root = [1,3,2,5]
> **Output:** 2
> **Explanation:** The maximum width exists in the second level with length 2 (3,2).

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import javafx.util.Pair;
import java.util.ArrayDeque;
import java.util.Deque;

// Definition for a binary tree node.
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public int widthOfBinaryTree(TreeNode root) {
        if(root == null) return 0;

        int ans = 0;
        Deque<Pair<TreeNode, Integer>> deque = new ArrayDeque<>();
        deque.add(new Pair<>(root, 0));

        while(!deque.isEmpty()){
            int len = deque.size();
            int start = deque.peekFirst().getValue();
            int end = deque.peekLast().getValue();
            ans = Math.max(ans, end - start + 1);

            for(int i = 0; i < len; i++){
                Pair<TreeNode, Integer> node = deque.pop();
                TreeNode curr = node.getKey();
                int index = node.getValue();

                if(curr.left != null) 
                    deque.add(new Pair<>(curr.left, 2 * index));
                if(curr.right != null)
                    deque.add(new Pair<>(curr.right, 2 * index + 1));
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