+++
title = "Vue 指令"
date = 2023-06-30 01:45:03
draft = false
categories = ["Computer Science", "Programming Languages", "Framework", "Vue"]
+++

# Text Interpolation

Using the **"Mustache"** syntax (double curly braces 兩個大括號 `{{ }}`)
```html
<p> &#123;&#123; value &#125;&#125; </p>
```

But **Mustaches** cannot be used inside **HTML attributes**.

# `v-bind`

**用法**

```html
<div v-bind:[attribute]="[Vue data]"></div>
```

# `v-if`、`v-else-if`、`v-else`

**用法**

```html
<p v-if="score >= 80">Perfect</p>
<p v-else-if="scroe > 60">Good</p>
<p v-else>Poor</p>
```

> - A condition, or "if-statement", is something that is either `true` or `false`.
> - A condition is often a comparison **check between two values** like in the example above to see if one value is greater than the other.
>   - We use comparison operators like `<`, `>=` or `!==` to do such checks.
>   - Comparison checks can also be combined with logical operators such as `&&` or `||`.

```ts
<script>
export default {
    data() {
        return {
            text: 'I like taco, pizza, Thai beef salad, pho soup and tagine.'
        }
    }
}
</script>

<template>
    <p v-if="text.includes('pizza')">The text includes the word 'pizza'</p>
    <p v-else>The word 'pizza' is not found in the text</p>
</template>
```

# `v-show`

當條件為 `false` 時，該指令通過將 CSS `display` 屬性值設置為 `none` 來隱藏元素。

```js
<script>
export default {
    data() {
        return {
            showDiv: true
        }
    }
}
</script>

<template>
    <div v-show="showDiv">This div tag can be hidden</div>
</template>
```

# 參考/學習文章
- [官方文件](https://cn.vuejs.org/guide/introduction.html)
- [w3school](https://www.w3schools.com/vue/index.php)
- [維基百科](https://zh.wikipedia.org/zh-tw/Vue.js)
- [MDN web docs](https://developer.mozilla.org/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Vue.js 30天隨身包系列](https://ithelp.ithome.com.tw/articles/10192260)