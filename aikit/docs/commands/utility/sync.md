---
sidebar_position: 5
---

# /sync Command

Sync AIKit configuration and tracked files with git.

## Usage

```bash
# Sync all changes
/sync

# Sync specific directories
/sync .aikit/ .beads/

# Dry run (show what would be synced)
/sync --dry-run
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|----------|-------------|
| `<paths>` | strings | No | All | Paths or files to sync | Track all files |
| `--dry-run` | flag | No | false | Show changes without committing | Don't commit changes |
| `--message` | string | No | AIKit sync | Commit message | Standard message |

## Workflow

### 1. Check Git Status

AIKit checks:
- Current git branch
- Modified files
- Untracked files
- Staged files

### 2. Stage Changes

Stages files to be committed:
- Configuration files
- Tracked documentation files
- Session files
- Memory files

### 3. Commit Changes

Creates git commit with:
- Standardized commit message
- All staged files
- Optional custom message

### 4. Push to Remote

Pushes changes to remote repository.

## Commit Message Format

Standard format:

```
chore(s): sync AIKit configuration and tracked files

Modified:
  .aikit/aikit.json
  .beads/task-001.md
  .aikit/memory/observations.md

Commit ID: abc1234
```

## Examples

### Sync All

```bash
# Sync all tracked files
/sync

# Result:
# Stages .aikit/, .beads/ files
# Creates commit
# Pushes to remote
```

### Sync Directories

```bash
# Sync configuration and Beads
/sync .aikit/ .beads/

# Sync memory files
/sync .aikit/memory/
```

### Dry Run

```bash
# Show what would be synced
/sync --dry-run

# Output:
Would sync:
  - .aikit/aikit.json (modified)
  - .beads/task-001.md (new)
  .aikit/memory/observations.md (updated)

Total files: 3
```

### Custom Message

```bash
# Sync with custom message
/sync --message "Add new authentication patterns"

# Result:
# Uses custom message instead of default
```

## Synced Files

AIKit tracks and syncs these file types:

### Configuration Files

- `.aikit/aikit.json` - Project configuration
- `.aikit/aikit.json.bak` - Backup configuration

### Beads Files

- `.beads/*.md` - Task files
- `.beads/.gitignore` - Git ignore file

### Session Files

- `.aikit/sessions/*.md` - Session files
- `.aikit/sessions/index.md` - Session index

### Memory Files

- `.aikit/memory/observations/*.md` - Observation files
- `.aikit/memory/handoffs/*.md` - Handoff files
- `.aikit/memory/plans/*.md` - Plan files

### Documentation Files

- README files in project root
- Documentation in project-specific locations

## Best Practices

### Syncing Strategy

✅ **DO:**
- Sync before major changes
- Sync after completing tasks
- Sync regularly (daily/weekly)
- Use descriptive commit messages
- Review what's being synced before committing

❌ **DON'T:**
- Commit large amounts of unrelated files
- Sync during active development without reason
- Skip reviewing sync changes
- Commit files with secrets

### Sync Frequency

**Recommended:**
- **Before risky operations**: git rebase, cherry-pick, reset
- **After major features**: Feature completion
- **Regular cadence**: Daily or weekly
- **Before pushing**: Final sync before push

### Syncing with Team

When working in a team:

```bash
# 1. Pull latest changes
git pull origin main

# 2. Sync local changes
/sync

# 3. Push
git push origin main
```

## Related Commands

- **[/status](status.md)** - Check status before syncing
- **[/config](config.md)** - Configure sync behavior

## Related Git Commands

- **[/branch](../git/branch.md)** - Create branch before sync
- **[/merge](../git/merge.md)** - Merge before sync
- **[/rebase](../git/rebase.md)** - Rebase before sync

## Related Documentation

- **[Configuration](../../advanced/configuration.md)** - Configuration system
- **[Beads Workflow](../../beads/workflow.md)** - Task tracking with sync
- **[Session Management](../../sessions/intro.md)** - Session system
