---
layout: post
title: How to Install CKAN on Ubuntu Server 12.04
published: True
categories: ['Ubuntu','ckan']
tags: ['Guide']
---

This is the note I write here based on my own practices.
<!--more-->

1.Install Ubuntu Server in a virtual machine.

Ⅰ.Install CKAN packages

2.Update Ubuntu's package index.

{% highlight bash linenos %}
sudo apt-get update
{% endhighlight %}

3.Download CKAN required packages.

{% highlight bash linenos %}
sudo apt-get install -y nginx apache2 libapache2-mod-wsgi libpq5
{% endhighlight %}

4.Download the CKAN package.

{% highlight bash linenos %}
wget http://packaging.ckan.org/python-ckan_2.2_amd64.deb
{% endhighlight %}

5.Then install the package.

{% highlight bash linenos %}
sudo dpkg -i python-ckan_2.2_amd63.deb
{% endhighlight %}

Ⅱ.Install PostgreSQL & Solr

1.Install PostgreSQL and Slor.

{% highlight bash linenos %}
sudo apt-get install -y postgresql solr-jetty
{% endhighlight %}

2.Setup Solr
edit the config file(/etc/default/jetty) and change the following variables:
	
{% highlight bash linenos %}
NO_START=0            # (line 4)
JETTY_HOST=127.0.0.1  # (line 15)
JETTY_PORT=8983       # (line 18)
JAVA_HOME=/usr/lib/jvm/java-6-openjdk-amd64/
{% endhighlight %}

Start the jetty server:

{% highlight bash linenos %}
sudo service jetty start
{% endhighlight %}

Replace the default `schema.xml` file

{% highlight bash linenos %}
sudo mv /etc/solr/conf/schema.xml /etc/solr/conf/schema.xml.bak
sudo ln -s /usr/lib/ckan/default/src/ckan/ckan/config/solr/schema.xml /etc/solr/conf/schema.xml
sudo service jetty restart
{% endhighlight %}

Change the [solr_url](http://docs.ckan.org/en/latest/maintaining/configuration.html#solr-url) setting in CKAN config file

{% highlight bash linenos %}
solr_url=http://127.0.0.1:8983/solr
{% endhighlight %}

3.Setup a PostgreSQL databse

{% highlight bash linenos %}
sudo -u postgres createuser -S -D -R -P ckan_default
sudo -u postgres createdb -O ckan_default ckan_default -E utf-8
{% endhighlight %}

Remember to enter a password for later use.

Then edit the [sqlalchemy.url](http://docs.ckan.org/en/latest/maintaining/configuration.html#sqlalchemy-url) option in /etc/ckan/default/production.ini set the password you have entered.

4.Initialize CKAN database by running this command.

{% highlight bash linenos %}
sudo ckan db init
{% endhighlight %}

5.Restart Apache and Nginx.

{% highlight bash linenos %}
sudo service apache2 restart
sudo service nginx restart
{% endhighlight %}

6.Everything's done.visit your localhost.

[localhost](http://localhost)





