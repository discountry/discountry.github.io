---
layout: "post"
title: "Update nodejs & npm on Ubuntu"
date: "2017-05-24 12:59"
categories: ['snippet']
tags: ['nodejs', 'ubuntu']
published: True
---

Just use `nvm` and do not try other methods.

<!--more-->

```bash
apt install nodejs-legacy npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
nvm install node
nvm use default
npm install npm@latest -g
```
