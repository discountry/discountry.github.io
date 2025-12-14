---
layout: "post"
title: "Claude Code 插件与 Hook 开发完整教程"
date: "2025-12-14 00:00"
categories: ["tutorial"]
tags: ["claude code","plugin","hook","mcp"]
published: True
---

Claude Code 提供了强大的插件系统，允许你通过自定义命令、代理、Hook、Skills 和 MCP 服务器来扩展功能。本文将完整介绍如何从零开始开发 Claude Code 插件和 Hook，包括创建插件、配置 Hook、发布到 Marketplace 等全流程。

<!--more-->

## 为什么需要插件系统

Claude Code 的插件系统提供了多种扩展方式：

- **Commands（命令）**：创建自定义斜杠命令，快速执行常用操作
- **Agents（代理）**：定义专门的子代理来处理特定任务
- **Skills（技能）**：扩展 Claude 的能力，让模型自主调用
- **Hooks（钩子）**：在特定事件发生时自动执行脚本
- **MCP Servers**：集成外部工具和服务

通过插件系统，你可以：
- **自动化工作流**：在文件写入后自动格式化、运行测试
- **增强安全性**：拦截危险操作、验证命令
- **集成工具**：连接数据库、API、通知系统等
- **团队协作**：在项目级别配置插件，确保团队使用一致的工具

---

## 快速开始：创建第一个插件

让我们通过创建一个简单的问候插件来熟悉插件系统。

### 前置要求

- 已安装 Claude Code（可通过 `claude -v` 验证）
- 基本的命令行操作知识

### 步骤 1：创建 Marketplace 结构

```bash
mkdir test-marketplace
cd test-marketplace
```

### 步骤 2：创建插件目录

```bash
mkdir my-first-plugin
cd my-first-plugin
```

### 步骤 3：创建插件清单文件

插件清单文件 `.claude-plugin/plugin.json` 描述了插件的基本信息：

```bash
mkdir .claude-plugin
cat > .claude-plugin/plugin.json << 'EOF'
{
  "name": "my-first-plugin",
  "description": "一个简单的问候插件，用于学习基础知识",
  "version": "1.0.0",
  "author": {
    "name": "Your Name"
  }
}
EOF
```

### 步骤 4：添加自定义命令

在 `commands/` 目录下创建命令文件：

```bash
mkdir commands
cat > commands/hello.md << 'EOF'
---
description: 用个性化的消息问候用户
---

# Hello Command

热情地问候用户，并询问今天能如何帮助他们。让问候更加个性化和鼓励性。
EOF
```

### 步骤 5：创建 Marketplace 清单

返回上级目录，创建 Marketplace 配置文件：

```bash
cd ..
mkdir .claude-plugin
cat > .claude-plugin/marketplace.json << 'EOF'
{
  "name": "test-marketplace",
  "owner": {
    "name": "Test User"
  },
  "plugins": [
    {
      "name": "my-first-plugin",
      "source": "./my-first-plugin",
      "description": "我的第一个测试插件"
    }
  ]
}
EOF
```

### 步骤 6：安装和测试

```bash
# 从父目录启动 Claude Code
cd ..
claude

# 在 Claude Code 中添加测试 Marketplace
/plugin marketplace add ./test-marketplace

# 安装你的插件
/plugin install my-first-plugin@test-marketplace
```

选择 "Install now"，然后需要重启 Claude Code 才能使用新插件。

```bash
# 尝试你的新命令
/hello
```

你会看到 Claude 使用你的问候命令！运行 `/help` 可以查看新命令是否已列出。

---

## 插件结构详解

一个完整的插件可以包含以下组件：

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json          # 插件元数据（必需）
├── commands/                 # 自定义斜杠命令（可选）
│   └── hello.md
├── agents/                   # 自定义代理（可选）
│   └── helper.md
├── skills/                   # Agent Skills（可选）
│   └── my-skill/
│       └── SKILL.md
├── hooks/                    # 事件处理器（可选）
│   └── hooks.json
└── .mcp.json                 # MCP 服务器配置（可选）
```

### 插件清单（plugin.json）

这是插件的核心配置文件，必须包含：

```json
{
  "name": "plugin-name",
  "description": "插件描述",
  "version": "1.0.0",
  "author": {
    "name": "作者名称"
  }
}
```

### Commands（命令）

Commands 是自定义的斜杠命令，通过 Markdown 文件定义。文件内容会被发送给 Claude 作为指令。

**示例：代码格式化命令**

```markdown
---
description: 自动格式化当前项目的代码
---

