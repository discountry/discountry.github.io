---
layout: "post"
title: "How to set up Nginx reverse proxy for Blocked Websites"
date: "2017-03-10 23:55"
categories: ['tutorial']
tags: ['linux', 'nginx']
---

Today I'll guide you the set up an nginx server to host mirrors for blocked websites.

So you can visit them freely in restricted areas.

<!--more-->

- [Install Nginx](#install-nginx)
- [Add DNS record to your server](#add-dns-record-to-your-server)
- [Edit reverse proxy Config file](#edit-reverse-proxy-config-file)
- [Set up HTTPS(if necessary)](#set-up-httpsif-necessary)
- [References](#references)

## Install Nginx

I assume you already got an CentOS installed on your server.

Just type the following commands:

```bash
sudo yum install epel-release -y
sudo yum install nginx -y
service nginx start
```

Then try to open your server ip address in your local browser, if you see the words "Welcome to nginx", you're well to go.

## Add DNS record to your server

You need to add an DNS record to your server on your domain name provider's website.

Or you'll have to remember the server IP address which is hard to use.

Domain name is very cheap these days, if you haven't got one, try to pick one you like on [GoDaddy](https://hk.godaddy.com).

## Edit reverse proxy Config file

The Magic happening part!

Create a new vhost config file in your nginx directory and then add the following config script:

```conf
server
{
    listen 80;
    server_name YOUR.OWN.DOMAIN.URL;
    location / {
        proxy_pass http://THE.SITE.URL.YOU.WANT.TO.PROXY/;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Save the file and reload it to your nginx and you are good to go!

```bash
service nginx restart
```


## Set up HTTPS(if necessary)

Nowadays, many big websites enabled https to enforce security, you could use https for free if you think it's necessary.

Add a few lines of config script prepare for setting https up:

```conf

server
{
    listen 80;
    server_name YOUR.OWN.DOMAIN.URL;

    location / {
        proxy_pass https://THE.SITE.URL.YOU.WANT.TO.PROXY/;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    # Add the following lines
    location ~ /.well-known {
        allow all;
    }
}
```

Download the `certbot` tool for generating the https certifications automatically.

```bash
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
```

Try to run `certbot` for the first time and wait it install its dependencies:

```bash
./cerbot-auto
```

When the things are down, try to obtain your certificate by running:

```bash
./cerbot-auto certonly
```

Follow the directions and you'll get your certification files.

Then edit the nginx again to enable the https:

```conf
# Force redirect all http traffic to https
server {
    listen 80;
    return 301 https://$host$request_uri;
}

server
{
    listen 443;
    server_name YOUR.OWN.DOMAIN.URL;

    ssl_certificate /etc/letsencrypt/live/YOUR.OWN.DOMAIN.URL/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/YOUR.OWN.DOMAIN.URL/privkey.pem;

    ssl on;
    ssl_session_cache  builtin:1000  shared:SSL:10m;
    ssl_protocols  TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass https://THE.SITE.URL.YOU.WANT.TO.PROXY;
        proxy_redirect off;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location ~ /.well-known {
        allow all;
    }
}
```

Restart the nginx again and Magic happens.

## References

* [How To Install nginx on CentOS 6 with yum](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-6-with-yum)
* [Automatically enable HTTPS on your website with EFF's Certbot](https://certbot.eff.org/#centos6-nginx)
* [nginx反向代理CDN镜像别人网站](http://www.zuimoban.com/jiaocheng/linux/2224.html)
