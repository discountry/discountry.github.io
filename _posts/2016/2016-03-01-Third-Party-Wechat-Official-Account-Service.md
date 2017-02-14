---
layout: post
title: How to set up a third party Wechat Official Account Service
image: wechat-dev.jpg
published: True
categories: ['tutorial']
tags: ['php','wechat']
---

## 1.Draw up your plan

What kind of services you're planning to offer?The third party Wechat Official Account Service just like the service that 10086/10010 offer you via text messages.

<!--more-->

But Wechat is better,because you can interact with your subscribers by various multimedia messages. ***including image/voice/video/article and etc.***

Wechat also has a built-in micro-browser,you can also send links to your users and do the rest on your website.Generally,There are two ways to serve your customers.

1. Reply to your subscribers multi-media messages.
2. Send links and guide your customers to your website.

My advice is try to make everything happen in Wechat chatting activity.Because loading a web page/filling a form/press the submit button/and then go back to Wechat.This sounds annoying.

When you open and close the browser in Wechat,it broke the normal interaction between Wechat and a human.

And of course Wechat itself has many limitations.When you are facing a complex business,it's allowable to use web pages to get things done.

**Here is mine plan**

* Chat Robot
* Weather report
* News
* Hearthstone cards search
* Send to Kindle service

## 2.Find out your frameworks

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

## 3.Set up your local environment

In this tutorial I assumed you already got a suitable PHP develop environment.Basically,you need to install [php](http://php.net/) and [mysql](https://www.mysql.com/) on your computer.

And you also need a sexy code editor.Vim/Emacs/Atom are all fine.But I love [Sublime Text](https://www.sublimetext.com/) best. :)

You also need version control tools.I prefer [Git](https://git-scm.com/) of course.

Gather your coffee and sandwiches,it's time to code now!

## 4.Write down your code

I'm not going to teach you how to write there code line by line.The open source repositories I've listed all have their own documents.You need to go through them by yourself.

We are going to talk about the life cycle from the Wechat Client/Server to you.

When your `subscriber` send a message to your official account,a sort of data including message content,user identity,time stamp will be send to `Wechat Server`.

If you enable the develop setting of your account,the Wechat Server will transmit to `your server` in XML format.Then you need to parse the XML => read the content => decide your reply. 

Thirdly,you need to build an XML format data including your reply,identity,time stamp and post to `WeChat Server` then it will send your message to your subscriber.  

To do this, you need an XML parser,an XML factory and an XML poster.One for read,one for build,one for shift. 

And you also need a router to determine the relation between keywords and service.***e.g. `Card` for `Hearthstone`,`Book` for `Kindle`***

Next,you need database ORM to do the CRUD functions.

Finally,scripts for recording log or sending email may helpful.

## 5.Test out your service

Before you deliver your service to your subscribers,you need to test them by yourself.

[Postman](https://www.getpostman.com/) is very helpful for testing POST/GET API services.It also works on your localhost.

You can post an XML data in request body to your service URL and see if it responses fine.

## 6.Deploy your service

There are many [Paas](https://en.wikipedia.org/wiki/Platform_as_a_service) providers on the Internet.

* [ACE](https://www.aliyun.com/)
* [SAE](http://www.sinacloud.com/)
* [Coding](https://coding.net)

You can find a lot more using search engines.When you set up a proper server,just use git to push your codes up.

And rock ;)






