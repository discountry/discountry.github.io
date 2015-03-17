---
layout: post
title: Start testing CKAN
published: True
categories: ['ckan']
tags: ['testing']
---

First of all you'll need to config everything right in your production.ini or development.ini of your CKAN site.

Follow the guide here [Installing CKAN from Source](http://docs.ckan.org/en/latest/maintaining/installing/install-from-source.html) and build Python virtual environment for you site.

Then you can get your hands dirty.
<!--more-->

### 1.Creating a sysadmin user #####
You should run these command in your ckan directory.
{% highlight bash %}
cd /usr/lib/ckan/default/src/ckan
{% endhighlight %}

Then you can use your `development.ini` or `production.ini` file to do your magic.
{% highlight bash %}
paster sysadmin add 'whoami' -c /etc/ckan/default/production.ini
or
paster sysadmin add 'whoami' -c /etc/ckan/default/development.ini
{% endhighlight %}

### 2.Creating test data #####
{% highlight bash %}
paster create-test-data -c /etc/ckan/default/production.ini
or
paster create-test-data -c /etc/ckan/default/development.ini
{% endhighlight %}

### 3.Config file #####
You can customize your CKAN site by changing default setting here.
For example, to change the title of your site you would find the `ckan.site_title` line in your config file and edit it:
{% highlight bash %}
ckan.site_title=Yuqian's CKAN
{% endhighlight %}
And another example you can also choose your default language in the config file.
{% highlight bash %}
ckan.locale_default=zh_CN #For default interface in Chinese.
{% endhighlight %}


