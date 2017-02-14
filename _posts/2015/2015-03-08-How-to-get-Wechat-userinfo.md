---
layout: post
title: How to get Wechat UserInfo via access_token
published: True
categories: ['tutorial']
tags: ['Wechat']
---
<!--more-->

###Without using `OAuth2.0 access token`, You can use `Universal access token` instead to get UserInfo.

####Get User's openid
You could get this XML when wechat user follow you or post you message.
{%highlight xml%}
<xml>
    <ToUserName><![CDATA[gh_b629c48b653e]]></ToUserName>
    <FromUserName><![CDATA[ollB4jv7LA3tydjviJp5V9qTU_kA]]></FromUserName>
    <CreateTime>1372307736</CreateTime>
    <MsgType><![CDATA[event]]></MsgType>
    <Event><![CDATA[subscribe]]></Event>
    <EventKey><![CDATA[]]></EventKey>
</xml>
{% endhighlight %}

####Use your appid to get the `Universal Access Token`. 
    https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET

The return result:
{%highlight json%}
{
    "access_token": "NU7Kr6v9L9TQaqm5NE3OTPctTZx797Wxw4Snd2WL2HHBqLCiXlDVOw2l-Se0I-WmOLLniAYLAwzhbYhXNjbLc_KAA092cxkmpj5FpuqNO0IL7bB0Exz5s5qC9Umypy-rz2y441W9qgfnmNtIZWSjSQ",
    "expires_in": 7200
}
{% endhighlight %}
####Use `Universal Access Token` & `openid` to get the UserInfo
    https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID

The return result:
{%highlight json%}
{
    "subscribe": 1,
    "openid": "oLVPpjqs2Bhvz*******vTYAX4GLc",
    "nickname": "Discountry",
    "sex": 1,
    "language": "zh_CN",
    "city": "北京",
    "province": "北京",
    "country": "中国",
    "headimgurl": "http://wx.qlogo.cn/mmopen/JcDicrZBlREhnNXZRudod9PmibRkIs5K2f1tUQ7lFjC63pYHaXGxNDgMzjGDEuvzYZbFOqtUXaxSdoZG6iane5ko9H30krIbzGv/0",
    "subscribe_time": 1386160805
}
{% endhighlight %}

>The basic idea quoted from [Fangbei](http://www.cnblogs.com/txw1958/p/weixin76-user-info.html)


