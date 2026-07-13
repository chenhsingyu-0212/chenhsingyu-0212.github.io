+++
title = "876. Middle of the Linked List"
date = 2024-03-07 16:56:50
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Linked List", "Two Pointers"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/middle-of-the-linked-list/description/?envType=daily-question&envId=2024-03-07)

Given the `head` of a singly linked list, return *the middle node of the linked list.*

If there are two middle nodes, return **the second middle** node.

### Example 1
![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

> **Input:** head = [1,2,3,4,5]
**Output:** [3,4,5]
**Explanation:** The middle node of the list is node 3.

### Example 2
![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

> **Input:** head = [1,2,3,4,5,6]
**Output:** [4,5,6]
**Explanation:** Since the list has two middle nodes with values 3 and 4, we return the second one.

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
    public ListNode middleNode(ListNode head) {
        List<Integer> list = new ArrayList<>();
        ListNode current = head;
        while (current != null) {
            list.add(current.val);
            current = current.next;
        }
        int size = list.size();
        int mid = size / 2;
        ListNode result = new ListNode(list.get(mid));
        ListNode temp = result;
        for (int i = mid + 1; i < size; i++) {
            temp.next = new ListNode(list.get(i));
            temp = temp.next;
        }
        return result;
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