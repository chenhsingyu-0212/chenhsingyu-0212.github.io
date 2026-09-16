+++
title = "1095. Find in Mountain Array"
date = 2023-10-12 11:17:50
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Binary Search", "Interactive"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/find-in-mountain-array/description/?envType=daily-question&envId=2023-10-12)

*(This problem is an **interactive problem**.)*

You may recall that an array `arr` is a **mountain array** if and only if:

- `arr.length >= 3`
- There exists some `i` with `0 < i < arr.length - 1` such that:
  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

Given a mountain array `mountainArr`, return the **minimum** `index` such that `mountainArr.get(index) == target`. If such an `index` does not exist, return `-1`.

**You cannot access the mountain array directly**. You may only access the array using a `MountainArray` interface:

- `MountainArray.get(k)` returns the element of the array at index `k` (0-indexed).
- `MountainArray.length()` returns the length of the array.

Submissions making more than `100` calls to `MountainArray.get` will be judged *Wrong Answer*. Also, any solutions that attempt to circumvent the judge will result in disqualification.

### Example 1
> **Input**: array = [1,2,3,4,5,3,1], target = 3
**Output**: 2
**Explanation**: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.

### Example 2
> **Input**: array = [0,1,2,4,2,1], target = 3
**Output**: -1
**Explanation**: 3 does not exist in the array, so we return -1.

## 解題思路
使用 **Binary Search**
- **First:** 找出 `mountain value` 的 `index`
  用於將 `array` 拆成兩段再進行第二段的 binary search，一個由小到大、一個由大到小
- **Second:** 找出前半段(由小到大)的 `array` 是否有與 `target` 相同的值，`return` 其 `index`
- **Third:** 找出後半段(由大到小)的 `array` 是否有與 `target` 相同的值，`return` 其 `index`
- 最後都沒有找到 `return -1`

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 * public int get(int index) {}
 * public int length() {}
 * }
 */

class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int len = mountainArr.length();
        int left = 0;
        int right = len - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            int valueMid = mountainArr.get(mid);
            int valueLeft = mountainArr.get(mid - 1);
            int valueRight = mountainArr.get(mid + 1);

            if(valueLeft < valueMid && valueRight < valueMid){
                left = mid;
                break;
            } else if(valueLeft > valueMid && valueRight < valueMid){
                right = mid;
            } else if(valueLeft < valueMid && valueRight > valueMid){
                left = mid;
            }
        }

        int leftLeft = 0;
        int leftRight = left;

        while(leftLeft < leftRight){
            int mid = leftLeft + (leftRight - leftLeft) / 2;
            int valueMid = mountainArr.get(mid);

            if(target == valueMid){
                leftLeft = mid;
                break;
            } if(target > valueMid){
                leftLeft = mid + 1;
            }else if(target < valueMid){
                leftRight = mid - 1;
            }
        }

        if(mountainArr.get(leftLeft) == target){
            return leftLeft;
        }

        int rightLeft = left;
        int rightRight = len - 1;

        while(rightLeft < rightRight){
            int mid = rightLeft + (rightRight - rightLeft) / 2;
            int valueMid = mountainArr.get(mid);

            if(target == valueMid){
                rightLeft = mid;
                break;
            } else if(target > valueMid){
                rightRight = mid - 1;
            }else if(target < valueMid){
                rightLeft = mid + 1;
            }
        }

        if(mountainArr.get(rightLeft) == target){
            return rightLeft;
        }

        return -1;
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