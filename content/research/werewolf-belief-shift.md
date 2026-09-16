+++
title = "Belief Shifts in Werewolf"
date = 2026-08-21
weight = 5
featured = true
badge = "Publication · LLM Evaluation"
summary = "A belief-shift benchmark that measures how accusations move an LLM's suspicion in Werewolf — 40 open-weight configurations over 1,224 annotated messages. (EMNLP 2026 Main)"
translationKey = "werewolf-belief-shift"
tags = ["Werewolf", "LLM", "theory of mind", "social deduction", "benchmark"]
[links]
paper = "https://openreview.net/forum?id=0EcuPT7mKD"
page = "https://rlg.iis.sinica.edu.tw/papers/werewolf-accusation-benchmark/"
+++

**Do LLMs Trust the Accuser or the Accusation?** Social-deduction games such as **Werewolf**
are increasingly used to evaluate LLM agents, but most evaluations stop at the final game
outcome. This work instead measures **belief updating** — how an observing village-side
model's suspicion changes message by message — turning communication skill into something
directly observable.

## Abstract

> Social-deduction games such as Werewolf are increasingly used to evaluate LLM agents, but
> existing evaluations often rely on final game outcomes. We propose a belief-shift evaluation
> benchmark in Werewolf for analyzing communication skills through belief updating. Using
> LLM-played games, we annotate suspicion and accusation messages and measure how an observing
> village-side model's beliefs change after each message. We evaluate 40 open-weight LLM
> configurations on 1,224 annotated messages. Our results show that larger models better
> distinguish true wolves from villagers based on game history, but accusations still strongly
> influence their beliefs. Models become more suspicious of the accused target and less
> suspicious of the accuser, especially when the accuser is trusted, even if the accuser is
> wolf-aligned. Larger models better resist accusations from accusers they already distrust.
> Overall, our findings suggest that current LLMs still struggle to integrate accusation
> content with source trust in strategic communication.

## Highlights

- Proposes a **belief-shift evaluation benchmark** for Werewolf — scoring *how beliefs move after each message* instead of who wins the game.
- Annotates **suspicion and accusation messages** in LLM-played games and evaluates **40 open-weight LLM configurations** on **1,224 annotated messages**.
- Larger models **distinguish true wolves from villagers** better from game history — yet accusations still **strongly sway their beliefs**.
- A clear asymmetry: models grow **more suspicious of the accused** and **less suspicious of the accuser** — even when the accuser is wolf-aligned — and the effect is strongest when the accuser is already trusted.
- Larger models **resist accusations from distrusted accusers** better, but overall current LLMs still fail to integrate **accusation content with source trust**.

**Keywords:** Theory of mind · Social deduction games · Werewolf · Belief updating

## Publication

Yang, Y. Y., Wu, T. R., Guei, H., Chen, H. Y., & Wu, I. C. (2026). *Do LLMs Trust the Accuser or the Accusation? Measuring Belief Shifts in Werewolf.* Conference on Empirical Methods in Natural Language Processing (EMNLP 2026), Main Conference, Budapest, Hungary. — Track: Resources and Evaluation

EMNLP 2026 received a record **17,669 submissions**, of which **2,719** were accepted to the Main Conference — a **15.4% acceptance rate** (Findings: 2,533 papers, 14.3%).