# Format Command

格式化当前项目中的所有代码文件。使用项目配置的格式化工具（如 Prettier、Black 等）。
确保遵循项目的代码风格指南。
```

### Agents（代理）

Agents 是专门的子代理，用于处理特定类型的任务。

**示例：代码审查代理**

```markdown
---
description: 专业的代码审查助手
---

# Code Review Agent

你是一个专业的代码审查助手。你的任务是：
1. 仔细审查代码的质量、可读性和最佳实践
2. 识别潜在的安全漏洞和性能问题
3. 提供建设性的反馈和改进建议
4. 确保代码符合项目的编码标准
```

### Skills（技能）

Skills 是模型可以自主调用的能力扩展。创建 `skills/` 目录，每个技能是一个包含 `SKILL.md` 的子目录。

**示例：Git 操作技能**

```markdown
# Git Operations Skill

这个技能允许 Claude 执行常见的 Git 操作，如提交、推送、创建分支等。
Claude 可以在需要版本控制操作时自动使用此技能。
```

---

## Hook 开发详解

Hook 是插件系统中最强大的功能之一，允许你在特定事件发生时自动执行脚本。

### Hook 配置位置

Hook 可以在以下位置配置：

- `~/.claude/settings.json` - 用户级设置
- `.claude/settings.json` - 项目级设置
- `.claude/settings.local.json` - 本地项目设置（不提交）
- 插件中的 `hooks/hooks.json` - 插件提供的 Hook

### Hook 事件类型

#### PreToolUse

在工具调用之前执行，可以拦截、修改或自动批准操作。

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/validate-write.sh"
          }
        ]
      }
    ]
  }
}
```

#### PostToolUse

在工具成功执行后立即运行，常用于自动格式化、运行测试等。

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/format-code.sh"
          }
        ]
      }
    ]
  }
}
```

#### Notification

当 Claude Code 发送通知时触发，可以用于桌面通知、日志记录等。

```json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "permission_prompt",
        "hooks": [
          {
            "type": "command",
            "command": "/path/to/notification.sh"
          }
        ]
      }
    ]
  }
}
```

#### UserPromptSubmit

在用户提交提示之前执行，可以添加上下文、验证提示等。

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/add-context.sh"
          }
        ]
      }
    ]
  }
}
```

#### SessionStart / SessionEnd

在会话开始或结束时执行，用于环境设置、清理任务等。

### Hook 输入和输出

Hook 通过 stdin 接收 JSON 数据，包含会话信息和事件特定数据：

```json
{
  "session_id": "abc123",
  "transcript_path": "/path/to/transcript.jsonl",
  "cwd": "/current/working/directory",
  "permission_mode": "default",
  "hook_event_name": "PostToolUse",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.txt",
    "content": "file content"
  },
  "tool_response": {
    "filePath": "/path/to/file.txt",
    "success": true
  }
}
```

### Hook 输出控制

Hook 可以通过退出码和 JSON 输出来控制行为：

**简单方式：退出码**
- `0`：成功，stdout 在详细模式下显示
- `2`：阻止操作，stderr 作为错误消息返回给 Claude
- 其他：非阻塞错误，stderr 在详细模式下显示

**高级方式：JSON 输出**

```json
{
  "decision": "block",
  "reason": "解释为什么阻止操作",
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "此操作被安全策略阻止"
  }
}
```

---

## 实战案例：通知插件开发

