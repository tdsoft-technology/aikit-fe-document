---
sidebar_position: 4
---

# /ak_cm_config Command

View or set AIKit configuration settings.

## Usage

```bash
# View all configuration
/ak_cm_config

# Get specific value
/ak_cm_config get <key>

# Set specific value
/ak_cm_config set <key> <value>

# Reset to default
/ak_cm_config reset <key>

# Show config file location
/ak_cm_config which
```

## Configuration Levels

### Global Config (~/.config/aikit/)

Applies to all projects. Contains:
- Default agent selection
- Quality gate configuration
- Global skills and tools
- Plugin settings
- MCP server configuration

**Location:** `~/.config/aikit/aikit.json`

### Project Config (.aikit/)

Project-specific overrides. Contains:
- Project-specific rules
- Custom skills for this project
- Project-specific commands
- Project tools and plugins
- Memory configuration

**Location:** `.aikit/aikit.json`

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|----------|-------------|
| `get` | string | No | - | Get configuration value | View specific setting |
| `set` | string | No | - | Set configuration value | Modify setting |
| `reset` | string | No | - | Reset key to default | Restore default value |
| `which` | flag | No | false | Show config file locations | Show file paths |
| `--global` | flag | No | false | Use global config | Target global config |
| `--project` | flag | No | false | Use project config | Target project config |

## Configuration Keys

### Default Agent

```bash
# Get default agent
/ak_cm_config get defaultAgent

# Set default agent
/ak_cm_config set defaultAgent @planner
```

**Available values:**
- `@planner` - Strategic planning and coordination
- `@build` - Primary execution agent
- `@rush` - Fast execution with minimal planning
- `@review` - Code review and quality assurance
- `@scout` - External research agent
- `@explore` - Fast codebase navigation
- `@vision` - Visual analysis agent
- `@one-shot` - End-to-end autonomous execution

### Quality Gates

```bash
# Get quality gates
/ak_cm_config get qualityGates

# Add quality gate
/ak_cm_config set qualityGates.0.typecheck true

# Add custom gate
/ak_cm_config set qualityGates.custom.e2e "npm run e2e"
```

**Standard gates:**
- `typecheck` - TypeScript compilation
- `test` - All tests passing
- `lint` - Code linting
- `build` - Production build

### MCP Server

```bash
# Get MCP server configuration
/ak_cm_config get mcpServer

# Configure MCP port
/ak_cm_config set mcpServer.port 8080

# Enable MCP server
/ak_cm_config set mcpServer.enabled true
```

### Session Management

```bash
# Get session timeout
/ak_cm_config get session.timeout

# Set session timeout (in minutes)
/ak_cm_config set session.timeout 240
```

### Memory Configuration

```bash
# Get memory settings
/ak_cm_config get memory

# Set memory retention (in days)
/ak_cm_config set memory.retention 30
```

## Examples

### View Configuration

```bash
# View all configuration
/ak_cm_config

# View specific section
/ak_cm_config agents
/ak_cm_config skills
/ak_cm_config qualityGates
```

### Modify Configuration

```bash
# Set default agent to planner
/ak_cm_config set defaultAgent @planner

# Enable a quality gate
/ak_cm_config set qualityGates.1.e2e true

# Configure MCP server
/ak_cm_config set mcpServer.enabled true
/ak_cm_config set mcpServer.port 8080
```

### Reset Configuration

```bash
# Reset default agent
/ak_cm_config reset defaultAgent

# Reset to defaults
/ak_cm_config reset --all
```

## Configuration Files

### Show Locations

```bash
# Show config file paths
/ak_cm_config which
```

**Output:**
```bash
Global Config: ~/.config/aikit/aikit.json
Project Config: .aikit/aikit.json
Global Skills: ~/.config/aikit/skills/
Project Skills: .aikit/skills/
```

### View Config File

```bash
# View global config
cat ~/.config/aikit/aikit.json

# View project config
cat .aikit/aikit.json
```

## Best Practices

### Configuration Management

✅ **DO:**
- Use project config for project-specific settings
- Keep global config minimal and general
- Document configuration changes
- Use meaningful configuration keys
- Test configuration after changes

❌ **DON'T:**
- Commit configuration files with secrets
- Override project config unnecessarily
- Create overly complex configurations
- Reset configuration without understanding impact
- Ignore configuration validation errors

### Default Agent Selection

Choose based on your workflow:
- **Planning-heavy tasks**: @planner
- **Implementation tasks**: @build
- **Quick fixes**: @rush
- **Code review**: @review
- **Research**: @scout
- **Codebase exploration**: @explore

## Troubleshooting

### Configuration Not Loading

```bash
# Check if config file exists
ls ~/.config/aikit/aikit.json

# Verify config file format
cat ~/.config/aikit/aikit.json

# Reset configuration if corrupted
/ak_cm_config reset --all
```

### Invalid Configuration

```bash
# If configuration errors occur:
# Reset to defaults
/ak_cm_config reset --all

# Reinitialize
aikit init --global
```

## Related Commands

- **[/ak_cm_status](status.md)** - Show current configuration
- **[/ak_cm_install](install.md)** - Reinstall AIKit

## Related Documentation

- **[Configuration](../../advanced/configuration.md)** - Complete configuration system
- **[Installation](../../installation.md)** - Setup guide
