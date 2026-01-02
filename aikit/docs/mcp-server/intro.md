---
sidebar_position: 1
---

# MCP Server Integration

AIKit provides a **Model Context Protocol (MCP) server** for seamless integration with OpenCode and other AI platforms that support MCP.

## What is MCP?

**MCP (Model Context Protocol)** is a standard protocol for connecting AI assistants with external tools and data sources. It allows AI models like Claude to safely and reliably access:

- External tools and commands
- Project-specific configurations
- Task tracking systems
- Memory systems
- Development workflows

<MaterialIcon name="info" className="icon-info" /> **Why MCP?**
- Standardized interface across AI platforms
- Automatic tool discovery
- Type-safe tool definitions
- Built-in error handling
- Secure tool execution

## AIKit MCP Server Overview

The AIKit MCP server exposes all AIKit capabilities as MCP tools:

### Skill Tools

| Tool | Description |
|-------|-------------|
| `find_skills(query)` | Search available skills by keyword |
| `use_skill(skillName)` | Activate a skill for the current task |

**Example usage:**
```bash
# In Claude Desktop with MCP enabled
> find_skills("test")
# Returns: test-driven-development, unit-testing, integration-testing

> use_skill("test-driven-development")
> Now implement user authentication
# Claude follows TDD workflow
```

### Agent Tools

| Tool | Description |
|-------|-------------|
| `list_agents()` | List all available agent types |
| `get_agent_info(agentName)` | Get agent details, capabilities, and use cases |
| `delegate_to_agent(agentName, task)` | Delegate task to specialized agent |

**Example usage:**
```bash
> list_agents()
# Returns: planner, build, rush, review, scout, explore, vision, one-shot

> get_agent_info("scout")
# Returns: Scout agent - External research, library docs, GitHub patterns

> delegate_to_agent("scout", "Find best authentication patterns")
# Scout agent handles research task
```

### Command Tools

| Tool | Description |
|-------|-------------|
| `list_commands([category])` | List available commands, optionally filtered by category |
| `run_command(commandName, args)` | Execute an AIKit slash command |

**Example usage:**
```bash
> list_commands("core")
# Returns: create, plan, implement, finish, handoff, resume, one-shot

> run_command("create", "Add user authentication")
# Creates Beads task for authentication
```

### Session Tools

| Tool | Description |
|-------|-------------|
| `list_sessions(limit)` | List recent development sessions |
| `read_session(sessionId)` | Load session context and history |

**Example usage:**
```bash
> list_sessions(5)
# Returns: Last 5 sessions with timestamps and summaries

> read_session("20260102-1430-auth-refactor")
# Returns: Full session context, goals, progress, git state
```

### Memory Tools

| Tool | Description |
|-------|-------------|
| `memory_read(key)` | Read from persistent memory |
| `memory_update(key, content, mode)` | Update memory (append, overwrite, or prepend) |

**Example usage:**
```bash
> memory_update("patterns/authentication", "Always use JWT with refresh tokens", "create")
# Creates new memory entry

> memory_read("patterns/authentication")
# Returns: "Always use JWT with refresh tokens"

> memory_update("patterns/authentication", "\n- Use httpOnly cookies", "append")
# Appends to existing memory
```

### Beads (Task Tracking) Tools

| Tool | Description |
|-------|-------------|
| `bead_create(title, description, [options])` | Create new task |
| `bead_update_status(id, status)` | Update task status (todo, in-progress, completed, blocked) |
| `bead_update_type(id, type)` | Update task type (feature, pattern, decision, knowledge) |
| `bead_complete(id)` | Complete task with quality gates |
| `bead_list([filter])` | List tasks, optionally filtered |

**Example usage:**
```bash
> bead_create("Add user authentication", "Implement OAuth 2.0 flow with JWT tokens")
# Creates task: .beads/001-add-user-authentication.md

> bead_update_status("001", "in-progress")
# Updates task status

> bead_complete("001")
# Runs quality gates (typecheck, test, lint, build)
# Updates task status to completed

> bead_list()
# Lists all tasks with status and metadata
```

## Configuration

### OpenCode Desktop (Claude) Setup

**Step 1: Find AIKit Installation**

