---
layout: post
title: Chinese-Character-pattern
published: True
categories: ['Snippet']
tags: ['php','snippet','preg']
---
I found this useful php code snippet on the internet.<br>
And post here for future use and remind.
<!--more-->
{% highlight php linenos %}
<?php
function checkChineseCharater($str){
	if (preg_match("/^[\x{4e00}-\x{9fa5}]+$/u",$str)) {
		return true;
	} else {
		return false;
	}
}
?>
{% endhighlight %}

gist here:

{% gist a91c3004dbdbfe8805d4 %}