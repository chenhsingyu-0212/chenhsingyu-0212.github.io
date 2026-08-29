+++
title = "Git Information"
date = 2023-05-18 14:15:06
draft = false
categories = ["Computer Science", "Website", "Git"]
+++

# 前言
**版本控制系統**: 對軟體開發過程中程式碼、文件、文檔等，發生的變更進行管理的系统，它可以幫助團隊更好的溝通協作，從而更好的進行交付。

常見的版本控制系統分為:
- 集中式版本控制系統，如: SVN
  - 用主從式架構的作法
  - 需要網路才可以工作，版本在中央服務器上
- 分布式版本控制系統 distributed version control，如: Git
  - 它允許軟體開發者可以共同參與一個軟體開發專案，但是不必在相同的網路系統下工作
  - 用對等網路的作法來處理版本控制
  - 版本存在自己的 host 上，同時動到一個檔案時，互相給對方看，因此衍伸出遠端數據庫

{{% callout "warning" %}}
**前情提要:**
這章主要在介紹 git 是什麼，以及其的用法，並介紹 github 一個遠端數據庫。也會概述一下 git 分支，可以如何使用。
{{% /callout %}}

# Git 是什麼?

<img src="https://i.imgur.com/M88iZWx.png" alt="" width="50">

Git 是一個軟體，可藉由它產生一個**數據庫（repository）**，並且做到**分散式版本控制**。
{{% callout "info" %}}
以下幾個功能讓協同開發變得容易，例如:
1. 多處放置同一份程式碼
2. 歷史紀錄追蹤與回朔
{{% /callout %}}
> 版本控制系統(Version Control System)
> – 管理你的程式碼版本反悔了回得去、合併了能處理、多人協作互不干擾

# GitHub 是什麼？

<img src="https://i.imgur.com/coiVSBt.png" alt="" width="50">

GitHub 是一個遠端數據庫，可用於檔案存放，並紀錄檔案版本，將本地端的數據庫存於遠端，達到共同開發的目的。

{{% callout "info" %}}
**常見遠端數據庫**
- GitHub
- GitLab
- BitBucket
{{% /callout %}}

# Git vs. GitHub?

<img src="https://i.imgur.com/zI98zX2.png" alt="" width="50">

一個是工具，一個是網站，GitHub 的本體是一個 Git Server。

# 沒有 Git?
{{% callout "danger" %}}
當你好不容易寫完程式碼，卻被你的好同事 gank。:cry:
{{% /callout %}}

<img src="https://i.imgur.com/ZGgUtDA.png" alt="" width="430">