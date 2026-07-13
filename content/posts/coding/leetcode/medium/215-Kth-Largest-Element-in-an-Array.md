+++
title = "215. Kth Largest Element in an Array"
date = 2023-08-14 21:56:51
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"]
+++

:star::star:

## [題目敘述](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Given an integer array `nums` and an integer `k`, return *the `kth` largest element in the array*.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Can you solve it without sorting?

### Example 1
> **Input**: nums = [3,2,1,5,6,4], k = 2
**Output**: 5

### Example 2
> **Input**: nums = [3,2,3,1,2,4,5,5,6], k = 4
**Output**: 4

## 解題思路
Use the [PriorityQueue](https://www.programiz.com/java-programming/priorityqueue) which is a data structure. 

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> PQ = new PriorityQueue<>(new PQComparator());

        for (int num : nums) {
            PQ.add(num);
        }

        int ans = 0;
        for (int i = 0; i < k; i++) {
            ans = PQ.poll();
        }

        return ans;
    }
}

class PQComparator implements Comparator<Integer> {

    @Override
    public int compare(Integer number1, Integer number2) {
        int value = number1.compareTo(number2);
        // elements are sorted in reverse order
        if (value > 0) {
            return -1;
        } else if (value < 0) {
            return 1;
        } else {
            return 0;
        }
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
[**distinct**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/distinct)
清楚的 adj.
- There's a distinct smell of cigarettes in here.
>  clearly noticeable; that certainly exists
{{% /callout %}}

{{% callout "info" "片語 & 搭配詞" %}}
**smell of + sth**
...的香味
{{% /callout %}}