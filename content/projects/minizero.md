+++
title = "MiniZero"
date = 2024-01-01
weight = 30
featured = false
badge = "Contribution"
summary = "Open-source zero-knowledge game AI framework (RLG Lab / CGI Lab). I contributed to parts of it — not the original author."
translationKey = "minizero"
tags = ["MuZero", "AlphaZero", "framework"]
[links]
code = "https://github.com/rlglab/minizero"
+++

> Open-source project — I contributed to parts of it (not the original author).

**MiniZero** is an open-source research framework for zero-knowledge game AI, unifying
AlphaZero, MuZero, and Gumbel-based variants under one training and evaluation pipeline
(developed at RLG Lab / CGI Lab).

## My contribution

- Added a feature to **resume training from a specified iteration**.
- Implemented **sending and synchronizing the server's iteration information to workers**.
- **Rewrote the evaluation module** so that games with **consecutive (sequential) actions** or **complex role/turn switching** can be matched and played against each other *(not yet in the public release)*.
