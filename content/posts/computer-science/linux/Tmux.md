+++
title = "Tmux"
date = 2025-03-06 14:18:42
draft = false
categories = ["Computer Science", "Infrastructure", "Linux"]
+++

## What is tmux?

tmux 是一個終端機管理工具，可以分割視窗、同時開啟多個終端機。

- 如果想要同時使用多個命令，或執行多個任務時，就會很方便
- 如果是遠端 ssh 連線到其他主機使用 tmux 來執行程式，也可以避免 ssh 突然斷連後，正在安裝或執行的任務被終止

### 基礎概念

接著我們簡單介紹一下 tmux 的基礎概念，tmux 主要有三個模組 pane、windows、session

![Imgur](https://i.imgur.com/CiTtRl3.png)

這三者是由外而內的包含關係:

- **Session** — 最外層，一次 tmux 的工作階段。可以離線 (detach) 讓它在背景繼續跑，之後再重新接上 (attach)，這就是 ssh 斷線後任務不會中斷的原因。
- **Window** — session 裡的分頁，概念上像瀏覽器的 tab，一個 session 可以有多個 window。
- **Pane** — window 裡切割出來的區塊，每個 pane 就是一個獨立的終端機。

當使用 tmux 時，畫面最下方會有一條狀態列，左邊顯示 session 名稱與 window 清單，目前所在的 window 會被標記起來。

## Install tmux

```bash
sudo apt update
sudo apt upgrade
sudo apt install tmux
```

## How to use tmux?

tmux 的操作幾乎都要先按 **prefix key**，預設是 `Ctrl+b`，放開後再按功能鍵。以下表格中的 `Ctrl+b` 都是指這個 prefix。

{{% callout "info" %}}
後面的範例設定檔把 prefix 改成了 `Ctrl+a`，並且用 `bind -n` 設定了一批不需要 prefix 的快捷鍵。如果你套用了那份設定，下面的 `Ctrl+b` 要換成 `Ctrl+a`。
{{% /callout %}}

### Pane

在同一個 window 裡切割出多個終端機。

| 快捷鍵 | 功能 |
| --- | --- |
| `Ctrl+b` `%` | 垂直分割 (左右) |
| `Ctrl+b` `"` | 水平分割 (上下) |
| `Ctrl+b` 方向鍵 | 切換到該方向的 pane |
| `Ctrl+b` `o` | 依序循環切換 pane |
| `Ctrl+b` `q` | 顯示各 pane 的編號 |
| `Ctrl+b` `z` | 將目前 pane 放大至全螢幕，再按一次還原 |
| `Ctrl+b` `空白鍵` | 切換內建的排列方式 |
| `Ctrl+b` `{` / `}` | 與前 / 後一個 pane 交換位置 |
| `Ctrl+b` `x` | 關閉目前 pane |

也可以直接在 pane 裡輸入 `exit` 或按 `Ctrl+d` 關閉。

{{% callout "success" %}}
按住 `Ctrl+b` 不放再連按方向鍵，可以連續調整 pane 的大小。
{{% /callout %}}

### Windows

Window 是 session 裡的分頁，適合把不同任務分開放。

| 快捷鍵 | 功能 |
| --- | --- |
| `Ctrl+b` `c` | 建立新的 window |
| `Ctrl+b` `n` / `p` | 切換到下 / 上一個 window |
| `Ctrl+b` `<數字>` | 切換到指定編號的 window |
| `Ctrl+b` `w` | 列出所有 window 供選擇 |
| `Ctrl+b` `,` | 重新命名目前的 window |
| `Ctrl+b` `&` | 關閉目前的 window |

### Session

Session 是最外層的工作階段，也是 tmux 最實用的地方 — **detach 之後裡面的程式會繼續在背景執行**，ssh 斷線也不受影響。

在終端機中操作:

```bash
tmux                          # 建立一個新的 session
tmux new -s <session 名稱>     # 建立並命名 session
tmux ls                       # 列出目前所有 session
tmux attach -t <session 名稱>  # 重新接上指定的 session (可簡寫 tmux a -t)
tmux kill-session -t <session 名稱>   # 關閉指定 session
tmux kill-server              # 關閉所有 session
```

在 tmux 中操作:

| 快捷鍵 | 功能 |
| --- | --- |
| `Ctrl+b` `d` | 離線 (detach)，回到原本的終端機 |
| `Ctrl+b` `s` | 列出所有 session 供切換 |
| `Ctrl+b` `$` | 重新命名目前的 session |

{{% callout "warning" %}}
在遠端主機跑長時間的訓練或編譯時，記得**先進 tmux 再執行程式**。如果程式已經在跑才想丟到背景，tmux 是救不回來的。
{{% /callout %}}

## Setup Tmux config

### 設定 tmux

```bash
vim ~/.tmux.conf
```

### 範例 tmux 設定檔

```bash
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

```bash
tmux source-file ~/.tmux.conf
```

### 常用快捷鍵

若有套用上面的範例設定檔，則可以在 tmux session 中使用以下快捷鍵 (這些都不需要按 prefix)。

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