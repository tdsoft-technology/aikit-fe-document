---
sidebar_position: 2
---

# /ak_cm_session:start Command

Start a new development session to track your work with goals and progress notes.

## Usage

```bash
# Start a session with goals
/ak_cm_session:start "user-auth" -g "Add JWT support" "Fix authentication bugs"

# Start with name only
/ak_cm_session:start "auth-refactor"

# Start with optional tags
/ak_cm_session:start "feature-work" --tags auth,jwt
```

## Arguments

```bash
/ak_cm_session:start <name> [options]

Options:
  -g, --goals <goals>    - Session goals (multiple)
  --tags <tags>             - Session tags (comma-separated)
```

### Arguments

| Argument | Type | Required | Description | Example |
|---------|------|----------|-------------|
| `name` | string | No | Session name (auto-generated if not provided) | "user-auth" |
| `-g, --goals` | string[] | No | Session goals | "Add JWT", "Fix bugs" |
| `--tags` | string | No | Session tags | "auth", "urgent" |

## Workflow

### 1. Create Session File

AIKit creates a session file in `.aikit/sessions/` with:
- Auto-generated ID (timestamp)
- Session name or auto-generated name
- Goals list
- Timestamp
- Git state capture

### 2. Initialize Git Context

Captures:
- Current branch name
- Current commit hash
- List of modified files
- Number of commits

### 3. Ready for Work

Session is now active and ready for tracking:
```bash
Session started: user-auth
Goals:
  - Add JWT support
  - Fix authentication bugs

You can now:
- Add progress notes: /ak_cm_session:update "Implementing JWT"
- End session: /ak_cm_session:end
```

## Examples

### Feature Development

```bash
# Start session with multiple goals
/ak_cm_session:start "feature-dev" -g "Add user profiles" "Implement search" "Add export"

# Work on first goal
/ak_cm_session:update "Completed user profiles"

# Complete first goal
/ak_cm_session:update "Profiles implemented"

# Work on second goal
/ak_cm_session:update "Working on search"

# Complete when ready
/ak_cm_session:end
```

### Bug Fixing Session

```bash
# Start session for bug fix
/ak_cm_session:start "auth-bug-fix" -g "Fix login timeout"

# Fix the bug
/ak_cm_implement Fix authentication timeout issue

# Verify fix
/ak_cm_test Run authentication tests

# Add note
/ak_cm_session:update "Timeout fixed, tests passing"

# End session when done
/ak_cm_session:end
```

## Session File Structure

Created session file: `.aikit/sessions/[timestamp]-[name].md`

```markdown
---
id: "20260102-1430-auth-refactor"
name: "Authentication Refactor"
startTime: "2026-01-02T14:30:00Z"
status: "active"
goals:
  - Refactor OAuth 2.0 flow
  - Add JWT support
  - "Fix authentication bugs"
gitBranch: "feature/auth"
commits: 0
filesModified: 0
---

# Development Session

**Started:** 1/2/2026, 2:30:00 PM
**Status:** In Progress
## Goals
- [ ] Refactor OAuth 2.0 flow
- [ ] Add JWT support
- [ ] "Fix authentication bugs"

## Progress

[Session update notes added via /ak_cm_session:update]
```

## Best Practices

### Session Names

✅ **DO:**
- Use descriptive, memorable names
- Include feature or task focus
- Use kebab-case or snake_case
- Keep names under 50 characters

❌ **DON'T:**
- Use generic names (e.g., "work", "session-1")
- Use timestamps as names
- Use vague names (e.g., "stuff")

### Goals

✅ **DO:**
- Define clear, measurable goals
- Limit to 3-5 goals per session
- Make goals specific and actionable
- Order goals by priority

❌ **DON'T:**
- Create overly ambitious goals
- Mix goals of different scopes
- Leave goals open-ended
- Create vague or undefined goals

### Session Duration

✅ **DO:**
- Plan for 1-3 hour focused sessions
- Take breaks every 60-90 minutes
- End session when goals are complete or you're blocked
- Document context when pausing

❌ **DON'T:**
- Have marathon sessions (> 4 hours)
- Work without breaks (productivity drops)
- Continue when blocked or stuck
- Switch tasks too frequently without completing

## Related Commands

- **[/ak_cm_session:update](session-update.md)** - Add progress notes
- **[/ak_cm_session:end](session-end.md)** - Complete session with summary
- **[/ak_cm_session:list](session-list.md)** - List all sessions
- **[/ak_cm_session:current](session-current.md)** - Show current session details
