---
sidebar_position: 1
---

# Commands

Commands are **shortcuts for common workflows** in OpenCode. They provide consistent, structured ways to execute tasks.

## How to Use Commands

### In OpenCode

Type commands directly in your prompt:

```bash
/create Add user authentication
/plan authentication system
/implement
/finish
```

### CLI

List all commands:

```bash
aikit commands list
```

## Command Categories

### Core Workflow

Main workflow commands for task tracking and completion:

- **[/create](core/create)** - Create new task
- **[/plan](core/plan)** - Create implementation plan
- **[/implement](core/implement)** - Implement with TDD
- **[/finish](core/finish)** - Complete with quality gates
- **[/handoff](core/handoff)** - Create session handoff
- **[/resume](core/resume)** - Resume from handoff

### Quick Actions

Fast actions for common tasks:

- **[/fix](quick/fix)** - Quick fixes
- **[/fix-types](quick/fix-types)** - Fix TypeScript errors
- **[/fix-ci](quick/fix-ci)** - Fix CI failures
- **[/commit](quick/commit)** - Create conventional commits
- **[/pr](quick/pr)** - Create pull request
- **[/refactor](quick/refactor)** - Refactor code
- **[/test](quick/test)** - Run tests
- **[/lint](quick/lint)** - Run linter

### Research & Design

Research and design tasks:

- **[/research](research/research)** - Deep research
- **[/analyze-project](research/analyze-project)** - Analyze project
- **[/review-codebase](research/review-codebase)** - Review codebase
- **[/design](research/design)** - Design features
- **[/brainstorm](research/brainstorm)** - Brainstorm ideas
- **[/analyze-figma](research/analyze-figma)** - Analyze Figma designs

### Git

Git operations:

- **[/branch](git/branch)** - Create feature branch
- **[/merge](git/merge)** - Merge branch

## Common Workflows

### Feature Development

```bash
/create Add user authentication
/plan authentication system
/implement
/finish
/commit
/pr
```

### Bug Fixing

```bash
/fix Authentication fails on invalid credentials
# or
/use_skill("systematic-debugging")
> Debug authentication issue
```

### Code Review

```bash
/review-codebase
# or
/use_skill("code-review")
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

## Help

Get help for any command:

```bash
/help
/help plan
/help implement
```

## Next Steps

- **[Core Workflow](core)** - Core workflow commands
- **[Skills](../skills/intro)** - Learn about skills
- **[Agents](../agents/intro)** - Learn about agents
