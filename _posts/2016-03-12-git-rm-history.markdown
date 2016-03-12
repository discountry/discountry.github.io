---
layout: post
title: Git rm history
published: True
categories: ['snippets','git']
tags: ['bash']
---

**Remove Git Histoy:**

```bash
git filter-branch -f --tree-filter 'rm -rf XXXXXXX' HEAD
2 git push origin --force
```
