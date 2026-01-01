---
sidebar_position: 2
---

# Installation

Install AIKit in minutes and start using structured workflows with OpenCode.

## Prerequisites

- **Node.js** version 18.0 or above
- **OpenCode** installed and configured
- **npm** or **yarn** package manager

## Step 1: Install AIKit

Clone or download the AIKit repository:

```bash
git clone https://github.com/tdsoft-tech/aikit.git
cd aikit
```

Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Link globally (optional):

```bash
npm link
```

## Step 2: Initialize Global Config

Create global AIKit configuration:

```bash
aikit init --global
```

This creates:
- `~/.config/aikit/aikit.json` - Global configuration
- `~/.config/aikit/skills/` - Global skills
- `~/.config/aikit/commands/` - Global commands
- `~/.config/aikit/tools/` - Global tools
- `~/.config/aikit/plugins/` - Global plugins

## Step 3: Initialize in Your Project

Navigate to your project and initialize:

```bash
cd your-project
aikit init
```

This creates:
- `.aikit/aikit.json` - Project configuration
- `.aikit/AGENTS.md` - Project-specific rules
- `.aikit/skills/` - Project-specific skills
- `.aikit/commands/` - Project-specific commands
- `.aikit/tools/` - Project-specific tools
- `.aikit/plugins/` - Project-specific plugins
- `.aikit/memory/` - Project memory

## Step 4: Initialize Beads (Optional but Recommended)

Initialize Beads task tracking:

```bash
bd init
```

This creates `.beads/` directory for task tracking.

## Step 5: Install into OpenCode

Install AIKit into OpenCode:

```bash
aikit install
```

This makes all skills, agents, and commands available in OpenCode.

## Verify Installation

Check AIKit status:

```bash
aikit status
```

List available components:

```bash
aikit skills list
aikit agents list
aikit commands list
aikit tools list
aikit plugins list
```

## Configuration

AIKit uses two-level configuration:

### Global Config (~/.config/aikit/aikit.json)

Applies to all projects. Contains default settings and shared skills/commands/tools/plugins.

### Project Config (.aikit/aikit.json)

Project-specific settings that override global config. Contains project rules, custom skills, etc.

## Next Steps

- **[Quick Start](quick-start)** - Get started with your first task
- **[Features](features)** - Learn about all features
- **[Skills Guide](skills/intro)** - Explore skills
- **[Commands Reference](commands/intro)** - All commands
