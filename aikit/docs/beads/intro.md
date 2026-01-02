---
sidebar_position: 1
---

# Beads Task Tracking

Beads is a **git-based task tracking system** integrated with AIKit for managing development work with quality gates and workflow enforcement.

## What is Beads?

**Beads (bd)** is a command-line tool that tracks development tasks as files in a `.beads/` directory. Each task is a markdown file with:
- Task metadata (title, description, type)
- Status tracking (todo, in-progress, completed, blocked)
- Git integration (syncs with git commits)
- Quality gates enforcement
- Custom fields and metadata

<MaterialIcon name="info" className="icon-info" /> **Why Beads?**
- **Git-based**: All tasks are tracked in version control
- **No external services**: No need for Jira, Trello, GitHub Projects
- **Simple**: Tasks are just markdown files
- **Flexible**: Customize with frontmatter and metadata
- **AIKit Integrated**: Quality gates, status tracking, command hooks

## Getting Started

### Install Beads

Beads is typically installed with AIKit:

```bash
# Via npm
npm install -g @tdsoft-tech/aikit

# Verify installation
bd --version
```

### Initialize Beads

Initialize Beads in your project:

```bash
cd your-project
bd init
```

This creates:
- `.beads/` - Task directory
- `.beads/.gitignore` - Git ignore pattern (optional)
- `beads.md` - Project-level configuration

## Task Structure

Each task is a markdown file in `.beads/` directory:

```markdown
---
id: "001"
title: "Add user authentication"
status: "in-progress"
type: "feature"
priority: "high"
created: "2026-01-02T14:30:00Z"
updated: "2026-01-02T15:45:00Z"
assignee: "developer"
labels: ["authentication", "security", "jwt"]
---

# Add user authentication

## Description

Implement OAuth 2.0 authentication flow with JWT tokens for user login and session management.

## Requirements

- [x] User can log in with email/password
- [x] Session is managed via JWT tokens
- [ ] Refresh token mechanism
- [ ] Token validation middleware
- [ ] Logout functionality

## Implementation Notes

- Use `jsonwebtoken` library for JWT
- Store refresh tokens in httpOnly cookies
- Token expiration: 1 hour (access), 7 days (refresh)

## Quality Gates

- [x] Typecheck passes
- [x] All tests pass
- [x] Linting passes
- [x] Build succeeds

## Verification

- [ ] Manual testing completed
- [ ] Code review passed
- [ ] Security audit completed

## References

- [OAuth 2.0 specification](https://oauth.net/2/)
- [JWT best practices](https://tools.ietf.org/html/rfc8725)
```

## Task Types

| Type | Description | Use Case |
|------|-------------|-----------|
| `feature` | New feature implementation | Adding new functionality |
| `bug` | Bug fix | Fixing reported issues |
| `pattern` | Code pattern or best practice | Documenting architectural decisions |
| `decision` | Technical decision | Recording architectural choices |
| `knowledge` | Knowledge base entry | Documenting learnings |
| `refactor` | Code refactoring | Improving existing code |
| `test` | Test improvement | Adding or improving tests |
| `docs` | Documentation | Writing or updating docs |

## Task Status

| Status | Description | Action |
|--------|-------------|---------|
| `todo` | Not started | Ready to work on |
| `in-progress` | Currently working | Active task |
| `completed` | Finished | Quality gates passed |
| `blocked` | Waiting on something | Depends on other task |
| `cancelled` | Won't be done | Task cancelled |

## Beads Commands

### Initialize

```bash
bd init
```

Initialize Beads in current directory.

### Create Task

```bash
bd create "Add user authentication"
```

Creates new task file: `.beads/001-add-user-authentication.md`

**Options:**
```bash
bd create "Task title" \
  --description "Detailed description" \
  --type feature \
  --priority high \
  --assignee developer
```

### List Tasks

```bash
bd list
```

List all tasks with status.

**Output:**
```
001 Add user authentication          [in-progress] feature    high
002 Fix login bug                   [todo]        bug        medium
003 Implement refresh token          [blocked]      feature    high
```

**Filter by status:**
```bash
bd list --status in-progress
bd list --status todo
bd list --status blocked
```

**Filter by type:**
```bash
bd list --type feature
bd list --type bug
```

**Filter by priority:**
```bash
bd list --priority high
bd list --priority medium
```

### Show Task Details

```bash
bd show 001
```

Display full task details.

**Or show by title:**
```bash
bd show "user authentication"
```

### Update Task Status

```bash
bd update 001 --status in-progress
```

Update task status.

**Available statuses:**
```bash
bd update 001 --status todo
bd update 001 --status in-progress
bd update 001 --status completed
bd update 001 --status blocked
bd update 001 --status cancelled
```

