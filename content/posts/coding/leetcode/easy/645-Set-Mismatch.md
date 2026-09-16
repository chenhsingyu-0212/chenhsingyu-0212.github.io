+++
title = "645. Set Mismatch"
date = 2024-01-22 11:17:58
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Hash Table", "Bit Manipulation", "Sorting"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/set-mismatch/description/?envType=daily-question&envId=2024-01-22)

You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in **repetition of one** number and **loss of another** number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return *them in the form of an array*.

### Example 1
> **Input:** nums = [1,2,2,4]
**Output:** [2,3]

### Example 2
> **Input:** nums = [1,1]
**Output:** [1,2]

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;

class Solution {
    public int[] findErrorNums(int[] nums) {
        int len = nums.length;
        int[] mark = new int[len];
        ArrayList<Integer> arr = new ArrayList<>();

        for(int i = 0; i < len; i++){
            mark[nums[i] - 1]++;
            if(mark[nums[i] - 1] == 2){
                arr.add(nums[i]);
            }
        }

        for(int i = 0; i < len; i++){
            if(mark[i] == 0){
                arr.add(i + 1);
            }
        }

        return arr.stream().mapToInt(i -> i).toArray();
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