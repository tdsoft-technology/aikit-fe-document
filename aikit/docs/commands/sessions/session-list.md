---
sidebar_position: 5
---

# /ak_cm_session:list Command

List all development sessions with filtering and search capabilities.

## Usage

```bash
# List all sessions
/ak_cm_session:list

# List last 10 sessions
/ak_cm_session:list --limit 10

# List active sessions
/ak_cm_session:list --status active

# List completed sessions
/ak_cm_session:list --status completed

# List sessions by date range
/ak_cm_session:list --start "2026-01-01" --end "2026-01-31"

# Search sessions
/ak_cm_session:list --search authentication
/ak_cm_session:list --search "user auth"
```

## Arguments

| Argument | Type | Required | Description | Default |
|---------|------|----------|-------------|
| `--status` | string | No | Filter by status (todo, in-progress, completed, blocked, cancelled) | All |
| `--limit` | number | No | Limit number of results | All |
| `--start` | string | No | Filter by start date (YYYY-MM-DD) | All |
| `--end` | string | No | Filter by end date (YYYY-MM-DD) | All |
| `--search` | string | No | Search by name, goals, or notes | All |

## Output Format

```bash
/ak_cm_session:list

# Output:
ID: 20260102-1430-auth-refactor
Name: Authentication Refactor
Status: completed
Start: 1/2/2026, 2:30:00 PM
Duration: 2h 30m
Branch: feature/auth
Commits: 5
Goals: 3/3 completed
----------------------------------------
ID: 20260103-1000-user-profiles
Name: User Profiles Feature
Status: in-progress
Start: 1/3/2026, 10:00:00 AM
Duration: 4h 15m (ongoing)
Branch: feature/users
Commits: 8
Goals: 2/5 completed
----------------------------------------
...
```

## Session States

| Status | Description | Typical Duration |
|--------|-------------|------------------|
| `active` | Currently in progress | 2-4 hours |
| `ended` | Completed | 1-4 hours typical |
| `blocked` | Blocked on dependency | Variable |
| `cancelled` | Cancelled | N/A |

## Filtering Examples

### By Status

```bash
# List only completed sessions
/ak_cm_session:list --status completed

# List active sessions
/ak_cm_session:list --status active

# List blocked sessions
/ak_cm_session:list --status blocked
```

### By Date Range

```bash
# List sessions from January 2026
/ak_cm_session:list --start "2026-01-01" --end "2026-01-31"

# List last week
/ak_cm_session:list --start "2026-01-27" --end "2026-02-02"
```

### By Search

```bash
# Search for authentication sessions
/ak_cm_session:list --search authentication

# Search for specific goal
/ak_cm_session:list --search "JWT tokens"
```

## Best Practices

### Session Management

✅ **DO:**
- Use descriptive session names
- Set clear, achievable goals
- Add progress notes regularly
- End sessions when goals complete
- Review session history regularly

❌ **DON'T:**
- Create overlapping sessions (same time period, similar work)
- Leave sessions in active state indefinitely
- Skip ending sessions with summary
- Create sessions without clear purpose

### Session Tracking

✅ **DO:**
- Use sessions for different features/tasks
- Track related work in one session
- Create separate sessions for unrelated work
- Document session dependencies

❌ **DON'T:**
- Mix unrelated work in one session
- Create monolithic sessions
- Lose track of what was done in each session
- Don't document handoffs properly

## Related Commands

- **[/ak_cm_session:start](session-start.md)** - Start a new session
- **[/ak_cm_session:update](session-update.md)** - Add progress notes
- **[/ak_cm_session:end](session-end.md)** - End a session
- **[/ak_cm_session:current](session-current.md)** - Show current session details
- [/ak_cm_session:show](session-show.md)** - Show session details
- [/ak_cm_session:search](session-search.md)** - Search sessions
