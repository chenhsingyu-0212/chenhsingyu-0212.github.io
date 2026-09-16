+++
title = "WallZero"
date = 2026-01-01
weight = 5
featured = true
badge = "Research"
summary = "AlphaZero-based game AI that masters the board game WallGo — my first-author work (CG 2026). Built on MiniZero, learns purely from self-play, and beat professional Go players by ~1.98× territory."
tags = ["Game AI", "AlphaZero", "MCTS", "Reinforcement Learning", "WallGo", "C++"]
[links]
code = "https://github.com/rlglab/wallzero"
+++

> First-author research — Hsing-Yu Chen, Jerome Arjonilla, I-Chen Wu, Ti-Rong Wu, *Computers and Games (CG 2026)*. Open-source at [rlglab/wallzero](https://github.com/rlglab/wallzero).

**WallZero** is an **AlphaZero**-based game AI that masters **WallGo**, a two-player territory
board game. It is my **first-author** research, accepted at **Computers and Games (CG 2026)** and
open-sourced by the RLG Lab.

## The game — WallGo

WallGo is played on a **7×7 board** where each player controls **four stones**. On each turn a
player **moves a stone and then builds a wall**, progressively partitioning the board; once no more
moves are possible, the player enclosing the **larger territory** wins. WallZero handles two
settings — an **empty mode** that starts from a blank board, and a **4-stone mode** with preset
opening stones.

## Method

WallZero is built on the **MiniZero** framework and follows the **AlphaZero** paradigm: a deep
neural network coupled with **Monte Carlo Tree Search (MCTS)**, trained **purely through self-play**
with no human game records. Because WallGo combines piece movement with wall placement, the agent
has to learn both fine-grained spatial control and long-term territory strategy entirely on its own.
The engine and search are implemented in **C++** for speed, with **Python** for training and tooling.

## Results

- Learns WallGo **from scratch** via self-play reinforcement learning — no human data.
- **Defeated professional Go players** (3-dan and 9-dan), taking on average **1.98× more territory**
  than its human opponents.
- Accepted as **first-author** work at **Computers and Games (CG 2026)**.