### Update Task Type

```bash
bd update 001 --type feature
```

Update task type.

### Update Task Priority

```bash
bd update 001 --priority high
```

Update task priority.

**Available priorities:**
```bash
bd update 001 --priority critical
bd update 001 --priority high
bd update 001 --priority medium
bd update 001 --priority low
```

### Complete Task

```bash
bd complete 001
```

Mark task as completed after running quality gates.

**Quality gates run:**
1. `npm run typecheck` - No type errors
2. `npm run test` - All tests pass
3. `npm run lint` - No linting errors
4. `npm run build` - Build succeeds

<MaterialIcon name="check_circle" className="icon-success" /> If all gates pass, task is marked `completed`.

<MaterialIcon name="cancel" className="icon-error" /> If any gate fails, task remains in current state and reports which gate failed.

### Delete Task

```bash
bd delete 001
```

Delete a task file.

<MaterialIcon name="warning" className="icon-warning" /> **Warning:** This cannot be undone.

### Sync with Git

```bash
bd sync
```

Synchronize tasks with git:

1. Stages all `.beads/` changes
2. Creates commit: "Update task tracking"
3. Pushes to remote

### Interactive Commands

**Ready:** Find available work
```bash
bd ready
```

Lists tasks ready to work on (todo, unblocked).

**Onboard:** Initialize new project
```bash
bd onboard
```

Guided setup for new projects.

## AIKit Integration

### AIKit Commands

AIKit provides Beads commands via slash commands:

```bash
/ak_cm_create Add user authentication
# Same as: bd create "Add user authentication"

/ak_cm_show 001
# Same as: bd show 001

/ak_cm_list --status in-progress
# Same as: bd list --status in-progress

/ak_cm_update 001 --status completed
# Same as: bd update 001 --status completed

/ak_cm_complete 001
# Same as: bd complete 001
```

### MCP Tools

When using AIKit via MCP, Beads tools are available:

```bash
# Create task
> bead_create("Add user authentication", "Implement OAuth 2.0")

# Update status
> bead_update_status("001", "in-progress")

# Complete with quality gates
> bead_complete("001")

# List tasks
> bead_list()
> bead_list({status: "in-progress"})
```

### Quality Gates

AIKit automatically runs quality gates when completing tasks via `/ak_cm_complete` or `/ak_cm_finish`:

```bash
/ak_cm_create Add user authentication
/ak_cm_implement
# ... implementation ...
/ak_cm_finish
# Runs quality gates:
#   ✓ npm run typecheck
#   ✓ npm run test
#   ✓ npm run lint
#   ✓ npm run build
# Task marked as completed
```

## Task Metadata

### Custom Frontmatter

Add custom fields to task frontmatter:

```markdown
---
id: "001"
title: "Add user authentication"
status: "in-progress"
type: "feature"
priority: "high"

# Custom fields
complexity: "medium"
estimated: "4h"
storyPoints: 5
related: ["002", "003"]
tags: ["authentication", "security", "jwt"]
parent: "000"
---

# Task content
```

### Required Fields

| Field | Type | Required | Description |
|--------|------|-----------|-------------|
| `id` | string | Yes | Unique task identifier (auto-generated) |
| `title` | string | Yes | Task title |
| `status` | string | Yes | Task status |
| `type` | string | Yes | Task type |
| `created` | date | Yes | Creation timestamp (auto-generated) |
| `updated` | date | Yes | Last update timestamp (auto-generated) |

### Optional Fields

| Field | Type | Default | Description |
|--------|------|---------|-------------|
| `priority` | string | `medium` | Task priority |
| `description` | string | Title | Detailed description |
| `assignee` | string | None | Who is working on this |
| `labels` | array | `[]` | Task labels/tags |
| `estimated` | string | None | Time estimate |
| `complexity` | string | None | Task complexity |
| `storyPoints` | number | None | Story points |
| `related` | array | `[]` | Related task IDs |
| `parent` | string | None | Parent task ID |

## Workflow Examples

### Feature Development

```bash
# 1. Create task
/ak_cm_create Add user authentication

# 2. Plan implementation
/ak_cm_plan user authentication system

# 3. Implement with TDD
/ak_sk_test-driven-development
/ak_cm_implement

# 4. Update progress
/ak_cm_update 001 --status in-progress

# 5. Complete with quality gates
/ak_cm_finish
```

### Bug Fix

```bash
# 1. Create bug task
bd create "Fix login timeout bug" --type bug --priority critical

# 2. Debug with skill
/ak_sk_systematic-debugging

# 3. Implement fix
/ak_cm_implement

# 4. Verify fix
npm run test

# 5. Complete
bd complete 001
```

### Refactoring

