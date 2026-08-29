+++
title = "234. Palindrome Linked List"
date = 2024-03-22 16:19:15
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Linked List", "Two Pointers", "Stack", "Recursion"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/palindrome-linked-list/description/?envType=daily-question&envId=2024-03-22)

Given the `head` of a singly linked list, return *`true` if it is a palindrome or `false` otherwise.*

> **palindrome**
> A palindrome is a sequence that reads the same forward and backward.

### Example 1

![](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)

> **Input:** head = [1,2,2,1]
**Output:** true

### Example 2

![](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)

> **Input:** head = [1,2]
**Output:** false

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
    public boolean isPalindrome(ListNode head) {
        Stack<Integer> stack = new Stack<>();
        ListNode temp = head;
        while(temp != null){
            stack.push(temp.val);
            temp = temp.next;
        }
        while(head != null){
            if(head.val != stack.pop()){
                return false;
            }
            head = head.next;
        }
        return true;
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