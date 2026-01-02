---
sidebar_position: 8
---

# /ak_cm_session:search Command

Search for sessions by name, goals, or progress notes.

## Usage

```bash
# Search by keyword
/ak_cm_session:search authentication

# Search by goals
/ak_cm_session:search "JWT tokens"

# Search by date
/ak_cm_session:search --start "2026-01-01" --end "2026-01-31"

# Combine filters
/ak_cm_session:search "auth" --start "2026-01-01" --status completed
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
/ak_cm_session:search "OAuth"

# Search for goal keywords
/ak_cm_session:search "user profile" "JWT" "authentication"

# Search by code pattern
/ak_cm_session:search "authentication" --status completed
```

### Boolean Logic

You can combine search terms with `AND` and `OR` logic (not directly supported yet, but you can search broadly then filter):

```bash
# Search broadly then filter results
/ak_cm_session:search "auth"
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

- **[/ak_cm_session:start](session-start.md)** - Start a new session
- **[/ak_cm_session:list](session-list.md)** - List all sessions
- [/ak_cm_session:current](session-current.md)** - Show current session
- [/ak_cm_session:show](session-show.md)** - Show session details
