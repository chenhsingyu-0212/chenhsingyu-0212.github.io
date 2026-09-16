+++
title = "2487. Remove Nodes From Linked List"
date = 2024-05-06 21:57:07
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List", "Stack", "Recursion", "Monotonic Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/remove-nodes-from-linked-list/description/?envType=daily-question&envId=2024-05-06)

You are given the `head` of a linked list.

Remove every node which has a node with a greater value anywhere to the right side of it.

Return *the `head` of the modified linked list.*

### Example 1

![](https://assets.leetcode.com/uploads/2022/10/02/drawio.png)

> **Input:** head = [5,2,13,3,8]
> **Output:** [13,8]
> **Explanation:** The nodes that should be removed are 5, 2 and 3.
> - Node 13 is to the right of node 5.
> - Node 13 is to the right of node 2.
> - Node 8 is to the right of node 3.

### Example 2

> **Input:** head = [1,1,1,1]
**Output:** [1,1,1,1]
**Explanation:** Every node has value 1, so no nodes are removed.

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
    public ListNode removeNodes(ListNode head) {
        ListNode curr = head;
        Deque<Integer> dq = new ArrayDeque<>();
        
        while (curr != null) {
            while(dq.size() > 0 && dq.peekLast() < curr.val) {
                dq.pollLast();
            }
            dq.add(curr.val);
            curr = curr.next;
        }

        ListNode ans = new ListNode();
        ListNode temp = ans;

        while (!dq.isEmpty()) {
            temp.next = new ListNode(dq.pollFirst());
            temp = temp.next;
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