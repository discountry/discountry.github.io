---
layout: post
title: Docker alias
published: True
categories: ['snippets']
tags: ['bash']
---

#### Docker quick alias work with shadowsockets that helpful.

<!--more-->

```bash
alias drm='docker rm $(docker ps -a -q)'
alias dshadow='docker run -d -p 1989:1989 oddrationale/docker-shadowsocks -s 0.0.0.0 -p 1989 -k PASSWORD -m aes-256-cfb'
alias dstart='docker start $(docker ps -a --filter status=exited --format "")'
alias dstop='docker stop $(docker ps --filter status=running --format "")'
```
