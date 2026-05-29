# khod.net v5

Astro static site. Built for Cloudflare Pages + GitHub deploy.

## Run locally

```bash
npm install
npm run dev
```

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`

## Editing background text

Change the parallax scrolling text in:

```txt
src/data/scrollingCode.ts
```

## Blog posts

Add markdown files under:

```txt
src/content/blog/<category>/<slug>.md
```

Frontmatter example:

```yaml
---
title: "Post Title"
description: "Short description"
pubDate: 2026-05-27
category: tech
tags: [systems, lisp]
draft: false
---
```

Use `pubDate`, not `published`.

## v8 visual notes

- Palette is restricted to `#211e20`, `#555568`, `#a0a08b`, `#e9efec`.
- Floating background code is in `src/data/scrollingCode.ts`.
- Parallax positioning is in `src/components/Background.astro`.
- Recruiter mode disables the background layers and uses a clean dossier/newspaper treatment.
