---
layout: post
title: iPhone play video inline & autoplay
published: True
categories: ['snippets']
tags: ['mobile']
---

> Make videos playable inline on Safari on iPhone (prevents automatic fullscreen) and autoplay.

<!--more-->

Use [iphone-inline-video](https://github.com/bfred-it/iphone-inline-video)

Include `iphone-inline-video.browser.js`

### Play video inline

```js
var video = $('video').get(0);
makeVideoPlayableInline(video);
```

### Autoplay

```html

<video autoplay muted webkit-playsinline src="video.mp4"></video>

```