+++
title = "2369. Check if There is a Valid Partition For The Array"
date = 2023-08-13 19:59:37
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/)

You are given a **0-indexed** integer array `nums`. You have to partition the array into one or more **contiguous** subarrays.

We call a partition of the array **valid** if each of the obtained subarrays satisfies one of the following conditions:

1. The subarray consists of **exactly** `2` equal elements. For example, the subarray `[2,2]` is good.
2. The subarray consists of **exactly** `3` equal elements. For example, the subarray `[4,4,4]` is good.
3. The subarray consists of **exactly** `3` consecutive increasing elements, that is, the difference between adjacent elements is `1`. For example, the subarray `[3,4,5]` is good, but the subarray `[1,3,5]` is not.

Return *`true` if the array has **at least** one valid partition.* Otherwise, return **false**.

### Example 1
> **Input**: nums = [4,4,4,5,6]
**Output**: true
**Explanation**: The array can be partitioned into the subarrays [4,4] and [4,5,6].
This partition is valid, so we return true.

### Example 2
> **Input**: nums = [1,1,1,2]
**Output**: false
**Explanation**: There is no valid partition for this array.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    Map<Integer, Boolean> map = new HashMap<>();

    public boolean prefixIsValid(int[] nums, int i) {
        if (map.containsKey(i)) {
            return map.get(i);
        }
        boolean ans = false;

        if (i > 0 && nums[i] == nums[i - 1]) {
            ans |= prefixIsValid(nums, i - 2);
        }
        if (i > 1 && nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2]) {
            ans |= prefixIsValid(nums, i - 3);
        }
        if (i > 1 && nums[i] == nums[i - 1] + 1 && nums[i - 1] == nums[i - 2] + 1) {
            ans |= prefixIsValid(nums, i - 3);
        }
        map.put(i, ans);
        return ans;
    }

    public boolean validPartition(int[] nums) {
        int n = nums.length;
        map.put(-1, true);

        return prefixIsValid(nums, n - 1);
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
[**partition**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/partition)
分割、隔開 v.
>  to divide one part of a room from another with a thin wall
- Why don't you **partition** that large room into a lounge and a dining-room?

[**contiguous**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/contiguous)
連續的 adj.
> next to or touching another, usually similar, thing
- The two states are **contiguous with/to** each other, but the laws are quite different.

[**valid**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/valid)
有效的 adj.
> based on truth or reason; able to be accepted
- My way of thinking might be different from yours, but it's **equally valid**.

[**obtain**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/obtain)
獲得 v.
> to get something, especially by asking for it, buying it, working for it, or producing it from something else
- First editions of these books are now almost impossible to **obtain**.

[**satisfy**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/satisfy)
滿足 v.
> to please someone by giving them what they want or need
- Come on, **satisfy** my curiosity (= tell me what I want to know) - what happened last night?

[**exactly**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/exactly)
確切地 adv.
> used when you are giving or asking for information that is completely correct
- It tastes exactly the same as the real thing, but has half the fat.

[**consecutive**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/consecutive)
連續的 adj.
> Consecutive events, numbers, etc. follow one after another without an interruption
- This is the fifth consecutive weekend that I've spent working.

[**adjacent**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/adjacent)
鄰近的 adj.
> very near, next to, or touching
- They lived in a house adjacent to the railway.
{{% /callout %}}

{{% callout "info" "片語 & 搭配詞" %}}
**to obtain permission**
獲得許可

**satisfy conditions/needs/requirements**
滿足條件/需求/要求

**consists of**
由...組成


{{% /callout %}}