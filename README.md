# Hsing-Yu — personal website

A static, bilingual (EN / 中文) personal site built with **Hugo** and a **hand-written
theme** (no external theme). Soft-modern look with an indigo→violet→pink gradient,
self-hosted fonts, dark/light mode, tasteful interactions, and a few cat touches.

## Structure

```
hugo.toml                 # config: languages, menus, taxonomies, params
assets/css/main.css       # theme styles (tokens + components + cats)
assets/js/main.js         # loader, scroll reveal, theme toggle, companion cat
static/fonts/             # self-hosted Inter + Fraunces (woff2)
content/
  posts/                  # blog posts — one Markdown file per post (+ *.zh.md)
  research/               # research & projects (+ *.zh.md)
  about.md                # about page (+ about.zh.md)
layouts/                  # hand-written templates
i18n/{en,zh}.toml         # UI strings
.github/workflows/hugo.yml# GitHub Pages build + deploy
```

## Writing content

New post (English), then add a `.zh.md` sibling for the Chinese version:

```bash
hugo new posts/my-post.md          # creates content/posts/my-post.md (draft=true)
# then create content/posts/my-post.zh.md with the same translationKey
```

New research/project:

```bash
hugo new research/my-project.md
```

Front matter reference:

- **post** — `title, date, summary, categories:[..], tags:[..], draft, translationKey`.
  Categories automatically build listing pages at `/categories/<name>/`.
- **research** — `title, kind (Framework|Method|Project|Analysis), summary, weight
  (lower = higher), featured (show on home), links:{paper, code, demo, page}`.

Pair EN/中文 versions by giving both files the **same `translationKey`** (the
filename-based `*.zh.md` convention already links them).

## Local preview

Hugo (non-extended is enough — no Sass) must be on your PATH. This repo was built with
`v0.164.0`.

```bash
hugo server -D          # http://localhost:1313  (-D shows drafts)
```

Check: home hero + loading cat, `/research`, `/posts`, `/categories/<cat>/`,
EN⇄中文 switch, dark/light toggle, and mobile width.

## Build

```bash
hugo --gc --minify      # outputs to ./public
```

## Deploy (GitHub Pages)

1. Create a GitHub repo and push this folder to the `main` branch.
   - A **user page** repo named `<user>.github.io` serves at the domain root.
   - Any other repo name serves under `/<repo>/`.
   - Either way, `baseURL` is set automatically at build time by the workflow, so no
     edit is needed.
2. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Every push to `main` runs `.github/workflows/hugo.yml`, which builds with
   `hugo_extended` and deploys. Watch progress under the repo's **Actions** tab.

## Customize

- Colors / gradient, brand, social links, avatar initial → `hugo.toml` `[params]`.
- Bio / role / tagline (per language) → `hugo.toml` `[languages.*.params]`.
- Turn the corner cat off → set `showCompanionCat = false` in `[params]`.
- Fonts → files in `static/fonts/`, `@font-face` at the top of `assets/css/main.css`.
