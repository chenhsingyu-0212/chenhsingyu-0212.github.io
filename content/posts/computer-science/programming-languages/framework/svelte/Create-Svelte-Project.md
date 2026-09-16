+++
title = "Create Svelte Project"
date = 2023-11-15 13:44:22
draft = false
categories = ["Computer Science", "Programming Languages", "Framework", "Svelte"]
+++

## Create Project
```bash
npm create svelte@latest <project_name>
```

### Example:
![](https://i.imgur.com/nOQynkh.png)

## 安裝套件管理工具
```bash
npm install
```

## 把 dev 中的專案 run 起來
```bash
npm run dev
```

**剛 create 的 project run 起來會長這樣**
![Imgur](https://i.imgur.com/oKYKSN2.png)

## Project 結構介紹
```bash
.
│  .gitignore
│  .npmrc
│  package-lock.json
│  package.json
│  README.md
│  svelte.config.js
│  tsconfig.json
│  vite.config.ts 
│
├─src
│  │  app.d.ts
│  │  app.html
│  │
│  ├─lib
│  │  └─images
│  │          github.svg
│  │          svelte-logo.svg
│  │          svelte-welcome.png
│  │          svelte-welcome.webp
│  │
│  └─routes
│      │  +layout.svelte
│      │  +page.svelte
│      │  +page.ts
│      │  Counter.svelte
│      │  Header.svelte
│      │  styles.css
│      │
│      ├─about
│      │      +page.svelte
│      │      +page.ts
│      │
│      └─sverdle
│          │  +page.server.ts
│          │  +page.svelte
│          │  game.ts
│          │  reduced-motion.ts
│          │  words.server.ts
│          │
│          └─how-to-play
│                  +page.svelte
│                  +page.ts
│
└─static
        favicon.png
        robots.txt
```

## 參考網站
- [SvelteKit](https://kit.svelte.dev/)