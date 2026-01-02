---
sidebar_position: 6
---

# /ak_cm_session:current Command

Display details of the currently active session.

## Usage

```bash
# Show current session
/ak_cm_session:current
```

## Output

Shows information about the active session including:
- Session ID and name
- Start time
- Duration so far
- Goals and their status
- Progress notes (chronological)
- Git state
- Files modified
- Branch name

## Examples

```bash
# Example output
Session ID: 20260102-1430-auth-refactor
Name: Authentication Refactor
Status: active
Started: 1/2/2026, 2:30:00 PM
Duration: 2h 15m (ongoing)
Branch: feature/auth
Goals: 3/3
--------------------------------------
  [ ] Refactor OAuth 2.0 flow
  [ ] Add JWT support
  [ ] "Fix authentication bugs"

Progress Notes:
- 1/2/2026, 3:45 PM: Implemented OAuth flow
- 2/2/2026, 4:15 PM: Added JWT generation
 3/2/2026, 5:30 PM: "Fixing bugs" in progress

Git State:
Branch: feature/auth
Commits: 4 (2 so far)
Files Modified: 9 files
```

## Session Information

The session file contains:

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
```

## Real-Time Updates

As you add progress notes with `/ak_cm_session:update`, the session file is updated immediately.

## Best Practices

### Monitoring Active Sessions

✅ **DO:**
- Check current session status regularly
- Update progress frequently for active sessions
- Review goals completion status
- Monitor git activity

❌ **DON'T:**
- Forget about current session
- Work on multiple sessions simultaneously
- Let sessions run indefinitely
- Ignore session goals

### Session Switching

If you need to switch to a different session:

1. End current session: `/ak_cm_session:end`
2. Resume desired session: `/ak_cm_session:show <id>`
3. Or start new session: `/ak_cm_session:start`

## Related Commands

- **[/ak_cm_session:start](session-start.md)** - Start a new session
- **[/ak_cm_session:update](session-update.md)** - Add progress notes
- [/ak_cm_session:end](session-end.md)** - End a session
- [/ak_cm_session:list](session-list.md)** - List all sessions
- [/ak_cm_session:show](session-show.md)** - Show session details
