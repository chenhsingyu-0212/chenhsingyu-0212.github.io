+++
title = "2620. Counter"
date = 2023-05-06 11:23:28
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Javascript", "Typescript"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/counter/?utm_campaign=PostD2&utm_medium=Post&utm_source=Post&gio_link_id=xogkVqBo)

Given an integer `n`, return a `counter` function. This counter function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

### Example 1:

> **Input:** 
> n = 10 
> ["call","call","call"]
> **Output:** [10,11,12]
> **Explanation:** 
> counter() = 10 // The first time counter() is called, it returns n.
> counter() = 11 // Returns 1 more than the previous time.
> counter() = 12 // Returns 1 more than the previous time.

### Example 2:

> **Input:** 
> n = -2
> ["call","call","call","call","call"]
> **Output:** [-2,-1,0,1,2]
> **Explanation:** counter() initially returns -2. Then increases after each sebsequent call.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "JavaScript" %}}
```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n - 1;
    return function() {
        counter += 1;
        return counter;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```
{{% /tab %}}
{{% tab "TypeScript" %}}
```typescript
function createCounter(n: number): () => number {
    let counter = n - 1;
    return function() {
        counter += 1;
        return counter;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```
{{% /tab %}}
{{< /tabs >}}