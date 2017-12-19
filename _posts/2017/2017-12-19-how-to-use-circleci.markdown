---
layout: "post"
title: "How to use CircleCI for GitHub Pages Continuous Deployment"
date: "2017-12-19 13:25"
categories: ['tutorial']
tags: ['github', 'ci']
published: True
---

Today we're going to introduce how to use [CircleCI](https://circleci.com) for **Continuous Deployment** on GitHub Pages.

<!--more-->

CircleCI is a CI tool much like [Travis CI](https://travis-ci.org/). But their configurations has many differences. You may find it troublesome first using it.

If you're too busy to read the [official doc](https://circleci.com/docs/2.0/). This tutorial would be very helpful for you to use as a quick cheatsheet.

### 1.Register CircleCI

Open [CircleCI](https://circleci.com/) official website and login with your GitHub account.

### 2.Enable repository 

Check the switch button of the repos you want to manage on CircleCI.

### 3.Make `config.yml`

Create a config file for CircleCI named `config.yml` in your project root or `.circleci` directory.

Firstly you need to set your build environment, this depends on your project language and dependencies:

```yml
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:latest
```

If you want to specify certain branch that fires ci task, you could use `filters`: 

```yml
filters:
  branches:
    only: master
```

Then you can configure the commands you want to run on your virtual machine, the commands can be divided by `steps`:

```yml
steps:
  - run:
    name: Install some stuff
    command: <do-some-stuff>
  - run:
    name: Deploy if tests pass and branch is Master
    command: <my-deploy-commands>
```

I'm using [Gatsby](https://www.gatsbyjs.org/) to build my doc site. Here is a full template:

```yml
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:latest
    filters:
      branches:
        only: master
    steps:
      - add_ssh_keys:
          fingerprints:
            - "xx:xx:xx:xx:11:22:33:44:55:66:77:88:99:xx:xx:xx"
      - checkout
      - restore_cache:
          keys:
          - dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - dependencies-
      - run:
          name: Install
          command: yarn install
      - save_cache:
          paths:
            - node_modules
          key: dependencies-{{ checksum "package.json" }}
      - run:
          name: Gatsby build site
          command: yarn build
      - run:
          name: Prepare shell commands
          command: cp .scripts/gatsby-deploy.sh ../ && chmod +x ../gatsby-deploy.sh
      - run:
          name: Run deploy scripts
          command: ../gatsby-deploy.sh
```

### 4.Grant write permission to CircleCI

For me I have to authorize CircleCI to update `gh-pages` automatically. The default ssh key generated before only got the read permission. So we have to add a read/write deployment key manually.

**Generate a new ssh key**

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Follow the command-line interactions you'll get two ssh key files `id_rsa` & `id_rsa.pub` (remember to change the default file location or your local ssh key would be overwritten).

**Upload ssh key**

* Upload the `id_rsa.pub` on your GitHub repo settings at `https://github.com/<your_name>/<your_repo>/settings/keys`

* Go to `https://circleci.com/gh/<your_name>/<your_repo>/edit#ssh` on CircleCI and add the private key `id_rsa` that you just created. Enter `github.com` in the **Hostname** field and press the submit button.

**Add ssh key to your config file**

Use `add_ssh_keys` to set the ssh key you've just added to enable it when running deploy scripts.

```yml
- add_ssh_keys:
    fingerprints:
      - "xx:xx:xx:xx:11:22:33:44:55:66:77:88:99:xx:xx:xx"
```

### 5.Write `deploy.sh` shell scripts

Now CircleCI gets the permission to write to your repository, you can use whatever `git` commands to manipulate your repo:

```bash
git pull
yarn build
git checkout gh-pages
# Add site files...
git push
```

### 6.Run test & be happy 

That's all. You're good to go now. grab a cup of coffee and sit down watch the CircleCI runs.

### References 

1. [Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
2. [Adding read/write deployment key](https://circleci.com/docs/1.0/adding-read-write-deployment-key/)
3. [CircleCI Deploy documents](https://circleci.com/docs/2.0/deployment_integrations/)
4. [CircleCI configuration-reference](https://circleci.com/docs/2.0/configuration-reference/#add_ssh_keys)
