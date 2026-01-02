---
sidebar_position: 1
---

# Session Commands

## Overview

Session commands in AIKit allow you to manage development sessions, track work across multiple coding sessions, and maintain continuity between sessions.

## How to Use

```bash
# List all session commands
/ak_cm_list

# Show help
/ak_cm_help sessions
```

## Available Commands

| Command | Description |
|---------|-------------|
| /ak_cm_session:start | Start a new development session |
| /ak_cm_session:update | Add progress notes to current session |
| /ak_cm_session:end | End current session with summary |
| /ak_cm_session:list | List all sessions |
| /ak_cm_session:current | Show current session details |
| /ak_cm_session:show | Show details of a specific session |
| /ak_cm_session:search | Search for sessions |

## CLI vs AI Chat

**CLI Commands:**
```bash
aikit session start "auth-refactor" -g "Add JWT support"
aikit session update "Fixed authentication bug"
aikit session end
```

**AI Chat Commands:**
```bash
/ak_cm_session:start "user-auth"
/ak_cm_session:update "Added login form"
/ak_cm_session:end
```

## Session Structure

Sessions are stored as markdown files in `.aikit/sessions/` with this structure:

```markdown
---
id: "20260102-1430-auth-refactor"
name: "Authentication Refactor"
startTime: "2026-01-02T14:30:00Z"
endTime: "2026-01-02T17:00:00Z"
status: "ended"
duration: "2h 30m"
goals:
  - Refactor OAuth 2.0 flow
  - Add JWT support
  - "Fix authentication bugs"
branch: "feature/auth"
gitBranches: ["main"]
commits: 5
filesModified: 12
---

# Development Session

**Started:** 1/2/2026, 2:30:00 PM
**Status:** Ended
## Goals
- [x] Refactor OAuth 2.0 flow
- [x] Add JWT support
- [ ] "Fix authentication bugs"

## Progress

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

**Duration:** 2h 30m
**Git Commits:** 5
**Files Modified:** 12
**Goals Completed:** 3/3

## Next Steps

- [ ] Implement password reset
- [ ] Add two-factor authentication
- [ ] Improve error handling
```

## Benefits

1. **Continuity:** Pick up exactly where you left off
2. **Tracking:** All work is documented
3. **Context:** Handoffs preserve important context
4. **Searchable:** Find past sessions quickly
5. **Organization:** Time-stamped, searchable sessions

## Next Steps

- **[/ak_cm_session:start](session-start.md)** - Start a new session
- **[/ak_cm_session:update](session-update.md)** - Update current session
- **[/ak_cm_session:end](session-end.md)** - End a session
- **[/ak_cm_session:list](session-list.md)** - List all sessions
- **[/ak_cm_session:current](session-current.md)** - Show current session
- **[/ak_cm_session:show](session-show.md)** - Show session details
- **[/ak_cm_session:search](session-search.md)** - Search sessions

## Related Commands

- **[/ak_cm_handoff](../core/handoff.md)** - Create session handoff
- **[/ak_cm_resume](../core/resume.md)** - Resume from handoff

## Related Documentation

- **[Session Management](../sessions/intro.md)** - Session system overview
- **[Beads Workflow](../../beads/workflow.md)** - Task tracking across sessions
