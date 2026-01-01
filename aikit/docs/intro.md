---
sidebar_position: 1
---

# Welcome to AIKit

AIKit is an **Open-source AI coding agent toolkit** that extends OpenCode's capabilities with structured workflows, specialized agents, and integrated tools. It transforms OpenCode from a general-purpose coding assistant into a structured development environment with task tracking, quality enforcement, and cross-session continuity.

## Why AIKit?

OpenCode is powerful, but it lacks:

- <MaterialIcon name="cancel" className="icon-error" /> Structured workflows for development tasks
- <MaterialIcon name="cancel" className="icon-error" /> Task tracking and management
- <MaterialIcon name="cancel" className="icon-error" /> Automatic quality gates
- <MaterialIcon name="cancel" className="icon-error" /> Session continuity between work sessions
- <MaterialIcon name="cancel" className="icon-error" /> Persistent memory for learnings
- <MaterialIcon name="cancel" className="icon-error" /> Enforced best practices

AIKit adds all of this and more:

- <MaterialIcon name="check_circle" className="icon-success" /> **23 Built-in Skills** - Enforce TDD, debugging, refactoring workflows
- <MaterialIcon name="check_circle" className="icon-success" /> **8 Specialized Agents** - Planner, Builder, Reviewer, Researcher, etc.
- <MaterialIcon name="check_circle" className="icon-success" /> **27+ Slash Commands** - Quick shortcuts for common workflows
- <MaterialIcon name="check_circle" className="icon-success" /> **Task Tracking** - Beads integration for tracking and quality gates
- <MaterialIcon name="check_circle" className="icon-success" /> **Anti-Hallucination** - 3-layer system to prevent AI errors
- <MaterialIcon name="check_circle" className="icon-success" /> **Persistent Memory** - Cross-session context with handoffs
- <MaterialIcon name="check_circle" className="icon-success" /> **Figma Integration** - Extract design tokens and automate development

## What You Can Do With AIKit

### Enforce Structured Workflows

```bash
> use_skill("test-driven-development")
> Implement user authentication
# Agent follows TDD: RED → GREEN → REFACTOR
```

### Track Tasks with Quality Gates

```bash
/create Add user authentication
/plan user authentication system
/implement
/finish
# Runs quality gates: typecheck, test, lint, build
```

### Session Continuity

```bash
/handoff
# Saves progress to memory
# ... later ...
/resume
# Loads context and continues where you left off
```

### Specialized Agents

```bash
@planner Design authentication system
# Delegates to @scout for research
# Delegates to @build for implementation
# Delegates to @review for verification
```

## Quick Comparison

| Feature | Without AIKit | With AIKit |
|---------|---------------|------------|
| Workflow Enforcement | None | 23 built-in skills |
| Task Tracking | Manual | Beads integration |
| Quality Gates | Manual | Automatic in /finish |
| Session Continuity | None | Handoffs + /resume |
| Persistent Memory | None | Memory system |
| Agent Specialization | Default only | 8 specialized agents |
| Anti-Hallucination | None | 3-layer system |
| Figma Integration | None | Design tokens + assets |

## Next Steps

- **[Features](features)** - Learn about all AIKit features
- **[Installation](installation)** - Install and setup AIKit
- **[Quick Start](quick-start)** - Get started in 5 minutes
- **[Skills Guide](skills/intro)** - Explore 23 built-in skills
- **[Agents Guide](agents/intro)** - Understand specialized agents
- **[Commands Reference](commands/intro)** - All 27+ slash commands

## Get Started

```bash
# Install AIKit
cd aikit
npm install
npm run build
npm link

# Initialize in your project
aikit init --global
cd your-project
aikit init
aikit install

# Create your first task
/create Add user authentication
```

## Join the Community

- <MaterialIcon name="bug_report" className="icon-error" /> [Report Issues](https://github.com/tdsoft-tech/aikit/issues)
- <MaterialIcon name="lightbulb" className="icon-warning" /> [Feature Requests](https://github.com/tdsoft-tech/aikit/discussions)
- <MaterialIcon name="description" className="icon-primary" /> [Documentation](https://github.com/tdsoft-tech/aikit/blob/main/docs)
