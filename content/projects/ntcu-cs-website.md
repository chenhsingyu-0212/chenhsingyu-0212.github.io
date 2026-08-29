+++
title = "NTCU CS Department Website"
date = 2023-06-01
weight = 20
featured = false
badge = "Web"
summary = "Official website of the CS department at NTCU — I served as project lead. Svelte + Strapi, shipped via Git, CI/CD and Docker, built and maintained with a team during my undergraduate years."
tags = ["Svelte", "Strapi", "Docker", "CI/CD", "Git"]
[links]
page = "https://ntcu-cs.ntcu.edu.tw/"
+++

> Team project — I served as **project lead** for NTCU's Computer Science department website.

**NTCU CS Department Website** is the official site of the **Department of Computer Science at
National Taichung University of Education (NTCU)** — the department's public face for faculty,
curriculum, announcements, and resources. I was honored to be trusted as the **project lead**
during my undergraduate years, building and running the site with a team.

![NTCU CS department website](/img/projects/NTCUCS-web-sample.png)

## My role

As lead, I was responsible for:

- **Coordinating the team** — assigning tasks, reviewing members' code, and approving merge requests.
- **Evolving the site** to meet the department's changing requirements.
- **Operating the servers** — keeping the deployment machines running.
- **Mentoring junior members** — passing on the development and operations know-how so the site would always have maintainers, making handover and long-term continuity possible.

## Architecture — built for maintainability

Because a departmental site has to run for years, the hardest and most important part was getting
the architecture right. With mentorship from a senior who guided me through it, we designed the
system around **maintainability and extensibility**, so day-to-day operation stays simple enough
for anyone to run:

1. I assign the work; a teammate implements the change.
2. I review the code and approve the **Merge Request**.
3. **CI/CD** builds the containerized site and pushes the image to **Docker Hub**.
4. On the deployment machine, **Watchtower** detects the new image and rolls out the update automatically.

This removed the pain of frequent manual deployments and kept operations approachable — even a
maintainer without deep system experience can ship changes, which makes handover and succession easy.

**Key tech:** Svelte (frontend) · Strapi (headless CMS — backend & database) · Git · CI/CD · Docker.

![NTCU CS website architecture](/img/projects/NTCUCS-web-architecture.png)

![Architecture legend](/img/projects/NTCUCS-web-architecture-label.png)

## Operating under pressure

The site went live the same year I took over as lead, so every incident was uncharted territory —
and, honestly, nerve-wracking. Through repeated firefighting I learned to stay calm: instead of
panicking, I reason about the likely cause, then test and rule out possibilities in order until the
problem is solved.

The scariest moments were the campus **power outages** — an unexploded bomb that could go off at any
time. During the first one, the site appeared to run fine after the machines rebooted, but back-office
data access was broken. I suspected the backend database container and tried to restart it — then
Docker itself failed, and my heart raced (a data-security incident could have meant reporting to the
Ministry of Education). The root cause turned out to be a **disk read failure on the host machine**,
unrelated to anything I had done — but the lesson stuck. Since then, whenever the site needs repair I
first switch it to a **one-page static holding page** I wrote, so visitors never see it visibly broken
while the fix is in progress.
