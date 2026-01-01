---
sidebar_position: 3
---

# Quick Start

Get started with AIKit in 5 minutes.

<MaterialIcon name="lightbulb" className="icon-info" /> **All commands use `/ak_cm_` prefix, skills use `/ak_sk_` prefix**

## 1. Create Your First Task

Create a new task using Beads:

```bash
/ak_cm_create Add user authentication
```

This creates a task in `.beads/` with status "in-progress".

## 2. Plan Your Work

Create a detailed implementation plan:

```bash
/ak_cm_plan user authentication system
```

AIKit will:
1. Ask clarifying questions about requirements
2. Research existing patterns in your codebase
3. Break down into 2-5 minute sub-tasks
4. Save plan to `memory/plans/`

## 3. Implement with TDD

Use a skill to enforce best practices:

```bash
/ak_sk_test-driven-development
/ak_cm_implement
```

The AI will:
1. **RED**: Write failing tests
2. **GREEN**: Write minimal code to pass tests
3. **REFACTOR**: Clean up code while keeping tests green

## 4. Complete with Quality Gates

Finish the task with mandatory quality checks:

```bash
/ak_cm_finish
```

AIKit runs these hard gates (all must pass):

1. <MaterialIcon name="check_circle" className="icon-success" />`npm run typecheck` - No type errors
2. <MaterialIcon name="check_circle" className="icon-success" />`npm run test` - All tests pass
3. <MaterialIcon name="check_circle" className="icon-success" />`npm run lint` - No linting errors
4. <MaterialIcon name="check_circle" className="icon-success" />`npm run build` - Build succeeds

If any gate fails, AIKit reports the issue and stops.

## 5. Handoff for Next Session

Save your progress:

```bash
/ak_cm_handoff
```

This creates a handoff bundle in `memory/handoffs/[timestamp].md` with:
- Completed work
- In-progress work
- Remaining tasks
- Context for next session

## 6. Resume Later

Continue where you left off:

```bash
/ak_cm_resume
```

AIKit loads the latest handoff and continues your work.

## Example Workflow

```bash
# Session 1
/ak_cm_create Implement user login
/ak_cm_plan login feature
/ak_sk_test-driven-development
/ak_cm_implement
/ak_cm_finish
/ak_cm_handoff

# Session 2
/ak_cm_resume
# Continue with next task...
```

## Using Skills

Find and use skills:

```bash
# Find skills
> find_skills("test")

# Use a skill via direct invocation
/ak_sk_test-driven-development

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

Or use `/help` in OpenCode:

```bash
/help
/help ak_cm_plan
```

## Common Workflows

### Feature Development

```bash
/ak_cm_create Add new feature
/ak_cm_plan feature
/ak_cm_implement
/ak_cm_finish
```

### Bug Fix

```bash
/ak_cm_fix bug description
# or
/ak_sk_systematic-debugging
```

### Code Review

```bash
/ak_cm_review-codebase
# or
/ak_sk_code-review
> Review this PR
```

### Multi-Session

```bash
# Session 1
/ak_cm_create Complex feature
/ak_cm_plan feature
/ak_cm_implement
/ak_cm_handoff

# Session 2
/ak_cm_resume
/ak_cm_implement
/ak_cm_finish
```

## Next Steps

- **[Features](features)** - Learn about all features
- **[Skills Guide](skills/intro)** - Explore 22 built-in skills organized in 9 categories
- **[Agents Guide](agents/intro)** - Understand 8 specialized agents
- **[Commands Reference](commands/intro)** - All 28 slash commands
- **[Tools](tools/intro)** - Built-in tools
