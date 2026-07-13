+++
title = "143. Reorder List"
date = 2024-03-23 15:49:43
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List", "Two Pointers", "Stack", "Recursion"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/reorder-list/description/?envType=daily-question&envId=2024-03-23)

You are given the head of a singly linked-list. The list can be represented as:

> L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

> L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

### Example 1

![](https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg)

> **Input:** head = [1,2,3,4]
**Output:** [1,4,2,3]

### Example 2

![](https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg)

> **Input:** head = [1,2,3,4,5]
**Output:** [1,5,2,4,3]

{{% callout "info" %}}
**ListNode 的 class 內容**
```java ListNode
// Definition for singly-linked list.
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
```
{{% /callout %}}

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public void reorderList(ListNode head) {
        Deque<Integer> deque = new ArrayDeque<>();
        ListNode current = head;
        while (current != null) {
            deque.addLast(current.val);
            current = current.next;
        }
        current = head;
        while (current != null) {
            current.val = deque.pollFirst();
            current = current.next;
            if (current != null) {
                current.val = deque.pollLast();
                current = current.next;
            }
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