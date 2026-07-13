+++
title = "2439. Minimize Maximum of Array"
date = 2023-04-05 11:58:41
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Prefix Sum"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/minimize-maximum-of-array/)

You are given a **0-indexed** array `nums` comprising of `n` non-negative integers.

In one operation, you must:

- Choose an integer `i` such that `1 <= i < n` and `nums[i] > 0`.
- Decrease `nums[i]` by 1.
- Increase `nums[i - 1]` by 1.

Return *the **minimum** possible value of the **maximum** integer of `nums` after performing **any** number of operations*.

### Example 1:
> **Input:** nums = [3,7,1,6]
> **Output:** 5
> **Explanation:**
> One set of optimal operations is as follows:
> 1. Choose i = 1, and nums becomes [4,6,1,6].
> 2. Choose i = 3, and nums becomes [4,6,2,5].
> 3. Choose i = 1, and nums becomes [5,5,2,5].
The maximum integer of nums is 5. It can be shown that the maximum number cannot be less than 5.
Therefore, we return 5.

### Example 2:
> **Input:** nums = [10,1]
> **Output:** 10
> **Explanation:**
It is optimal to leave nums as is, and since 10 is the maximum value, we return 10.

## 解題思路
在題目敘述中我們可以知道，`nums` 這個陣列無法將前面較大的數值向後移，只能將後面的數值向前移動。

因此我們可以藉由 prefix sum 來計算到目前的總值，除以現在的陣列數目，得到平均值利用高斯取頂(ceiling function) $\Rightarrow$ 得到當前 subArray 數目的最大值

並與前面的最大值比較:
- 如果**比較大** $\Rightarrow$ 就代表後面的值可以再向前移動。
- 如果**比較小** $\Rightarrow$ 就表示雖然平均最大值可能有更小的，但是前面的值不可以往後移，因此不採用。

## Algorithm
1. Initialize `ans = 0` and `prefixSum = 0`.
2. Iterate over `nums`, for each index `i`:
    - Update the prefix sum as `prefixSum += nums[i]`.
    - Check the maximum value we can obtain by averaging `prefixSum` into `i + 1` evenly using **ceiling division**.
    - Take the larger one from `ans` and the result from the previous integer division.
3. Return `ans`

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int minimizeArrayValue(int[] nums) {
        long prefixSum = 0;
        int ans = 0;

        for(int i = 0; i < nums.length; i++){
            prefixSum += nums[i];
            ans = Math.max(ans, (int)Math.ceil(prefixSum * 1.0 / (i + 1)));
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

{{% callout "success" "單字" %}}
[**decrease**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/decrease)
減少
> to become less, or to make something become less

[**increase**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/increase)
增加
> to (make something) become larger in amount or size
{{% /callout %}}

{{% callout "info" "片語 & 搭配詞" %}}
**comprising of**
包括
{{% /callout %}}