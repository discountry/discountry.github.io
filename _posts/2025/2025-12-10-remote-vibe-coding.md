---
layout: "post"
title: "如何在手机上优雅地 Vibe Coding"
date: "2025-12-10 00:00"
categories: ["tutorial"]
tags: ["vps","iOS","vibe coding"]
published: True
---

在手机上写代码的核心思路是：
**计算在远程，手机只负责输入与查看结果。**

<!--more-->

# 方案一：在 VPS 上运行 Codex / Claude Code 等 CLI

然后手机用 Termius（或任意 iOS SSH App）连接

流程非常简单：

1. **在 VPS 上安装 Node（18+）与 Coding CLI：**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

安装 Codex 或其他 CLI：

```bash
npm install -g @openai/codex
```

2. **在 VPS 上运行 CLI：**

```bash
codex
```

3. **手机端用 Termius 等 SSH App 登录 VPS。**
   进入终端后就能直接使用 CLI，在手机上写代码、跑 agent。

特点：

* 环境永远在线
* 手机就是纯终端
* 随时随地 vibe coding

---

# 方案二：使用 Happy，把家里电脑的 Coding CLI 映射到手机

（官方 Quick Start 工作方式）

Happy 的作用是：
**把你家里电脑正在运行的 coding CLI，安全地连接到你的手机上。**
不需要公网 IP，也不需要 SSH。

流程：

1. **在家里电脑安装 Node（18+）与 Happy：**

```bash
npm install -g happy-coder
```

2. **在电脑执行认证：**

```bash
happy --auth
```

电脑会显示一个二维码 / 代码。

3. **打开手机上的 Happy（App 或 Web）扫描绑定。**

绑定后，你就能：

* 在手机上访问电脑的 coding CLI
* 操作完全在手机界面完成
* 电脑执行、手机查看结果

特点：

* 复用家里电脑的性能与环境
* 手机端操作舒服
* 无需 SSH、无需对外暴露电脑

# 总结

手机优雅 vibe coding 的最简单实践就是：

* **要稳定、常在线 → VPS + SSH 运行 Codex 等 CLI**
* **要高性能、用自己电脑 → Happy 远程连接本地 CLI**

两种方式都足够轻量，也都能让手机实现完整 coding 体验。
