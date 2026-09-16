+++
title = "206. Reverse Linked List"
date = 2024-03-21 12:54:08
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Linked List", "Recursion"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/reverse-linked-list/description/?envType=daily-question&envId=2024-03-21)

Given the `head` of a singly linked list, reverse the list, and return *the reversed list.*

### Example 1

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

> **Input:** head = [1,2,3,4,5]
**Output:** [5,4,3,2,1]

### Example 2

![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

> **Input:** head = [1,2]
**Output:** [2,1]

### Example 3
> **Input:** head = []
**Output:** []

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
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = new ListNode();
        ListNode next = new ListNode();

        curr = head;

        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
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