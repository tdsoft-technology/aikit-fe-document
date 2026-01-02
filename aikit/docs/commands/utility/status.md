---
sidebar_position: 3
---

# /ak_cm_status Command

Display current AIKit configuration and system status.

## Usage

```bash
# Show full status
/ak_cm_status

# Show specific config section
/ak_cm_status agents
/ak_cm_status skills
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|----------|-------------|
| `<section>` | string | No | All | Section to display | Show all sections |

## Output

Shows comprehensive status including:
- AIKit version
- Configuration files
- Loaded skills, agents, commands, tools
- Beads status
- Active session (if any)
- Git state

**Example output:**
```bash
🚀 AIKit v0.1.17

✓ Configuration loaded

Global Config: ~/.config/aikit/aikit.json
Project Config: .aikit/aikit.json

Components:
  Skills: 22
  Agents: 8
  Commands: 42
  Tools: 20+

Beads: ✅ Installed
  Beads directory: .beads/

Active Session: 20260102-1430-auth-refactor
  Started: 1/2/2026, 2:30:00 PM
  Duration: 2h 45m
  Status: In Progress

Git State:
  Branch: feature/auth
  Last Commit: abc1234 (Add JWT support)
  Modified Files: 12
```

## Status Sections

### All

```bash
/ak_cm_status
```

Shows everything.

### Skills

```bash
/ak_cm_status skills
```

Shows:
- Total skills loaded
- Global vs project skills
- Skill categories

### Agents

```bash
/ak_cm_status agents
```

Shows:
- Available agent types
- Default agent
- Agent system prompts

### Commands

```bash
/ak_cm_status commands
```

Shows:
- Total commands loaded
- Command categories
- Command counts by category

### Config

```bash
/ak_cm_status config
```

Shows:
- Configuration file paths
- Loaded configuration keys
- Overridden values

### Beads

```bash
/ak_cm_status beads
```

Shows:
- Beads installation status
- Tasks in progress
- Configuration

## Configuration Display

### Global Configuration

```bash
# Show global config location
ls -la ~/.config/aikit/aikit.json

# Show global skills directory
ls ~/.config/aikit/skills/
```

### Project Configuration

```bash
# Show project config location
ls -la .aikit/aikit.json

# Show project-specific configuration
cat .aikit/aikit.json
```

## Active Session Information

If a session is active, shows:
- Session ID and name
- Start time
- Duration so far
- Goals and progress
- Current git state

```bash
# Example active session
Session ID: 20260102-1430-auth-refactor
Name: Authentication Refactor
Started: 1/2/2026, 2:30:00 PM
Duration: 2h 45m (ongoing)

Goals:
  - [x] Refactor OAuth 2.0 flow
  - [x] Add JWT support
  - [ ] "Fix authentication bugs"

Progress:
  - 1/2/2026, 3:45 PM: Implemented OAuth flow
  - 2/2/2026, 4:15 PM: Added JWT generation
  - Current: "Fixing authentication bugs"

Git State:
  Branch: feature/auth
  Modified Files: 9 files
  Last Commit: def5678 (Added JWT validation)
```

## Troubleshooting

### Configuration Not Loading

```bash
# Verify global config exists
ls ~/.config/aikit/aikit.json

# Verify project config
ls .aikit/aikit.json

# Check AIKit installation
aikit --version
```

### Skills Not Showing

```bash
# List global skills
ls ~/.config/aikit/skills/

# List project skills
ls .aikit/skills/

# Check skills file format
cat ~/.config/aikit/skills/intro.md
```

### Beads Not Installed

```bash
# Check Beads installation
bd --version

# Initialize Beads
bd init

# Verify .beads directory
ls -la .beads/
```

## Related Commands

- **[/ak_cm_config](config.md)** - Manage configuration
- **[/ak_cm_version](version.md)** - Show version info
- **[/ak_cm_session_current](../sessions/session-current.md)** - Show active session

## Related Documentation

- **[Configuration](../../advanced/configuration.md)** - Configuration system
- **[Installation](../../installation.md)** - Setup guide
- **[Session Management](../../sessions/intro.md)** - Session system
- **[Beads Integration](../../beads/intro.md)** - Task tracking
