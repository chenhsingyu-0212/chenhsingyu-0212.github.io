+++
title = "What is CI/CD?"
date = 2023-06-20 23:23:34
draft = false
categories = ["Computer Science", "Website", "DevOps"]
+++

{{% callout "info" %}}
從測試、建置到部署一次自動化
{{% /callout %}}

## What is CI/CD?
CI/CD工具也是為了 DevOps 概念而產生的自動化工具，透過**持續整合**、**持續部署**的方式，在開發階段就自動協助開發人員偵測程式碼問題，並部署至伺服器。

## CI（Continuous Integration）持續整合
當開發人員完成一個階段性的程式碼後就經由自動化工具測試、驗證，協助偵測程式碼問題，並建置出即將部署的版本（Build）。

## CD（Continuous Deployment）持續部署
可以說是CI的下一階段，經過CI測試後所構建的程式碼可以透過CD工具部署至伺服器，減少人工部署的時間。

## CI/CD工具 - GitLab
GitLab主要的服務是提供git版本控制系統，其CI/CD Pipeline功能簡單又實用，使用者只需要設定於專案根目錄下的「.gitlab-ci.yml」檔，便可以開始驅動各種Pipeline協助您完成自動化測試及部署。