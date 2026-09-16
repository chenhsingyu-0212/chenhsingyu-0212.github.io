+++
title = "41. First Missing Positive"
date = 2024-03-26 19:28:52
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Hash Table"]
+++

:star::star::star::star:

## [題目敘述](https://leetcode.com/problems/first-missing-positive/?envType=daily-question&envId=2024-03-26)

Given an unsorted integer array `nums`. Return *the smallest positive integer that is not present in `nums`.*

You must implement an algorithm that runs in `O(n)` time and uses `O(1)` auxiliary space.

### Example 1
> **Input:** nums = [1,2,0]
**Output:** 3
**Explanation:** The numbers in the range [1,2] are all in the array.

### Example 2
> **Input:** nums = [3,4,-1,1]
**Output:** 2
**Explanation:** 1 is in the array but 2 is missing.

### Example 3
> **Input:** nums = [7,8,9,11,12]
**Output:** 1
**Explanation:** The smallest positive integer 1 is missing.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;

class Solution {
    public int firstMissingPositive(int[] nums) {
        Arrays.sort(nums);
        int tmp = 1;

        for(int i = 0; i < nums.length; i++){
            if(nums[i] == tmp){
                tmp++;
            }else if(nums[i] > tmp){
                return tmp;
            }
        }

        return tmp;
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