---
sidebar_position: 1
---

# Commands

Commands are **shortcuts for common workflows** in OpenCode. They provide consistent, structured ways to execute tasks.

<MaterialIcon name="lightbulb" className="icon-info" /> **All commands now use the `/ak_cm_` prefix** (e.g., `/ak_cm_create`)

## How to Use Commands

### In OpenCode

Type commands directly in your prompt:

```bash
/ak_cm_create Add user authentication
/ak_cm_plan authentication system
/ak_cm_implement
/ak_cm_finish
```

### CLI

List all commands:

```bash
aikit commands list
```

## Command Categories

### Core Workflow

Main workflow commands for task tracking and completion:

- **[/ak_cm_create](core/create)** - Create new task
- **[/ak_cm_plan](core/plan)** - Create implementation plan
- **[/ak_cm_implement](core/implement)** - Implement with TDD
- **[/ak_cm_finish](core/finish)** - Complete with quality gates
- **[/ak_cm_handoff](core/handoff)** - Create session handoff
- **[/ak_cm_resume](core/resume)** - Resume from handoff

### Quick Actions

Fast actions for common tasks:

- **[/ak_cm_fix](quick/fix)** - Quick fixes
- **[/ak_cm_fix-types](quick/fix-types)** - Fix TypeScript errors
- **[/ak_cm_fix-ci](quick/fix-ci)** - Fix CI failures
- **[/ak_cm_commit](quick/commit)** - Create conventional commits
- **[/ak_cm_pr](quick/pr)** - Create pull request
- **[/ak_cm_refactor](quick/refactor)** - Refactor code
- **[/ak_cm_test](quick/test)** - Run tests
- **[/ak_cm_lint](quick/lint)** - Run linter

### Research & Design

Research and design tasks:

- **[/ak_cm_research](research/research)** - Deep research
- **[/ak_cm_analyze-project](research/analyze-project)** - Analyze project
- **[/ak_cm_review-codebase](research/review-codebase)** - Review codebase
- **[/ak_cm_design](research/design)** - Design features
- **[/ak_cm_brainstorm](research/brainstorm)** - Brainstorm ideas
- **[/ak_cm_analyze-figma](research/analyze-figma)** - Analyze Figma designs

### Git

Git operations:

- **[/ak_cm_branch](git/branch)** - Create feature branch
- **[/ak_cm_merge](git/merge)** - Merge branch

## Common Workflows

### Feature Development

```bash
/ak_cm_create Add user authentication
/ak_cm_plan authentication system
/ak_cm_implement
/ak_cm_finish
/ak_cm_commit
/ak_cm_pr
```

### Bug Fixing

```bash
/ak_cm_fix Authentication fails on invalid credentials
# or
/ak_sk_systematic-debugging
> Debug authentication issue
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

## Help

Get help for any command:

```bash
/help
/help ak_cm_plan
/help ak_cm_implement
```

## Next Steps

- **[Core Workflow](core)** - Core workflow commands
- **[Skills](../skills/intro)** - Learn about skills (using `/ak_sk_` prefix)
- **[Agents](../agents/intro)** - Learn about agents
