---
layout: "post"
title: "Alipay face-to-face QR Code Pay php sdk using guide"
date: "2017-05-30 13:59"
categories: ['tutorial']
tags: ['alipay', 'php']
published: True
---

封装提供的是最小参数项，去除了许多可选参数。

封装需要同官方提供的SDK一同使用。

[SDK&DEMO下载](https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.0TkamP&treeId=194&articleId=105201&docType=1)

下面是代码：

<!--more-->

<script src="https://gist.github.com/discountry/92c88368acda7c4380e1504fddbb4bd9.js"></script>

`alipay/f2fpay/config/config.php` 文件里要配置好3项内容，其余默认就好：

```php
<?php

$config = array(
    // 支付宝公钥
    'alipay_public_key' =>'',
    // 商户私钥
    'merchant_private_key' => '',
    //应用ID
    'app_id' => ''
)
```

以上参数需要在支付宝开放平台申请应用后获取，个人也可以通过申请：

[蚂蚁金服开放平台](https://open.alipay.com/developmentAccess/developmentAccess.htm)

具体操作流程查看官方文档：

[扫码支付接入指引](https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7629140.0.0.ix6pke&treeId=194&articleId=106078&docType=1)

申请的应用只需要上传图标，填写靠谱的基本信息即可用过审核上线。

![开放平台 应用详情.png](https://ooo.0o0.ooo/2017/05/30/592d06bd0b2d0.png)

等待应用状态为 `已上线` 即可正常使用应用的 app_id 以及公钥密钥。

![2017-05-30_13-47-42.png](https://ooo.0o0.ooo/2017/05/30/592d0796f067b.png)

你可以在 [账户中心-PID和公钥管理](https://openhome.alipay.com/platform/keyManage.htm) 页面添加你的密钥和公钥。

推荐直接使用网站页面当中提供的生成工具生成：

![2017-05-30_13-51-09.png](https://ooo.0o0.ooo/2017/05/30/592d086451cb3.png)

设置保存后即可获取支付宝公钥，私钥在刚才的生成工具的文件夹下的 `rsa_private_key.pem` 文件中，去除文件头尾标识以及换行使用。



