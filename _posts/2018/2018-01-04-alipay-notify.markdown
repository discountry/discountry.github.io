---
layout: "post"
title: "支付宝异步通知接口验签"
date: "2018-01-04 02:01"
categories: ['snippet']
tags: ['alipay', 'php']
published: True
---

支付宝的文档和SDK简直是垃圾，根本没有任何说明，源码里也没个准确的注释，只有一个JAVA的示例不知所云。

在调试验签接口时踩了很多坑，官方的SDK根本没法用，而且支付宝本身的验签包括第三方登陆、网站支付、移动端支付等，另外SDK里本身的加密校验方式貌似也不止一种。

几经折腾，遂抛弃了SDK，直接使用下面这段代码解决了问题：

<!--more-->

1. `openssl_get_publickey` 函数返回 `false`（这里必须传支付宝的应用公钥，且格式正确，格式见后文代码）。

2. `openssl_verify` 函数返回 `false`，这里需要清除你的秘钥类型是什么（RSA/RSA2）。

**示例代码：**

```php
<?php
/**
* 支付宝当面付异步回调数据验签
* @param  array $params                待验证数据
* @param  string $alipay_public_key    支付宝应用公钥
* @param  string $sign_type            秘钥类型
* @return boolean                      验签状态
* 作者：Veris
* 最族：http://www.mostclan.com
*/
function verify_sign($params,$alipay_public_key,$sign_type='RSA2')
{
    $ori_sign=$params['sign'];
    unset($params['sign']);
    unset($params['sign_type']);
    ksort($params);
    $data='';
    foreach($params as $k => $v){
        $data.=$k.'='.$v.'&';
    }
    $data=substr($data,0,-1);
    $public_content="-----BEGIN PUBLIC KEY-----\n" . wordwrap($alipay_public_key, 64, "\n", true) . "\n-----END PUBLIC KEY-----";
    $public_key=openssl_get_publickey($public_content);
    if($public_key){
        if($sign_type=='RSA2') {
            $result = (bool)openssl_verify($data, base64_decode($ori_sign), $public_key, OPENSSL_ALGO_SHA256);
        } else {
            $result = (bool)openssl_verify($data, base64_decode($ori_sign), $public_key);
        }
    openssl_free_key($public_key);
    return $result;
    }else{
        return false;
    }
}
```

除此之外还可能会遇到接收到了请求却看不到参数的问题，可以参见[支付宝异步通知notify_url接收不到参数](https://segmentfault.com/q/1010000004122789)。

php 里也可以直接简单粗暴地从 `$_POST` 里取，抛弃中间件就不会有 Bug 了。

但也要注意做好校验，支付相关的接口不可儿戏。

最后，虽然支付宝的沙箱很垃圾，还特么只支持安卓端，但最好还是去配置一个，用真钱调试真伤……
