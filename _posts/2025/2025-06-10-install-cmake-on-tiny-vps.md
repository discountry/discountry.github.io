---
layout: "post"
title: "在512MB内存的VPS上使用brew安装cmake"
date: "2025-06-10 00:00"
categories: ["tutorial"]
tags: ["vps"]
published: True
---

在资源极其有限的 VPS 上使用 Homebrew 安装大型工具（如 CMake）通常会遇到内存不足、编译失败等问题。

在这篇文章中，我将分享如何在 **仅 512MB 内存的 VPS** 上通过 **启用虚拟内存（Swap）** 成功安装 `cmake` 的完整流程。

<!--more-->

## 🧾 背景

- VPS 配置：512MB RAM，无额外 swap
- 操作系统：Debian / Ubuntu 系统（适用于大多数 Linux 发行版）
- 安装工具：Homebrew（Linuxbrew）
- 安装目标：CMake（可能会从源码编译，内存需求大）

---

## 🪄 解决思路：开启 Swap（虚拟内存）

由于 `cmake` 的安装过程可能需要超过 1GB 的内存，我们可以通过增加 **Swap 空间**（即硬盘模拟内存）来避免编译过程 OOM（内存溢出）的问题。

---

## 🛠️ 操作步骤

### 1. 创建并启用 Swap 文件

```bash
# 创建一个 1GB 的 Swap 文件
sudo fallocate -l 1G /swapfile

# 如果 fallocate 不可用，可使用 dd 命令代替：
# sudo dd if=/dev/zero of=/swapfile bs=1M count=1024

# 设置文件权限为 600
sudo chmod 600 /swapfile

# 格式化为 swap 格式
sudo mkswap /swapfile

# 启用 swap
sudo swapon /swapfile

# 验证 swap 是否启用成功
swapon --show
````

### 2. 设置开机自动挂载 Swap

```bash
# 添加到 /etc/fstab
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

## 🍺 安装 Homebrew（如果尚未安装）

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

配置环境变量（添加到 `.bashrc` 或 `.zshrc`）：

```bash
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

---

## 📦 使用 Brew 安装 CMake

```bash
brew install cmake
```

整个编译过程会非常耗时（尤其是第一次），但在启用了 swap 之后，即使只有 512MB RAM，也可以稳定编译完成！

---

## ✅ 验证安装

```bash
cmake --version
```

输出应类似于：

```
cmake version 3.xx.x
```

---

## 💡 小贴士

* 如果你遇到 **“killed”** 错误，多半是内存不足导致的，需要确保 swap 正常启用。
* 编译时可使用 `htop` 监控内存和 swap 使用情况。
* 安装完成后可以关闭 swap（可选）：

```bash
sudo swapoff /swapfile
```

---

## 🏁 总结

在低配 VPS 上编译大型工具并非不可能，只需合理使用虚拟内存（swap），就能绕过 RAM 限制。通过本文提供的步骤，我成功在一台只有 **512MB 内存的 VPS** 上完成了 `cmake` 的安装。希望对你也有所帮助！

