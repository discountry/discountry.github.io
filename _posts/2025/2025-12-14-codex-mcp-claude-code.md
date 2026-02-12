---
layout: "post"
title: "在 Claude Code 中以 MCP 接入 Codex"
date: "2025-12-14 00:00"
categories: ["tutorial"]
tags: ["claude code","mcp","codex"]
published: True
---

Codex CLI 的命令行交互较为原始，沙箱环境存在不少 bug，执行命令时也受到诸多限制。相比之下，Claude Code 的设计更加完善，支持 MCP、Plugin、Skill、Agent 等多种自定义扩展形式。将 Codex 作为 MCP 服务器接入 Claude Code，可以获得更友好的用户体验和更强大的功能集成。

<!--more-->

## 为什么选择 MCP 方式而非直接使用 Codex CLI

### Codex CLI 的局限性
- **命令行交互原始**：缺乏现代化的交互体验，错误提示不够清晰
- **沙箱环境 bug 多**：执行复杂任务时容易遇到环境问题
- **命令执行受限**：某些操作在沙箱中无法正常执行，自由度较低

### Claude Code 的优势
- **设计完善**：提供更流畅的代码编辑和 AI 交互体验
- **扩展性强**：支持 MCP、Plugin、Skill、Agent 等多种扩展方式
- **工具集成**：可以无缝整合多种工具和服务
- **用户体验友好**：界面直观，错误处理更完善

通过 MCP 方式，Codex 可以作为 Claude Code 的一个工具被调用，既保留了 Codex 的能力，又享受了 Claude Code 的完善生态。

---

## 前置要求

- 已安装 Claude Code CLI（可通过 `claude -v` 验证）
- 已安装 Codex CLI，并能在终端调用 `codex` 命令

---

## 配置步骤

### 一条命令完成添加（用户作用域）

```bash
claude mcp add codex -s user -- codex -m gpt-5.3-codex -c model_reasoning_effort="high" mcp-server
```

**参数说明：**
- `-s user`：将服务器写入用户全局配置，所有项目可用且不会改动仓库文件
- `--`：分隔 Claude MCP 参数与实际服务器启动命令
- `codex -m gpt-5.3-codex-max`：指定要暴露的 Codex 模型
- `-c model_reasoning_effort="high"`：为 Codex 进程设置高推理强度
- `mcp-server`：启动 Codex 的 MCP 服务器模式

### 验证配置是否生效

```bash
# 列出所有 MCP 服务器
claude mcp list

# 查看 codex 服务器详情
claude mcp get codex
```

若能看到 `type: stdio` 且状态为 running/available，说明已成功接入。

---

## 在 Claude Code 中使用

1. 打开 Claude Code，在对话中输入 `/mcp` 命令
2. 选择 `codex` 服务器
3. 直接在对话中调用 Codex 暴露的工具；如需指定模型，可在提示中写明 `gpt-5.3-codex`

现在你可以在 Claude Code 的完善环境中使用 Codex 的能力，同时享受更好的交互体验和工具集成。

---

## 常见问题

- **找不到 `claude` 命令**：确保已安装 Claude Code CLI 并已加入系统 PATH
- **找不到 `codex` 命令**：先安装 Codex CLI（参考 Codex 官方安装说明），或检查 shell PATH 配置
- **想移除服务器**：使用 `claude mcp remove codex` 命令
- **切换配置作用域**：如需改用项目级配置，先删除用户级配置，再按需添加项目级配置

