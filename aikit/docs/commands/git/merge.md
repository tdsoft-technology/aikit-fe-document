---
sidebar_position: 2
---

# /ak_cm_merge Command

Merge branches into main branch using appropriate merge strategy.

## Usage

```bash
# Merge feature branch
/ak_cm_merge feat/new-feature

# Merge bug fix
/ak_cm_merge fix/authentication-bug

# Merge with specific strategy
/ak_cm_merge feat/new-feature --strategy squash
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|-----------|-------------|
| `<branch>` | string | No | - | Branch name to merge |
| `--strategy` | string | No | `merge` | Merge strategy: merge, squash, rebase |
| `--no-ff` | flag | No | false | Force merge commit (no fast-forward) |

## Merge Strategies

### Merge (Default)

```bash
# Standard merge
/ak_cm_merge feat/new-feature

# Creates merge commit if not fast-forward
git checkout main
git merge feat/new-feature
```

**When to use:**
- Default for most merges
- Preserves complete git history
- Good for feature branches

### Squash Merge

```bash
# Squash all commits into one
/ak_cm_merge feat/new-feature --strategy squash

# Example:
git checkout main
git merge --squash feat/new-feature
```

**When to use:**
- Feature with many small commits
- Want clean history
- Feature is self-contained unit

### Rebase Before Merge

```bash
# Rebase then merge
/ak_cm_merge feat/new-feature --strategy rebase

# Example:
git checkout feat/new-feature
git rebase main
git checkout main
git merge feat/new-feature
```

**When to use:**
- Want linear history
- Feature branch has diverged
- Many commits to clean up

## Workflow

### 1. Prepare Main Branch

```bash
# Switch to main
git checkout main

# Update from remote
git pull origin main

# Verify clean state
git status
```

### 2. Merge Feature Branch

```bash
# Merge branch
git merge feat/new-feature

# Check for conflicts
git status
```

### 3. Resolve Conflicts (if any)

```bash
# If conflicts:
# 1. Edit files with conflicts
# 2. Resolve conflicts
# 3. Stage resolved files
git add .

# 4. Continue merge
git commit -m "Merge branch 'feat/new-feature'"
```

### 4. Delete Feature Branch

```bash
# Delete local branch
git branch -d feat/new-feature

# Delete remote branch (if pushed)
git push origin --delete feat/new-feature
```

## Conflict Resolution

### Conflict Markers

```bash
# Git adds conflict markers:
<<<<<<< HEAD
# Main branch code
=======
# Branch code
>>>>>>> feat/new-feature
```

### Resolving

```markdown
1. Review both versions
2. Choose correct code or combine
3. Remove conflict markers (<<<<<<<, =======, >>>>>>>)
4. Stage file: git add <file>
5. Continue: git commit
```

### Example

```typescript
// Conflict:
<<<<<<< HEAD
function authenticate(email: string, password: string): Promise<User> {
  const user = await User.findByEmail(email);
  if (!user) throw new Error('User not found');
  return user.verifyPassword(password);
}
=======
function authenticate(email: string): Promise<User> {
  const user = await User.findByEmail(email);
  return user;
}
>>>>>>> feat/new-feature

// Resolution (combine):
function authenticate(email: string, password: string): Promise<User> {
  const user = await User.findByEmail(email);
  if (!user) throw new Error('User not found');
  return user.verifyPassword(password);
}
```

## Best Practices

### Choosing Merge Strategy

✅ **DO:**
- Use `merge` for preserving history
- Use `squash` for clean feature history
- Use `--no-ff` for always creating merge commit
- Ask team about merge strategy conventions

❌ **DON'T:**
- Always force merge (`--force`)
- Merge without testing
- Ignore conflicts (leaving broken state)
- Skip reviewing merge commits

### Pre-Merge Checklist

Before merging, verify:

```bash
# Code quality
npm run typecheck  # TypeScript
npm run lint          # Code style
npm run test          # Tests
npm run build         # Production build

# Branch status
git log main..feat/new-feature --oneline  # See what you're merging
git diff main...feat/new-feature          # See exact changes
```

### Post-Merge Checklist

After merging, verify:

```bash
# Tests still pass
npm run test

# No regressions
npm run build  # Check build works
```

## Examples

### Feature Merge

```bash
# Merge feature
/ak_cm_merge feat/user-profiles

# Merge commits feature branch with 15 commits into one
/ak_cm_merge feat/user-profiles --strategy squash
```

### Bug Fix Merge

```bash
# Merge bug fix
/ak_cm_merge fix/login-timeout

# Merge without fast-forward (keeps history clean)
/ak_cm_merge fix/login-timeout --no-ff
```

### Hotfix Merge

```bash
# Merge hotfix (urgent)
/ak_cm_merge hotfix/security-vulnerability --no-ff

# Tag after merge
git tag v1.0.2-hotfix
git push origin main --tags
```

## Related Commands

- **[/ak_cm_branch](../git/branch.md)** - Create branches
- **[/ak_cm_rebase](../git/rebase.md)** - Rebase branches
- **[/ak_cm_cherry-pick](../git/cherry-pick.md)** - Cherry-pick commits

## Related Skills

- **[Git Workflow](../../skills/git/git-workflow.md)** - Complete git workflow
- **[Test Driven Development](../../skills/testing/test-driven-development.md)** - Testing before merge
