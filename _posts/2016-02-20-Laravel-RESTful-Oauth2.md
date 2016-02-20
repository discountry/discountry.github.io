---
layout: post
title: Using Laravel to set up a RESTful Service with Oauth2 Server
published: True
categories: ['tutorial']
tags: ['php']
---

> This tutorial is based on [Laravel 5 token based Authentication (OAuth 2.0)](https://medium.com/@mshanak/laravel-5-token-based-authentication-ae258c12cfea#.5bzflbkp9) & [Dingo Wiki](https://github.com/dingo/api/wiki).They both have some bugs and I fixed them.

## 1.Install a new Laravel Project.

{%highlight bash%}
composer global require "laravel/installer"
laravel new restful
{% endhighlight %}

## 2.Modify `composer.json` and run `composer update` to include extra packages.

{%highlight php%}
<?php
    "require": {
        "php": ">=5.5.9",
        "laravel/framework": "5.2.*",
        "dingo/api": "1.0.*dev",
        "lucadegasperi/oauth2-server-laravel": "5.1.*"
    }
{% endhighlight %}

## 3.Add new providers in your `config/app.php` file.

{%highlight php%}
<?php
    'providers' => [

        //Add bottom lines to your providers array.
        /**
         * Customize Service Providers...
         */
        Dingo\Api\Provider\LaravelServiceProvider::class,
        LucaDegasperi\OAuth2Server\Storage\FluentStorageServiceProvider::class,
        LucaDegasperi\OAuth2Server\OAuth2ServerServiceProvider::class,

    ],
{% endhighlight %}

