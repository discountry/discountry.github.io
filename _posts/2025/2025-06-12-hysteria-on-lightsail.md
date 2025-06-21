---
layout: "post"
title: "Hysteria2 拯救 AWS lightsail 极速科学上网"
date: "2025-06-12 00:00"
categories: ["tutorial"]
tags: ["vps"]
published: True
---

以前我使用的上网冲浪方案都是 v2ray Websocket(WS)+TLS+CDN 的方式，这种方式的好处是安全性高，保护服务器不被 ban

但前几天日本和新加坡的线路直接卡成💩

多年没有研究上网冲浪姿势的我，只好重新拿起课本

经过一番学习之后，我了解到了宝藏协议 Hysteria2

<!--more-->

Hysteria2 底层使用的是 UDP 协议，即使 TCP ping 服务器有 200-300ms 的延迟

使用 UDP 也能将延迟干到 50ms 左右

网速更是可以快到运营商想来ban你的UDP流量

Youtube 8K 视频也能做到秒开不卡顿

使用 [AWS Lightsail](https://lightsail.aws.amazon.com/) 的好处是

我可以很放心地把一些需要长期保存和稳定运行的服务都跑在上面

也可以安心地存放一些 API Key 和密钥之类的

网上大把的野鸡运营商的服务器，我是什么都不敢保存的

### 安装教程

[Hysteria2 官网](https://v2.hysteria.network/zh/docs/getting-started/Server-Installation-Script/) 贴心地提供了一键安装脚本

```bash
# 安装
bash <(curl -fsSL https://get.hy2.sh/)
# 删除
bash <(curl -fsSL https://get.hy2.sh/) --remove
```

**编辑配置**

```bash
vim /etc/hysteria/config.yaml
```

**配置内容**

```
listen: :443 # 服务端口，可以换成别的

acme:
  domains:
    - hysteria.example.com # 你的域名
  email: admin@example.com # 你的邮箱
  type: dns
  dns:
    name: cloudflare
    config:
      cloudflare_api_token: vRDNxxxxxxxxxxxxxxx # Cloudflare API Key

auth:
  type: password
  password: 123456789 # 密码 

masquerade:
  type: proxy
  proxy:
    url: https://bing.com/
    rewriteHost: true
```

**启动服务**

```bash
systemctl enable --now hysteria-server.service
# 查看状态
systemctl status hysteria-server.service
# 查看日志
journalctl --no-pager -e -u hysteria-server.service
```

到这一步就大功告成了！

当然 Hysteria 也不是没有缺点，UDP的速度快是快，但很容易丢包和断流，不过对于90%使用场景是看网页刷视频的朋友，极速的体验还是非常舒服的。

