+++
title = "GAIOOP"
date = 2023-01-01
weight = 10
featured = false
badge = "System"
summary = "Generative-AI platform for learning object-oriented software development — cut a build from ~1 week to 6–8 hours, and a controlled study showed measurable learning gains. Svelte / Flask / PostgreSQL, in-browser IDE, fine-tuned code model (NTCU Smart Education Center)."
tags = ["Generative AI", "Fine-tuning", "Svelte", "Flask", "PostgreSQL"]
+++

> **GAIOOP** — Generative AI Object-Oriented System Development Platform. Built with a team for the NTCU Smart Education Center; I led the system design and wrote most of the code.

**GAIOOP** is an innovative learning platform whose core goal is to use **generative AI** to
strengthen students' ability to build software systems and apply **object-oriented** techniques.
It started as a **campus Smart Education Center project** that four seniors and I applied for
together; my part covered **conceiving the system, planning the architecture, system design, and
writing most of the code**.

The workflow mirrors real software design: students express a system's design as **UML** in
**StarUML**, and generative AI fills in the code inside that framework from the software
specification — turning design into working code so students practice object-oriented development
hands-on.

GAIOOP is currently in active use, teaching the **object-oriented programming** course in the NTCU
Computer Science department. *(The source code is not publicly available.)*

![GAIOOP learning interface](/img/projects/GAIOOP-sample.png)

## What it does

Delivering this took heavy up-front design and, for the time, cutting-edge generative AI. The main
capabilities:

- **Skeleton from UML.** Students upload a **StarUML** model; we parse it with **regular
  expressions** to decide how to split files and the functions inside them — regex turned a
  previously slow splitting step into a fast, reliable one.
- **AI code generation (the core).** From a user-filled **requirements form**, our engineered
  **prompts**, and a later **fine-tuned** model, the platform generates the code inside the
  framework. In testing it cut work that used to take about **a week down to roughly 6–8 hours**.
- **Unit testing.** For each generated function, users can run **unit tests** via generative AI +
  **JUnit** to verify correctness.
- **Git-like versioning with MinIO.** We used **MinIO** to record versions of both the requirements
  and the generated code, so users can roll back to a previous version much like Git — one of the
  trickier parts we spent significant time getting right.
- **In-browser Web IDE.** We built an online IDE on **Monaco Editor** (the editor behind VS Code
  and others), so users can edit the AI-generated code directly in the browser.

**Key tech:** Svelte (frontend) · Flask (backend) · PostgreSQL (database) · MinIO (object storage)
· Monaco Editor (in-browser IDE) · Generative AI with a fine-tuned code-generation model.

![GAIOOP system architecture](/img/projects/GAIOOP-architecture.png)

## Does it actually help? — a controlled study

To check whether the platform genuinely helps students learn OO, we ran a controlled experiment
inside the object-oriented programming course. Using midterm scores, we split students evenly into
**Group A** and **Group B**: Group A used GAIOOP to learn system development before finals; Group B
did not. At the final, both groups had **6 hours to build a small system**, which we auto-graded.

An **independent-samples t-test** on the results showed that students who learned with GAIOOP
**outperformed** those who did not. The gap was small among top-performing students, but
**noticeably larger among lower-performing students** — suggesting the platform helps most the
students who need it most.
