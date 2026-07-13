+++
title = "Tmux"
date = 2025-03-06 14:18:42
draft = false
categories = ["Computer Science", "HPC", "Tools"]
+++

## What is tmux?

tmux 是一個終端機管理工具，可以分割視窗、同時開啟多個終端機。

- 如果想要同時使用多個命令，或執行多個任務時，就會很方便
- 如果是遠端 ssh 連線到其他主機使用 tmux 來執行程式，也可以避免 ssh 突然斷連後，正在安裝或執行的任務被終止

### 基礎概念

接著我們簡單介紹一下 tmux 的基礎概念，tmux 主要有三個模組 pane、windows、session

![Imgur](https://i.imgur.com/CiTtRl3.png)

當使用 tmux 時

## Install tmux

```bash
sudo apt update
sudp apt upgrade
sudo apt install tmux
```

## How to use tmux?

### Pane

### Windows

### Session

## Setup Tmux config

### 設定 tmux

```bash!
vim ~/.tmux.conf
```

### 範例 tmux 設定檔

```bash!
set -g mouse on
set -g history-limit 1000000
set -g default-terminal "screen-256color"
set -g status-right ' %H:%M:%S %Y-%m-%d'
set -g status-interval 1

# prefix setting
set -g prefix C-a
unbind C-b
bind C-a send-prefix

# bind key
bind -n M-c new-window
bind -n C-S-Left previous-window
bind -n C-S-Right next-window
bind -n C-Up select-pane -U
bind -n C-Down select-pane -D
bind -n C-Left select-pane -L
bind -n C-Right select-pane -R
bind -n C-w resize-pane -Z
bind -n M-h split-window -v -c "#{pane_current_path}"
bind -n M-v split-window -h -c "#{pane_current_path}"
bind -n M-k confirm kill-window
bind -n M-a command-prompt -I "#W" "rename-window '%%'"
bind -n M-` select-window -t 0
bind -n M-1 select-window -t 1
bind -n M-2 select-window -t 2
bind -n M-3 select-window -t 3
bind -n M-4 select-window -t 4
bind -n M-5 select-window -t 5
bind -n M-6 select-window -t 6
bind -n M-7 select-window -t 7
bind -n M-8 select-window -t 8
bind -n M-9 select-window -t 9
bind -n M-0 select-window -t 10
bind -n M-- select-window -t 11
bind -n M-= select-window -t 12
bind -n M-p swap-window -t -1\; select-window -t -1
bind -n M-n swap-window -t +1\; select-window -t +1
bind -n M-t new-window\; split-window -h -p 66\; select-pane -t 1\; split-window -h -p 50\; select-pane -t 2\; split-window -v -p 50\; select-pane -t 2\; split-window -v -p 50\; select-pane -t 4\; split-window -v -p 50
```

### 使 tmux config 生效

```bash!
tmux source-file ~/.tmux.conf
```

### 常用快捷鍵

若有使用一開始提及的方法設定 tmux config，則可以在 tmux session 中使用以下快捷鍵。

| 快捷鍵            | 功能                       |
| ----------------- | ------------------------- |
| Alt+v 或 Alt+h    | 垂直或水平分割終端窗口     |
| Ctrl+(↑/↓/←/→)    | 在分割的窗口間切換         |
| Ctrl+w            | 縮放分割視窗               |
| Alt+c             | 創建一個新的窗口           |
| Alt+p             | 將目前窗口與上一個窗口交換 |
| Alt+n             | 將目前窗口與下一個窗口交換 |
| Ctrl+Shift+(←/→)  | 切換窗口                   |
| Alt+`1234567890-= | 快速切換到特定窗口         |
| Alt+t             | 創建一個新的訓練用窗口     |
| Alt+a             | 重新命名當前窗口           |
| Alt+k             | 關閉當前窗口               |