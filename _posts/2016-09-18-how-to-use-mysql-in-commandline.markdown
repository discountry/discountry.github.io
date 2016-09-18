---
layout: post
title: How to use mysql in commandline
published: True
categories: ['snippets']
tags: ['bash','sql']
---

Some useful mysql commands.

<!--more-->

### Create a New User and Grant Permissions

```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *. * TO 'ssuser'@'localhost';
GRANT ALL PRIVILEGES ON [database name].[table name] TO 'newuser'@'localhost';
FLUSH PRIVILEGES;
```

### Basic interaction

```sql
show databases;
show tables;
describe tables;
use [databaseName];
```



