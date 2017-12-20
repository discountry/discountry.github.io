---
layout: post
title: Wordpress On DaoCloud
published: True
categories: ['tutorial']
tags: ['tutorial']
---

> [DaoCloud](https://www.daocloud.io) is an Docker Service Provider. This tutorial helps you to set up an [Wordpress](http://wordpress.org) blog on DaoCloud with persistent storage.

<!--more-->

### 1.Register & Login to your Dashboard.

DaoCloud has an community plan for free. It's an convenient choice for developers who cannot afford an expansive server to deploy a blog.

![daocloud1]({{ site.url }}/images/daocloud1.png)

![daocloud2]({{ site.url }}/images/daocloud2.png)

### 2.Create your MySQL service.

Just click some buttons in `Service Integration` and choose the MySQL service.

![daocloud3]({{ site.url }}/images/daocloud3.png)

### 3.Create your volume

Create a new volume in `Volume` and name it as you like.

![daocloud7]({{ site.url }}/images/daocloud7.png)

### 4.Set up Wordpress docker image.

In the App Market you can choose the Wordpress image and click `set up now` then follow the steps.

![daocloud4]({{ site.url }}/images/daocloud4.png)

During the settings,you need to bind MySQL & Volume services to your blog App.

![daocloud5]({{ site.url }}/images/daocloud5.png)

It is recommended to choose 512MB RAM. In order to make your app persistent,you need to set the volume path to `/var/www/html` (otherwise if you redeploy your app you may lost your data).

![daocloud6]({{ site.url }}/images/daocloud6.png)

### 5.Finally install your Wordpress in the old way.

After you set up your App, you'll get a URL bind to it. Header to your app and install.

Then rock with your new free blog.