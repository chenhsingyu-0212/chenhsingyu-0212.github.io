+++
title = "2621. Sleep"
date = 2023-05-15 10:35:00
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Javascript", "Typescript"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/sleep/?utm_campaign=PostD11&utm_medium=Post&utm_source=Post&gio_link_id=5Rp2Wmzo)

Given a positive integer `millis`, write an asyncronous function that sleeps for `millis` milliseconds. It can resolve any value.

### Example 1
> **Input**: millis = 100
**Output**: 100
**Explanation**: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
### Example 2
> **Input**: millis = 200
**Output**: 200
**Explanation**: It should return a promise that resolves after 200ms.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "JavaScript" %}}
```javascript
/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(function(val){
        return setTimeout(val, millis);
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```
{{% /tab %}}
{{% tab "TypeScript" %}}
```typescript
async function sleep(millis: number): Promise<void> {
    return new Promise(function(val: any): any{
        return setTimeout(val, millis);
    });
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```
{{% /tab %}}
{{< /tabs >}}