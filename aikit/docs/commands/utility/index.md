---
sidebar_position: 1
---

# Utility Commands

Utility commands in AIKit provide common operations like help, version checking, status display, configuration management, and synchronization.

## How to Use

```bash
# Show help for all commands
/ak_cm_help

# Show help for specific command
/ak_cm_help commit

# Check AIKit status
/ak_cm_status

# Show AIKit version
/ak_cm_version

# View or edit configuration
/ak_cm_config
/ak_cm_config get key
/ak_cm_config set key value

# Sync with git
/ak_cm_sync

# Generate documentation
/ak_cm_docs

# Install AIKit
/ak_cm_install
```

## Available Commands

| Command | Description | Use Case |
|---------|-------------|----------|
| /ak_cm_help | Show help information | Learn about commands |
| /ak_cm_version | Show AIKit version | Check version |
| /ak_cm_status | Show AIKit status | View configuration state |
| /ak_cm_config | Manage configuration | View/set config |
| /ak_cm_sync | Sync with git | Commit configuration |
| /ak_cm_docs | Generate documentation | Create project docs |
| /ak_cm_install | Install AIKit | Install or reinstall |

## Command Details

### /ak_cm_help

Show help information for all commands or specific command.

```bash
# Show all commands
/ak_cm_help

# Show specific command help
/ak_cm_help create
/ak_cm_help plan
```

### /ak_cm_version

Display AIKit version information.

```bash
/ak_cm_version
```

**Output:**
```bash
🚀 AIKit v0.1.17

Node.js: v18.19.0
npm: 10.8.2
Platform: darwin (macOS)
```

### /ak_cm_status

Show current AIKit configuration and status.

```bash
/ak_cm_status
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

### /ak_cm_config

View or edit AIKit configuration.

```bash
# View all config
/ak_cm_config

# Get specific key
/ak_cm_config get defaultAgent
/ak_cm_config get qualityGates

# Set key
/ak_cm_config set defaultAgent @planner
/ak_cm_config set qualityGates.0.typecheck true
```

### /ak_cm_sync

Sync AIKit configuration and tracked files with git.

```bash
# Sync all changes
/ak_cm_sync

# Sync specific files
/ak_cm_sync .aikit/ .beads/
```

### /ak_cm_docs

Generate project documentation from code and configuration.

```bash
# Generate documentation
/ak_cm_docs

# Output to specific directory
/ak_cm_docs --output docs/
```

### /ak_cm_install

Install or reinstall AIKit globally.

```bash
# Install globally
/ak_cm_install --global

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

- **[/ak_cm_help](help.md)** - Show detailed help
- **[/ak_cm_config](config.md)** - Configuration management
- **[/ak_cm_sync](sync.md)** - Git synchronization

## Related Documentation

- **[Configuration](../../advanced/configuration.md)** - Configuration system
- **[Commands Reference](../introl.md)** - All commands overview

## Next Steps

- **[Help](help.md)** - View detailed command help
- **[Configuration](config.md)** - Manage configuration
- **[Installation](../../installation.md)** - Setup guide
