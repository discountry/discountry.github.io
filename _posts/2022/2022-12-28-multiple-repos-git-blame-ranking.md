---
layout: "post"
title: "Multiple git repos contributors lines of code ranking"
date: "2022-12-28 00:00"
categories: ['snippets']
tags: ['bash']
published: True
---

Multiple git repos contributors lines of code ranking sort by desc.

<!--more-->

#### Screenshot

![github-ranking]({{ site.url }}/images/github-ranking.png)

#### Usage

Make sure you have all the repos in your home dir. or change `~/` to your git repos location.

Change `rankNumber` to get top 5 or top 10 contributors.

Change `PROJECTS_LIST` to match your own projects dir list.

Run the bash command and magic happens.

```bash
rankNumber=10

PROJECTS_LIST=('~/project1' '~/project12')

for project in "${PROJECTS_LIST[@]}"
do
  cd $project
  git ls-files | while read f; do git blame -w --line-porcelain -- "$f" | grep -I '^author '; done | sort -f | uniq -ic | sort -k1 -gr >> ~/rank.txt
done

cat ~/rank.txt | sort -k1 -gr | awk "NR<$rankNumber+1"
rm ~/rank.txt
```

Use this one if your team has same developers in different projects:

```bash
rankNumber=10

PROJECTS_LIST=('~/project1' '~/project12')

for project in "${PROJECTS_LIST[@]}"
do
  cd $project
  git ls-files | while read f; do git blame -w --line-porcelain -- "$f" | grep -I '^author '; done >> ~/rank.txt
done

cat ~/rank.txt | sort -f | uniq -ic | sort -k1 -gr | awk "NR<$rankNumber+1"
rm ~/rank.txt
```

