+++
title = "239. Sliding Window Maximum"
date = 2023-08-16 15:29:08
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "Queue", "Sliding Window", "Heap (Priority Queue)", "Monotonic Queue"]
+++

:star::star::star::star::star:

## [題目敘述](https://leetcode.com/problems/sliding-window-maximum/)

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return *the max sliding window*.

### Example 1
> **Input**: nums = [1,3,-1,-3,5,3,6,7], k = 3
> **Output**: [3,3,5,5,6,7]
> **Explanation**: 
> ```
> Window position                Max
> ---------------               -----
> [1  3  -1] -3  5  3  6  7       3
>  1 [3  -1  -3] 5  3  6  7       3
>  1  3 [-1  -3  5] 3  6  7       5
>  1  3  -1 [-3  5  3] 6  7       5
>  1  3  -1  -3 [5  3  6] 7       6
>  1  3  -1  -3  5 [3  6  7]      7
> ```

### Example 2
> **Input**: nums = [1], k = 1
**Output**: [1]

## 解題思路
1. Use [Deque](https://www.programiz.com/java-programming/deque) name `dq`.
2. Map `k` integer in the `nums`, and keep the high number in the `dq` first value.
3. Adding `dp` first value in `List` name `res` which will become the answer.
4. Making `List<Integer>` into `int[]` and return.

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        Deque<Integer> dq = new ArrayDeque<>();
        List<Integer> res = new ArrayList<>();

        for (int i = 0; i < k; i++) {
            while (!dq.isEmpty() && nums[i] >= nums[dq.peekLast()]) {
                dq.pollLast();
            }
            dq.offerLast(i);
        }
        res.add(nums[dq.peekFirst()]);

        for (int i = k; i < nums.length; i++) {
            if (dq.peekFirst() == i - k) {
                dq.pollFirst();
            }
            while (!dq.isEmpty() && nums[i] >= nums[dq.peekLast()]) {
                dq.pollLast();
            }

            dq.offerLast(i);
            res.add(nums[dq.peekFirst()]);
        }

        return res.stream().mapToInt(Integer::intValue).toArray();
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
[**slide**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/slide)
滑動 v. 
>  to (cause to) move easily and without interruption over a surface
- sliding doors
{{% /callout %}}

{{% callout "info" "片語 & 搭配詞" %}}
**make sth into sth**
把…變成 make + 受詞(物) + into + 受詞(物)
- They’ve made the spare room into an office. 
  他們已把空置的房間改成辦公室。
{{% /callout %}}