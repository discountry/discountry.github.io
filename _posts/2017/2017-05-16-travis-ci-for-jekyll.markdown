---
layout: "post"
title: "Using Travis CI add 'auto build & publish' feature for your jekyll site on Github"
date: "2017-03-10 23:55"
categories: ['tutorial']
tags: ['travis-ci', 'jekyll']
published: True
---

Github Pages is very powerful and it's free to use. Nowadays many developers deploy their blog & project pages on Github Pages using jekyll.

You're free to use Github Pages Builder by default. But if you want to use additional plugins or other powerful features of jekyll, you'll need to build your site locally and then push it to your Github repo.

And every time you update your site or add new posts, you'll need to build it again and push it up again.

It's very annoyinng and a waste of time.

Can't we use some methods to make it automatically happen?

Of course we can!

<!--more-->

### Dependencies

* [Github Pages](https://pages.github.com/)
* [jekyll](http://jekyllrb.com/)
* [Travis CI](https://travis-ci.org/)

### Tutorial

#### 1.Set up your porject on travis-ci

Use your Github account login to [Travis CI website](https://travis-ci.org/).

![2017-05-16_15-04-42.png](https://ooo.0o0.ooo/2017/05/16/591aa4bf48dfa.png)

Then go to your [account setting page](https://travis-ci.org/profile). And open the toggle button of the project you want to enable Continuous integration.

![2017-05-16_15-10-54.png](https://ooo.0o0.ooo/2017/05/16/591aa61e9b2a6.png)

#### 2.Add config file

Add a new `.travis.yml` file on the root of your project.

```yml
language: ruby
rvm: 2.2
install: bundle install
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN # Set in travis-ci.org dashboard
  on:
    branch: master # Or `gh-pages`
```

#### 3.Generate a new Personal access tokens for your project

Go to your [Token setting page](https://github.com/settings/tokens). 

Pree `Generate new token` button.

![2017-05-16_15-23-39.png](https://ooo.0o0.ooo/2017/05/16/591aa9153ea89.png)

Select the right permission.

![2017-05-16_15-23-39.png](https://ooo.0o0.ooo/2017/05/16/591aa94c89d75.png)

Add the generated token to your travis-ci project setting page.

![2017-05-16_15-27-33.png](https://ooo.0o0.ooo/2017/05/16/591aa9fc9864b.png)

#### 4.Push & Test

Push a new commit to your repo. Then you're able to see the build process log on travis-ci:

![2017-05-16_15-20-27.png](https://ooo.0o0.ooo/2017/05/16/591aa86eb0da9.png)

You're good to go!

### References

* [Travis CI User Documentation](https://docs.travis-ci.com/)
* [jekyll-travis](https://github.com/mfenner/jekyll-travis)
* [Deploy to GitHub pages from Travis CI](https://iamstarkov.com/deploy-gh-pages-from-travis/)
