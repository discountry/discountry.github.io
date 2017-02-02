---
layout: post
title: Fix php strtotime bug on 32bit server
published: True
categories: ['snippets']
tags: ['php']
---

You may get an integer overflow bug if you're using `strtotime` on a 32bit server.

This is called [Y2K38](https://en.wikipedia.org/wiki/Year_2038_problem) problem.

The UNIX timestamp will reach the int variable limit on 32bit OS at *19 January 2038*.

However we can fix this bug by using a customized function:

<!--more-->

```php
<?php
class DateHelper{
    
    /**
     * 在32位操作系统下，超过 2038-01-19 03:14:07 ，会溢出
     * @param unknown $time
     * @return number
     */
    public static function strtotimeUnsafe($time){
        return strtotime($time);
    }
    
    /**
     * 安全的方式
     * @param unknown $time
     * @return string
     */
    public static function strtotimeSafe($time){
        $date1 = new DateTime('1970-01-01 00:00:00',new DateTimeZone('Europe/London'));
        $date2 = new DateTime($time,new DateTimeZone('Asia/Shanghai'));
        $interval = $date1->diff($date2);
        $days = $interval->format('%r%a days');
        $days = intval($days);
        //Using this method you need to install php-bcmath module
        return bcmul($days, 24*3600);
    }
}
```
