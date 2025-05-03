---
layout: "post"
title: "腾讯云安装 Dokploy(Vercel 开源平替)"
date: "2025-05-03 00:00"
categories: ["deploy"]
tags: ["dev"]
published: True
---

一键把你的服务器变成 Vercel

服务器配置只需 2核 2G 内存即可

<!--more-->

首先根据腾讯云[官方文档](https://cloud.tencent.com/document/product/213/46000#1H-kXbk9zoqvzYMVPVsBO)安装 Docker

以 ubuntu 为例：

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl -y
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://mirrors.cloud.tencent.com/docker-ce/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://mirrors.cloud.tencent.com/docker-ce/linux/ubuntu/ \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
# 安装
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
# 启动
sudo systemctl start docker
# 验证
sudo docker info
```

重点是换源：

```bash
vim /etc/docker/daemon.json
```

输入如下内容并保存

```json
{
  "registry-mirrors": ["https://mirror.ccs.tencentyun.com"]
}
```

重启 Docker

```
sudo systemctl restart docker
```

使用官方一键脚本安装 `Dokploy`

```sh
curl -sSL https://dokploy.com/install.sh | sh
```

等待 3 分钟左右即可，根据命令行提示，在浏览器中打开 `http://your-ip-from-your-vps:3000` 完成剩余配置

### 域名绑定

如果你的域名 DNS 在 Cloudflare，需要修改为 Full(strict) 或 Flexible 模式，具体参考[https://docs.dokploy.com/docs/core/domains/cloudflare](https://docs.dokploy.com/docs/core/domains/cloudflare)

### 自动部署

在 Github repo 中配置 webhook 即可自动部署，具体参考[https://docs.dokploy.com/docs/core/auto-deploy](https://docs.dokploy.com/docs/core/auto-deploy)
