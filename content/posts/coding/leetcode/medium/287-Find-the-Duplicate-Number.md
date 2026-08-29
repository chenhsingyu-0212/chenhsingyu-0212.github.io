+++
title = "287. Find the Duplicate Number"
date = 2023-09-19 12:37:41
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/find-the-duplicate-number/?envType=daily-question&envId=2023-09-19)

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

### Example 1
> **Input**: nums = [1,3,4,2,2]
**Output**: 2

### Example 2
> **Input**: nums = [3,1,3,4,2]
**Output**: 3

## 解題思路
利用 `Set` 資料結構來處理此題。

## Solution
{{< tabs >}}
{{% tab "Java use Floyd's Cycle Detection Algorithm" %}}
```java
public class Other {
    public int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[0];

        do{
            slow = nums[slow];
            fast = nums[nums[fast]];
        }while(slow != fast);

        slow = nums[0];

        while(slow != fast){
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}
```
{{% /tab %}}
{{% tab "Java use Set" %}}
```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int findDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();

        for(int num : nums){
            if(set.contains(num)){
                return num;
            }
            set.add(num);
        }

        return -1;
    }
}
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <vector>
using namespace std;

class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int slow = nums[0];
        int fast = nums[0];

        do{
            slow = nums[slow];
            fast = nums[nums[fast]];
        }while(slow != fast);

        slow = nums[0];

        while(slow != fast){
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
};
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}