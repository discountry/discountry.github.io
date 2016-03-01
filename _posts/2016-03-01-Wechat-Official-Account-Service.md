---
layout: post
title: How to set up a third party Wechat Official Account Service
published: True
categories: ['tutorial']
tags: ['php','wechat']
---
<!--more-->
## Draw up your plan

What kind of services you're planning to offer?The third party Wechat Official Account Service just like the service that 10086/10010 offer you via text messages.
But Wechat is better,because you can interact with your subscribers by various multimedia messages ***including image/voice/video/article and etc.***
Wechat also has a built-in micro-browser,you can also send links to your users and do the rest on your website.Generally,There are two ways to serve your customers.
1. Reply to your subscribers multi-media messages.
2. Send links and guide your customers to your website.

My advice is try to make everything happen in Wechat chatting activity.Because loading a web page/filling a form/press the submit button/and then go back to Wechat.This sounds annoying.When you open and close the browser in Wechat,it broke the normal interaction between Wechat and a human.

But when you are facing a complex business, and of course Wechat itself has many limitations,it's allowable to use web pages to get things done.

**Here is mine plan**

+ Chat Robot
+ Weather report
+ News
+ Hearthstone cards search
+ Send to Kindle service

## Find out your frameworks

We shift codes rather than produce them!There are too many tools/frameworks/packages you can use to assemble your own web service.Most of them are open sources.
You can find there helpful codes on [Github](https://github.com/) easily.Wechat do not provide their official SDK,but their [Wiki](http://mp.weixin.qq.com/wiki/home/index.html) is still very useful.
From front-end to back-end and to database,you can get a lot of great packages from Internet.

**Here are my choices**

* [Easy We Chat](http://easywechat.org/)(The easiest way WeChat application development)
* [TURING Robot](http://www.tuling123.com/)(AI chat robot)
* [Medoo](http://medoo.in/)(The lightest PHP database framework to accelerate development)
* [mashape](https://market.mashape.com/omgvamp/hearthstone)(Hearthstone API provider)
* [QINIU](http://www.qiniu.com/)(CDN storage provider)
* [WEUI](http://weui.github.io/weui/)(A UI library by WeChat official design team)
