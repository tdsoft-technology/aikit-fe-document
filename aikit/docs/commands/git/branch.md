---
sidebar_position: 1
---

# /ak_cm_branch Command

Create a new git branch following AIKit naming conventions.

## Usage

```bash
# Create a feature branch
/ak_cm_branch feat/new-feature

# Create a bug fix branch
/ak_cm_branch fix/authentication-bug

# Create a refactor branch
/ak_cm_branch refactor/user-service
```

## Arguments

| Argument | Type | Required | Description |
|---------|------|----------|-------------|
| `<name>` | string | No | Branch name with type prefix |

## Branch Naming Conventions

```bash
# Feature branches
feat/<feature-name>
feat/user-authentication
feat/product-list-page

# Bug fix branches
fix/<bug-description>
fix/login-timeout
fix/api-response-error

# Refactor branches
refactor/<what-why>
refactor/extract-auth-service
refactor/cleanup-auth-middleware

# Documentation branches
docs/<what-changed>
docs/update-api-guide
docs/add-readme

# Test branches
test/<what-testing>
test/add-user-tests
test/test-api-integration

# Hotfix branches (urgent production fixes)
hotfix/<critical-issue>
hotfix/security-vulnerability

# Chore branches
chore/<what-task>
chore/update-dependencies
chore/cleanup-imports
```

## Workflow

### 1. Ensure Clean State

```bash
# Check current status
git status

# Stash or commit changes
git stash  # If you want to save work
# or
git add . && git commit -m "WIP: save work"
```

### 2. Update Main Branch

```bash
# Switch to main
git checkout main

# Pull latest changes
git pull origin main

# Verify you're up to date
git status
```

### 3. Create New Branch

```bash
# Create branch and switch
git checkout -b feat/new-feature

# Verify new branch
git branch
# Shows: * feat/new-feature
```

## Examples

### Feature Development

```bash
# Start new feature
/ak_cm_branch feat/user-profiles

# Work on feature
# ... commit changes ...

# Merge back to main
# (See: /ak_cm_merge)
```

### Bug Fix

```bash
# Fix a bug
/ak_cm_branch fix/authentication-timeout

# Implement fix
# ... implement fix ...

# Test and merge
git checkout main
git merge fix/authentication-timeout
```

### Refactoring

```bash
# Refactor code
/ak_cm_branch refactor/extract-auth-service

# Restructure while keeping tests green
# ... make changes ...

# Merge refactor
git checkout main
git merge refactor/extract-auth-service
```

### Hotfix (Production Issue)

```bash
# Urgent production fix
/ak_cm_branch hotfix/security-vulnerability

# Fix immediately
# ... implement fix ...

# Merge quickly
git checkout main
git merge --no-ff hotfix/security-vulnerability
# Tag and push
git tag v1.0.1-hotfix
git push origin main --tags
```

## Best Practices

### Branch Names

✅ **DO:**
- Use descriptive names
- Follow type prefix conventions
- Keep names short (< 50 characters)
- Use kebab-case (hyphens not underscores)
- Be specific about what the branch does

❌ **DON'T:**
- Use generic names (e.g., "branch-1", "wip")
- Skip type prefix
- Use uppercase or spaces
- Create branches without purpose

### Branch Lifecycle

✅ **DO:**
- Keep branches short-lived (< 2-3 days)
- Merge frequently to reduce conflicts
- Delete branches after merging
- Don't let branches linger

❌ **DON'T:**
- Let branches sit for days/weeks
- Create long-lived feature branches
- Keep merged branches around
- Let branches diverge heavily from main

### Branch Management

```bash
# List branches
git branch -a

# Delete local branch
git branch -d feat/old-feature

# Delete remote branch
git push origin --delete feat/old-feature

# Track remote branches
git fetch origin
git branch -r
```

## Related Commands

- **[/ak_cm_merge](../git/merge.md)** - Merge branches
- **[/ak_cm_rebase](../git/rebase.md)** - Rebase branches
- **[/ak_cm_cherry-pick](../git/cherry-pick.md)** - Cherry-pick commits
- **[/ak_cm_stash](../git/stash.md)** - Stash changes

## Related Skills

- **[Git Workflow](../../skills/git/git-workflow.md)** - Complete git workflow guide
- **[Documentation](../../skills/documentation/documentation.md)** - Documenting decisions

## Related Documentation

- **[Git Workflow](../../git/git-workflow.md)** - Git best practices
- **[Commands Reference](../introl.md)** - All commands overview
