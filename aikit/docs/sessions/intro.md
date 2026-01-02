# Session Management

AIKit's Session Management System helps you track development work across multiple coding sessions with Claude. It automatically captures git state, links to Beads tasks, and generates comprehensive summaries.

## Features

- ✅ **Track Development Work** - Maintain continuity across sessions
- ✅ **Automatic Git Tracking** - Capture branch, commits, and modified files
- ✅ **Beads Integration** - Link sessions to active tasks
- ✅ **Progress Notes** - Add timestamped updates
- ✅ **Session Search** - Find past work quickly
- ✅ **Beautiful Summaries** - Auto-generated session reports

## Quick Start

### Starting a Session

**Via CLI:**
```bash
aikit session start "auth-refactor"
aikit session start "oauth-work" -g "Add Google OAuth" "Add JWT tokens"
```

**Via AI Chat:**
```
/session:start "feature-name"
/session:start "Implement OAuth 2.0"
```

### Updating Progress

**Via CLI:**
```bash
aikit session update "Fixed authentication bug"
aikit session update
```

**Via AI Chat:**
```
/session:update Added OAuth callback handler
/session:update
```

### Ending a Session

**Via CLI:**
```bash
aikit session end
```

**Via AI Chat:**
```
/session:end
```

## Session Files

Sessions are stored as markdown files in `.aikit/sessions/` with frontmatter metadata:

### File Structure

```markdown
---
id: "20260102-1430-auth-refactor"
name: "Authentication Refactor"
startTime: "2026-01-02T14:30:00Z"
endTime: "2026-01-02T17:00:00Z"
status: "ended"
goals:
  - "Refactor OAuth flow"
  - "Add JWT support"
---

# Development Session - Authentication Refactor

**Started:** 1/2/2026, 2:30:00 PM
**Status:** Ended
**Ended:** 1/2/2026, 5:00:00 PM

## Goals
- [ ] Refactor OAuth flow
- [ ] Add JWT support

## Progress

### 1/2/2026, 2:30:00 PM
Started session: Authentication Refactor
**Git Branch:** feature/auth

### 1/2/2026, 3:45:00 PM
Implemented OAuth 2.0 flow with Google provider
**Git Branch:** feature/auth
**Modified Files:** 5 files

## Summary
**Duration:** 2h 30m
**Goals:** 2 defined
**Updates:** 2 progress notes
**Git Commits:** 3
**Files Modified:** 7
```

## All Commands

### CLI Commands

| Command | Description | Example |
|---------|-------------|---------|
| `aikit session start [name]` | Start new session | `aikit session start "auth"` |
| `aikit session start [name] -g <goals...>` | Start with goals | `aikit session start api -g "Add REST"` |
| `aikit session update [notes]` | Add progress notes | `aikit session update "Fixed bug"` |
| `aikit session end` | End session | `aikit session end` |
| `aikit session current` | Show active session | `aikit session current` |
| `aikit session list` | List all sessions | `aikit session list` |
| `aikit session show <id>` | Show session details | `aikit session show 20260102` |
| `aikit session search <query>` | Search sessions | `aikit session search oauth` |

### AI Chat Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/session:start [name]` | Start new session | `/session:start auth-refactor` |
| `/session:update [notes]` | Add progress notes | `/session:update Fixed bug` |
| `/session:end` | End session | `/session:end` |
| `/session:current` | Show active session | `/session:current` |
| `/session:list` | List all sessions | `/session:list` |
| `/session:show <id>` | Show session details | `/session:show 20260102` |
| `/session:search <query>` | Search sessions | `/session:search oauth` |
| `/session:resume <id>` | Resume session | `/session:resume latest` |

## Workflows

### Feature Development

```bash
# Start session with goals
aikit session start "user-profile" -g \
  "Add user profile page" \
  "Implement profile editing" \
  "Add avatar upload"

# Work on feature...
aikit session update "Created profile page component"
aikit session update "Implemented profile editing form"

# Commit changes
git add .
git commit -m "Add user profile page"

# Continue...
aikit session update "Added avatar upload functionality"

# Finish
aikit session end
```

