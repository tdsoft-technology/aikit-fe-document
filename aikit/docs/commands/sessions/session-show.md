---
sidebar_position: 7
---

# /ak_cm_session:show Command

Display detailed information about a specific session by ID.

## Usage

```bash
# Show session by ID
/ak_cm_session:show 20260102-1430-auth-refactor

# Show session by name
/ak_cm_session:show "Authentication Refactor"

# Show most recent session
/ak_cm_session:show
```

## Arguments

| Argument | Type | Required | Description | Example |
|---------|------|----------|-------------|
| `<id>` | string | No | Session ID or name | "20260102-1430-auth-refactor" |
| `--name` | string | No | Session name | "Authentication Refactor" |

## Output

Shows complete session details including:
- Session metadata (ID, name, timestamps)
- All goals and completion status
- Chronological progress notes
- Git activity
- Files modified
- Session summary

## Examples

### By ID

```bash
# Show session by exact ID
/ak_cm_session:show 20260102-1430-auth-refactor

# Output:
ID: 20260102-1430-auth-refactor
Name: Authentication Refactor
Status: ended
Started: 1/2/2026, 2:30:00 PM
Ended: 1/2/2026, 5:00:00 PM
Duration: 2h 30m
Branch: feature/auth
Goals: 3/3 completed
```

### By Name

```bash
# Show session by name
/ak_cm_session:show "Authentication Refactor"

# Output:
ID: 20260102-1430-auth-refactor
Name: Authentication Refactor
... [same output as by ID]
```

### Most Recent

```bash
# Show most recent session
/ak_cm_session:show

# Output:
ID: 20260102-1430-auth-refactor
Name: Authentication Refactor
... [same output as above]
```

## Session Display

The command provides formatted output with:

```markdown
## Session Overview

**ID:** 20260102-1430-auth-refactor
**Name:** Authentication Refactor
**Status:** ended

**Time Information:**
- **Started:** 1/2/2026, 2:30:00 PM
- **Ended:** 1/2/2026, 5:00:00 PM
- **Duration:** 2h 30m

## Goals

| # | Goal | Status |
|---|-------|--------|
| 1 | Refactor OAuth 2.0 flow | ✅ Completed |
| 2 | Add JWT support | ✅ Completed |
| 3 | "Fix authentication bugs" | ✅ Completed |

## Git Activity

**Branch:** feature/auth
**Total Commits:** 5
**Files Modified:** 12

## Progress Notes

### 1/2/2026, 3:45:00 PM

Implemented OAuth 2.0 flow
**Git Branch:** feature/auth
**Modified Files:** 5 files

### 1/2/2026, 4:15:00 PM

Added JWT token generation
**Git Branch:** feature/auth
**Modified Files:** 3 files

### 1/2/2026, 5:30:00 PM

"Fix authentication bugs" completed
**Git Branch:** feature/auth
**Modified Files:** 2 files

## Summary

✅ All 3 goals completed successfully
✅ Session ended cleanly with handoff preparation
✅ Ready for code review and merge
```

## Best Practices

### Reviewing Past Sessions

✅ **DO:**
- Review session history regularly
- Learn from past sessions
- Identify patterns and improvements
- Document lessons learned
- Apply insights to future sessions

❌ **DON'T:**
- Ignore session history
- Repeat the same mistakes
- Forget to review past sessions
- Skip handoffs between sessions

## Related Commands

- **[/ak_cm_session:list](session-list.md)** - List all sessions
- **[/ak_cm_session:current](session-current.md)** - Show current session
- [/ak_cm_session:start](session-start.md)** - Start a new session
- [/ak_cm_session:end](session-end.md)** - End a session
- [/ak_cm_session:update](session-update.md)** - Add progress notes
