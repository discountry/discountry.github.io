---
layout: post
title: Build-Website-from-zero
published: True
categories: ['tutorial']
tags: ['Code Editor','Version Control','Opensource']
---

> [一个人做网站需要掌握哪些知识？](https://www.zhihu.com/question/19696149)

<!--more-->

### 1. 配置开发环境

> 想要开发网站首先你需要一个写代码的地方，下面这些软件都是全世界最流行的代码编辑器。

* 编辑器
    * [Sublime text](https://www.sublimetext.com/)
        - [配置和使用方法](https://www.zybuluo.com/king/note/47271)
    * [Atom](https://atom.io/)
        - [Atom前端开发配置](http://leftstick.github.io/tech/2015/07/01/setup-frontend-env-with-atom)
    * [Notepad++](https://notepad-plus-plus.org/)
* IDE
    * [Webstorm](https://www.jetbrains.com/webstorm/)

> 写好了代码，你还需要管理你的代码。通过FTP将代码上传到服务器或者云空间；网站也不可能是一次写成的，你需要不停修改你的代码，因此需要用到版本控制软件。

* 代码管理
    * FTP:[Filezilla](https://www.filezilla.cn/)
    * [Git](https://git-scm.com/)
        - [简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
    * [SVN](https://tortoisesvn.net/index.zh.html)

> 受不了繁杂的配置？这些在线工具可以让你在浏览器里体验网站的开发环境。

* 在线工具
    * [Codepen](http://codepen.io/)
    * [c9](https://c9.io)
    * [coding.net](https://coding.net/)
        - [云IDE](https://ide.coding.net/)

### 2. 搭建运行环境

> 网站写好之后还需要一个地方来部署运行。A表示apache，是一个网络服务器软件， M表示mysql，是一个数据库软件， P表示php，是一种用于网站开发的后端语言。通过下面这些软件包，你可以在各种系统上快速搭建好网站的运行环境。

* [WAMP](http://www.wampserver.com/en/)
    - [Windows下安装配置wampserver](http://blog.csdn.net/geofferysun/article/details/9046693)
* [LAMP](https://magiclen.org/lamp/)
* [MAMP](https://www.mamp.info/en/)
    - [配置安装教程](https://netbeans.org/kb/docs/php/configure-php-environment-mac-os_zh_CN.html)

> 除了php，还有很多其他网站后端开发语言可以使用。

* [Nodejs](https://nodejs.org/zh-cn/) 
    - [安装教程](http://www.runoob.com/nodejs/nodejs-install-setup.html)
    - [npm国内配置](https://npm.taobao.org/)
* [Python](https://www.python.org/) 
    - [pip安装教程](http://pip-cn.readthedocs.io/en/latest/installing.html)

> 你又受不了繁杂的配置安装了？这些云平台可以让你把网站部署到云端。

* [新浪云](http://www.sinacloud.com/)
* [阿里云](https://www.aliyun.com/)
* [Daocloud](https://www.daocloud.io/)

### 3. 学习基础知识

* [HTML](http://www.w3school.com.cn/html/)
* [CSS](http://www.w3school.com.cn/css/)
* [JavaScript](http://www.w3school.com.cn/js/)
* [PHP](http://www.w3school.com.cn/php/)
* [Mysql](http://www.runoob.com/mysql/mysql-tutorial.html)

> 虽然PHP是最好的语言，但是你也可以选择学习其他后端语言。

* [Nodejs](http://www.runoob.com/nodejs/nodejs-tutorial.html)
* [Python](http://www.runoob.com/python/python-tutorial.html)

### 4. 选用建站系统

> 现在你已经掌握了一些基础知识，可是你发现除了写一个hello,world的小页面以外，你几乎什么都不会。没有关系，下面这些建站系统让你摇身变大神！

* [Wordpress](https://cn.wordpress.org/)
    - [入门教程](http://www.wpdaxue.com/series/wordpress-start/)
* [DedeCMS](http://www.dedecms.com/) 
    - [Windows下整合安装包使用说明](http://www.dedecms.com/help/installation/2009/0929/1.html)
* [Discuz](http://www.discuz.net/forum.php)
    - [安装教程](http://www.discuz.net/thread-2141484-1-1.html)
* [Opencart](http://www.opencartchina.com/)
* [所有建站系统](http://www.oschina.net/project/tag/256/web-system?lang=0&os=0&sort=view) 

### 5. 学习开发框架

> 现在你对你的网站有了更高的要求，现有的开源系统已经无法满足你，那么你就需要手动开发一个，从无到有开发一个网站当然很困难，好在我们已经有了许多成熟的开发框架，就好像你写作文帮你列好提纲一样，帮助你快速开发。

* [Laravel](https://laravel.com/) PHP语言的Web开发框架
* [Express](http://expressjs.com/zh-cn/) Nodejs语言的Web开发框架
* [Django](https://www.djangoproject.com/) Python语言的Web开发框架