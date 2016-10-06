---
layout: post
title: localStorage store JSON
published: True
categories: ['snippets']
tags: ['js', 'html5']
---


```js
/**localStorage store json**/
//Store
localStorage.books = JSON.stringify({name: 'json', stored: true})
//Get
var data = JSON.parse(localStorage.books)
```
