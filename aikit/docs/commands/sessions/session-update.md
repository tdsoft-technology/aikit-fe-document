---
sidebar_position: 3
---

# /session-update Command

Add timestamped progress notes to the current session.

## Usage

```bash
# Add a progress note
/session-update "Implemented JWT token generation"

# Add multiple notes
/session-update "Fixed authentication bug"
/session-update "Added error handling"
```

## Notes Format

Each note is timestamped and appended to the session file:

```markdown
## Progress

### 1/2/2026, 3:45:00 PM

Implemented JWT token generation

**Git Branch:** feature/auth
**Modified Files:** 3 files

---

### 1/2/2026, 4:15:00 PM

"Fix authentication bugs" completed

**Git Branch:** feature/auth
**Modified Files:** 2 files

---

# Summary

## Next Steps

- [ ] Implement password reset
- [ ] Add two-factor authentication
- [ ] Improve error handling
```

## Examples

### Feature Development

```bash
# Document progress as you work
/session-update "Created User model interface"

# Test the implementation
/test Run tests

# Document test results
/session-update "Tests passing, 3/15 passing"

# Continue with next task
/implement Add export functionality
```

### Bug Tracking

```bash
# Document bug investigation
/session-update "Investigated login timeout issue"

# Found root cause
/session-update "Database query missing index"

# Implemented fix
/implement Add index to query

# Verified fix
/test Verify fix works

# Close bug
/session-update "Bug resolved, tests passing"
```

### Research Sessions

```bash
# Document research findings
/session-update "Researched JWT patterns"

# Found 5 approaches
/session-update "Selected approach #3 (refresh tokens)"

# Continue with implementation
/implement Implement JWT with refresh tokens
```

## Best Practices

### Note Content

✅ **DO:**
- Be specific about what was done
- Include relevant details (file changes, commits)
- Note blockers or issues
- Reference related files or issues

❌ **DON'T:**
- Write vague updates (e.g., "Did some work")
- List activities without outcomes
- Document time spent without work done
- Copy-paste large amounts of code

### Frequency

✅ **DO:**
- Update after significant progress
- Add notes after each completed sub-task
- Document blockers when encountered
- Note achievements and milestones

❌ **DON'T:**
- Update too frequently (every few minutes)
- Add trivial updates
- Spam with many small notes
- Update without progress

### Multi-Developer Sessions

If working in a team:

```bash
# User A updates session
/session-update "User A: Refactored auth controller"

# Later, User B updates session
/session-update "User B: Added validation"
```

## Related Commands

- **[/session-start](session-start.md)** - Start a session
- **[/session-end](session-end.md)** - End a session
- **[/session-list](session-list.md)** - List all sessions
- [/session-show](session-show.md)** - Show session details
- [/session-current](session-current.md)** - Show current session
