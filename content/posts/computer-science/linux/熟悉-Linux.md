+++
title = "熟悉 Linux"
date = 2023-12-14 16:16:10
draft = false
categories = ["Computer Science", "Infrastructure", "Linux"]
+++

## 簡介 Linux

Linux 是一種作業系統的核心，有時候的 Linux 也被稱為基於 Linux 的完整作業系統，如: Ubuntu、CentOS、Debian、Gentoo，作業系統除了 Linux 核心外，其中也包含了許多使用者圖形介面和其他實用工具。

這篇是我學習 Linux 與 HPC 環境的主題索引，各主題的細節整理在下面連到的文章裡。

## 系統安裝與設定

- [灌作業系統](/posts/灌作業系統/) — 製作開機碟、單一/雙系統安裝、網路設定
- [Ubuntu 套件安裝](/posts/ubuntu-套件安裝/) — 系統更新、SSH、Tailscale、CMake、Docker 等
- [Ubuntu 各種設定](/posts/ubuntu-各種設定/) — module、使用者與權限管理

## Linux 工具

- [Shell Script 基礎](/posts/shell-script-基礎/) — 解釋器、變數、參數、陣列
- [Tmux](/posts/tmux/) — session / window / pane、設定檔與快捷鍵
- [Makefile 語法](/posts/makefile-語法/) — 自動化編譯
- [Job Scheduling & Resource Management System](/posts/job-scheduling-resource-management-system/) — Slurm 與 PBS

## GPU 與平行運算

- [Ubuntu 安裝 CUDA 環境](/posts/ubuntu-安裝-cuda-環境/) — NVIDIA driver、CUDA、cuDNN、PyTorch 驗證
- [What is MPI?](/posts/what-is-mpi/) — process/thread、MPI 語法

## 待整理的主題

以下是還沒寫成文章的部分，先列在這裡當作待辦：

- **Linux 開機流程** — BIOS / UEFI、GPT / MBR、GRUB、vmlinuz、initramfs / initrd、systemd
- **檔案系統與網路** — NFS
- **文字編輯器** — vim / nano
- **硬體與效能** — CPU vs. GPU、HPL & BLAS