```bash
# Find global npm installation
npm root -g

# Output: /usr/local/lib/node_modules (example)

# AIKit MCP server path:
/usr/local/lib/node_modules/@tdsoft-tech/aikit/dist/mcp-server.js
```

**Step 2: Configure Claude Desktop**

1. Open Claude Desktop
2. Go to **Settings** (⌘,)
3. Navigate to **Developer** → **MCP Servers**
4. Add AIKit server configuration:

```json
{
  "mcpServers": {
    "aikit": {
      "command": "node",
      "args": [
        "/usr/local/lib/node_modules/@tdsoft-tech/aikit/dist/mcp-server.js"
      ],
      "env": {
        "AIKIT_CONFIG": "/Users/yourname/.config/aikit/aikit.json"
      }
    }
  }
}
```

**Step 3: Restart Claude Desktop**

Close and reopen Claude Desktop to load MCP server.

**Step 4: Verify Connection**

In Claude Desktop, tools should appear in the context menu. Test with:

```bash
> list_agents()
```

<MaterialIcon name="check_circle" className="icon-success" /> Expected output: List of 8 agent types

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `command` | string | `"node"` | Command to start MCP server |
| `args[0]` | string | `path/to/mcp-server.js` | Absolute path to MCP server file |
| `env.AIKIT_CONFIG` | string | `~/.config/aikit/aikit.json` | Path to AIKit config file |

### Environment Variables

| Variable | Required | Description |
|-----------|----------|-------------|
| `AIKIT_CONFIG` | No | Path to AIKit configuration file (default: `~/.config/aikit/aikit.json`) |
| `NODE_ENV` | No | Environment mode (`development` or `production`) |

## Usage Examples

### Example 1: Full Feature Development Workflow

```bash
# 1. Create task
> bead_create("Add user authentication", "Implement OAuth 2.0 with JWT")
# Task created: .beads/001-add-user-authentication.md

# 2. Plan with skills
> use_skill("test-driven-development")

# 3. Implement
> delegate_to_agent("build", "Implement authentication system")
# @build agent handles implementation

# 4. Review
> delegate_to_agent("review", "Review authentication implementation")
# @review agent performs code review

# 5. Complete with quality gates
> bead_complete("001")
# Runs: typecheck, test, lint, build
# All gates passed - task marked complete
```

### Example 2: Research Task

```bash
# 1. Research with scout
> delegate_to_agent("scout", "Find best patterns for JWT authentication")

# Scout agent researches and returns:
# - Recommended libraries: jsonwebtoken, passport-jwt
# - Best practices: short expiration, refresh tokens, httpOnly cookies
# - Security considerations: Validate tokens, handle expiration

# 2. Save to memory
> memory_update("research/jwt-patterns", scout_agent_findings...)

# 3. Use findings later
> memory_read("research/jwt-patterns")
# Retrieves saved research
```

### Example 3: Session Continuity

```bash
# End of Session 1
> run_command("handoff", "")
# Creates handoff in memory/handoffs/[timestamp].md
# Saves: completed work, in-progress tasks, context

# Start Session 2 (later)
> list_sessions()
# Shows recent sessions

> read_session("20260102-1430")
# Loads session context
# Claude understands previous session state

> run_command("resume", "")
# Loads latest handoff and continues work
```

### Example 4: Multi-Agent Workflow

```bash
# Plan with @planner
> delegate_to_agent("planner", "Design authentication system")
# @planner breaks down into sub-tasks:
#   - @scout: Research authentication patterns
#   - @explore: Check existing auth code
#   - @build: Implement auth system
#   - @review: Security audit

# Execute sub-tasks
> delegate_to_agent("scout", "Research OAuth 2.0 patterns")
> delegate_to_agent("explore", "Find existing auth implementation")
> delegate_to_agent("build", "Implement authentication")
> delegate_to_agent("review", "Security audit of auth code")

# @planner coordinates all sub-tasks
```

## Troubleshooting

### "MCP server not found"

**Problem:** Claude Desktop can't connect to MCP server.

**Solutions:**

1. **Verify path is correct:**
```bash
# Check if MCP server exists
ls -la /path/to/aikit/dist/mcp-server.js

# Find correct path
npm root -g
npm list -g @tdsoft-tech/aikit
```

