+++
title = "498. Diagonal Traverse"
date = 2025-08-25 19:08:21
draft = false
categories = ["Coding", "LeetCode", "Medium"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/diagonal-traverse/description/?envType=daily-question&envId=2025-08-25)

Given an `m x n` matrix `mat`, return *an array of all the elements of the array in a diagonal order*.

### Example 1

![](https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg)

> **Input:** mat = [[1,2,3],[4,5,6],[7,8,9]]
**Output:** [1,2,4,7,5,3,6,8,9]

### Example 2

> **Input:** mat = [[1,2],[3,4]]
**Output:** [1,2,3,4]

## 解題思路

## Solution

{{< tabs >}}
{{% tab "Java" %}}

```java
import java.util.ArrayList;

class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        if (mat == null || mat.length == 0) {
            return new int[0];
        }

        int row = mat.length;
        int col = mat[0].length;
        ArrayList<Integer> ans = new ArrayList<>(row * col);

        for (int i = 0; i <= (row + col - 2); i++) {
            int r = (i < col) ? 0 : i - col + 1;
            int c = (i < col) ? i : col - 1;
            ArrayList<Integer> temp = new ArrayList<>();

            while (r < row && c >= 0) {
                temp.add(mat[r][c]);
                r++;
                c--;
            }

            if ((r + c) % 2 == 0) {
                // move up
                for (int j = temp.size() - 1; j >= 0; j--) {
                    ans.add(temp.get(j));
                }
            } else {
                // move down
                ans.addAll(temp);
            }
        }

        return ans.stream().mapToInt(i -> i).toArray();
    }
}
```

{{% /tab %}}
{{% tab "C++" %}}

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    std::vector<int> findDiagonalOrder(std::vector<std::vector<int>>& mat) {
        int row = mat.size();
        int col = mat[0].size();
        std::vector<int> result;

        for(int i = 0; i < row + col - 1; i++) {
            int r = (i < col) ? 0 : i - col + 1;
            int c = (i < col) ? i : col - 1;
            std::vector<int> temp;

            while(r < row && c >= 0) {
                temp.push_back(mat[r][c]);
                r++;
                c--;
            }

            if((r + c) % 2 == 0) {
                std::reverse(temp.begin(), temp.end());
            }
            result.insert(result.end(), temp.begin(), temp.end());
        }

        return result;
    }
};
```

{{% /tab %}}
{{% tab "Python" %}}

```pyhton

```

{{% /tab %}}
{{< /tabs >}}