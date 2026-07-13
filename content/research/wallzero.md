+++
title = "WallZero"
date = 2026-01-01
weight = 20
featured = true
badge = "Publication · Game AI"
summary = "An AlphaZero-based agent that masters WallGo — the 7×7 board game popularized by Netflix's The Devil's Plan — beating professional Go players and revealing key strategies. (CG 2026)"
translationKey = "wallzero"
tags = ["WallGo", "AlphaZero", "MCTS", "game AI"]
[links]
code = "https://github.com/rlglab/wallzero"
demo = "https://rlg.iis.sinica.edu.tw/wallzero"
page = "https://rlg.iis.sinica.edu.tw/papers/wallzero/"
+++

**WallZero** is an **AlphaZero-based** agent for **WallGo**, a strategic board game
popularized by the 2025 Netflix series *The Devil's Plan*. Despite its small 7×7 board,
the mix of stone movement and wall placement gives WallGo a large game-tree complexity
(~10⁸⁷) and intricate strategy.

## Abstract

> WallGo is a recently introduced strategic board game popularized by the 2025 Netflix
> series *The Devil's Plan*. Although played on a small 7 × 7 board, its combination of
> stone movement and wall placement yields high game-tree complexity and intricate
> strategic interactions. Despite its growing popularity, WallGo remains underexplored.
> This paper presents *WallZero*, an AlphaZero-based agent for the two-player WallGo
> setting. We introduce tailored action and feature designs to improve playing performance
> significantly. In the evaluation, WallZero defeats two professional Go players who
> participated in this study, securing on average 1.98× more territory per game. Beyond its
> strength, we use WallZero to assess game fairness and identify key strategies for
> mastering WallGo. Interestingly, our results show that the opening used in the Netflix
> series yields a more balanced game.

## Highlights

- Built on **AlphaZero** (MiniZero framework) with **tailored action and feature designs** for WallGo's setup and play phases.
- **Defeated two professional Go players** (3-dan and 9-dan), securing on average **1.98× more territory** per game; win rate exceeded 90% before move 20.
- Used WallZero to **assess game fairness** and surface key strategies — reachability control, passing to manipulate move order, and opening choice — finding that the Netflix-series opening yields a more balanced game.

**Keywords:** Game of WallGo · AlphaZero · Feature Design · Strategic Analysis · Human Evaluation

## Publication

Chen, H. Y., Arjonilla, J., Wu, I. C., & Wu, T. R. (2026). *WallZero: Mastering the Game of WallGo with Strategic Analysis.* International Conference on Computers and Games (CG 2026), Maastricht, the Netherlands, June 2026.
