+++
title = "905. Sort Array By Parity"
date = 2023-09-28 12:44:20
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Two Pointers", "Sorting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/sort-array-by-parity/description/?envType=daily-question&envId=2023-09-28)

Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.

Return ***any array** that satisfies this condition*.

### Example 1
> **Input**: nums = [3,1,2,4]
**Output**: [2,4,3,1]
**Explanation**: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

### Example 2
> **Input**: nums = [0]
**Output**: [0]

## 解題思路
- 用 `for` 迴圈遍歷 `int[] nums`
- 利用 `deque` 資料結構
  - 若遇到數值為偶數的，利用 `addFirst()` 至於 deque 前面
  - 若遇到數值為奇數的，利用 `addLast()` 至於 deque 後面
- 最後將 `deque` 轉成 `int[]` 輸出
{{% callout "info" %}}
**註記:** 將 `LinkedList<>` 轉成 `int[]` 陣列輸出為答案
- `list.stream().mapToInt(Integer::intValue).toArray();`
- `queue.stream().mapToInt(Integer::intValue).toArray();`
- `deque.stream().mapToInt(Integer::intValue).toArray();`
{{% /callout %}}

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Deque;
import java.util.LinkedList;

class Solution {
    public int[] sortArrayByParity(int[] nums) {
        Deque<Integer> dq = new LinkedList<>();

        for(int num : nums){
            if(num % 2 == 0){
                dq.addFirst(num);
            }else{
                dq.addLast(num);
            }
        }

        return dq.stream().mapToInt(Integer::intValue).toArray();
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