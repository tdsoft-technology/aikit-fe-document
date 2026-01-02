---
sidebar_position: 3
---

# Rush Agent

## Overview

**@rush** is a fast execution agent designed for quick fixes, hotfixes, and simple edits that require minimal planning.

## When to Use

Use @rush when:
- Quick fixes and hotfixes
- Simple refactoring
- Minor code changes
- Typo fixes
- Urgent production issues
- Simple edits that need minimal planning

## Capabilities

- Quick bug fixes
- Simple refactoring
- Minor changes
- Hotfixes
- Typo fixes

## Use Cases

### Quick Bug Fix
```bash
@rush Fix login button not clickable
# @rush will:
# 1. Quickly investigate the issue
# 2. Make minimal fix
# 3. Do quick sanity check
# 4. Move on (no extensive testing)
```

### Hotfix
```bash
@rush Hotfix production authentication issue
# @rush will:
# 1. Make urgent fix quickly
# 2. Minimal testing
# 3. Immediate deployment
# 4. Follow up with proper testing later
```

### Simple Refactor
```bash
@rush Extract duplicate code to helper function
# @rush will:
# 1. Identify duplicate code
# 2. Extract to helper
# 3. Update call sites
# 4. Quick verification
```

### Typo Fix
```bash
@rush Fix typo in error message
# @rush will:
# 1. Find the typo
# 2. Fix it
# 3. Verify the fix
# 4. Move on
```

## Principles

### Speed First

✅ **DO:**
- Act fast with minimal planning
- Focus on one change at a time
- Make targeted fixes
- Quick verification only

❌ **DON'T:**
- Over-plan or over-think
- Make large, complex changes
- Wait for perfect solution
- Add unnecessary features

### Minimal Scope

✅ **DO:**
- Fix only the specific issue
- Don't expand scope beyond what's needed
- Keep changes small and focused
- Make minimal impact changes

❌ **DON'T:**
- Fix related issues at the same time
- Refactor unrelated code
- Add new features
- Make architectural changes

### Quick Verification

✅ **DO:**
- Quick sanity check after change
- Verify fix works for the specific case
- Move on quickly after verification

❌ **DON'T:**
- Extensive testing
- Full regression testing
- Multiple verification cycles
- Edge case testing

## Workflow

### 1. Understand the Quick Fix

- What exactly needs fixing?
- Is this urgent?
- What's the minimal fix needed?

### 2. Quick Investigation

- Look at the code briefly
- Understand the immediate cause
- Don't over-investigate

### 3. Make the Fix

- Apply minimal change to fix the issue
- Don't over-engineer
- Keep it simple and direct

### 4. Quick Verification

- Test that the fix works
- Verify no immediate regressions
- Quick check of related functionality

### 5. Move On

- Don't linger on the fix
- Document briefly if needed
- Move to next task quickly

## Best Practices

### When to Use @rush

✅ **Good for:**
- Typos and spelling errors
- Simple UI bugs (alignment, spacing)
- Small CSS issues
- Hotfixes for production
- Quick configuration changes
- Minor documentation updates

❌ **Not for:**
- Complex features requiring planning
- Architectural changes
- Database schema changes
- New functionality
- Security fixes (use @review instead)

### How to Use Effectively

```bash
# Be specific
@rush Fix the typo on line 42

# Not vague
@rush Fix some issues in the code

# Focus on one thing
@rush Fix login and also refactor the auth module

# Move on after fix
@rush Fix the login issue
# (Then create follow-up task for refactoring)
```

## Anti-Patterns

❌ **DON'T:**
- Use @rush for complex features requiring planning
- Make multiple changes in one rush
- Skip verification entirely
- Leave known issues unfixed
- Create technical debt without noting it
- Fix symptoms instead of root cause

## Related Agents

- **[@build](build.md)** - For regular, planned implementations
- **[@review](review)** - For code review and quality checks
- **[@planner](planner.md)** - For complex tasks requiring planning

## Related Skills

- **[Systematic Debugging](../skills/debugging/systematic-debugging.md)** - For quick debugging
- **[Refactoring](../skills/development/refactoring.md)** - Code restructuring

## Related Commands

- **[/ak_cm_fix](../commands/quick/fix.md)** - Quick fixes
- **[/ak_cm_fix-types](../commands/quick/fix-types.md)** - Fix TypeScript errors
- **[/ak_cm_fix-ci](../commands/quick/fix-ci.md)** - Fix CI failures

## Example Workflows

### Quick Typo Fix
```bash
@rush Fix typo in error message

# @rush will:
# 1. Find the typo quickly
# 2. Fix it
# 3. Quick check that the message makes sense
# 4. Done - move on
```

### Simple Bug Fix
```bash
@rush Fix button click handler

# @rush will:
# 1. Look at the button component
# 2. Identify the issue (wrong handler)
# 3. Fix the handler
# 4. Quick test that clicking works
# 5. Move on
```

### Hotfix
```bash
# Urgent: Production authentication failing

@rush Hotfix authentication middleware

# @rush will:
# 1. Quickly identify the issue
# 2. Apply minimal fix
# 3. Quick sanity check
# 4. Ready for deployment
# 5. Note: Follow up with @build for proper testing
```

## Verification

Before marking work complete:
- [ ] Quick fix applied
- [ ] Issue is resolved
- [ ] Quick sanity check passed
- [ ] No immediate regressions
- [ ] Note any follow-up needed (create task)
