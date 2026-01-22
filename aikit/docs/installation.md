---
sidebar_position: 2
---

# Installation

Install AIKit in minutes and start using structured workflows with your AI coding assistant.

<div className="platform-highlight">
  🚀 <strong>NEW:</strong> AIKit now supports <a href="#antigravity">Google Antigravity</a> - Google DeepMind's AI IDE!
</div>

## Prerequisites

Before installing AIKit, ensure you have:

- **Node.js** version 18.0 or above
- **npm** package manager (comes with Node.js)
- **Google Antigravity**, **OpenCode**, **Cursor**, or **Claude Code CLI** installed and configured

<MaterialIcon name="check_circle" className="icon-success" /> **Check Node.js version:**
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 8.0.0 or higher
```

## Installation Methods

Choose your preferred installation method:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="package-manager" defaultValue="npm" queryString="p">
<TabItem value="npm" label="npm (Recommended)" default>

### Install from npm

The easiest way to install AIKit globally:

```bash
npm install -g @tdsoft-tech/aikit
```

This will:
- Download and install the latest AIKit version
- Make `aikit` command available globally
- Set up all dependencies automatically

<MaterialIcon name="info" className="icon-info" /> **Why npm?**
- Always get the latest version
- Easy updates with `npm update -g @tdsoft-tech/aikit`
- No need to build manually
- Works across all platforms

</TabItem>
<TabItem value="git" label="Manual (Git Clone)">

### Install from Git

Clone the repository and build manually:

```bash
# Clone the repository
git clone https://github.com/tdsoft-tech/aikit.git
cd aikit

# Install dependencies
npm install

# Build the project
npm run build

# Link globally (optional, for CLI usage)
npm link
```

<MaterialIcon name="info" className="icon-info" /> **Why Manual?**
- Access to latest development version
- Can modify source code
- Contribute to the project
- Full control over build process

</TabItem>
</Tabs>

## Step 1: Initialize Global Config

Create global AIKit configuration:

```bash
aikit init --global
```

This creates:
- `~/.config/aikit/aikit.json` - Global configuration
- `~/.config/aikit/skills/` - Global skills (42 built-in skills)
- `~/.config/aikit/commands/` - Global commands (42+ commands)
- `~/.config/aikit/tools/` - Global tools
- `~/.config/aikit/plugins/` - Global plugins

## Step 2: Initialize in Your Project

Navigate to your project and initialize:

```bash
cd your-project
aikit init
```

This creates:
- `.aikit/aikit.json` - Project configuration
- `.aikit/AGENTS.md` - Project-specific rules for AI agents
- `.aikit/skills/` - Project-specific skills (extends global)
- `.aikit/commands/` - Project-specific commands
- `.aikit/tools/` - Project-specific tools
- `.aikit/plugins/` - Project-specific plugins
- `.aikit/memory/` - Project memory
- `.aikit/sessions/` - Session tracking
- `.beads/` - Task tracking (automatically initialized)

<MaterialIcon name="star" className="icon-warning" /> **Automatic Beads Setup**
- `.beads/` directory is created automatically with full configuration
- Ready to use with Antigravity, OpenCode, Cursor, and Claude Code - no manual setup required
- Includes config.yaml, metadata.json, and git hooks
- Track all development tasks with quality gates

## Step 3: Install into Your AI Coding Assistant

Choose your AI coding assistant:

<Tabs groupId="assistant" defaultValue="antigravity" queryString="assistant">
<TabItem value="antigravity" label="🚀 Antigravity (NEW)" default>

### Install into Google Antigravity

```bash
aikit install antigravity
```

This makes all skills available in Google Antigravity's native format:

- ✅ 42+ skills as `SKILL.md` files
- ✅ Native folder structure (`.agent/skills/`)
- ✅ Auto-discovery by Gemini agent
- ✅ YAML frontmatter format
- ✅ Progressive disclosure pattern

**Prerequisites:**
- [Google Antigravity](https://antigravity.google) installed

**Skills are installed to:** `.agent/skills/<skill-name>/SKILL.md`

**Example skill structure:**
```
.agent/skills/
├── aikit-plan/
│   └── SKILL.md
├── aikit-test/
│   └── SKILL.md
└── aikit-review/
    └── SKILL.md
