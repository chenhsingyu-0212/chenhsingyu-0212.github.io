+++
title = "1137. N-th Tribonacci Number"
date = 2024-04-25 00:16:22
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Math", "Dynamic Programming", "Memoization"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=daily-question&envId=2024-04-24)

The Tribonacci sequence Tn is defined as follows:

T~0~ = 0, T~1~ = 1, T~2~ = 1, and T~n+3~ = T~n~ + T~n+1~ + T~n+2~ for n >= 0.

Given `n`, return the value of T~n~.

### Example 1

> **Input:** n = 4
**Output:** 4
**Explanation:**
T~3~ = 0 + 1 + 1 = 2
T~4~ = 1 + 1 + 2 = 4

### Example 2

> **Input:** n = 25
**Output:** 1389537

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
class Solution {
    public int tribonacci(int n) {
        int[] Tn = new int[] {0, 1, 1, 0};

        switch(n){
            case 0:
                return Tn[0];
            case 1:
                return Tn[1];
            case 2: 
                return Tn[2];
        }

        for(int i = 3; i <= n; i++){
            Tn[3] = Tn[2] + Tn[1] + Tn[0];
            Tn[0] = Tn[1];
            Tn[1] = Tn[2];
            Tn[2] = Tn[3];
        }

        return Tn[3];
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