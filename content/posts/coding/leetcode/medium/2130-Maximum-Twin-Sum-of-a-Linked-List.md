+++
title = "2130. Maximum Twin Sum of a Linked List"
date = 2023-05-17 09:29:29
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List", "Two Pointers", "Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)

In a linked list of size `n`, where `n` is even, the `ith` node **(0-indexed)** of the linked list is known as the **twin** of the `(n-1-i)th` node, if `0 <= i <= (n / 2) - 1`.

- For example, if `n = 4`, then node `0` is the twin of node `3`, and node `1` is the twin of node `2`. These are the only nodes with twins for `n = 4`.

The **twin sum** is defined as the sum of a node and its twin.

Given the `head` of a linked list with even length, return *the maximum twin sum of the linked list*.

### Example 1:
![](https://assets.leetcode.com/uploads/2021/12/03/eg1drawio.png)

> **Input**: head = [5,4,2,1]
**Output**: 6
**Explanation**:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 


### Example 2:
![](https://assets.leetcode.com/uploads/2021/12/03/eg2drawio.png)

> **Input**: head = [4,2,2,3]
**Output**: 7
**Explanation**:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. 


### Example 3:
![](https://assets.leetcode.com/uploads/2021/12/03/eg3drawio.png =300x)

> **Input**: head = [1,100000]
**Output**: 100001
**Explanation**:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
// Definition for singly-linked list.

import java.util.Deque;
import java.util.LinkedList;

public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
 
class Solution {
    public int pairSum(ListNode head) {
        Deque<Integer> dq = new LinkedList<>();

        ListNode curr = new ListNode();
        curr = head;
        while(curr != null){
            dq.add(curr.val);
            curr = curr.next;
        }

        int max = Integer.MIN_VALUE;
        while(!dq.isEmpty() && dq.size() >= 2){
            max = Math.max(max, dq.pollFirst() + dq.pollLast());
        }

        return max;
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