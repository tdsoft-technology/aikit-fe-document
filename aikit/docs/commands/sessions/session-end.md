---
sidebar_position: 4
---

# /ak_cm_session:end Command

End the current session and generate a comprehensive summary of all work completed.

## Usage

```bash
# End the session
/ak_cm_session:end

# Session will end with summary of:
#   - Goals completed
#   - Progress notes
#   - Git activity
#   - Total duration
#   - Files modified

# Optionally add final note
/ak_cm_session:end "All tests passing, ready for review"
```

## Workflow

### 1. Capture Final State

AIKit captures:
- Final goals completion status
- All progress notes
- Final git state
- Timestamps
- Duration calculation

### 2. Update Session Status

Marks session file with:
- `status: "ended"`
- `endTime`: Timestamp when session ended

### 3. Generate Summary

Creates a comprehensive summary section including:
- Goals achieved
- Work completed
- Git commits made
- Files modified
- Progress notes summary

### 4. Handoff Preparation

If you have ongoing work, creates a handoff bundle for the next session.

## Session File Output

```markdown
---
id: "20260102-1430-auth-refactor"
name: "Authentication Refactor"
startTime: "2026-01-02T14:30:00Z"
endTime: "2026-01-02T17:00:00Z"
status: "ended"
duration: "2h 30m"
goals:
  - [x] Refactor OAuth 2.0 flow
  - [x] Add JWT support
  - [x] "Fix authentication bugs"
gitBranch: "feature/auth"
commits: 5
filesModified: 12
---

# Development Session

**Started:** 1/2/2026, 2:30:00 PM
**Status:** Ended
## Goals
- [x] Refactor OAuth 2.0 flow
- [x] Add JWT support
- [x] "Fix authentication bugs"

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

## Git Activity

**Captured information:**
- Branch: feature/auth
- Commits: 5 (throughout session)
- Modified files: 12 total
- Commit messages:
  - feat(auth): Refactor OAuth 2.0 flow
  - feat(auth): Add JWT token generation
  - fix(auth): Fix login timeout issue
  - fix(auth): Add token validation

## Progress Notes Summary

All progress notes added via /ak_cm_session:update throughout the session are compiled into this summary.

## Best Practices

### Ending Sessions

✅ **DO:**
- End when goals are complete
- End when blocked and documented
- End with final summary
- Review goals completion status
- Ensure session file is updated correctly

❌ **DON'T:**
- End without completing any goals
- Leave session in "active" state
- End without final summary
- End without documenting remaining work
- End while blocked without resolution

### Session Duration

✅ **DO:**
- Review session length
- Plan for next steps
- Consider if session achieved value
- Identify patterns for efficiency

❌ **DON'T:**
- End prematurely
- End without achieving goals
- End without documenting
- Continue when exhausted (take a break instead)

## Handoff Preparation

If you have ongoing work, the summary will include:

**In-Progress Work:**
- Tasks not completed
- Blockers encountered
- Questions for next session
- Partial implementations

**Context for Next Session:**
- Current git state
- Branch and commit information
- Files modified and their state
- Notes on decisions made

## Related Commands

- **[/ak_cm_session:start](session-start.md)** - Start a session
- **[/ak_cm_session:update](session-update.md)** - Add progress notes
- [/ak_cm_session:list](session-list.md)** - List all sessions
- [/ak_cm_session:current](session-current.md)** - Show current session
- [/ak_cm_session:show](session-show.md)** - Show session details
- **[/ak_cm_handoff](../core/handoff.md)** - Create handoff for next session
- [/ak_cm_resume](../core/resume.md)** - Resume from handoff
