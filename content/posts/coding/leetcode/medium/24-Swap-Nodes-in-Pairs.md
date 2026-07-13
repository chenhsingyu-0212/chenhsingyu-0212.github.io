+++
title = "24. Swap Nodes in Pairs"
date = 2023-05-16 14:38:14
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List", "Recursion"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/swap-nodes-in-pairs/description/)

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

### Example 1
![](https://imgur.com/HJxT8bR.png)
> **Input**: head = [1,2,3,4]
**Output**: [2,1,4,3]

### Example 2
> **Input**: head = []
**Output**: []

### Example 3
> **Input**: head = [1]
**Output**: [1]

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
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode ans = new ListNode(0);
        ans.next = head;
        ListNode curr = ans;
        
        while (curr.next != null && curr.next.next != null) {
            ListNode first = curr.next;
            ListNode second = curr.next.next;
            curr.next = second;
            first.next = second.next;
            second.next = first;
            
            curr = curr.next.next;
        }
        
        return ans.next;
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