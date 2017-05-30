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

```php
<?php
require_once 'alipay/f2fpay/config/config.php';
class QRpay
{
  public static function createPay($params)
  {
    require_once 'alipay/f2fpay/model/builder/AlipayTradePrecreateContentBuilder.php';
    require_once 'alipay/f2fpay/service/AlipayTradeService.php';
    // 获取订单参数，订单号需要保证唯一
    $outTradeNo = $params['out_trade_no'];
    // 交易主题，会在付款对话框中显示
    $subject = $params['subject'];
    // 交易总价
    $totalAmount = $params['total_amount'];
    $body = $params['body'];
    // 交易过期时间
    $timeExpress = "5m";
    // 支付订单参数构建
    $qrPayRequestBuilder = new \AlipayTradePrecreateContentBuilder();
    $qrPayRequestBuilder->setOutTradeNo($outTradeNo);
    $qrPayRequestBuilder->setTotalAmount($totalAmount);
    $qrPayRequestBuilder->setTimeExpress($timeExpress);
    $qrPayRequestBuilder->setSubject($subject);
    $qrPayRequestBuilder->setBody($body);
    // 调用qrPay方法获取当面付应答
    $qrPay = new \AlipayTradeService($config);
    $qrPayResult = $qrPay->qrPay($qrPayRequestBuilder);
    //  根据状态值进行业务处理
    $response = "";
    switch ($qrPayResult->getTradeStatus()){
      case "SUCCESS":
      case "FAILED":
      case "UNKNOWN":
        $response = $qrPayResult->getResponse();
        break;
      default:
        $response = "不支持的返回状态，创建订单二维码返回异常!!!";
        break;
    }
    return $response;
  }
  public static function queryPay($payId)
  {
    require_once 'alipay/f2fpay/service/AlipayTradeService.php';
    // 就是生成订单的订单号
    $out_trade_no = $payId;
    //构造查询业务请求参数对象
    $queryContentBuilder = new \AlipayTradeQueryContentBuilder();
    $queryContentBuilder->setOutTradeNo($out_trade_no);
    //初始化类对象，调用queryTradeResult方法获取查询应答
    $queryResponse = new \AlipayTradeService($config);
    $queryResult = $queryResponse->queryTradeResult($queryContentBuilder);
    //  根据状态值进行业务处理
    $response = "";
    switch ($queryResult->getTradeStatus()){
      case "SUCCESS":
      case "FAILED":
      case "UNKNOWN":
        $response = $queryResult->getResponse();
        break;
      default:
        $response = "不支持的查询状态，交易返回异常!!!";
        break;
    }
    return $response;
  }
  /**
   * 退款请求
   */
  public static function refundPay($params)
  {
    require_once 'alipay/f2fpay/model/builder/AlipayTradeRefundContentBuilder.php';
    require_once 'alipay/f2fpay/service/AlipayTradeService.php';
    // 获取退款参数
    $out_trade_no = $params['out_trade_no'];
    $refund_amount = $params['refund_amount'];
    $out_request_no = $params['out_request_no'];
    //创建退款请求builder,设置参数
    $refundRequestBuilder = new AlipayTradeRefundContentBuilder();
    $refundRequestBuilder->setOutTradeNo($out_trade_no);
    $refundRequestBuilder->setRefundAmount($refund_amount);
    $refundRequestBuilder->setOutRequestNo($out_request_no);
    //初始化类对象,调用refund获取退款应答
    $refundResponse = new AlipayTradeService($config);
    $refundResult = $refundResponse->refund($refundRequestBuilder);
    //  根据状态值进行业务处理
    $response = "";
    switch ($refundResult->getTradeStatus()){
      case "SUCCESS":
      case "FAILED":
      case "UNKNOWN":
        $response = $refundResult->getResponse();
        break;
      default:
        $response = "不支持的交易状态，交易返回异常!!!";
        break;
    }
    return $response;
  }
}
```

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



