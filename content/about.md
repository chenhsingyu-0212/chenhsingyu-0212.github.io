+++
title = "About"
description = "Hsing-Yu Chen 陳幸妤 — Ph.D. student in game AI & reinforcement learning at NYCU (CGI Lab)."
translationKey = "about"
+++

## Hsing-Yu Chen 陳幸妤

Ph.D. student at **NYCU** (CGI Lab, advised by Prof. I-Chen Wu) and research student at
**Academia Sinica RLG Lab**. I work on **reinforcement learning** and **game AI** for
imperfect-information games — Taiwanese Mahjong, Werewolf, Wall Go — and on HPC and
generative-AI systems.

### Education

**National Yang Ming Chiao Tung University (NYCU)** — Hsinchu, Taiwan
- Ph.D., Institute of Computer Science and Engineering · *Sep. 2025 – present*
- Research focus: Deep Reinforcement Learning, Game AI, Generative AI

**National Taichung University of Education (NTCU)** — Taichung, Taiwan
- B.S., Department of Computer Science · *Sep. 2021 – Jun. 2025*
- GPA **4.25 / 4.3** (average 94.08) · Rank **1 / 46 (Top 2.1%)**
- Awards: NSTC College Student Research Creativity Award (大專學生研究創作獎), Academic Excellence Awards (菁英獎、智育獎、校友總會優秀獎學金, multiple semesters)

### Research Interests

- **Deep Reinforcement Learning (DRL)** — PG, AlphaZero, MuZero frameworks
- **Game AI** — imperfect-information games (Mahjong, Werewolf, Wall Go), theory of mind
- **High-Performance Computing (HPC)** — parallel computing, performance tuning
- **Generative AI** — LLM applications in education, automated software engineering

### Publications

1. **Chen, H. Y.**, Arjonilla, J., Wu, I. C., & Wu, T. R. (2026). *WallZero: Mastering the Game of WallGo with Strategic Analysis.* International Conference on Computers and Games (CG 2026), Maastricht, the Netherlands, June 2026.
2. **Chen, H. Y.**, & Huang, K. C. (2025). *Improved Opponent Modeling in DRL-Based Taiwanese Mahjong AI.* Taiwan Computer Game Association (TCGA 2025), Taiwan, May 2025. — <mark>Best Paper Award</mark>
3. Chang, Y. E., Hung, Y. H., **Chen, H. Y.**, …, & Huang, K. C. (2024). *A Sustainable Online Learning Platform for After-Class Peer Learning.* eLearn 2024, Singapore, October 7–10, 2024. Paper ID: 63981.

### Honors & Awards

#### International

- **Silver Medal** — ICGA Computer Olympiad 2024 (Mahjong: *Dartrix*)
- **Bronze Medal** — ICGA Computer Olympiad 2024 (Mahjong: *Rowlet*)
- **Qualifier (National Team)** — PMI Region 9 Project Management Case Competition 2024

#### National

- **Champion (1st Place)** — 2026 TCGA Computer Game Tournament (Mahjong)
- **Champion (1st Place)** — 2025 TAAI Computer Game Tournament (Mahjong)
- **Champion (1st Place)** — 2024 TCGA Computer Game Tournament (Mahjong)
- **Champion (1st Place)** — 3rd NCHC Cup: HPC Application Optimization Competition (國網盃)
- **Champion (1st Place)** — FIRST LEGO League Taiwan 2018–2019
- **Runner-up (2nd Place)** — 2025 TCGA Computer Game Tournament (Mahjong)
- **Runner-up (2nd Place)** — 2024 Taipei City Data Hackathon (GenAI &amp; Microservices)
- **3rd Place (Regional)** — Web Design, 54th National Skills Competition
- **5th Place (Regional)** — Cloud Computing, 55th National Skills Competition
- **National Outstanding Young College Elite** (全國大專優秀青年), 2025 — sole representative from ~5,100 NTCU students; one of ~150 national recipients.
- **NSTC College Student Research Creativity Award** (大專學生研究創作獎), 2024 — ranked in the top 2% of 9,505 research grantees nationwide.

### Academic Service

- **Reviewer** — *IEEE Transactions on Games* (2025)
- **Reviewer** — *ICGA Journal* (2026)
- **Subreviewer / External Reviewer** — IEEE Conference on Games (CoG 2026)

### Work Experience

**Developer** — NYCU Information Technology Service Center · *Sep. 2025 – present*

**Research Student** — Academia Sinica, RLG Lab · *Jul. 2025 – present*

**Research Intern** — National Center for High-performance Computing (NCHC), Hsinchu · *Mar. 2025 – Jul. 2025*
- Investigated advanced LLM techniques — prompt engineering, RAG, and step-by-step distillation — and designed data pipelines for large-scale model training.

**Lead Web Developer** — Dept. of Computer Science, NTCU · *2022 – 2025*

**Summer Intern** — Shanghai Development Center of Computer Software Technology, Shanghai, China · *Jul. 2023 – Aug. 2023*
- Web development with **Vue.js** and **PHP (Laravel)**, plus **DevOps**.

### Research &amp; Project Experience

**Deep Reinforcement Learning for Imperfect-Information Games (Taiwanese Mahjong)**
*Principal Investigator — NSTC Grant No. 113-2813-C-142-003-E · Jul. 2023 – Feb. 2025*
- Secured the research grant (~45% acceptance rate from a pool of 19,900+ applicants).
- **Achievement:** optimized MCTS significantly improved win rates against the baseline (*Rowlet*) — **Silver Medal at ICGA 2024**, **Best Paper Award at TCGA 2025**, and **NSTC College Student Research Creativity Award** (top 2% of 9,505 projects).
- **Problem:** traditional MCTS fails in high-stochasticity games like Mahjong due to hidden information.
- **Methodology:** developed *Dartrix*, a Policy-Gradient (PG) agent; proposed a novel **Opponent-Modeling** technique in MCTS that replaces random rollouts with supervised-learning inference to predict opponent moves from discard history.

**High-Performance Computing (HPC), Core Member** · 2024
- **Achievement:** lowest execution time among all teams — **Champion of the 3rd NCHC Cup**.
- **Problem:** optimizing molecular-dynamics simulations (NAMD) on the **Taiwania 2** supercomputer.
- **Methodology:** analyzed bottlenecks for a 200-system amyloid-protein simulation; tuned **CPU-affinity** across 36 cores / 8 GPUs; parallelized to cut I/O overhead and maximize throughput for small-scale molecular systems.

**Generative AI for Software-Engineering Education (Project GAIOOP)**
*Lead Developer · Sep. 2023 – Aug. 2024*
- Built a **Web IDE** integrating an LLM (ChatGPT), **StarUML**, and automated testing (**JUnit**) to generate scaffolded code via prompt engineering and fine-tuning.
- Ran A/B testing (independent-samples t-test), validating significant learning-outcome gains for lower-proficiency students.

### Technical Skills

- **Languages** — C/C++, Python, Java, JavaScript, TypeScript
- **Deep Learning &amp; AI** — PyTorch, MCTS/AlphaZero implementation, LLM fine-tuning, RAG
- **HPC &amp; Parallel Computing** — MPI, OpenMP, CUDA, Slurm, performance tuning (CPU/GPU affinity)
- **Cloud &amp; DevOps** — AWS Certified AI Practitioner, Docker, Kubernetes (K8s), Git, CI/CD

---

> Teaching, other competitions, projects, sports, clubs, and personal challenges live on the [Beyond](/beyond/) page.
