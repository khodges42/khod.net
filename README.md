# khodges42 / khod.net

Static Astro site for khod.net: pirate BBS x keygen rave x impressive hacker portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Blog

Add markdown files under:

```text
src/content/blog/<category>/<slug>.md
```

Each post supports frontmatter:

```yaml
---
title: "Post title"
description: "Short summary"
published: 2026-05-27
category: tech
tags: [lisp, systems, weird-computing]
draft: false
---
```

## Recruiter mode

The toggle in the header changes tone/presentation with CSS and localStorage. Same data, cleaner wrapper.
