+++
title = "創建 Vue.js Project"
date = 2023-06-29 02:06:32
draft = false
categories = ["Computer Science", "Programming Languages", "Framework", "Vue"]
+++

{{% callout "info" %}}
創建的項目將使用基於 Vite 的構建設置，並允許我們使用 Vue 的單文件組件(SFC)。
{{% /callout %}}

{{% callout "danger" %}}
請先確認是否安裝 Node.js，可運用以下指令測試 `node -v`。
{{% /callout %}}

# 創建 Vue Project
- [npm vue 版本](https://www.npmjs.com/package/vue)

```shell
npm init vue@latest
```

# 設定 Vue Project

<img src="https://i.imgur.com/1GU82Pp.png" alt="" width="600">


# 運行 Vue Project
在第一次創建或是更新 package 內容時，記得要輸入 `npm install`，安裝內容所需。
```shell
npm run dev
```

終端機會出現類似以下的訊息:
```shell
> vue-project@0.0.0 dev
> vite


  VITE v4.3.9  ready in 801 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
> 可以在瀏覽器輸入 http://localhost:5173/ 來查看專案樣式

# 建構 Vue Project
```shell
npm run build
```
> 此命令會在 `./dist` 文件夾中為你的應用創建一個生產環境的構建版本。

# 參考/學習文章
- [官方文件](https://cn.vuejs.org/guide/introduction.html)
- [w3school](https://www.w3schools.com/vue/index.php)
- [維基百科](https://zh.wikipedia.org/zh-tw/Vue.js)
- [MDN web docs](https://developer.mozilla.org/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Vue.js 30天隨身包系列](https://ithelp.ithome.com.tw/articles/10192260)