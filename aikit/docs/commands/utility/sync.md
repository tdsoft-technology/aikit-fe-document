---
sidebar_position: 5
---

# /ak_cm_sync Command

Sync AIKit configuration and tracked files with git.

## Usage

```bash
# Sync all changes
/ak_cm_sync

# Sync specific directories
/ak_cm_sync .aikit/ .beads/

# Dry run (show what would be synced)
/ak_cm_sync --dry-run
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
/ak_cm_sync

# Result:
# Stages .aikit/, .beads/ files
# Creates commit
# Pushes to remote
```

### Sync Directories

```bash
# Sync configuration and Beads
/ak_cm_sync .aikit/ .beads/

# Sync memory files
/ak_cm_sync .aikit/memory/
```

### Dry Run

```bash
# Show what would be synced
/ak_cm_sync --dry-run

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
/ak_cm_sync --message "Add new authentication patterns"

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
/ak_cm_sync

# 3. Push
git push origin main
```

## Related Commands

- **[/ak_cm_status](status.md)** - Check status before syncing
- **[/ak_cm_config](config.md)** - Configure sync behavior

## Related Git Commands

- **[/ak_cm_branch](../git/branch.md)** - Create branch before sync
- **[/ak_cm_merge](../git/merge.md)** - Merge before sync
- **[/ak_cm_rebase](../git/rebase.md)** - Rebase before sync

## Related Documentation

- **[Configuration](../../advanced/configuration.md)** - Configuration system
- **[Beads Workflow](../../beads/workflow.md)** - Task tracking with sync
- **[Session Management](../../sessions/intro.md)** - Session system
