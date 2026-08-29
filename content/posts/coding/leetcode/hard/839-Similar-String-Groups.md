+++
title = "839. Similar String Groups"
date = 2023-04-28 09:29:37
draft = false
categories = ["Coding", "LeetCode", "Hard"]
tags = ["Array", "String", "Depth-First Search", "Breadth-First Search", "Union Find"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/similar-string-groups/)

Two strings `X` and `Y` are similar if we can swap two letters (in different positions) of `X`, so that it equals `Y`. Also two strings `X` and `Y` are similar if they are equal.

For example, `"tars"` and `"rats"` are similar (swapping at positions `0` and `2`), and `"rats"` and `"arts"` are similar, but `"star"` is not similar to `"tars"`, `"rats"`, or `"arts"`.

Together, these form two connected groups by similarity: `{"tars", "rats", "arts"}` and `{"star"}`.  Notice that `"tars"` and `"arts"` are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

We are given a list `strs` of strings where every string in `strs` is an anagram of every other string in `strs`. How many groups are there?

### Example 1:

> **Input:** strs = ["tars","rats","arts","star"]
> **Output:** 2

### Example 2:

> **Input:** strs = ["omv","ovm"]
> **Output:** 1

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java

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