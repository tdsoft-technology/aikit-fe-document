---
sidebar_position: 1
---

# /help Command

Display help information for all AIKit commands or specific commands.

## Usage

```bash
# Show all commands
/help

# Show specific command help
/help create
/help plan

# Show help by category
/help commands
/help skills
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|----------|-------------|
| `<command>` | string | No | All | Command to show help for | All commands |
| `--all` | flag | No | false | Show all commands with details | Show brief help |
| `--verbose` | flag | No | false | Show detailed help | Show standard help |

## Output Format

### Brief Help

```bash
/help
```

**Output:**
```bash
AIKit Commands - v0.1.17

Core Workflow:
  create     Create new task with Beads
  plan       Plan implementation strategy
  implement   Implement with TDD workflow
  finish      Complete with quality gates

Quick Actions:
  fix        Quick bug fixes
  fix-types   Fix TypeScript errors
  commit      Create conventional commit
  pr          Create pull request
  test        Run tests
  lint        Run linter

Research & Design:
  research    Research external docs
  analyze-project Analyze codebase
  review-codebase Review code quality
  design       Design architecture
  brainstorm Brainstorm ideas

Git:
  branch      Create new branch
  merge       Merge branches
  rebase      Rebase branch
  cherry-pick Cherry-pick commits
  stash       Stash changes

Checkpoint:
  checkpoint-create Create checkpoint
  checkpoint-list   List checkpoints
  checkpoint-restore Restore checkpoint

Sessions:
  session-start   Start new session
  session-update   Update session progress
  session-end     End session
  session-list    List all sessions
  session-current  Show current session
  session-show     Show session details
  session-search   Search sessions

Utility:
  help        Show this help
  version     Show AIKit version
  status      Show AIKit status
  config      View/set configuration
  sync        Sync with git
  docs        Generate documentation
  install     Install AIKit

Use /help <command> for detailed information.
```

### Verbose Help

```bash
# Show detailed help for specific command
/help create --verbose
```

**Output:**
```bash
COMMAND: /create

DESCRIPTION: Create a new Beads task for tracking development work

USAGE:
  /create <title> [options]

OPTIONS:
  -m, --message <string>    Task description
  -t, --type <type>           Task type: feature, pattern, decision, knowledge
  -p, --priority <priority>   Task priority: critical, high, medium, low

EXAMPLES:
  /create "Add user authentication"
  /create "Fix login bug" --type bug --priority high
  /create "Refactor auth service" --message "Extract to separate service"

RELATED:
  /plan         Plan implementation strategy
  /implement       Implement with TDD
  /finish         Complete with quality gates
  /list           List all tasks

SEE ALSO:
  /help commands     List all commands
  /status          Show AIKit status
```

## Command Categories

### Core Workflow Commands

```bash
/help create
/help plan
/help implement
/help finish
```

### Quick Actions Commands

```bash
/help fix
/help fix-types
/help commit
/help pr
/help test
/help lint
```

### Research & Design Commands

```bash
/help research
/help analyze-project
/help review-codebase
/help design
/help brainstorm
```

### Git Commands

```bash
/help branch
/help merge
/help rebase
/help cherry-pick
/help stash
```

### Session Commands

```bash
/help session-start
/help session-update
/help session-end
/help session-list
/help session-current
/help session-show
/help session-search
```

### Utility Commands

```bash
/help help
/help version
/help status
/help config
/help sync
/help docs
/help install
```

## Search Help

```bash
# Search for commands containing "test"
/help --search test

# Shows commands with "test" in name:
  - /test (run tests)
  - /fix-types (fix type errors)
```

## Related Commands

- **[/status](../utility/status.md)** - Show AIKit status
- **[/version](../utility/version.md)** - Show version information

## Related Documentation

- **[Commands Reference](../introl.md)** - All commands overview
- **[Installation](../../installation.md)** - Setup and installation guide
