---
layout: "post"
title: "使用 Warp 拯救 VPS 解锁 ChatGPT/Gemini/Netflix/Google验证码"
date: "2025-09-05 00:00"
categories: ["tutorial"]
tags: ["vps"]
published: True
---

用了很久的 VPS 突然打不开 Gemini 了，虽然是日本 IP 但是显示服务尚未在当前地区开放。

真实物理IP/静态住宅IP是比较贵的，那么有没有一种办法可以解除这些限制呢？

<!--more-->

今天学习到了可以使用 Cloudflare 提供的免费 Warp 服务，为 VPS 服务器本身添加代理网络出口，达到解锁目的。

具体使用到的是[warp-yg](https://github.com/yonggekkk/warp-yg)一键安装脚本。

```bash
bash <(curl -Ls https://raw.githubusercontent.com/yonggekkk/warp-yg/main/CFwarp.sh)
```

根据命令行的提示操作即可。
