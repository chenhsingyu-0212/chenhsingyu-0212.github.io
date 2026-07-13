+++
title = "1732. Find the Highest Altitude"
date = 2023-06-19 14:31:22
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Array", "Prefix Sum"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/find-the-highest-altitude/)

There is a biker going on a road trip. The road trip consists of `n + 1` points at different altitudes. The biker starts his trip on point `0` with altitude equal `0`.

You are given an integer array `gain` of length `n` where `gain[i]` is the **net gain in altitude** between points `i`​​​​​​ and `i + 1` for all `(0 <= i < n)`. Return *the **highest altitude** of a point*.

### Example 1
> **Input**: gain = [-5,1,5,0,-7]
> **Output**: 1
> **Explanation**: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

### Example 2
> **Input**: gain = [-4,-3,-2,-1,4,3,2]
> **Output**: 0
> **Explanation**: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
class Solution {
    public int largestAltitude(int[] gain) {
        int curr = 0;
        int ans = curr;

        for(int i = 0; i < gain.length; i++){
            curr += gain[i];
            ans = Math.max(ans, curr);
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
[**altitudes**](https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E/altitude?q=altitudes)
海拔，海拔高度
> height above sea level
{{% /callout %}}

{{% callout "info" "片語 & 搭配詞" %}}
**consist of** 
由...組成
- **[主動]群體 + consist of + 部分**
  The committee consists of doctors and nurses.
  該委員會由醫生和護士組成。
  →「群體」committee 當主詞，consist of + 「部分」 doctors and nurses
> 1. consist 必須搭配 of，consist of 只能用主動語態。
> 2. 「群體」當主詞，consist of + 「部分」。

**be composed of**
由...組成
- **[被動]群體 + be composed of + 部分**
  Water is composed of hydrogen and oxygen.
  水由氫和氧組成。
  →「群體」water 當主詞，is composed of + 「部分」hydrogen and oxygen
> 1. compose 當組成意思時，使用被動語態，必須搭配 of，用 be composed of。
> 2. 「群體」當主詞，be composed of + 「部分」。

**comprise**
由...組成
- **[主動]群體 + comprise + 部分**
  The country comprises 22 cities.
  該國由22個城市組成。
  →「群體」the country 當主詞，comprise + 「部分」22 cities
- **[主動]部分 + comprise + 群體**
  Semiconductor chips and oil comprises the imports of this country.
  該國的進口物有半導體晶片和石油。
  →「部分」semiconductor chips and oil 當主詞，comprise + 「整體」the imports of this country
- **[被動]群體 + is comprised of + 部分**
  The basketball school team is comprised of 12 players.
  籃球校隊由 12 名球員組成。
  →「群體」the basketball school team 當主詞，is comprised of + 「部分」12 players
> 1. comprise 的用法比較特別，在主動語態時，可以用「群體當主詞 + comprise + 組成部分」，或「組成部分當組詞 + comprise + 群體」。
> 2. 在被動語態時，用群體當「主詞 + is comprised of + 組成部分」。

**make up**
由...組成
- **[主動]部分 + make up + 群體**
  Plasma, platelets, and blood cells make up blood.
  血漿、血小板和血細胞構成血液。
  →「部分」plasma, platelets, and blood cells 當主詞，make up + 「整體」blood
- **[被動]群體 + is made up of + 部分**
  The model plane is made up of 200 pieces of bricks.
  模型飛機由 200 塊積木組成。
  →「群體」the model plane 當主詞，is made up of + 「部分」200 pieces of bricks
> 1. make up 意思是「組成」，用主詞語態時，以「部分」當主詞 + make up + 「群體」。
> 2. 用被動語態時，「群體」當主詞，be made up of + 「部分」。
{{% /callout %}}