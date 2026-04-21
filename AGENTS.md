# AGENTS.md - portfolio

Operational guide for coding agents working in this repository.

## Mission

Maintain the public frontend for `ozzo.blog`: homepage, projects, articles, books, and contact-oriented presentation.

This repo is a presentation layer. It is not the authoring location for long-form content.

## Session startup

Read before editing:

1. `README.md`
2. `pages/index.js`
3. `pages/projects.js`
4. `pages/articles.js`
5. `pages/books.js`
6. `libs/projectData.js`

Then inspect the specific page/components relevant to the task.

## Source of truth

- Public editorial data comes from `portfolio-data`, fetched from GitHub raw URLs.
- Project cards are defined locally in `libs/projectData.js`.
- This repo should not become a second content-management system.

## Non-negotiables

- Do not move article/book content authoring into this repo.
- Preserve graceful handling when external JSON fetches fail.
- Treat the site as public and user-facing: prioritize build stability, SEO, and mobile behavior.
- Keep the visual language coherent with the existing site unless a redesign is explicitly requested.

## High-signal areas

- `pages/index.js`: homepage narrative and positioning
- `pages/projects.js`: local project catalog UI
- `pages/articles.js`: article listing fed by `portfolio-data`
- `pages/books.js`: book listing fed by `portfolio-data`
- `pages/rss.xml.js`: feed generation from external article data

## Verification

Use the repo's normal checks when relevant:

```bash
npm run lint
npm run build
```

For content-related tasks, verify both articles and books pages because they depend on external JSON contracts.
