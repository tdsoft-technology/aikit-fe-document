---
sidebar_position: 2
---

# /ak_cm_checkpoint_list Command

List all available checkpoints with filtering and search capabilities.

## Usage

```bash
# List all checkpoints
/ak_cm_checkpoint_list

# List last 10 checkpoints
/ak_cm_checkpoint_list --limit 10

# Search by tag
/ak_cm_checkpoint_list --tag refactoring

# Filter by date range
/ak_cm_checkpoint_list --start "2026-01-01" --end "2026-01-31"
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|---------|-------------|
| `--limit` | number | No | All | Maximum number of checkpoints to return |
| `--tag` | string | No | All | Filter by checkpoint tag |
| `--start` | string | No | All | Filter checkpoints after this date (YYYY-MM-DD) |
| `--end` | string | No | All | Filter checkpoints before this date (YYYY-MM-DD) |
| `--search` | string | No | All | Search by name or description |

## Output Format

```bash
/ak_cm_checkpoint_list

# Output:
ID: 20260102-1430
Name: "Before refactoring auth module"
Created: 1/2/2026, 2:30:00 PM
Branch: feature/auth
Tags: refactoring, before-change
Modified Files: 3 files
Commit: abc1234
----------------------------------------
ID: 20260102-1500
Name: "Completed authentication refactoring"
Created: 1/2/2026, 5:00:00 PM
Branch: feature/auth
Tags: done, refactoring, after-change
Modified Files: 12 files
Commit: def5678
----------------------------------------
...
```

## Checkpoint States

| Status | Description |
|--------|-------------|
| Valid | Checkpoint can be restored (clean git state) |
| Outdated | Git state no longer exists (checkpoint outdated) |

## Use Cases

### List All Checkpoints

```bash
/ak_cm_checkpoint_list

# Shows all checkpoints in .aikit/checkpoints/
```

### Filter by Tag

```bash
# List refactoring checkpoints
/ak_cm_checkpoint_list --tag refactoring

# List pre-change checkpoints
/ak_cm_checkpoint_list --tag before-change
```

### Filter by Date

```bash
# Checkpoints in January 2026
/ak_cm_checkpoint_list --start "2026-01-01" --end "2026-01-31"

# Last week
/ak_cm_checkpoint_list --start "2026-01-27" --end "2026-02-02"
```

### Search Checkpoints

```bash
# Search by name
/ak_cm_checkpoint_list --search "authentication"

# Search by description
/ak_cm_checkpoint_list --search "migration"
```

### Checkpoint Metadata

Each checkpoint includes:
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
  - before-change
message: Before refactoring authentication module
---
```

## Best Practices

### Checkpoint Management

✅ **DO:**
- Create checkpoints before major changes
- Use descriptive names
- Add relevant tags
- Clean up old checkpoints
- Restore to verify checkpoint validity

❌ **DON'T:**
- Create checkpoints too frequently
- Use vague names without context
- Skip adding tags
- Leave outdated checkpoints forever
- Restore checkpoints without testing

### Checkpoint Strategy

**When to Create:**
- Before database migrations
- Before major refactors
- Before API changes
- After significant features
- Before risky operations

**Checkpoint Content:**
- Always commit changes first
- Include all modified files
- Note git branch and commit
- Add meaningful description

### Checkpoint Restoration

✅ **DO:**
- Verify git state after restore
- Test that code builds
- Run tests to ensure everything works
- Document if restore was successful

❌ **DON'T:**
- Assume checkpoint is perfect
- Skip verification after restore
- Restore onto wrong branch
- Leave conflicts unresolved

## Related Commands

- **[/ak_cm_checkpoint_create](create.md)** - Create checkpoint
- **[/ak_cm_checkpoint_restore](restore.md)** - Restore from checkpoint
- **[/ak_cm_branch](../git/branch.md)** - Manage branches
- **[/ak_cm_stash](../git/stash.md)** - Save temporary work

## Related Documentation

- **[Checkpoint System](../../advanced/checkpoints.md)** - Checkpoint architecture
- **[Git Workflow](../../skills/git/git-workflow.md)** - Git best practices
- **[Session Management](../../sessions/introl)** - Cross-session tracking

## Next Steps

- **[Create Checkpoint](create.md)** - Create a new checkpoint
- **[Restore Checkpoint](restore.md)** - Restore from checkpoint