```

**Why Antigravity?**
- 🧠 Powered by Google's Gemini AI
- 🚀 Next-generation AI coding experience
- 🔄 Automatic skill discovery and activation
- ⚡ Built by Google DeepMind

</TabItem>
<TabItem value="opencode" label="OpenCode">

### Install into OpenCode

```bash
aikit install opencode
```

This makes all skills, agents, and commands available in OpenCode:

- ✅ 22 built-in skills
- ✅ 8 specialized agents
- ✅ 42+ slash commands
- ✅ Session management
- ✅ All tools and plugins

**Commands are installed to:** `.opencode/command/` and `.opencode/skill/`

</TabItem>
<TabItem value="cursor" label="Cursor">

### Install into Cursor

```bash
aikit install cursor
```

This makes all skills, agents, and commands available in Cursor:

- ✅ 22 built-in skills
- ✅ 8 specialized agents
- ✅ 42+ slash commands (prefixed with `aikit-`)
- ✅ Session management
- ✅ All tools and plugins

**Prerequisites:**
- [Cursor IDE installed](https://cursor.com)

**Commands are installed to:** `.cursor/commands/` and `.cursor/skills/`

**Note:** All AIKit commands are prefixed with `aikit-` in Cursor to avoid conflicts with built-in commands (e.g., `/aikit-plan`, `/aikit-fix`).

</TabItem>
<TabItem value="claude" label="Claude Code CLI">

### Install into Claude Code CLI

```bash
aikit install claude
```

This makes all skills, agents, and commands available in Claude Code CLI:

- ✅ 22 built-in skills
- ✅ 8 specialized agents
- ✅ 42+ slash commands
- ✅ Session management
- ✅ All tools and plugins

**Commands are installed to:** `.claude/commands/` and `.claude/skills/`

**Note:** You can install into multiple platforms simultaneously - just run the commands for each!

</TabItem>
</Tabs>

## Step 4: Configure MCP Server (Optional but Recommended)

Configure Model Context Protocol (MCP) server for seamless OpenCode integration:

### What is MCP?

MCP (Model Context Protocol) is a standard for connecting AI assistants with external tools. AIKit provides an MCP server that exposes all its capabilities to OpenCode.

### OpenCode Configuration

Add AIKit MCP server to your OpenCode configuration:

**OpenCode Desktop (Claude):**

1. Open Claude Desktop Settings
2. Navigate to "Developer" → "MCP Servers"
3. Add the following configuration:

```json
{
  "mcpServers": {
    "aikit": {
      "command": "node",
      "args": [
        "/path/to/aikit/dist/mcp-server.js"
      ],
      "env": {
        "AIKIT_CONFIG": "/path/to/aikit.json"
      }
    }
  }
}
```

**Configuration Options:**

| Option | Description | Default | Required |
|--------|-------------|---------|----------|
| `command` | Command to start MCP server | `node` | Yes |
| `args[0]` | Path to MCP server file | `dist/mcp-server.js` | Yes |
| `env.AIKIT_CONFIG` | Path to AIKit config | `~/.config/aikit/aikit.json` | No |

**Finding the MCP server path:**

```bash
# Find AIKit installation directory
which aikit

# Common locations:
# npm global: /usr/local/lib/node_modules/@tdsoft-tech/aikit
# npm global (macOS): ~/.npm-global/lib/node_modules/@tdsoft-tech/aikit
# manual: /path/to/aikit

# Full path to MCP server:
/usr/local/lib/node_modules/@tdsoft-tech/aikit/dist/mcp-server.js
```

### Verify MCP Connection

After configuring, restart Claude Desktop and verify MCP tools are available:

In Claude Desktop, you should see these tools:
- `find_skills(query)`
- `use_skill(skillName)`
- `list_agents()`
- `delegate_to_agent(agentName, task)`
- `list_commands(category)`
- `run_command(commandName, args)`
- `memory_read(key)`
- `memory_update(key, content)`
- `list_sessions(limit)`
- `read_session(sessionId)`
- `bead_create(title, description)`
- `bead_update_status(id, status)`
- `bead_complete(id)`
- `bead_list([filter])`

<MaterialIcon name="info" className="icon-info" /> **Tip:** If tools don't appear, check Claude Desktop logs for errors and verify the path to `mcp-server.js` is correct.

## Verify Installation

Check AIKit status:

```bash
aikit status
```

Expected output:

```
🚀 AIKit v0.1.30

