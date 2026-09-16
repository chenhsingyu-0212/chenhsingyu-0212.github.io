+++
title = "1171. Remove Zero Sum Consecutive Nodes from Linked List"
date = 2024-03-12 13:42:48
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Hash Table", "Linked List"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/?envType=daily-question&envId=2024-03-12)

Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

(Note that in the examples below, all sequences are serializations of `ListNode` objects.)

### Example 1
> **Input:** head = [1,2,-3,3,1]
**Output:** [3,1]
**Note:** The answer [1,2,1] would also be accepted.

### Example 2
> **Input:** head = [1,2,3,-3,4]
**Output:** [1,2,4]

### Example 3
> **Input:** head = [1,2,3,-3,-2]
**Output:** [1]

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
import java.util.LinkedList;

class Solution {
    public ListNode removeZeroSumSublists(ListNode head) {
        LinkedList<Integer> list = new LinkedList<>();

        while (head != null) {
            list.add(head.val);
            head = head.next;
        }

        for (int i = 0; i < list.size(); i++) {
            int sum = 0;
            for (int j = i; j < list.size(); j++) {
                sum += list.get(j);
                if (sum == 0) {
                    for (int k = j; k >= i; k--) {
                        list.remove(k);
                    }
                    i = -1;
                    break;
                }
            }
        }

        if(list.size() == 0) return null;

        ListNode result = new ListNode();
        ListNode temp = result;
        for (int i = 0; i < list.size(); i++) {
            temp.val = list.get(i);
            if (i != list.size() - 1) {
                temp.next = new ListNode();
                temp = temp.next;
            }
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