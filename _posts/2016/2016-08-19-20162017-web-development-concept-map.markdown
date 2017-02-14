---
layout: post
title: 2016/2017 Web Development Concept Map
published: True
categories: ['web']
tags: ['list']
---

> This is From [Web Development Concept Map](https://coggle.it/diagram/Vz9LvW8byvN0I38x)

<!--more-->

* Web开发Web Development
    * 前端基础Basic Front End
        * 编辑器Text Editors
            * [Atom.io](https://atom.io/)
            * [Sublime Text](https://www.sublimetext.com/)
            * [Brackets.io](http://brackets.io/)
        * [HTML ](http://www.w3school.com.cn/html/)
        * [CSS ](http://www.w3school.com.cn/css/)
        * [Javascript 基础](http://www.w3school.com.cn/js/)
            * [ Javascript 教程](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/)
            * [ Modular JS](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
            * [jQuery ](http://www.w3school.com.cn/jquery/)
        * 前端工程师Front End Developer
            * [ES6/ES2015](http://es6.ruanyifeng.com/) ([Babel](http://babeljs.cn/))
            * CSS相关CSS Tools
                * 预编译器Precompilers: [SASS](http://www.sass-zh.com/) / [LESS](http://lesscss.cn/) / [Stylus](http://stylus-lang.com/)
                * CSS Frameworks: [ Bootstrap](https://www.youtube.com/watch?v=no-Ntkc836w) / [Foundation](http://foundation.zurb.com/)
                * [Responsive Design with CSS](http://www.w3schools.com/html/html_responsive.asp)
            * [前端构建工具Frond End Build Tools](https://www.zhihu.com/question/28638304)
                * 自动构建Task Runners
                    * [Gulp](http://www.gulpjs.com.cn/)
                    * [Grunt ](http://www.gruntjs.net/)
                * 依赖管理Dependency Management
                    * [Browserify](http://browserify.org/)
                    * [ Webpack](http://webpackdoc.com/)
                * [Bower/package management](http://bowercn.com/)
                * [Yeoman.io ](http://yeoman.io/)
            * 框架MV* Javascript Frameworks
                * [React.js](http://reactjs.cn/react/index.html)
                    * [Mobx](https://mobxjs.github.io/mobx/)
                    * [ Flux](http://reactjs.cn/react/docs/flux-overview.html)
                    * [Redux](http://cn.redux.js.org/)
                    * Relay
                    * GraphQL
                    * create-react-app
                * [Angular.js ](http://angularjs.cn/A002)
                * Ember.js
                * [Vue.js](http://cn.vuejs.org/guide/)
                * 单元测试Unit Testing
                    * [Mocha](http://mochajs.org/)
                    * [Jasmine](http://ued.fanxing.com/javascriptdan-yuan-ce-shi-kuang-jia-jasmine/)
                    * [Karma](https://karma-runner.github.io/1.0/index.html)
                    * [enzyme (testing react)](http://airbnb.io/enzyme/)
                * Clojurescript
                * Elm
    * No Matter Which Route You Take
        * [FTP和服务器配置FTP & Web Host Setup](http://yihui.name/cn/2009/06/how-to-build-a-website-as-a-dummy/) ([hostgator](webdev.willstern.com/hostgator))
        * [命令行使用Basic Terminal Usage](http://www.92csz.com/study/linux/)
        * [SSH基础Basic SSH](http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html)
        * [Github基础Github Basics](https://github.com/xirong/my-git/blob/master/how-to-use-github.md)
        * [客户端与服务端交互Learn How Client & Server Talk To Each Other](https://github.com/skyline75489/what-happens-when-zh_CN)
        * [理解RESTful Web Services / GET POST PUT DELETE requests](http://www.ruanyifeng.com/blog/2011/09/restful)
    * 后端Back End
        * 脚本语言Scripting Languages
            * [ Node.js](http://nodejs.cn/) ([ express](http://www.expressjs.com.cn/)^, hapi^)
            * [Python](http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000) ((django)[https://www.djangoproject.com/], [flask^](http://flask.pocoo.org/docs/0.11/))
            * [Ruby](http://www.runoob.com/ruby/ruby-tutorial.html)([Ruby on Rails](http://guides.ruby-china.org/), Sinatra^)
            * [PHP](http://www.w3school.com.cn/php/)((Laravel)[http://www.golaravel.com/], Symfony2, Lumen^)
        * 函数式语言Functional Languages
            * [Elixir](https://segmentfault.com/a/1190000000419329)
            * [Scala](https://www.zhihu.com/question/19748408)
            * [Clojure](http://www.oschina.net/translate/learn-clojure-in-minutes)
            * [Haskell](https://www.zhihu.com/question/20193745)
        * 高性能语言High-Performance/Compiled Languages
            * [Go / GoLang](https://www.zhihu.com/question/21409296)
            * Rust
            * [Java](https://www.zhihu.com/question/25255189)
            * C#
        * 开发运维Dev Ops
            * 云平台Web Platforms
                * [新浪云](http://t.cn/R4Wvy88)
                * [Digital Ocean](https://m.do.co/c/1071fc2dbb1c)
                * [Amazon Web Services (AWS)](https://aws.amazon.com/cn/)
                * Azure
                * Rackspace
                * Heroku
            * 服务器管理Server Management (configuration management or CM)
                * [Linux](http://linux.vbird.org/)
                * [Docker ](http://www.kancloud.cn/thinkphp/docker_practice/30894)
                * Ansible
                * Salt
                * Chef
                * Puppet
            * [Docker ](http://www.docker.com/) (containerized applications and databases)
                * 大型Big Scale: [Kubernetes](http://blog.csdn.net/zhangjun2915/article/details/40598151), Mesos
                * 小型Small Scale: [Docker Swarm](http://blog.csdn.net/wangtaoking1/article/details/46731913), Docker 1.12 swarm
                * 图形化界面UI-Driven: [Dao Cloud](https://www.daocloud.io/)
            * 持续测试/部署Continuous Testing & Delpoyment
                * [flow.ci](http://flow.ci/)
                * [Travis CI](https://travis-ci.org/)
                * [Jenkins (on your own hardware)](http://www.cnblogs.com/yjmyzz/p/jenkins-tutorial-part-1.html)
                * SemaphoreCI
                * CircleCI
                * Codeship
        * 数据Data
            * 关系型数据库Relational: [MySQL](http://www.cnblogs.com/mr-wid/archive/2013/05/09/3068229.html), PostgreSQL
            * 缓存Redis / sessions / caching
            * 非关系型数据库Document: [MongoDB](http://www.yiibai.com/mongodb/home.html), Couchbase, RethinkDB
            * 搜索引擎数据库Search Engine: [ElasticSearch](https://segmentfault.com/a/1190000000389789), Solr
            * 缓存Caching
                * [Nginx (Server)](http://www.jointforce.com/jfperiodical/article/949)
                * [Apache (Server)](http://blog.csdn.net/chen3888015/article/details/8585774)
                * [Database (Redis)](http://www.runoob.com/redis/redis-tutorial.html)
                * In-Memory
        * 其他相关Things to Learn
            * Unit/Functional Testing for Chosen Technology
            * API's / RESTful Services
            * Security
            * 验证Authorization/Authentication
                * [OAUTH2](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
                * JSON WebToken
            * SOA (Service Oriented Architecture) / Microservices
            * Deploying your app (flightplan: nodejs, Fabric: python, Capistrano: ruby)
            * websocket
            * ORM/Data Structure