✓ Configuration loaded
  Skills: 22
  Agents: 8
  Commands: 43
  Tools: 16
  Beads: Installed
  MCP Server: Available
```

List available components:

```bash
aikit skills list      # List all 22 skills
aikit agents list      # List all 8 agents
aikit commands list    # List all 42+ commands
aikit tools list       # List all tools
aikit plugins list     # List all plugins
```

## Configuration

AIKit uses two-level configuration:

### Global Config (`~/.config/aikit/aikit.json`)

Applies to all projects. Contains default settings and shared resources.

**Use for:**
- Default agent settings
- Global skills (shared across projects)
- Default tool configurations
- Plugin settings

### Project Config (`.aikit/aikit.json`)

Project-specific settings that override global config.

**Use for:**
- Project-specific rules
- Custom skills for this project
- Project tool configurations
- Team-specific settings

## Update AIKit

### If installed via npm:

```bash
npm update -g @tdsoft-tech/aikit
```

### If installed via Git:

```bash
cd aikit
git pull origin main
npm install
npm run build
npm link
```

## Uninstall

### If installed via npm:

```bash
npm uninstall -g @tdsoft-tech/aikit
```

Then optionally clean up global config:

```bash
rm -rf ~/.config/aikit
```

### If installed via Git:

```bash
npm unlink
rm -rf ~/.config/aikit
```

## Troubleshooting

### "aikit: command not found"

If the `aikit` command isn't found:

**Via npm:**
```bash
# Check npm global bin directory
npm config get prefix

# Add to PATH (example for macOS/Linux)
export PATH="$(npm config get prefix)/bin:$PATH"

# Or use full path
~/.npm-global/bin/aikit status
```

**Via Git link:**
```bash
# Relink the package
cd aikit
npm link
```

### "Cannot find module"

If you get module errors:

```bash
# Reinstall dependencies
cd aikit
rm -rf node_modules
npm install
npm run build
```

### Commands not showing in OpenCode

If AIKit commands don't appear in OpenCode:

```bash
# Reinstall into OpenCode
aikit install opencode

# Check installation directory
ls -la .opencode/command/

# Verify commands exist
aikit commands list
```

### Commands not showing in Claude Code CLI

If AIKit commands don't appear in Claude Code CLI:

```bash
# Reinstall into Claude Code CLI
aikit install claude

# Check installation directory
ls -la .claude/commands/

# Verify commands exist
aikit commands list
```

### Wrong commands installed for platform

If you accidentally installed for the wrong platform:

```bash
# For Google Antigravity
aikit install antigravity

# For OpenCode
aikit install opencode

# For Cursor
aikit install cursor

# For Claude Code CLI
aikit install claude
```

### Skills not showing in Antigravity

If AIKit skills don't appear in Google Antigravity:

```bash
# Reinstall into Antigravity
aikit install antigravity

# Check installation directory
ls -la .agent/skills/

# Verify skills exist
aikit skills list
```

**Note:** Antigravity uses folder-based skills. Each skill is in its own folder with a `SKILL.md` file.

### Commands not showing in Cursor

If AIKit commands don't appear in Cursor:

```bash
# Reinstall into Cursor
aikit install cursor

# Check installation directory
ls -la .cursor/commands/

# Verify commands exist
aikit commands list
```

**Note:** All AIKit commands in Cursor are prefixed with `aikit-` to avoid conflicts (e.g., `/aikit-plan`, `/aikit-fix`).

### Permission errors (Linux/macOS)

If you get permission errors with global install:

```bash
# Fix npm permissions
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Then install again
npm install -g @tdsoft-tech/aikit
```

## Next Steps

- **[Quick Start](quick-start)** - Get started with your first task
- **[Features](features)** - Learn about all features
- **[MCP Server](mcp-server/intro)** - OpenCode integration via MCP
- **[Skills Guide](skills/intro)** - Explore 22 built-in skills
- **[Session Management](sessions/intro)** - Track your development work
- **[Commands Reference](commands/intro)** - All 42+ commands
