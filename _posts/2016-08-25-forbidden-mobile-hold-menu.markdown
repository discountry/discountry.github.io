---
layout: post
title: forbidden mobile hold menu
published: True
categories: ['snippets']
tags: ['mobile']
---

```css
/*Forbidden ios hold menu*/
*:not(input,textarea) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
}
```

<!--more-->