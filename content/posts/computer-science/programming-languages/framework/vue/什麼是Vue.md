+++
title = "什麼是Vue?"
date = 2023-06-28 14:57:21
draft = false
categories = ["Computer Science", "Programming Languages", "Framework", "Vue"]
+++

> **先備知識**
> - HTML
> - CSS
> - JavaScript

# What is Vue?

{{% callout "info" %}}
Evan You 是一名使用 AngularJS 的 Google 員工，於 2013 年開始開發 Vue。
Vue 1.0 版本於 2015 年發布。
Vue（發音為 /vjuː/，如view）是一個用於構建用戶界面的 JavaScript 框架。
與 Vue 類似的框架有 React 和 Angular，但 Vue 更輕量級，更容易上手。
{{% /callout %}}

構建在標準 HTML、CSS 和 JavaScript 之上，提供聲明性和基於組件的程式模型，幫助您高效地開發用戶界面，無論是簡單的還是複雜的。

它提供了很多有用的功能來達到漸進增強（ progressive enhancement ）的策略。
與其他的框架不同的是，你可以把 Vue 和既有的 HTML 做整合，這讓你可以像使用插入性替換的函式庫一樣來使用 Vue。

## 優勢
- 簡單易用。
- 能夠處理簡單和復雜的項目。
- 其日益普及和開源社區的支持。
- 在普通 JavaScript 中，我們需要編寫HTML 和 JavaScript如何連接，但在 Vue 中，我們只需要確保存在連接，然後讓 Vue 處理其餘的事情。
- 通過基於模板的語法、雙向數據綁定和集中狀態管理實現更高效的開發過程。
- Vue 所關注的核心是 MVC 模式中的視圖層，同時，它也能方便地取得資料更新，並通過組件內部特定的方法實現視圖與模型的互動。

## 特性

- **組件(Components)**
  - 為了更好地管理一個大型的應用程式，往往需要將應用切割為小而獨立、具有復用性的組件。
  - 在Vue中，組件是基礎HTML元素的拓展，可方便地自訂其資料與行為。
- **模板(Templates)**
- **回應式設計(Reactivity)**
  - 回應式是指MVC模型中的視圖隨著模型變化而變化。
  - 在Vue中，開發者只需將視圖與對應的模型進行繫結，Vue便能自動觀測模型的變動，並重繪視圖。
  - 這一特性使得Vue的狀態管理變得相當簡單直觀。
- **過渡效果(Transitions)**
- **單檔案組件(SFC)**
  - 為了更好地適應複雜的專案，Vue支援以`.vue`為副檔名的檔案來定義一個完整組件，用以替代使用`Vue.component`註冊組件的方式。

# Chose which API?
在 Vue 中編寫代碼有兩種不同的方式：**The Options API** 和 **The Composition API**。
基本概念是相同的，因此在學習其中一個 API 後，可以輕鬆切換到另一個。

建議可以先學習 The Options API，相對比較好上手。

## 選項式 API (Options API)
使用選項式 API，我們可以用包含多個選項的對象來描述組件的邏輯，例如 `data`、`methods` 和 `mounted`。選項所定義的屬性都會暴露在函數內部的 `this` 上，它會指向當前的組件實例。

```js Vue (Options API)
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件处理器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## 組合式 API (Composition API)
通過組合式 API，我們可以使用導入的 API 函數來描述組件邏輯。在單文件組件中，組合式 API 通常會與 `<script setup>` 搭配使用。這個 `setup` attribute 是一個標識，告訴Vue 需要在編譯時進行一些處理，讓我們可以更簡潔地使用組合式 API。比如，`<script setup>` 中的導入和頂層變量/函數都能夠在模板中直接使用。

下面是使用了組合式 API 與 `<script setup>` 改造後和上面的模板完全一樣的組件：

```js Vue (Composition API)
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

# 參考/學習文章
- [官方文件](https://cn.vuejs.org/guide/introduction.html)
- [w3school](https://www.w3schools.com/vue/index.php)
- [維基百科](https://zh.wikipedia.org/zh-tw/Vue.js)
- [MDN web docs](https://developer.mozilla.org/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Vue.js 30天隨身包系列](https://ithelp.ithome.com.tw/articles/10192260)