+++
title = "關於"
description = "陳幸妤 Hsing-Yu Chen — 陽明交大（CGI Lab）遊戲 AI 與強化學習博士生。"
translationKey = "about"
+++

## 陳幸妤 Hsing-Yu Chen

國立陽明交通大學資科所博士生（交大 **CGI Lab**，指導教授 吳毅成教授），中研院 **RLG Lab** 研究生。研究不完全資訊遊戲的**強化學習**與**遊戲 AI**——台灣麻將、狼人殺、Wall Go——以及 HPC 與生成式 AI 系統。

> 在努力學習各種技術，完成所有夢想與理想，成為自己的那曙光！

### 學歷

**國立陽明交通大學（NYCU）** — 新竹
- 博士，資訊科學與工程研究所 · *2025.09 – 至今*
- 研究方向：深度強化學習、遊戲 AI、生成式 AI

**國立臺中教育大學（NTCU）** — 臺中
- 學士，資訊工程學系（特殊選材）· *2021.09 – 2025.06* · 指導教授：黃國展教授
- GPA **4.25 / 4.3**（平均 94.08）· 系排名 **1 / 46（前 2.1%）**
- 獎項：國科會大專學生研究創作獎、智育獎、菁英獎、校友總會優秀獎學金等（多學期）

**國立彰化女子高級中學** · *2018 – 2021*

### 研究興趣

- **深度強化學習（DRL）** — PG、AlphaZero、MuZero 框架
- **遊戲 AI** — 不完全資訊遊戲（麻將、狼人殺、Wall Go）、心智理論
- **高效能運算（HPC）** — 平行運算、效能調校
- **生成式 AI** — 教育應用、自動化軟體工程

### 論文著作

1. **Chen, H. Y.**, Arjonilla, J., Wu, I. C., & Wu, T. R. (2026). *WallZero: Mastering the Game of WallGo with Strategic Analysis.* International Conference on Computers and Games (CG 2026), Maastricht, the Netherlands, June 2026.
2. **Chen, H. Y.**, & Huang, K. C. (2025). *Improved Opponent Modeling in DRL-Based Taiwanese Mahjong AI.* Taiwan Computer Game Association (TCGA 2025), Taiwan, May 2025. — <mark>最佳論文獎</mark>
3. Chang, Y. E., Hung, Y. H., **Chen, H. Y.**, …, & Huang, K. C. (2024). *A Sustainable Online Learning Platform for After-Class Peer Learning.* eLearn 2024, Singapore, October 7–10, 2024. Paper ID: 63981.

### 獲獎榮譽

#### 國際

- **銀牌** — ICGA Computer Olympiad 2024（麻將：*Dartrix*）
- **銅牌** — ICGA Computer Olympiad 2024（麻將：*Rowlet*）
- **入圍．國家代表隊** — PMI Region 9 Project Management Case Competition 2024

#### 全國

- **冠軍** — 2026 TCGA（Taiwan Computer Game Association）電腦對局競賽（麻將）
- **冠軍** — 2025 TAAI 電腦對局競賽（麻將）
- **冠軍** — 2024 TCGA 電腦對局競賽（麻將）
- **冠軍** — 第三屆國網盃 HPC 應用最佳化競賽（國網盃）
- **冠軍** — FIRST LEGO League Taiwan 2018–2019
- **亞軍** — 2025 TCGA 電腦對局競賽（麻將）
- **亞軍** — 2024 臺北城市資料黑客松（GenAI &amp; 微服務）
- **全國大專優秀青年** 2025 — 臺中教大約 5,100 名學生中唯一代表；全國約 150 名獲獎者之一
- **國科會大專學生研究創作獎** 2024 — 全國 9,505 件研究計畫前 2%
- **分區賽 第 3 名** — 全國技能競賽 網頁技術（第 54 屆）
- **分區賽 第 5 名** — 全國技能競賽 雲端運算（第 55 屆）

### 學術服務

- **審稿人** — *IEEE Transactions on Games*（2025）
- **審稿人** — *ICGA Journal*（2026）
- **協審／外部審稿** — IEEE Conference on Games（CoG 2026）

### 工作經歷

**開發及維護人員** — 陽明交大資訊技術服務中心 · *2025.09 – 至今*

**研究生** — 中研院 RLG Lab · *2025.07 – 至今*

**研究實習生** — 國家高速網路與計算中心（NCHC），新竹 · *2025.03 – 2025.07*
- 研究進階 LLM 技術（prompt engineering、RAG、step-by-step distillation），並設計大規模模型訓練的資料流程。

**網站開發與維護負責人** — 臺中教大資工系 · *2022 – 2025*

**暑期實習生** — 上海電腦軟體技術開發中心，中國上海 · *2023.07 – 2023.08*
- 以 **Vue.js** 與 **PHP（Laravel）** 進行網站開發，並涵蓋 **DevOps**。

### 研究與專案經歷

**不完全資訊遊戲的深度強化學習（台灣麻將）**
*計畫主持人 — 國科會補助案 113-2813-C-142-003-E · 2023.07 – 2025.02*
- 取得研究補助（自 19,900+ 件申請中以約 45% 錄取率通過）。
- **成果：** 優化的 MCTS 對基準（*Rowlet*）勝率明顯提升——**ICGA 2024 銀牌**、**TCGA 2025 最佳論文**、**國科會大專學生研究創作獎**（9,505 件前 2%）。
- **問題：** 傳統 MCTS 在麻將這類高隨機、含隱藏資訊的遊戲表現不佳。
- **方法：** 開發 *Dartrix*（Policy Gradient 智能體）；於 MCTS 中提出新的**對手建模**技術，以監督式學習推論取代隨機 rollout，依打牌／棄牌歷史預測對手行動。

**高效能運算（HPC）核心成員** · 2024
- **成果：** 全隊最低執行時間——**第三屆國網盃冠軍**。
- **問題：** 於 **Taiwania 2** 超級電腦上優化分子動力學模擬（NAMD）。
- **方法：** 分析 200-system 類澱粉蛋白模擬瓶頸；調校 **CPU affinity**（36 核心 / 8 GPU）；以平行化降低 I/O 負擔。

**生成式 AI 於軟體工程教育（GAIOOP 專案）**
*主要開發者 · 2023.09 – 2024.08*
- 打造整合 LLM（ChatGPT）、**StarUML**、自動化測試（**JUnit**）的 **Web IDE**，以 prompt engineering 與微調生成鷹架式程式碼。
- 進行 A/B 測試（獨立樣本 t 檢定），驗證對低成就學生學習成效的顯著提升。

### 技術能力

- **程式語言** — C/C++、Python、Java、JavaScript、TypeScript
- **深度學習 &amp; AI** — PyTorch、MCTS/AlphaZero 實作、LLM 微調、RAG
- **HPC &amp; 平行運算** — MPI、OpenMP、CUDA、Slurm、效能調校（CPU/GPU affinity）
- **雲端 &amp; DevOps** — AWS Certified AI Practitioner、Docker、Kubernetes (K8s)、Git、CI/CD

---

> 完整的教學、研討會、其他競賽、檢定，以及專案系統、體育、社團與生活記事，請見 [課外生活](/zh/beyond/)。
