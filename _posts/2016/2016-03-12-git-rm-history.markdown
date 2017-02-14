---
layout: post
title: Git rm history
published: True
categories: ['snippets','git']
tags: ['bash']
---

**Remove Git Histoy:**

<!--more-->


```bash
git filter-branch -f --tree-filter 'rm -rf XXXXXXX' HEAD
git push origin --force
```
