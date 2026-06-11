# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal dev blog (yubolun.com, mostly written in Chinese) built with Jekyll and deployed via GitHub Pages. There is no Gemfile, package.json, or build pipeline in the repo — GitHub Pages builds the site automatically on push to the default branch. There are no tests or linters.

## Commands

Local preview requires a system-installed Jekyll:

```sh
jekyll serve            # serve at http://localhost:4000
jekyll serve --drafts   # include _drafts/
```

## Content structure

- `_posts/<year>/YYYY-MM-DD-slug.md` — blog posts, organized into per-year subdirectories. Front matter convention: `layout: post`, `title`, `date: "YYYY-MM-DD HH:MM"`, `categories`, `tags`, `published: True`. Post body uses `<!--more-->` as the excerpt separator (configured in `_config.yml`).
- `_drafts/` — unpublished drafts (no date in filename).
- `_websites/` — a Jekyll collection for portfolio site entries, output at `/websites/:path/`. Front matter adds `link` (external URL) and `cover` (image filename).
- `about/`, `books/`, `portfolio/` — standalone pages.
- `feed.xml`, `podcast.xml`, `search.json` — Liquid-templated outputs; `search.json` powers the client-side search in `_includes/search.html`.

## Theme and assets

- Layouts in `_layouts/` (post, page, podcast, single, about) all wrap `default.html`, which pulls in `_includes/` partials (head, header, footer, analyze, ads, search).
- Styling: Semantic UI (`css/semantic.min.css`, vendored, configured by `semantic.json`) plus custom Sass — `css/main.scss` is the entry point importing `_sass/_base.scss` and `_sass/_syntax-highlighting.scss`.
- JS: vendored jQuery, Semantic UI, and fancybox in `js/`, with site behavior in `js/main.js`.
- Post images live in `images/` and are referenced via the `imageurl` config variable (`https://yubolun.com/images/`).

## Configuration notes

- `_config.yml` sets `permalink: pretty`, kramdown + rouge, pagination at 20, and podcast metadata (the blog doubles as a podcast feed via `podcast.xml` and `_layouts/podcast.html`).
- `CNAME` pins the custom domain `yubolun.com` — do not delete or modify it.
