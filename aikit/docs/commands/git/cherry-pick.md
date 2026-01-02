---
sidebar_position: 4
---

# /ak_cm_cherry-pick Command

Apply specific commits from one branch to another without merging entire branch.

## Usage

```bash
# Cherry-pick a commit
/ak_cm_cherry-pick abc1234

# Cherry-pick multiple commits
/ak_cm_cherry-pick abc1234 def5678 ghi8901

# Cherry-pick commit range
/ak_cm_cherry-pick abc1234..ghi8901
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|-----------|-------------|
| `<commit>` | string | No | - | Commit hash or reference |
| `--edit` | flag | No | false | Edit commit before applying |
| `--no-commit` | flag | No | false | Apply changes but don't commit |

## Workflow

### 1. Identify Commits

```bash
# List commits on source branch
git log source-branch --oneline

# Find specific commits:
abc1234 Fix authentication bug
def5678 Add user profile
ghi8901 Refactor auth service

# Or find range:
git log source-branch --oneline | head -5
```

### 2. Switch to Target Branch

```bash
# Switch to branch where you want commits
git checkout main

# Verify current branch
git branch
```

### 3. Cherry-Pick Commits

```bash
# Cherry-pick single commit
git cherry-pick abc1234

# Cherry-pick multiple commits
git cherry-pick abc1234 def5678 ghi8901

# Cherry-pick with range
git cherry-pick abc1234..ghi8901
```

### 4. Handle Conflicts (if any)

```bash
# If cherry-pick fails with conflict:
# Resolve conflict
git add <file>
git cherry-pick --continue

# Or skip this commit
git cherry-pick --skip

# Or abort cherry-pick
git cherry-pick --abort
```

## Use Cases

### Apply Bug Fix to Main

```bash
# Scenario: Bug fix in feature branch needs to be in main

# 1. Find bug fix commit
git log feature/auth --oneline

# Output:
abc1234 Fix authentication timeout

# 2. Cherry-pick to main
git checkout main
git cherry-pick abc1234

# 3. Commit with message
git commit -m "cherry-pick: Fix authentication timeout"
```

### Port Feature to Different Branch

```bash
# Scenario: Feature implemented in develop, needed in release

# 1. Find feature commits
git log develop --oneline --grep "user profiles"

# Output:
abc1234 Add user profile model
def5678 Add profile editing
ghi8901 Add profile deletion

# 2. Cherry-pick to release branch
git checkout release
git cherry-pick abc1234 def5678 ghi8901

# 3. Result: All 3 commits on release branch
```

### Selectively Merge

```bash
# Scenario: Only cherry-pick specific commits from PR

# 1. Identify commits you want
git log feature/auth --oneline

# 2. Cherry-pick only those commits
git checkout main
git cherry-pick abc1234 ghi8901

# 3. Skip other commits
```

## Options

### Cherry-Pick with Edit

```bash
# Edit commit before applying
git cherry-pick --edit abc1234

# Opens editor with commit
# Modify commit message or content
# Continue when ready
```

### Cherry-Pick Without Commit

```bash
# Apply changes but don't commit
git cherry-pick --no-commit abc1234

# Make additional changes
git add .

# Commit manually
git commit -m "Custom message"
```

## Best Practices

### When to Use Cherry-Pick

✅ **DO:**
- Use for porting specific fixes/features
- Use when you want selective merging
- Use for backporting fixes to older branches
- Verify cherry-picked changes work

❌ **DON'T:**
- Cherry-pick large ranges (> 10 commits)
- Cherry-pick without understanding context
- Cherry-pick unrelated commits
- Skip testing after cherry-picking

### Cherry-Picking Best Practices

1. **Identify commits carefully** - Verify you understand each commit
2. **Test after cherry-pick** - Ensure changes work correctly
3. **Handle conflicts properly** - Don't leave in broken state
4. **Commit message clarity** - Note it's a cherry-pick
5. **Limit cherry-pick range** - Fewer commits is better

## Common Patterns

### Backporting Bug Fixes

```bash
# Scenario: Bug fixed in main, needs backport to release-1.x

# 1. Find fix commit in main
git log main --oneline --grep "fix auth timeout"

# Output:
abc9876 Fix authentication timeout

# 2. Backport to release branch
git checkout release-1.x
git cherry-pick abc9876

# 3. Push to release
git push origin release-1.x
```

### Undoing Commits

```bash
# Scenario: Need to revert specific commit but keep others

# 1. Identify commit to revert
git log main --oneline

# Output:
def5678 Add breaking change

# 2. Revert that specific commit
git revert def5678

# Result: New revert commit without removing other commits
```

### Moving Commits Between Branches

```bash
# Scenario: Commit in wrong branch

# 1. Find commit hash
git log wrong-branch --oneline

# 2. Cherry-pick to correct branch
git checkout correct-branch
git cherry-pick abc1234

# 3. Delete from wrong branch (if needed)
git checkout wrong-branch
git reset HEAD~1
```

## Conflict Resolution

### During Cherry-Pick

```bash
# Cherry-pick stops at conflict:
ERROR: could not apply abc1234...hint: conflicts

# Steps:
# 1. Resolve conflicts in files
# 2. Stage resolved files: git add .
# 3. Continue cherry-pick: git cherry-pick --continue

# If you want to abort:
git cherry-pick --abort

# If you want to skip this commit:
git cherry-pick --skip
```

## Related Commands

- **[/ak_cm_branch](../git/branch.md)** - Create branches
- **[/ak_cm_merge](../git/merge.md)** - Merge branches
- **[/ak_cm_rebase](../git/rebase.md)** - Rebase branches

## Related Skills

- **[Git Workflow](../../skills/git/git-workflow.md)** - Complete git workflow
- **[Systematic Debugging](../../skills/debugging/systematic-debugging.md)** - Debug conflicts
