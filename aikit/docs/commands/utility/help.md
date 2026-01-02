---
sidebar_position: 1
---

# /ak_cm_help Command

Display help information for all AIKit commands or specific commands.

## Usage

```bash
# Show all commands
/ak_cm_help

# Show specific command help
/ak_cm_help create
/ak_cm_help plan

# Show help by category
/ak_cm_help commands
/ak_cm_help skills
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
/ak_cm_help
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

Use /ak_cm_help <command> for detailed information.
```

### Verbose Help

```bash
# Show detailed help for specific command
/ak_cm_help create --verbose
```

**Output:**
```bash
COMMAND: /ak_cm_create

DESCRIPTION: Create a new Beads task for tracking development work

USAGE:
  /ak_cm_create <title> [options]

OPTIONS:
  -m, --message <string>    Task description
  -t, --type <type>           Task type: feature, pattern, decision, knowledge
  -p, --priority <priority>   Task priority: critical, high, medium, low

EXAMPLES:
  /ak_cm_create "Add user authentication"
  /ak_cm_create "Fix login bug" --type bug --priority high
  /ak_cm_create "Refactor auth service" --message "Extract to separate service"

RELATED:
  /ak_cm_plan         Plan implementation strategy
  /ak_cm_implement       Implement with TDD
  /ak_cm_finish         Complete with quality gates
  /ak_cm_list           List all tasks

SEE ALSO:
  /ak_cm_help commands     List all commands
  /ak_cm_status          Show AIKit status
```

## Command Categories

### Core Workflow Commands

```bash
/ak_cm_help create
/ak_cm_help plan
/ak_cm_help implement
/ak_cm_help finish
```

### Quick Actions Commands

```bash
/ak_cm_help fix
/ak_cm_help fix-types
/ak_cm_help commit
/ak_cm_help pr
/ak_cm_help test
/ak_cm_help lint
```

### Research & Design Commands

```bash
/ak_cm_help research
/ak_cm_help analyze-project
/ak_cm_help review-codebase
/ak_cm_help design
/ak_cm_help brainstorm
```

### Git Commands

```bash
/ak_cm_help branch
/ak_cm_help merge
/ak_cm_help rebase
/ak_cm_help cherry-pick
/ak_cm_help stash
```

### Session Commands

```bash
/ak_cm_help session-start
/ak_cm_help session-update
/ak_cm_help session-end
/ak_cm_help session-list
/ak_cm_help session-current
/ak_cm_help session-show
/ak_cm_help session-search
```

### Utility Commands

```bash
/ak_cm_help help
/ak_cm_help version
/ak_cm_help status
/ak_cm_help config
/ak_cm_help sync
/ak_cm_help docs
/ak_cm_help install
```

## Search Help

```bash
# Search for commands containing "test"
/ak_cm_help --search test

# Shows commands with "test" in name:
  - /ak_cm_test (run tests)
  - /ak_cm_fix-types (fix type errors)
```

## Related Commands

- **[/ak_cm_status](../utility/status.md)** - Show AIKit status
- **[/ak_cm_version](../utility/version.md)** - Show version information

## Related Documentation

- **[Commands Reference](../introl.md)** - All commands overview
- **[Installation](../../installation.md)** - Setup and installation guide
