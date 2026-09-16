+++
title = "1669. Merge In Between Linked Lists"
date = 2024-03-20 13:11:24
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/boats-to-save-people/)

You are given two linked lists: `list1` and `list2` of sizes `n` and `m` respectively.

Remove `list1`'s nodes from the `ath` node to the `bth` node, and put `list2` in their place.

The blue edges and nodes in the following figure indicate the result:

![](https://assets.leetcode.com/uploads/2020/11/05/fig1.png)

Build the result list and return its head.

### Example 1

![](https://assets.leetcode.com/uploads/2024/03/01/ll.png)

> **Input:** list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
**Output:** [10,1,13,1000000,1000001,1000002,5]
**Explanation:** We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

### Example 2

![](https://assets.leetcode.com/uploads/2020/11/05/merge_linked_list_ex2.png)

> **Input:** list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
**Output:** [0,1,1000000,1000001,1000002,1000003,1000004,6]
**Explanation:** The blue edges and nodes in the above figure indicate the result.

{{% callout "info" %}}
**ListNode 的 class 內容**
```java ListNode
// Definition for singly-linked list.
public class ListNode {
    int val;
    ListNode next;

    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
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
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        ListNode head = new ListNode();
        head.next = list1;

        ListNode prev = head;
        for (int i = 0; i < a; i++) {
            prev = prev.next;
        }

        ListNode next = prev;
        for (int i = 0; i < b - a + 1; i++) {
            next = next.next;
        }

        prev.next = list2;
        while (list2.next != null) {
            list2 = list2.next;
        }

        list2.next = next.next;

        return head.next;
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