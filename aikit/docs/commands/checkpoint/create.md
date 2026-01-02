---
sidebar_position: 1
---

# /ak_cm_checkpoint_create Command

Create a new checkpoint to save your project state for future restoration.

## Usage

```bash
# Create a checkpoint with description
/ak_cm_checkpoint_create "Before refactoring auth module"

# Create checkpoint with tags
/ak_cm_checkpoint_create "Completed user authentication" --tags auth,jwt,oauth

# Auto-generate checkpoint name
/ak_cm_checkpoint_create
```

## Arguments

| Argument | Type | Required | Description |
|---------|------|----------|-------------|
| `--name` | string | No | Checkpoint name (auto-generated if not provided) |
| `-m, --message` | string | No | Checkpoint description or message |
| `--tags` | string | No | Comma-separated tags for categorization |

## Workflow

### 1. Capture Project State

AIKit captures:
- Current git branch and commit
- List of modified files
- Git status
- Timestamp
- Optional description and tags

### 2. Create Checkpoint File

Creates checkpoint in `.aikit/checkpoints/`:

```markdown
---
id: "20260102-1430"
name: "Before refactoring auth module"
created: "2026-01-02T14:30:00Z"
gitBranch: "feature/auth"
gitCommit: "abc1234def5678..."
modifiedFiles:
  - src/auth/login.tsx
  - src/auth/jwt.ts
  - src/auth/middleware.ts
tags:
  - refactoring
  - authentication
message: Before refactoring auth module
---
```

### 3. Add to Git

Stages checkpoint file for git tracking:
```bash
git add .aikit/checkpoints/20260102-1430.md
git commit -m "checkpoint: Before refactoring auth module"
```

## Examples

### Before Major Changes

```bash
# Save state before risky change
/ak_cm_checkpoint_create "Before database migration"

# Proceed with migration
# ... perform migration ...

# If something goes wrong, restore:
/ak_cm_checkpoint_restore 20260102-1430
```

### Save Progress

```bash
# Create checkpoint after completing task
/ak_cm_checkpoint_create "Completed user authentication" --tags done,jwt

# Creates: .aikit/checkpoints/20260102-1500.md
# Tags: done, jwt
```

### Checkpoint Tags

Common tags for categorization:
- `before-change` - Before making changes
- `after-change` - After completing changes
- `wip` - Work in progress
- `done` - Task completed
- `bug-fix` - Bug fix checkpoint
- `feature` - Feature implementation
- `refactor` - Code refactoring
- `deploy` - Before/after deployment

## Best Practices

### Checkpoint Strategy

✅ **DO:**
- Create checkpoints before risky operations
- Checkpoint after significant milestones
- Use descriptive names
- Add relevant tags
- Checkpoint before git operations (rebase, cherry-pick)
- Regular checkpoints during long tasks

❌ **DON'T:**
- Create checkpoints too frequently (every few minutes)
- Use vague checkpoint names
- Skip adding descriptions
- Checkpoint with uncommitted changes
- Leave old checkpoints forever

### Checkpoint Frequency

**Recommended intervals:**
- **Before major changes**: Database migration, API refactoring
- **After milestones**: Feature completion, bug fixes
- **Risk points**: Before rebase, before large refactor
- **Regular intervals**: Every 1-2 hours for long tasks

**Avoid:**
- Before every small commit
- Before reading files
- Every 10-15 minutes

### Checkpoint Management

```bash
# List all checkpoints
ls -la .aikit/checkpoints/

# Delete old checkpoints (keep last 10)
cd .aikit/checkpoints
ls -t | tail -n +11 | xargs rm

# Search checkpoints
grep -r "refactoring" .aikit/checkpoints/
```

## Checkpoint File Structure

Each checkpoint contains:
- **Metadata**: ID, name, timestamp, git info
- **State**: Modified files list
- **Context**: Description and tags
- **Restoration**: Git status for easy restore

## Related Commands

- **[/ak_cm_checkpoint_list](checkpoint/list.md)** - List all checkpoints
- **[/ak_cm_checkpoint_restore](checkpoint/restore.md)** - Restore from checkpoint
- **[/ak_cm_branch](../git/branch.md)** - Git branch management

## Related Documentation

- **[Session Management](../../sessions/intro.md)** - Cross-session tracking
- **[Beads Workflow](../../beads/workflow.md)** - Task tracking

## Next Steps

- **[Restore Checkpoint](checkpoint/restore.md)** - How to restore state
- **[List Checkpoints](checkpoint/list.md)** - Browse available checkpoints
