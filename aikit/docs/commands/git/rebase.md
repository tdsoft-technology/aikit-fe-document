---
sidebar_position: 3
---

# /ak_cm_rebase Command

Rebase current branch onto another branch to rewrite history or integrate changes.

## Usage

```bash
# Rebase current branch onto main
/ak_cm_rebase main

# Rebase with interactive mode
/ak_cm_rebase main --interactive

# Rebase specific number of commits
/ak_cm_rebase HEAD~5
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|-----------|-------------|
| `<upstream>` | string | No | - | Branch to rebase onto |
| `--interactive` | flag | No | false | Interactive rebase mode |
| `--onto` | string | No | - | New base for commits |

## Rebase Types

### Simple Rebase

```bash
# Rebase current branch onto main
/ak_cm_rebase main

# Example:
git checkout feature-branch
git rebase main

# Result: All commits on feature-branch are replayed on top of main
```

**When to use:**
- Feature branch has diverged from main
- Want linear history
- Main has moved forward

### Interactive Rebase

```bash
# Interactive rebase (edit, squash, drop, reword)
/ak_cm_rebase main --interactive

# Opens editor with each commit:
pick abc1234 Implement feature
pick def5678 Fix bug
pick ghi8901 Add tests
```

**Commands available:**
- `pick` - Use commit as-is
- `reword` - Edit commit message
- `edit` - Edit commit content
- `squash` - Merge with previous commit
- `drop` - Remove commit

**When to use:**
- Clean up messy commit history
- Combine related commits
- Fix typos in commit messages
- Remove WIP commits

### Rebase Onto

```bash
# Rebase commits onto different branch
/ak_cm_rebase upstream-branch --onto new-base

# Example:
git rebase upstream-branch --onto new-base
```

**When to use:**
- Transplant commits to new base
- Rebase branch structure
- Different branch organization

## Workflow

### Simple Rebase

```bash
# 1. Update local main
git checkout main
git pull origin main

# 2. Switch back to feature branch
git checkout feature-branch

# 3. Rebase
git rebase main

# 4. Handle conflicts (if any)
# Resolve conflicts as they appear
git add .
git rebase --continue

# 5. Push (force rebase)
git push origin feature-branch --force
```

### Interactive Rebase

```bash
# 1. Start interactive rebase
git rebase main --interactive

# 2. Edit commands in editor
# Change 'pick' to 'squash' for related commits
# Change 'pick' to 'drop' for WIP commits

# 3. Save and continue
# Git processes rebase

# 4. If stopped for conflict:
# Resolve conflict
git add .
git rebase --continue

# 5. Force push after rebase
git push origin feature-branch --force
```

## Conflict Resolution

### During Rebase

```bash
# Rebase stops at conflict
# Resolve conflict:
# 1. Edit conflicting file
# 2. Resolve conflict markers
# 3. Stage file: git add .
# 4. Continue: git rebase --continue

# If you want to abort:
git rebase --abort

# If you want to skip this commit:
git rebase --skip
```

### Example

```bash
# Rebase stops with conflict in user-auth.ts

# File shows:
<<<<<<< HEAD
function login(email: string, password: string): Promise<User> {
  const user = await User.findByEmail(email);
  return user.login(password);
}
=======
function login(email: string, password: string): Promise<User> {
  const user = await User.findByEmail(email);
  const session = await Session.create(user);
  return session;
}
>>>>>>> feature-auth

# Resolve:
function login(email: string, password: string): Promise<User> {
  const user = await User.findByEmail(email);
  const session = await Session.create(user);
  return session;
}
```

## Best Practices

### When to Rebase

✅ **DO:**
- Rebase local branches only (not shared)
- Use interactive rebase to clean up history
- Rebase small changes frequently
- Test after rebase before pushing

❌ **DON'T:**
- Rebase pushed/shared branches (without coordination)
- Rebase large histories (100+ commits)
- Skip testing after rebase
- Leave rebase in mid-conflict

### Interactive Rebase

✅ **DO:**
- Squash related commits
- Drop WIP/debug commits
- Reword unclear commit messages
- Keep commits logically organized

❌ **DON'T:**
- Squash unrelated commits
- Drop important commits
- Make rebase too complex
- Skip reviewing all commits

### Rebase Safety

```bash
# Before rebasing:
git rebase main --dry-run  # See what will happen

# If rebase goes wrong:
git rebase --abort        # Abort and return to before state
git reflog expire --expire=now  # Clean up reflog

# Force push carefully:
git push origin feature-branch --force-with-lease
```

## Common Scenarios

### Clean Up Feature Branch

```bash
# Feature branch has 10 WIP commits
git rebase main --interactive

# Edit to squash related work:
pick abc123 Initial implementation
squash def5678 Add error handling
squash ghi8901 Add tests
squash jkl0123 Fix bug

# Result: One clean commit instead of 4
```

### Fix Commit Messages

```bash
# Fix typos in commit messages
git rebase main --interactive

# Reword typos:
reword abc1234 Impelment feature
reword def5678 Fix bug in auth

# Result: Correct commit messages
```

### Remove Private/Sensitive Data

```bash
# Accidentally committed API key
git rebase -i main

# Drop the commit with sensitive data
drop xyz789 Add API key

# Result: API key removed from history
```

## Related Commands

- **[/ak_cm_branch](../git/branch.md)** - Create branches
- **[/ak_cm_merge](../git/merge.md)** - Merge branches
- **[/ak_cm_cherry-pick](../git/cherry-pick.md)** - Cherry-pick commits

## Related Skills

- **[Git Workflow](../../skills/git/git-workflow.md)** - Complete git workflow
- **[Systematic Debugging](../../skills/debugging/systematic-debugging.md)** - Fix issues during rebase
