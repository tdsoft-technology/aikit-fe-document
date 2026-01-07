---
sidebar_position: 8
---

# /session-search Command

Search for sessions by name, goals, or progress notes.

## Usage

```bash
# Search by keyword
/session-search authentication

# Search by goals
/session-search "JWT tokens"

# Search by date
/session-search --start "2026-01-01" --end "2026-01-31"

# Combine filters
/session-search "auth" --start "2026-01-01" --status completed
```

## Arguments

| Argument | Type | Required | Description | Default |
|---------|------|----------|-------------|
| `<query>` | string | No | Search term | All |
| `--status` | string | No | Filter by status | All |
| `--limit` | number | No | Limit results | All |
| `--start` | string | No | Filter by start date (YYYY-MM-DD) | All |
| `--end` | string | No | Filter by end date (YYYY-MM-DD) | All |

## Search Tips

### Effective Queries

```bash
# Search for specific topic
/session-search "OAuth"

# Search for goal keywords
/session-search "user profile" "JWT" "authentication"

# Search by code pattern
/session-search "authentication" --status completed
```

### Boolean Logic

You can combine search terms with `AND` and `OR` logic (not directly supported yet, but you can search broadly then filter):

```bash
# Search broadly then filter results
/session-search "auth"
# Filter by status from results
```

## Output Format

```bash
# Output:
ID: 20260102-1430-auth-refactor
Name: Authentication Refactor
Status: completed
Start: 1/2/2026, 2:30:00 PM
Duration: 2h 30m
Branch: feature/auth
Goals: 3/3 completed
Search matches: Yes
```

## Best Practices

### Session Organization

✅ **DO:**
- Use descriptive names
- Set clear goals
- Add progress notes regularly
- Use tags for categorization
- Search sessions by keywords for research

❌ **DON'T:**
- Use generic session names
- Leave goals undefined
- Create overlapping sessions
- Skip progress documentation
- Search sessions without clear purpose

## Related Commands

- **[/session-start](session-start.md)** - Start a new session
- **[/session-list](session-list.md)** - List all sessions
- [/session-current](session-current.md)** - Show current session
- [/session-show](session-show.md)** - Show session details