```bash
# 1. Create refactor task
bd create "Refactor auth middleware" --type refactor --priority medium

# 2. Use refactoring skill
/ak_sk_refactoring

# 3. Implement changes
/ak_cm_implement

# 4. Ensure tests pass
npm run test

# 5. Complete
bd complete 002
```

### Pattern Documentation

```bash
# 1. Create pattern task
bd create "JWT authentication pattern" --type pattern --priority low

# 2. Document pattern
# Edit .beads/003-jwt-authentication-pattern.md
# Add pattern details, examples, best practices

# 3. Complete (no quality gates)
bd complete 003
```

## Task Dependencies

### Parent-Child Relationships

Create hierarchical tasks:

```bash
# Parent task
bd create "Implement user authentication"

# Child tasks
bd create "Implement login form" --parent "001"
bd create "Implement JWT middleware" --parent "001"
bd create "Implement refresh token" --parent "001"
```

### Related Tasks

Link related tasks:

```bash
# Create related tasks
bd create "Implement password reset" --related ["001"]
bd create "Implement 2FA" --related ["001", "002"]
```

### Blocked Tasks

When a task depends on another:

```bash
# Task 002 is blocked by 001
bd update 002 --status blocked
# Add note: Waiting for task 001 to complete

# When 001 completes
bd complete 001
# Unblocks 002
bd update 002 --status in-progress
```

## Quality Gates

### Default Quality Gates

AIKit runs these gates when completing tasks:

| Gate | Command | Purpose |
|-------|----------|---------|
| Typecheck | `npm run typecheck` | No TypeScript errors |
| Test | `npm run test` | All tests pass |
| Lint | `npm run lint` | No linting errors |
| Build | `npm run build` | Build succeeds |

### Custom Quality Gates

Configure custom quality gates in `.aikit/aikit.json`:

```json
{
  "beads": {
    "qualityGates": [
      {
        "name": "typecheck",
        "command": "npm run typecheck",
        "required": true
      },
      {
        "name": "test",
        "command": "npm run test",
        "required": true
      },
      {
        "name": "e2e",
        "command": "npm run test:e2e",
        "required": false
      }
    ]
  }
}
```

### Skipping Quality Gates

For documentation or pattern tasks:

```bash
bd complete 003 --skip-gates
```

<MaterialIcon name="warning" className="icon-warning" /> **Warning:** Only skip for non-code tasks.

## Git Integration

### Automatic Syncing

AIKit automatically syncs with git when:

- Task is created
- Task status changes
- Task is completed
- Task is deleted

### Manual Syncing

```bash
bd sync
```

Manually commit task changes.

### Git Hooks

Add git hooks for task tracking:

**Pre-commit hook:**
```bash
# .git/hooks/pre-commit
#!/bin/bash
# Check if task is in-progress before committing
bd list --status in-progress
if [ $? -eq 0 ]; then
  echo "Warning: Committing with task in-progress"
fi
```

## Best Practices

### Task Creation

✅ **DO:**
- Write clear, descriptive titles
- Include detailed requirements
- Set appropriate type and priority
- Break large tasks into smaller ones
- Add labels for filtering

❌ **DON'T:**
- Create vague tasks ("fix stuff")
- Mix multiple features in one task
- Skip type or priority
- Create tasks larger than 4 hours

### Task Updates

✅ **DO:**
- Update status regularly
- Add progress notes
- Link related tasks
- Mark blockers early

❌ **DON'T:**
- Leave tasks in limbo
- Skip quality gates for code tasks
- Forget to update after work

### Task Completion

✅ **DO:**
- Run all quality gates
- Verify implementation
- Update related tasks
- Document learnings

❌ **DON'T:**
- Skip gates to save time
- Complete without testing
- Leave related tasks blocked

## Troubleshooting

### "Task not found"

```bash
bd show 999
# Error: Task '999' does not exist

# List available tasks
bd list

# Use correct ID or title
bd show 001
```

### "Quality gate failed"

```bash
bd complete 001
# Error: Quality gate failed - npm run test

# Check test failures
npm run test

# Fix issues
# ... implementation ...

# Retry completion
bd complete 001
```

### "Git sync failed"

```bash
bd sync
# Error: Nothing to commit or no changes added

# Check git status
git status

# Staging files if needed
git add .beads/

# Try again
bd sync
```

## Next Steps

- **[Beads Workflow](workflow)** - Complete workflow with diagram
- **[Features](../features)** - All AIKit features
- **[MCP Server](../mcp-server/intro)** - OpenCode integration
- **[Commands Reference](../commands/intro)** - AIKit commands

## Related Links

- [Beads Repository](https://github.com/tdsoft-tech/beads)
- [AIKit GitHub Repository](https://github.com/tdsoft-tech/aikit)
