+++
title = "1721. Swapping Nodes in a Linked List"
date = 2023-05-15 09:48:06
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List", "Two Pointers"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/)

You are given the `head` of a linked list, and an integer `k`.

Return *the head of the linked list after **swapping** the values of the `kth` node from the beginning and the `kth` node from the end (the list is **1-indexed**)*.

### Example 1
![](https://imgur.com/4lQ72Hu.png)

> **Input**: head = [1,2,3,4,5], k = 2
**Output**: [1,4,3,2,5]

### Example 2
> **Input**: head = [7,9,6,6,7,8,3,0,9,5], k = 5
**Output**: [7,9,6,6,8,7,3,0,9,5]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
// Definition for singly-linked list.
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
 

class Solution {
    public ListNode swapNodes(ListNode head, int k) {
        ListNode start = head, end = head;
        
        for (int i = 1; i < k; i++) {
            start = start.next;
        }
        
        ListNode curr = start;
        while (curr.next != null) {
            curr = curr.next;
            end = end.next;
        }
        
        int temp = start.val;
        start.val = end.val;
        end.val = temp;
        
        return head;
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