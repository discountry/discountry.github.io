---
layout: post
title: How to set up your own cloud storage
published: True
categories: ['tutorials']
tags: ['cloud','owncloud']
---

Vdisk shut down, 360yunpan shut down. It seems that we are losing every alternatives to store file on cloud. Buying more removable disk is not the solution. In fact, the best option is setting up your own cloud storage service.

Today I'm going to guide you to set up [owncloud](http://owncloud.org/) service. [owncloud](http://owncloud.org/) is an open source & free platform to store & share your files from all your devices(Including web/mobile/desktop). You could set it up for your own or share the service with your friends or family. I'd introduce you both ways to do so.

<!--more-->

## The quickest way! owncloud via [Docker](https://www.docker.com/)

First let's use the quickest method! You even need not to know how to code. You can choose online Docker service provider like [DaoCloud](https://www.daocloud.io/). 

### Using DaoCloud

1.Register your free community account on [DaoCloud signup](https://account.daocloud.io/signup).

![daocloud-signup]({{ site.url }}/images/daocloud-signup.png)

2.Create your MySQL service at [DaoCloud services](https://dashboard.daocloud.io/services).

![daocloud-mysql-1]({{ site.url }}/images/daocloud-mysql-1.png)

![daocloud-mysql-2]({{ site.url }}/images/daocloud-mysql-2.png)

![daocloud-mysql-3]({{ site.url }}/images/daocloud-mysql-3.png)

![daocloud-mysql-4]({{ site.url }}/images/daocloud-mysql-4.png)

3.Create your Volume at [DaoCloud volumes](https://dashboard.daocloud.io/volumes).

![daocloud-volume-1]({{ site.url }}/images/daocloud-volume-1.png)

![daocloud-volume-2]({{ site.url }}/images/daocloud-volume-2.png)

4.Get your owncloud Docker image at [daocloud.io/library/owncloud](https://dashboard.daocloud.io/packages/5e14eddc-fbd7-47e9-a4a1-d9dddd13a0fb).

![daocloud-image-1]({{ site.url }}/images/daocloud-image-1.png)

**Important!** Remember to choose the latest version.

![owncloud-version]({{ site.url }}/images/owncloud-version.png)

5.Set up owncloud step by step.

![daocloud-owncloud-1]({{ site.url }}/images/daocloud-owncloud-1.png)

Bind MySQL.

![bind-mysql]({{ site.url }}/images/bind-mysql.png)

Bind Volume.Remember set the path to `/var/www/html/data`(This is where your cloud files stored).

![bind-volume-1]({{ site.url }}/images/bind-volume-1.png)

![bind-volume-2]({{ site.url }}/images/bind-volume-2.png)

Click `Deploy NOW` button and wait for the process.

![daocloud-process]({{ site.url }}/images/daocloud-process.png)

6.Open your owncloud App in your browser.

![daocloud-info]({{ site.url }}/images/daocloud-info.png)

7.Setting up admin account & mysql connection for your owncloud.

![daocloud-dbinfo]({{ site.url }}/images/daocloud-dbinfo.png)

![owncloud-install]({{ site.url }}/images/owncloud-install.png)

8.Start enjoying your owncloud!

![owncloud-landing]({{ site.url }}/images/owncloud-landing.png)

## Setting up owncloud on your Ubuntu Server and share with your dudes.

Please follow this for now:

[Install ownCloud 9 on Ubuntu 16.04 Server](https://www.tombrossman.com/blog/2016/install-owncloud-9-on-ubuntu-16.04/)
