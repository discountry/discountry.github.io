---
layout: post
title: PHP pergmatch
published: True
categories: ['snippets']
tags: ['php']
---

**Use regular expression to get a substring from a content.**

{%highlight php%}
<?php

$preg='/SOME TEXT A(.*?)SOME TEXT B/is';
preg_match($preg,$snoopy->results,$match);
$result = $match[1];

{% endhighlight %}
