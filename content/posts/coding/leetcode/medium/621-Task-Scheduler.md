+++
title = "621. Task Scheduler"
date = 2024-03-19 16:47:22
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Greedy", "Sorting", "Heap (Priority Queue)", "Counting"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/task-scheduler/description/?envType=daily-question&envId=2024-03-19)

You are given an array of CPU `tasks`, each represented by letters A to Z, and a cooling time, `n`. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: **identical** tasks must be separated by at least `n` intervals due to cooling time.

​Return the *minimum number of intervals* required to complete all tasks.

### Example 1
> **Input:** tasks = ["A","A","A","B","B","B"], n = 2
**Output:** 8
**Explanation:** A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

### Example 2
> **Input:** tasks = ["A","C","A","B","D","B"], n = 1
**Output:** 6
**Explanation:** A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task.

### Example 3
> **Input:** tasks = ["A","A","A", "B","B","B"], n = 3
**Output:** 10
**Explanation:** A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int leastInterval(char[] tasks, int n) {
        Map<Character, Integer> map = new HashMap<>();
        for (char c : tasks) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        int max = 0;
        int maxCount = 0;
        for (int count : map.values()) {
            if (count > max) {
                max = count;
                maxCount = 1;
            } else if (count == max) {
                maxCount++;
            }
        }

        int block = max - 1;
        int blockLength = n - (maxCount - 1);
        int emptySlots = block * blockLength;
        int availableTasks = tasks.length - max * maxCount;
        int idles = Math.max(0, emptySlots - availableTasks);

        return tasks.length + idles;
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