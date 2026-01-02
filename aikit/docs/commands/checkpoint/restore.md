---
sidebar_position: 3
---

# /ak_cm_checkpoint_restore Command

Restore project state from a previously created checkpoint.

## Usage

```bash
# Restore specific checkpoint
/ak_cm_checkpoint_restore 20260102-1430

# Restore most recent checkpoint
/ak_cm_checkpoint_restore

# Restore by name
/ak_cm_checkpoint_restore "Before refactoring"
```

## Arguments

| Argument | Type | Required | Description | Example |
|---------|------|----------|-------------|
| `<id>` | string | No | Checkpoint ID or name | "20260102-1430" |

## Workflow

### 1. Identify Checkpoint

Find the checkpoint to restore:

```bash
# List checkpoints first
/ak_cm_checkpoint_list

# Then restore by ID
/ak_cm_checkpoint_restore 20260102-1430
```

### 2. Restore Git State

AIKit restores git state from checkpoint:

```bash
# Checkout specified branch
git checkout <checkpoint-branch>

# Reset to specified commit
git reset --hard <checkpoint-commit>

# Verify state
git log --oneline -1
git status
```

### 3. Restore Working Directory

AIKit restores file state:

```bash
# Discard current changes
git clean -fdx

# Check modified files from checkpoint
# Restore specific files if needed
```

### 4. Verify Restoration

```bash
# Verify git state
git log --oneline -3
git status

# Check build works
npm run build

# Run tests
npm run test
```

## Examples

### Restore Before Breaking Changes

```bash
# Scenario: Refactoring broke something

# 1. List checkpoints
/ak_cm_checkpoint_list

# Output shows:
ID: 20260102-1430
Name: "Before refactoring auth module"
...

# 2. Restore checkpoint
/ak_cm_checkpoint_restore 20260102-1430

# Result: Git reset to before refactoring state
# All changes since checkpoint are discarded
```

### Restore After Experiment

```bash
# Scenario: Tried experimental approach, didn't work

# 1. Restore most recent checkpoint
/ak_cm_checkpoint_restore

# 2. Continue from stable state
/ak_cm_implement
```

### Restore Different Branch State

```bash
# Scenario: Need work on different branch's state

# 1. Restore checkpoint (which has branch info)
/ak_cm_checkpoint_restore "feature-users"

# 2. Git is now on feature/users at correct commit
# 3. Continue working
```

## Checkpoint Validity

### Valid Checkpoints

✅ **Characteristics:**
- Git commit still exists
- All files in checkpoint are intact
- Can be cleanly restored
- State is reproducible

### Invalid Checkpoints

❌ **Characteristics:**
- Git commit has been garbage collected
- Files have been deleted/moved
- Conflicts on restoration
- Incomplete checkpoint data

## Restoration Process

### 1. Pre-Restoration

```bash
# Verify no uncommitted work you want to lose
git status

# Optional: Create emergency checkpoint
/ak_cm_checkpoint_create "Emergency: before restore"
```

### 2. Restoration Steps

```bash
# 1. Stash current work (if you want to save it)
git stash push -m "Save before restore"

# 2. Restore checkpoint
/ak_cm_checkpoint_restore <checkpoint-id>

# 3. Verify restoration
git log --oneline -3
git status
npm run build
npm run test
```

### 3. Post-Restoration

```bash
# If restoration successful:
# - Continue working
# - Create new checkpoint when stable

# If restoration failed:
# - Try different checkpoint
# - Or restore from stash: git stash pop
```

## Conflict Resolution

### Conflicts on Restoration

```bash
# If conflicts exist:
git status  # Shows CONFLICTED files

# Resolve conflicts:
# 1. Edit conflicted files
# 2. Remove conflict markers (<<<<<<<, =======, >>>>>>>)
# 3. Stage resolved files: git add .
# 4. Complete restore
```

## Best Practices

### Before Restoring

✅ **DO:**
- Commit or stash current work
- Verify checkpoint ID is correct
- Check checkpoint details first
- Note current git branch/commit

❌ **DON'T:**
- Restore without checking current state
- Lose uncommitted work accidentally
- Use wrong checkpoint ID
- Restore without verification

### After Restoring

✅ **DO:**
- Verify git state matches checkpoint
- Test that code builds
- Run test suite
- Create new checkpoint quickly
- Document restoration if needed

❌ **DON'T:**
- Continue without verification
- Skip testing after restoration
- Leave conflicts unresolved
- Lose track of checkpoint used

### Checkpoint Strategy

**Recommended workflow:**
```bash
# Create checkpoints regularly
/ak_cm_checkpoint_create "Progress update" --tags wip

# Before risky operations
/ak_cm_checkpoint_create "Before refactoring"

# After risky operations
/ak_cm_checkpoint_create "After refactoring" --tags refactoring

# If issues arise, restore stable checkpoint
/ak_cm_checkpoint_restore "Before refactoring"
```

## Related Commands

- **[/ak_cm_checkpoint_create](create.md)** - Create checkpoint
- **[/ak_cm_checkpoint_list](list.md)** - List all checkpoints
- **[/ak_cm_branch](../git/branch.md)** - Checkout specific branch

## Related Documentation

- **[Checkpoint System](../../advanced/checkpoints.md)** - Checkpoint architecture
- **[Session Management](../../sessions/introl)** - Cross-session tracking
- **[Git Workflow](../../skills/git/git-workflow.md)** - Git best practices

## Next Steps

- **[List Checkpoints](list.md)** - Browse available checkpoints
- **[Create Checkpoint](create.md)** - Save current state
- **[Git Workflow](../../skills/git/git-workflow.md)** - Manage git state
