+++
title = "1048. Longest String Chain"
date = 2023-09-23 11:14:36
draft = false
categories = ["Coding", "LeetCode", "Medium"]
tags = ["Array", "Hash Table", "Two Pointers", "String", "Dynamic Programming"]
+++

:star::star::star:

## [題目敘述](https://leetcode.com/problems/longest-string-chain/?envType=daily-question&envId=2023-09-23)

You are given an array of `words` where each word consists of lowercase English letters.

`wordA` is a **predecessor** of `wordB` if and only if we can insert **exactly one** letter anywhere in `wordA` **without changing the order of the other characters** to make it equal to `wordB`.

- For example, `"abc"` is a **predecessor** of `"abac"`, while `"cba"` is not a **predecessor** of `"bcad"`.

A **word chain** is a sequence of words `[word1, word2, ..., wordk]` with `k >= 1`, where `word1` is a **predecessor** of `word2`, `word2` is a **predecessor** of `word3`, and so on. A single word is trivially a **word chain** with `k == 1`.

Return *the **length** of the **longest possible word chain** with words chosen from the given list of `words`*.

### Example 1
> **Input**: words = ["a","b","ba","bca","bda","bdca"]
**Output**: 4
**Explanation**: One of the longest word chains is ["a","ba","bda","bdca"].

### Example 2
> **Input**: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
**Output**: 5
**Explanation**: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].

### Example 3
> **Input**: words = ["abcd","dbqca"]
**Output**: 1
**Explanation**: The trivial word chain ["abcd"] is one of the longest word chains.
["abcd","dbqca"] is not a valid word chain because the ordering of the letters is changed.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int longestStrChain(String[] words) {
        int ans = 0;
        Arrays.sort(words, (a, b) -> a.length() - b.length());
        Map<String, Integer> map = new HashMap<>();

        for(String word : words){
            map.put(word, 1);
            for(int i = 0; i < word.length(); i++){
                String prev = word.substring(0, i) + word.substring(i + 1);
                if(map.containsKey(prev)){
                    map.put(word, Math.max(map.get(word), map.get(prev) + 1));
                }
            }
            ans = Math.max(ans, map.get(word));
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