2. **Check file permissions:**
```bash
# Ensure executable permissions
chmod +x /path/to/aikit/dist/mcp-server.js
```

3. **Check Node.js version:**
```bash
node --version
# Should be v18.0.0 or higher
```

4. **Check Claude Desktop logs:**
   - Open Claude Desktop
   - Help → Show Logs
   - Look for MCP connection errors

### "Tools not appearing"

**Problem:** MCP server is connected but tools aren't visible.

**Solutions:**

1. **Restart Claude Desktop**
2. **Check MCP configuration:**
```json
{
  "mcpServers": {
    "aikit": {
      "command": "node",
      "args": ["/correct/path/to/mcp-server.js"],
      "env": {
        "AIKIT_CONFIG": "/correct/path/to/aikit.json"
      }
    }
  }
}
```

3. **Verify AIKit config exists:**
```bash
ls -la ~/.config/aikit/aikit.json
```

4. **Test MCP server directly:**
```bash
node /path/to/aikit/dist/mcp-server.js
# Should see: MCP server started on port...
```

### "Command failed" errors

**Problem:** Tool execution fails with error.

**Solutions:**

1. **Check AIKit installation:**
```bash
aikit status
# Should show: ✓ Configuration loaded
```

2. **Check Beads is initialized:**
```bash
ls -la .beads/
# If missing: bd init
```

3. **Check task IDs:**
```bash
bead_list()
# Verify task ID exists
```

### "Memory read failed"

**Problem:** Can't read from memory.

**Solutions:**

1. **Check memory directory:**
```bash
ls -la .aikit/memory/
# Initialize if missing
```

2. **Verify memory key exists:**
```bash
# List memory files
find .aikit/memory -name "*.md"

# Use exact key
> memory_read("patterns/authentication")  # Correct
> memory_read("authentication")          # Wrong path
```

## Advanced Configuration

### Custom MCP Server Path

If AIKit is installed in a custom location:

```json
{
  "mcpServers": {
    "aikit": {
      "command": "node",
      "args": [
        "/custom/path/to/aikit/dist/mcp-server.js"
      ],
      "env": {
        "AIKIT_CONFIG": "/custom/path/to/aikit.json"
      }
    }
  }
}
```

### Multiple AIKit Instances

For multiple AIKit configurations (global + project):

```json
{
  "mcpServers": {
    "aikit-global": {
      "command": "node",
      "args": [
        "/path/to/global/aikit/dist/mcp-server.js"
      ],
      "env": {
        "AIKIT_CONFIG": "/Users/yourname/.config/aikit/aikit.json"
      }
    },
    "aikit-project": {
      "command": "node",
      "args": [
        "/path/to/aikit/dist/mcp-server.js"
      ],
      "env": {
        "AIKIT_CONFIG": "/path/to/project/.aikit/aikit.json"
      }
    }
  }
}
```

<MaterialIcon name="warning" className="icon-warning" /> **Note:** Each MCP server instance runs separately. Use appropriate server name (aikit-global vs aikit-project).

## MCP Protocol Details

### Tool Schema

Each MCP tool includes:

- **name**: Unique tool identifier
- **description**: What the tool does
- **inputSchema**: JSON Schema for parameters
- **outputSchema**: JSON Schema for return values

### Error Handling

All tools return structured errors:

```json
{
  "error": {
    "code": "TASK_NOT_FOUND",
    "message": "Task '001' does not exist",
    "details": {
      "availableTasks": ["002", "003"]
    }
  }
}
```

### Rate Limiting

To prevent abuse, MCP server implements:
- Maximum 100 tool calls per minute
- Maximum 1MB per tool response
- Timeout after 30 seconds per call

## Next Steps

- **[Setup Guide](setup)** - Detailed MCP server setup
- **[Tools Reference](tools)** - Complete tool documentation
- **[Beads Integration](../beads/intro)** - Task tracking system
- **[Session Management](../sessions/intro)** - Session workflows
- **[Features](../features)** - All AIKit features

## Related Links

- [MCP Specification](https://modelcontextprotocol.io/)
- [Claude Desktop Documentation](https://docs.anthropic.com/claude/docs/mcp)
- [AIKit GitHub Repository](https://github.com/tdsoft-tech/aikit)