让我们参考 [ritmex-marketplace](https://github.com/discountry/ritmex-marketplace) 来创建一个完整的通知插件。

### 项目结构

```
ritmex-marketplace/
├── .claude-plugin/
│   └── marketplace.json          # Marketplace 配置
├── claude-code-notification/      # 通知插件
│   ├── .claude-plugin/
│   │   └── plugin.json            # 插件清单
│   ├── hooks/
│   │   └── hooks.json             # Hook 配置
│   └── scripts/
│       └── notification.sh        # 通知脚本
└── README.md
```

### Marketplace 配置

`.claude-plugin/marketplace.json`:

```json
{
  "name": "ritmex-marketplace",
  "owner": {
    "name": "discountry"
  },
  "plugins": [
    {
      "name": "claude-code-notification",
      "source": "./claude-code-notification",
      "description": "在 macOS 上显示 Claude Code 通知"
    }
  ]
}
```

### 插件清单

`claude-code-notification/.claude-plugin/plugin.json`:

```json
{
  "name": "claude-code-notification",
  "description": "当 Claude Code 触发 Notification hook 时显示 macOS 通知",
  "version": "1.0.0",
  "author": {
    "name": "discountry"
  }
}
```

### Hook 配置

`claude-code-notification/hooks/hooks.json`:

```json
{
  "description": "自动显示 macOS 通知",
  "hooks": {
    "Notification": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PLUGIN_ROOT}/scripts/notification.sh",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

### 通知脚本

`claude-code-notification/scripts/notification.sh`:

```bash
#!/bin/bash

# 读取 JSON 输入
INPUT=$(cat)
MESSAGE=$(echo "$INPUT" | jq -r '.message // "Claude Code Notification"')
NOTIFICATION_TYPE=$(echo "$INPUT" | jq -r '.notification_type // ""')
TRANSCRIPT_PATH=$(echo "$INPUT" | jq -r '.transcript_path // ""')

# 设置通知标题
TITLE="${CLAUDE_NOTIFY_TITLE:-Claude Code}"

# 根据通知类型设置点击行为
if [ "$NOTIFICATION_TYPE" = "permission_prompt" ]; then
    # 权限提示：点击时聚焦到终端
    if command -v terminal-notifier &> /dev/null; then
        terminal-notifier \
            -title "$TITLE" \
            -message "$MESSAGE" \
            -activate "com.warp.Warp" \
            -sender "com.warp.Warp" 2>/dev/null || \
        terminal-notifier \
            -title "$TITLE" \
            -message "$MESSAGE" \
            -activate "com.apple.Terminal" \
            -sender "com.apple.Terminal"
    else
        # 使用 osascript 作为后备
        osascript -e "display notification \"$MESSAGE\" with title \"$TITLE\""
    fi
elif [ -n "$TRANSCRIPT_PATH" ]; then
    # 有 transcript 路径：点击时打开文件
    if command -v terminal-notifier &> /dev/null; then
        terminal-notifier \
            -title "$TITLE" \
            -message "$MESSAGE" \
            -open "$TRANSCRIPT_PATH"
    else
        osascript -e "display notification \"$MESSAGE\" with title \"$TITLE\""
    fi
else
    # 普通通知
    if command -v terminal-notifier &> /dev/null; then
        terminal-notifier -title "$TITLE" -message "$MESSAGE"
    else
        osascript -e "display notification \"$MESSAGE\" with title \"$TITLE\""
    fi
fi

exit 0
```

### 安装和使用

```bash
# 添加 Marketplace
/plugin marketplace add discountry/ritmex-marketplace

# 安装插件
/plugin install claude-code-notification@ritmex-marketplace

# 验证安装
/plugin
```

---

## 高级 Hook 示例

### 示例 1：自动代码格式化

在文件写入后自动运行格式化工具：

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/format.sh",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

`format.sh`:

```bash
#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_response.filePath // .tool_input.file_path // ""')

if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# 根据文件类型选择格式化工具
case "$FILE_PATH" in
    *.js|*.jsx|*.ts|*.tsx|*.json)
        if command -v prettier &> /dev/null; then
            prettier --write "$FILE_PATH" 2>/dev/null
        fi
        ;;
    *.py)
        if command -v black &> /dev/null; then
            black "$FILE_PATH" 2>/dev/null
        fi
        ;;
    *.go)
        if command -v gofmt &> /dev/null; then
            gofmt -w "$FILE_PATH" 2>/dev/null
        fi
        ;;
esac

exit 0
```

### 示例 2：命令验证

拦截危险命令并建议更安全的替代方案：

```python
#!/usr/bin/env python3
import json
import re
import sys

