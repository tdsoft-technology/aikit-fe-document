---
sidebar_position: 3
---

# Quick Start

Get started with AIKit in 5 minutes.

<MaterialIcon name="lightbulb" className="icon-info" /> **All commands use `/` prefix, skills use `/` prefix**

## 1. Create Your First Task

Create a new task using Beads:

```bash
/create Add user authentication
```

This creates a task in `.beads/` with status "in-progress".

## 2. Plan Your Work

Create a detailed implementation plan:

```bash
/plan user authentication system
```

AIKit will:
1. Ask clarifying questions about requirements
2. Research existing patterns in your codebase
3. Break down into 2-5 minute sub-tasks
4. Save plan to `memory/plans/`

## 3. Implement with TDD

Use a skill to enforce best practices:

```bash
/test-driven-development
/implement
```

The AI will:
1. **RED**: Write failing tests
2. **GREEN**: Write minimal code to pass tests
3. **REFACTOR**: Clean up code while keeping tests green

## 4. Complete with Quality Gates

Finish the task with mandatory quality checks:

```bash
/finish
```

AIKit runs these hard gates (all must pass):

1. <MaterialIcon name="check_circle" className="icon-success" />`npm run typecheck` - No type errors
2. <MaterialIcon name="check_circle" className="icon-success" />`npm run test` - All tests pass
3. <MaterialIcon name="check_circle" className="icon-success" />`npm run lint` - No linting errors
4. <MaterialIcon name="check_circle" className="icon-success" />`npm run build` - Build succeeds

If any gate fails, AIKit reports the issue and stops.

## 5. Track Your Session

Start a development session to track your work:

```bash
/session-start "user-auth"
```

Add progress notes as you work:

```bash
/session-update "Implemented login form"
/session-update "Added JWT authentication"
```

## 6. Handoff for Next Session

Save your progress:

```bash
/handoff
```

This creates a handoff bundle in `memory/handoffs/[timestamp].md` with:
- Completed work
- In-progress work
- Remaining tasks
- Context for next session

## 7. End Session

End the session with a summary:

```bash
/session-end
```

AIKit generates a comprehensive summary with:
- Session duration
- Goals completed
- Git activity (commits, modified files)
- All progress notes

## 8. Resume Later

Continue where you left off:

```bash
/resume
```

AIKit loads the latest handoff and continues your work.

## Example Workflow

```bash
# Session 1
/session-start "user-login"
/create Implement user login
/plan login feature
/test-driven-development
/implement
/session-update "Added login form"
/finish
/session-end

# Session 2
/session-start "user-registration"
/resume
/session-update "Implementing registration"
# Continue with next task...
```

## Using Skills

Find and use skills:

```bash
# Find skills
> find_skills("test")

# Use a skill via direct invocation
/test-driven-development

# Or via tool
> use_skill("test-driven-development")
> Implement authentication
```

## Using Agents

Let AIKit choose the right agent:

```bash
> Implement user authentication
# Uses @build agent

> Plan authentication system
# Uses @planner agent

> Research JWT patterns
# Uses @scout agent
```

Or specify explicitly:

```bash
@planner Design authentication system
@build Implement the plan
@review Check the code
```

## Using Commands

List all commands:

```bash
aikit commands list
```

Or use `/help` in Claude Code or OpenCode:

```bash
/help
/help /plan
```

## Common Workflows

### Feature Development

```bash
/create Add new feature
/plan feature
/implement
/finish
```

### Bug Fix

```bash
/fix bug description
# or
/systematic-debugging
```

### Code Review

```bash
/review-codebase
# or
/code-review
> Review this PR
```

### Multi-Session

```bash
# Session 1
/create Complex feature
/plan feature
/implement
/handoff

# Session 2
/resume
/implement
/finish
```

## Next Steps

- **[Features](features)** - Learn about all features
- **[Session Management](sessions/intro)** - Track your development work
- **[Skills Guide](skills/intro)** - Explore 42 built-in skills organized in 9 categories
- **[Agents Guide](agents/intro)** - Understand 8 specialized agents
- **[Commands Reference](commands/intro)** - All 42+ slash commands
- **[Tools](tools/intro)** - Built-in tools
