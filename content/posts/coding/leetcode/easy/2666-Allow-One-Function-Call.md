+++
title = "2666. Allow One Function Call"
date = 2023-05-12 11:26:20
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Javascript", "Typescript"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/allow-one-function-call/description/?utm_campaign=PostD8&utm_medium=Post&utm_source=Post&gio_link_id=a9By01Oo)

Given a function `fn`, return a new function that is identical to the original function except that it ensures `fn` is called at most once.

- The first time the returned function is called, it should return the same result as `fn`.
- Every subsequent time it is called, it should return `undefined`.

### Example 1
> **Input**: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
**Output**: [{"calls":1,"value":6}]
**Explanation**:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called

### Example 2
> **Input**: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
**Output**: [{"calls":1,"value":140}]
**Explanation**:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called

## 解題思路

## Solution
{{< tabs >}}
{{% tab "JavaScript" %}}
```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCall = false;
    return function(...args){
        if(!isCall){
            isCall = true;
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```
{{% /tab %}}
{{% tab "TypeScript" %}}
```typescript
function once<T extends (...args: any[]) => any>(fn: T):
    ((...args: Parameters<T>) => ReturnType<T> | undefined) {
    let isCall: Boolean = false;
    return function (...args) {
        if(!isCall){
            isCall = true;
            return fn(...args);
        }
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```
{{% /tab %}}
{{< /tabs >}}