VALIDATION_RULES = [
    (
        r"\bgrep\b(?!.*\|)",
        "建议使用 'rg' (ripgrep) 替代 'grep'，性能更好且功能更强大",
    ),
    (
        r"\bfind\s+\S+\s+-name\b",
        "建议使用 'rg --files | rg pattern' 替代 'find -name'，性能更好",
    ),
    (
        r"rm\s+-rf\s+/",
        "危险操作：删除根目录！请确认这是你想要的。",
    ),
]

try:
    input_data = json.load(sys.stdin)
except json.JSONDecodeError as e:
    print(f"错误: 无效的 JSON 输入: {e}", file=sys.stderr)
    sys.exit(1)

tool_name = input_data.get("tool_name", "")
tool_input = input_data.get("tool_input", {})
command = tool_input.get("command", "")

if tool_name != "Bash" or not command:
    sys.exit(0)

issues = []
for pattern, message in VALIDATION_RULES:
    if re.search(pattern, command):
        issues.append(message)

if issues:
    for message in issues:
        print(f"• {message}", file=sys.stderr)
    sys.exit(2)  # 阻止命令执行

sys.exit(0)
```

### 示例 3：智能停止判断

使用 LLM 判断 Claude 是否应该继续工作：

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "评估 Claude 是否应该停止工作。上下文: $ARGUMENTS\n\n分析对话并判断：\n1. 用户请求的所有任务是否已完成\n2. 是否有需要解决的错误\n3. 是否需要后续工作\n\n返回 JSON: {\"decision\": \"approve\" 或 \"block\", \"reason\": \"你的解释\"}",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

---

## 发布和分发插件

### 创建 GitHub Marketplace

1. **创建仓库结构**：

```bash
mkdir my-marketplace
cd my-marketplace
mkdir .claude-plugin
# 创建 marketplace.json
# 添加插件目录
```

2. **推送到 GitHub**：

```bash
git init
git add .
git commit -m "Initial marketplace"
git remote add origin https://github.com/your-org/my-marketplace.git
git push -u origin main
```

3. **用户安装**：

```bash
/plugin marketplace add your-org/my-marketplace
/plugin install plugin-name@my-marketplace
```

### 团队配置

在项目的 `.claude/settings.json` 中配置自动安装：

```json
{
  "extraKnownMarketplaces": {
    "my-marketplace": {
      "source": {
        "source": "github",
        "repo": "your-org/my-marketplace"
      }
    }
  },
  "enabledPlugins": {
    "plugin-name@my-marketplace": true
  }
}
```

团队成员信任仓库文件夹后，插件会自动安装。

---

## 最佳实践

### 安全性

1. **验证输入**：永远不要盲目信任输入数据
2. **引用变量**：使用 `"$VAR"` 而不是 `$VAR`
3. **阻止路径遍历**：检查文件路径中的 `..`
4. **使用绝对路径**：为脚本指定完整路径
5. **跳过敏感文件**：避免处理 `.env`、`.git/`、密钥等

### 性能

1. **设置超时**：为长时间运行的脚本设置合理的超时
2. **并行执行**：多个匹配的 Hook 会并行运行
3. **去重**：相同的 Hook 命令会自动去重

### 调试

1. **使用调试模式**：`claude --debug` 查看详细执行信息
2. **测试命令**：先手动运行 Hook 命令确保正常工作
3. **检查配置**：使用 `/hooks` 查看已注册的 Hook

---

## 总结

Claude Code 的插件系统提供了强大的扩展能力：

- **Commands**：快速创建自定义命令
- **Agents**：定义专门的子代理
- **Skills**：扩展模型能力
- **Hooks**：自动化工作流和增强安全性
- **MCP Servers**：集成外部工具

通过插件系统，你可以：
- 自动化重复任务
- 增强开发安全性
- 集成团队工具
- 提升开发效率

参考资源：
- [Claude Code 官方文档](https://code.claude.com/docs)
- [ritmex-marketplace 示例](https://github.com/discountry/ritmex-marketplace)
- [Plugin 参考文档](https://code.claude.com/docs/plugins-reference)
- [Hook 参考文档](https://code.claude.com/docs/hooks-reference)

开始创建你的第一个插件，让 Claude Code 更加强大！

