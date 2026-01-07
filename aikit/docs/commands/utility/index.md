---
sidebar_position: 1
---

# Utility Commands

Utility commands in AIKit provide common operations like help, version checking, status display, configuration management, and synchronization.

## How to Use

```bash
# Show help for all commands
/help

# Show help for specific command
/help commit

# Check AIKit status
/status

# Show AIKit version
/version

# View or edit configuration
/config
/config get key
/config set key value

# Sync with git
/sync

# Generate documentation
/docs

# Install AIKit
/install
```

## Available Commands

| Command | Description | Use Case |
|---------|-------------|----------|
| /help | Show help information | Learn about commands |
| /version | Show AIKit version | Check version |
| /status | Show AIKit status | View configuration state |
| /config | Manage configuration | View/set config |
| /sync | Sync with git | Commit configuration |
| /docs | Generate documentation | Create project docs |
| /install | Install AIKit | Install or reinstall |

## Command Details

### /help

Show help information for all commands or specific command.

```bash
# Show all commands
/help

# Show specific command help
/help create
/help plan
```

### /version

Display AIKit version information.

```bash
/version
```

**Output:**
```bash
🚀 AIKit v0.1.17

Node.js: v18.19.0
npm: 10.8.2
Platform: darwin (macOS)
```

### /status

Show current AIKit configuration and status.

```bash
/status
```

**Output:**
```bash
🚀 AIKit v0.1.17

✓ Configuration loaded
  Skills: 22
  Agents: 8
  Commands: 42
  Tools: 20+
  Beads: Installed

Config files:
  Global: ~/.config/aikit/aikit.json
  Project: .aikit/aikit.json

Active session: 20260102-1430-auth-refactor
```

### /config

View or edit AIKit configuration.

```bash
# View all config
/config

# Get specific key
/config get defaultAgent
/config get qualityGates

# Set key
/config set defaultAgent @planner
/config set qualityGates.0.typecheck true
```

### /sync

Sync AIKit configuration and tracked files with git.

```bash
# Sync all changes
/sync

# Sync specific files
/sync .aikit/ .beads/
```

### /docs

Generate project documentation from code and configuration.

```bash
# Generate documentation
/docs

# Output to specific directory
/docs --output docs/
```

### /install

Install or reinstall AIKit globally.

```bash
# Install globally
/install --global

# Install in project
cd your-project
aikit install

# Reinstall (update)
aikit install --force
```

## Common Workflows

### Setup New Project

```bash
# 1. Initialize AIKit
aikit init --global
cd your-project
aikit init

# 2. Initialize Beads
bd init

# 3. Verify installation
aikit status
```

### Update Configuration

```bash
# Update default agent
aikit config set defaultAgent @planner

# Verify config
aikit config get defaultAgent
```

### Troubleshooting

### Check Installation

```bash
# Verify AIKit is installed
aikit version

# Check configuration
aikit status

# List commands
aikit commands list
```

### Reset Configuration

```bash
# Reset to defaults
rm -rf ~/.config/aikit/aikit.json
aikit init --global
```

## Related Commands

- **[/help](help.md)** - Show detailed help
- **[/config](config.md)** - Configuration management
- **[/sync](sync.md)** - Git synchronization

## Related Documentation

- **[Configuration](../../advanced/configuration.md)** - Configuration system
- **[Commands Reference](../introl.md)** - All commands overview

## Next Steps

- **[Help](help.md)** - View detailed command help
- **[Configuration](config.md)** - Manage configuration
- **[Installation](../../installation.md)** - Setup guide
