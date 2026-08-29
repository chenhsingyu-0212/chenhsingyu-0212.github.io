+++
title = "2336. Smallest Number in Infinite Set"
date = 2023-04-25 10:20:39
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Hash Table", "Design", "Heap (Priority Queue)"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/smallest-number-in-infinite-set/)

You have a set which contains all positive integers `[1, 2, 3, 4, 5, ...]`.

Implement the `SmallestInfiniteSet` class:

- `SmallestInfiniteSet()` Initializes the **SmallestInfiniteSet** object to contain **all** positive integers.
- `int popSmallest()` **Removes** and returns the smallest integer contained in the infinite set.
- `void addBack(int num)` **Adds** a positive integer `num` back into the infinite set, if it is **not** already in the infinite set.

### Example 1:

> **Input**
> ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
> [[], [2], [], [], [], [1], [], [], []]
> **Output**
> [null, null, 1, 2, 3, null, 1, 4, 5]
> 
> **Explanation**
> SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
> smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
> smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
> smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
> smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
> smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
> smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
>                                    // is the smallest number, and remove it from the set.
> smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
> smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.PriorityQueue;

class SmallestInfiniteSet {
    PriorityQueue<Integer> pQ;

    public SmallestInfiniteSet() {
        pQ = new PriorityQueue<>();
        for(int i = 1; i <= 1000; i++){
            pQ.add(i);
        }
    }
    
    public int popSmallest() {
        int num = pQ.poll();
        return num;
    }
    
    public void addBack(int num) {
        if(!pQ.contains(num)){
            pQ.add(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet obj = new SmallestInfiniteSet();
 * int param_1 = obj.popSmallest();
 * obj.addBack(num);
 */
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