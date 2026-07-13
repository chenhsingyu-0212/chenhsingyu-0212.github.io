+++
title = "TownPass Recycling"
date = 2024-09-01
weight = 8
featured = false
badge = "Award"
summary = "Award-winning recycling microservice built in a 24-hour Taipei City hackathon (top team of 111 nationwide) and shipped live on the official TownPass (台北通) app — LLM trash recognition + garbage-truck alerts, Express.js backend, serverless CI/CD on GCP."
tags = ["Generative AI", "Image Recognition", "Express.js", "Vue", "GCP", "CI/CD"]
[links]
code = "https://github.com/chenhsingyu-0212/townpass2024-recycling"
+++

> Award-winning team project — the **CityPass Microservice Hackathon** at Taipei's Autumn Coding Festival (2024). Our service went **live on Taipei's official TownPass (台北通) app**.

**TownPass Recycling** is a recycling **microservice** built for the *CityPass Microservice
Hackathon*, a competition run by the **Taipei City Department of Information Technology** to promote
open-source and open-data. The event was open to all ages and judged purely on a **live demo**;
out of **111 teams nationwide**, ours stood out over two sleepless nights — and the service shipped
**live on Taipei's official "TownPass (台北通)" app**.

![TownPass Recycling app](/img/projects/TownPass-Recycling-sample.png)

## What it does

- **Trash image recognition.** Photograph an item and the app recognizes it, then tells you its
  recycling category and how to dispose of it — making sorting effortless.
- **Garbage-truck tracking.** Using live garbage-truck data, it provides navigation to the truck and
  an **arrival alarm**, so you never miss it again.

## My role

I owned the **generative-AI / image-recognition model, the entire backend, part of the frontend, and
the final presentation**. I also split the system into **frontend / backend / model training /
dev-&-deployment pipeline** so the team could build in parallel.

## Engineering highlights

The core challenge was shipping a working microservice in **24 hours** and demoing it **live** to the
judges. Because it was headed for the official TownPass app, we designed for the government's
priorities — **fast to build, easy to maintain, low cost**:

- **Serverless CI/CD on GCP.** We ran everything on **Google Cloud Platform** with **Cloud Run** and
  **Cloud Build** for an automated **CI/CD** pipeline — no physical servers to manage. Code lived on
  **GitHub**, with the `main` branch protected behind **Pull Requests** so nothing broken could reach
  production during rapid development. It was the team's first time using this workflow, and we made
  it work.
- **Backend.** I built the backend on **Express.js** for development speed, exposing a **RESTful API**
  to the frontend.
- **Image recognition.** I evaluated **Google Teachable Machine**, **Lobe**, and **LLMs**, and chose
  an **LLM** for both recognition and generating the recycling guidance.
- **Frontend.** We solved a stack of device-level challenges — **camera capture & upload**, **Mapbox**
  maps, turn-by-turn **navigation**, **GPS** positioning, and **alarm** reminders.

Beyond the tech, it was a great exercise in teamwork — and a real confidence boost to place among the
top teams nationally, ahead of many made up of companies and industry professionals.
