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

<a href="{{ site.url }}/images/daocloud1.png" data-lightbox="daocloud-set" data-title="daocloud1">![daocloud1]({{ site.url }}/images/daocloud1.png)</a>

<a href="{{ site.url }}/images/daocloud2.png" data-lightbox="daocloud-set" data-title="daocloud2">![daocloud2]({{ site.url }}/images/daocloud2.png)</a>

### 2.Create your MySQL service.

Just click some buttons in `Service Integration` and choose the MySQL service.

<a href="{{ site.url }}/images/daocloud3.png" data-lightbox="daocloud-set" data-title="daocloud3">![daocloud3]({{ site.url }}/images/daocloud3.png)</a>

### 3.Create your volume

Create a new volume in `Volume` and name it as you like.

<a href="{{ site.url }}/images/daocloud7.png" data-lightbox="daocloud-set" data-title="daocloud7">![daocloud7]({{ site.url }}/images/daocloud7.png)</a>

### 4.Set up Wordpress docker image.

In the App Market you can choose the Wordpress image and click `set up now` then follow the steps.

<a href="{{ site.url }}/images/daocloud4.png" data-lightbox="daocloud-set" data-title="daocloud4">![daocloud4]({{ site.url }}/images/daocloud4.png)</a>

During the settings,you need to bind MySQL & Volume services to your blog App.

<a href="{{ site.url }}/images/daocloud5.png" data-lightbox="daocloud-set" data-title="daocloud5">![daocloud5]({{ site.url }}/images/daocloud5.png)</a>

It is recommended to choose 512MB RAM. In order to make your app persistent,you need to set the volume path to `/var/www/html` (otherwise if you redeploy your app you may lost your data).

<a href="{{ site.url }}/images/daocloud6.png" data-lightbox="daocloud-set" data-title="daocloud6">![daocloud6]({{ site.url }}/images/daocloud6.png)</a>

### 5.Finally install your Wordpress in the old way.

After you set up your App, you'll get a URL bind to it. Header to your app and install.

Then rock with your new free blog.