### Bug Fixing

```bash
# Start bug fix session
aikit session start "fix-login-bug"

# Investigate and fix...
aikit session update "Identified issue in token validation"
aikit session update "Fixed JWT verification logic"

# Test and commit
npm test
git add .
git commit -m "Fix login token validation"

# End session
aikit session end
```

### Session Review

```bash
# List recent sessions
aikit session list

# View specific session
aikit session show 20260102-1430

# Search for specific work
aikit session search oauth

# Resume previous context
aikit session show 20260102-1430-auth
```

## Integration

### With Beads Tasks

When a Beads task is active, sessions automatically link to it:

```bash
# Start Beads task
aikit beads create "Refactor authentication"

# Start session (auto-links to task)
aikit session start "auth-refactor"

# Session updates include:
# **Beads Task:** bead-001 (in-progress)
```

### With Git

Sessions automatically capture git state:

- **Current Branch** - Tracked with each update
- **Commit Count** - Number of commits
- **Modified Files** - List of changed files

Example:
```
### 1/2/2026, 3:45:00 PM
Implemented OAuth flow
**Git Branch:** feature/auth
**Modified Files:** 5 files
  - src/auth/oauth.ts
  - src/auth/jwt.ts
  - src/middleware/auth.ts
  - src/routes/auth.ts
  - src/types/auth.ts
```

## Best Practices

### 1. Use Descriptive Names

```bash
# Good
aikit session start "oauth-integration"
aikit session start "fix-login-timeout"
aikit session start "refactor-payment-flow"

# Less useful
aikit session start "work"
aikit session start "session1"
```

### 2. Define Clear Goals

```bash
aikit session start "user-auth" -g \
  "Add OAuth 2.0 providers" \
  "Implement JWT refresh tokens" \
  "Add session management" \
  "Write unit tests"
```

### 3. Update Regularly

```bash
# After completing each subtask
aikit session update "Added Google OAuth provider"
aikit session update "Implemented JWT refresh flow"
aikit session update "Added session middleware"
aikit session update "Wrote auth unit tests (90% coverage)"
```

### 4. Review Before Starting Work

```bash
# List recent sessions
aikit session list

# Review previous session
aikit session show 20260102-1430

# Search for relevant work
aikit session search oauth
```

## File Storage

### Directory Structure

```
.aikit/
└── sessions/
    ├── .current-session          # Active session tracker
    ├── 20260102-1430.md          # Session file
    ├── 20260102-1430-auth.md     # Named session
    └── 20260102-1500-bug-fix.md  # Another session
```

### File Naming Convention

Format: `YYYY-MM-DD-HHMM[-name].md`

Examples:
- `20260102-1430.md` - Unnamed session
- `20260102-1430-auth-refactor.md` - Named session

### Partial ID Matching

Use partial session IDs for convenience:

```bash
# Full ID: 20260102-1430-auth-refactor
aikit session show 20260102-1430  # Works

# Even shorter
aikit session show 2026010  # Works
```

## Session Summary

When ending a session, AIKit generates a comprehensive summary:

```
✓ Session ended

Session: 20260102-1430-auth-refactor
Name: Authentication Refactor
Duration: 2h 30m
Updates: 5

Goals:
  - Refactor OAuth flow
  - Add JWT support

Git Activity:
  Commits: 3
  Files Modified: 7
```

## Troubleshooting

### No Active Session

**Error:** `No active session. Use startSession() first.`

**Solution:** Start a session first:
```bash
aikit session start
```

### Session Not Found

**Error:** `Session not found: 20260102-1430`

**Solution:** Check available sessions:
```bash
aikit session list
```

Use partial ID matching:
```bash
aikit session show 2026010  # Partial match
```

### Git Commands Failing

If git integration doesn't work, verify:
1. You're in a git repository
2. Git is installed and accessible
3. You have permissions to read git state

Sessions still work without git, just without git tracking.

## What's Next?

- [Explore Skills](/docs/skills/intro)
- [Learn about Commands](/docs/commands/intro)
- [Check out Agents](/docs/agents/intro)
- [Advanced Configuration](/docs/advanced/configuration)
