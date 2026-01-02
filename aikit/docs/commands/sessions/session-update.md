---
sidebar_position: 3
---

# /ak_cm_session:update Command

Add timestamped progress notes to the current session.

## Usage

```bash
# Add a progress note
/ak_cm_session:update "Implemented JWT token generation"

# Add multiple notes
/ak_cm_session:update "Fixed authentication bug"
/ak_cm_session:update "Added error handling"
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
/ak_cm_session:update "Created User model interface"

# Test the implementation
/ak_cm_test Run tests

# Document test results
/ak_cm_session:update "Tests passing, 3/15 passing"

# Continue with next task
/ak_cm_implement Add export functionality
```

### Bug Tracking

```bash
# Document bug investigation
/ak_cm_session:update "Investigated login timeout issue"

# Found root cause
/ak_cm_session:update "Database query missing index"

# Implemented fix
/ak_cm_implement Add index to query

# Verified fix
/ak_cm_test Verify fix works

# Close bug
/ak_cm_session:update "Bug resolved, tests passing"
```

### Research Sessions

```bash
# Document research findings
/ak_cm_session:update "Researched JWT patterns"

# Found 5 approaches
/ak_cm_session:update "Selected approach #3 (refresh tokens)"

# Continue with implementation
/ak_cm_implement Implement JWT with refresh tokens
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
/ak_cm_session:update "User A: Refactored auth controller"

# Later, User B updates session
/ak_cm_session:update "User B: Added validation"
```

## Related Commands

- **[/ak_cm_session:start](session-start.md)** - Start a session
- **[/ak_cm_session:end](session-end.md)** - End a session
- **[/ak_cm_session:list](session-list.md)** - List all sessions
- [/ak_cm_session:show](session-show.md)** - Show session details
- [/ak_cm_session:current](session-current.md)** - Show current session
