+++
title = "2816. Double a Number Represented as a Linked List"
date = 2024-05-08 00:27:09
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Linked List", "Math", "Stack"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/?envType=daily-question&envId=2024-05-09)

You are given the `head` of a **non-empty** linked list representing a non-negative integer without leading zeroes.

Return *the `head` of the linked list after doubling it.*

### Example 1

![](https://assets.leetcode.com/uploads/2023/05/28/example.png)

> **Input:** head = [1,8,9]
**Output:** [3,7,8]
**Explanation:** The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.

### Example 2

![](https://assets.leetcode.com/uploads/2023/05/28/example2.png)

> **Input:** head = [9,9,9]
**Output:** [1,9,9,8]
**Explanation:** The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998. 

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
import java.util.Stack;
 
class Solution {
    public ListNode doubleIt(ListNode head) {
        Stack<Integer> stack = new Stack<>();
        int val = 0;
        while (head != null) {
            stack.push(head.val);
            head = head.next;
        }

        ListNode ans = null;

        while (!stack.isEmpty() || val != 0) {
            ans = new ListNode(0, ans);

            if (!stack.isEmpty()) {
                val += stack.pop() * 2;
            }
            ans.val = val % 10;
            val /= 10;
        }

        return ans;
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