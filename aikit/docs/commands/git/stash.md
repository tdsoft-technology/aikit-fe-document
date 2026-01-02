---
sidebar_position: 5
---

# /ak_cm_stash Command

Stash away work temporarily to work on something else or switch branches.

## Usage

```bash
# Stash current work
/ak_cm_stash

# Stash with message
/ak_cm_stash save "Work in progress on authentication"

# Stash with custom name
/ak_cm_stash save auth-feature

# List stashes
/ak_cm_stash list

# Apply stash
/ak_cm_stash apply
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|-----------|-------------|
| `save` | string | No | - | Save stash with message |
| `list` | flag | No | - | List all stashes |
| `apply` | string | No | - | Apply specific stash |
| `pop` | string | No | - | Apply and remove stash |
| `drop` | string | No | - | Remove stash |
| `show` | string | No | - | Show stash contents |

## Workflow

### Stashing Work

```bash
# Save current work
git stash push -m "Work on authentication feature"

# Creates stash entry:
stash@{0}: WIP on authentication feature

# Files are cleaned (reverted to HEAD)
```

### Listing Stashes

```bash
# List all stashes
git stash list

# Output:
stash@{0}: On main: auth feature
stash@{1}: On feature/users: user profile model
stash@{2}: On main: experimental change
```

### Applying Stash

```bash
# Apply specific stash
git stash apply stash@{1}

# Apply most recent stash and remove it
git stash pop

# Apply from stash stack
git stash apply
# Stash remains, can be applied again
```

### Viewing Stash

```bash
# Show stash contents
git stash show

# Show specific stash
git stash show stash@{1}

# Show stash as diff
git stash show -p stash@{1}
```

### Dropping Stash

```bash
# Remove stash
git stash drop stash@{1}

# Drop most recent stash
git stash drop

# Clear all stashes
git stash clear
```

## Use Cases

### Switch Branches with WIP

```bash
# Scenario: Working on feature, need to check out bug fix

# 1. Stash current work
git stash push -m "WIP: user authentication"

# 2. Switch to bug fix branch
git checkout fix/auth-bug

# 3. Fix bug...

# 4. Return to feature branch
git checkout feature/auth

# 5. Apply stash
git stash pop

# Result: Your WIP is restored exactly as you left it
```

### Trying Experimental Changes

```bash
# Scenario: Want to experiment but keep safe point

# 1. Stash current work
git stash push -m "Working version"

# 2. Make experimental changes
# ... experimental code ...

# 3. Test experimental changes
npm run test

# 4. If not working, revert:
git stash pop

# Result: Back to working version, experimental changes discarded
```

### Saving Multiple Stashes

```bash
# Scenario: Working on multiple features

# 1. Save work on feature A
git stash push -m "Feature A: user auth"

# 2. Switch to feature B
git checkout feature/profiles

# 3. Work on feature B...

# 4. Save work on feature B
git stash push -m "Feature B: user profiles"

# 5. Apply specific stash later
git checkout feature/auth
git stash apply stash@{0}
```

### Clean Working Directory

```bash
# Scenario: Files changed, want clean state quickly

# 1. Stash all changes
git stash push -u -m "Clean up needed"

# 2. Do other work...

# 3. Restore later
git stash pop
```

## Stash Options

### Include Untracked Files

```bash
# Stash including new files
git stash push -u -m "Include new files"

# Use when you want to save untracked files too
```

### Keep Index Staged

```bash
# Keep staged files, only stash unstaged
git stash push -k -m "Staged files remain"

# Use when you have staged changes but want to save unstaged work
```

### Patch Mode (Select Files)

```bash
# Interactive: choose which files to stash
git stash push -p -m "Selective stash"

# Use when you only want to stash some files
```

## Best Practices

### Stashing

✅ **DO:**
- Always add descriptive messages
- Use stashes for temporary work
- Keep stash count low (< 5)
- Drop old stashes regularly
- Name stashes by feature/context

❌ **DON'T:**
- Stash indefinitely (stash pileup)
- Forget what's in stashes
- Stash large amounts of code
- Use vague stash messages
- Leave stashes in wrong branch

### Stash Organization

```bash
# Organize stashes by feature:
git stash push -m "auth: login form"
git stash push -m "auth: JWT tokens"
git stash push -m "auth: validation"

# Apply by feature:
git stash apply stash@{0}  # auth: login form
git stash apply stash@{1}  # auth: JWT tokens
```

## Common Patterns

### Save Point Before Dangerous Operation

```bash
# 1. Create save point
git stash push -m "Before refactor"

# 2. Perform dangerous operation (refactor)
# ... refactoring code ...

# 3. If goes wrong, restore:
git stash pop
```

### Quick Context Switch

```bash
# 1. Stash current context
git stash push -m "Context: user authentication"

# 2. Switch to investigate something else
git checkout main

# 3. When done, restore context
git checkout feature/auth
git stash pop
```

### Merge Conflict Resolution

```bash
# Scenario: Merge has conflicts, need to test different resolution

# 1. Stash current (conflicted) state
git stash push -m "Merge conflict - attempt 1"

# 2. Try different resolution approach
# ... resolve conflicts differently ...

# 3. If still doesn't work, reset:
git reset --hard HEAD

# 4. Restore stash to try again
git stash pop
```

## Related Commands

- **[/ak_cm_branch](../git/branch.md)** - Create branches
- **[/ak_cm_merge](../git/merge.md)** - Merge branches
- **[/ak_cm_rebase](../git/rebase.md)** - Rebase branches
- **[/ak_cm_cherry-pick](../git/cherry-pick.md)** - Cherry-pick commits

## Related Skills

- **[Git Workflow](../../skills/git/git-workflow.md)** - Complete git workflow
- **[Systematic Debugging](../../skills/debugging/systematic-debugging.md)** - Debug conflicts
