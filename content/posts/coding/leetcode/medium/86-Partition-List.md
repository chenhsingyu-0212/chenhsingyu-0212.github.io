+++
title = "86. Partition List"
date = 2023-08-15 23:59:54
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List", "Two Pointers"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/partition-list/)

Given the `head` of a linked list and a value `x`, partition it such that all nodes **less than** `x` come before nodes **greater than or equal** to `x`.

You should **preserve** the original relative order of the nodes in each of the two partitions.

### Example 1
![](https://assets.leetcode.com/uploads/2021/01/04/partition.jpg)

> **Input**: head = [1,4,3,2,5,2], x = 3
**Output**: [1,2,2,4,3,5]

### Example 2
> **Input**: head = [2,1], x = 2
**Output**: [1,2]

## 解題思路
1. Use two `ListNode`, `less` and `greater`, to hold nodes with values less than `x` and which node greater than or equal to `x`.
2. Linking two `ListNode` togother, attach the `greater` to the end of the `less`.

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
    public ListNode partition(ListNode head, int x) {
        ListNode less = new ListNode(0);
        ListNode lessTail = less;
        ListNode greater = new ListNode(0);
        ListNode greaterTail = greater;
        
        while (head != null) {
            if (head.val < x) {
                lessTail.next = new ListNode(head.val);
                lessTail = lessTail.next;
            } else {
                greaterTail.next = new ListNode(head.val);
                greaterTail = greaterTail.next;
            }
            head = head.next;
        }

        lessTail.next = greater.next;
        return less.next;
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

{{% callout "success" "單字" %}}
[**preserve**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/preserve)
保存 v.
> to keep something as it is, especially in order to prevent it from decaying or being damaged or destroyed
- to **preserve** the environment
- We want to **preserve** the character of the town while improving the facilities.
{{% /callout %}}