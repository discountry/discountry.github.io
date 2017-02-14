---
layout: post
title: Yeoman ThinkPHP generator
published: True
categories: ['project']
tags: ['thinkphp', 'yeoman']
---

I've be planning to work on this project for a long time. Laravel has a feature `php artisan` which is very helpful for developers. I really want to add the "generator" feature for [ThinkPHP](https://github.com/liu21st/thinkphp). which is a very popular framework in China.

<!--more-->

Finally, this yeoman-thinkphp generator came out. It's just a preview version of my idea but it's really cool and somehow helpful for your development with ThinkPHP.

A lot of TODOs still waiting for me. **:P**

> [Yeoman generator](https://github.com/discountry/generator-thinkphp) for ThinkPHP - Create ThinkPHP Project and generate Controller/Model/View for it.


##Usage

Install `Composer` [Read more about composer](https://getcomposer.org/)

{%highlight bash%}
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
{% endhighlight %}


Install `yo` and `generator-thinkphp` [Read more about Yeoman](http://yeoman.io/)

{%highlight bash%}
npm install -g yo generator-thinkphp
{% endhighlight %}

Make a new directory, and `cd` into it:

{%highlight bash%}
mkdir my-new-project && cd $_
{% endhighlight %}

Run `yo thinkphp` to init your project, and follow the steps:

{%highlight bash%}
yo thinkphp
{% endhighlight %}

## Generators

Available generators:

* [thinkphp](#app) (aka [thinkphp:app](#app))
* [thinkphp:controller](#controller)
* [thinkphp:model](#model)
* [thinkphp:space](#space)

### App

Create a new project using [ThinkPHP](https://github.com/liu21st/thinkphp) and using [Composer](https://getcomposer.org/).

Example:

{%highlight bash%}
yo thinkphp
{% endhighlight %}

### Controller

Generates a controller and view for your app. Command like 

{%highlight bash%}
yo thinkphp:controller [classedName] [spaceName]
{% endhighlight %}

**The `classedName` is required value, without it will get error.**

**The default `spaceName` is `Home` and it's optional.**

Example:

{%highlight bash%}
yo thinkphp:controller Index Home
{% endhighlight %}

Produces `app/Home/Controller/IndexController.class.php`:

{%highlight php%}
<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {

    public function index(){
    	//
        $this->display();
    }

}
{% endhighlight %}

Produces `app/Home/View/index.html`:

{%highlight html%}
<extend name="base" />
<block name="content">
	<h1>Index</h1>
</block>
{% endhighlight %}

### Model

Much like Controller generator, it generates a plain model for your Project.

Example:

{%highlight bash%}
yo thinkphp:model User Home
{% endhighlight %}

Produces `app/Home/Model/UserModel.class.php`:

{%highlight php%}
<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model {
	//
    protected $tableName = 'User'; 

}
{% endhighlight %}

### Space

Create a new namespace folder for you app.

Example:

{%highlight bash%}
yo thinkphp:space Admin
{% endhighlight %}

Produces `app/Admin` folder and default files in your project.

* Admin 
	* Common
	* Conf 
	* Controller 
	* Model 
	* View 
	* index.html

## About 

Add command line tools for ThinkPHP. Just like [Laravel](http://laravel.com)'s `php artisan`

## License

MIT
