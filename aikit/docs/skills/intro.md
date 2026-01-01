---
sidebar_position: 1
---

# Skills

Skills are **structured workflow instructions** that AI agents must follow. They enforce consistent processes for common development tasks.

## Why Skills?

Without skills, AI agents may:
- Skip important steps (like writing tests)
- Use inconsistent approaches for similar tasks
- Not follow best practices
- Make avoidable mistakes

With skills, AI agents:
- Follow proven workflows step-by-step
- Don't skip important steps
- Apply best practices automatically
- Produce more consistent, reliable code

## How to Use Skills

### Find Skills

```bash
# Find skills matching a topic
> find_skills("test")
> find_skills("debug")
> find_skills("refactor")
```

### Use Skills

```bash
# Use a skill for current task
> use_skill("test-driven-development")
> Implement user authentication
```

### CLI

```bash
# List all skills
aikit skills list

# Show skill details
aikit skills show test-driven-development

# Create custom skill
aikit skills create my-custom-skill
```

## All Skills

### Development Skills

- **[Test-Driven Development](test-driven-development)** - TDD workflow (RED → GREEN → REFACTOR)
- **[Refactoring](refactoring)** - Code restructuring with tests
- **[Error Handling](error-handling)** - Exception handling patterns
- **[State Management](state-management)** - Application state patterns

### Testing Skills

- **[Unit Testing](unit-testing)** - Test individual functions/components
- **[Integration Testing](integration-testing)** - Test component interactions

### Design Skills

- **[API Design](api-design)** - REST API design best practices
- **[Component Design](component-design)** - React/Vue component patterns
- **[Database Design](database-design)** - Schema design principles

### UI/UX Skills

- **[Accessibility](accessibility)** - WCAG compliance and a11y guidelines
- **[Frontend Aesthetics](frontend-aesthetics)** - UI design principles
- **[Performance Optimization](performance-optimization)** - Frontend performance

### Debugging & Review Skills

- **[Systematic Debugging](systematic-debugging)** - Structured debugging workflow
- **[Code Review](code-review)** - Code quality review
- **[Security Audit](security-audit)** - Security vulnerability scanning

### Collaboration Skills

- **[Documentation](documentation)** - Technical documentation
- **[Git Workflow](git-workflow)** - Best git practices
- **[Writing Plans](writing-plans)** - Implementation planning

### Meta Skills

- **[Using Superpowers](using-superpowers)** - How to use skills system
- **[Design Measurement](design-measurement)** - Design metrics

### Figma Skills

- **[Analyze Figma](analyze-figma)** - Extract design tokens
- **[Figma to Code](figma-to-code)** - Convert designs to code

## Skill Format

Each skill has:

```markdown
---
name: skill-name
description: What this skill does
useWhen: When to use this skill
category: Category name
tags:
  - tag1
  - tag2
---

## Workflow

Step-by-step instructions...

## Checklist

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3
```

## Custom Skills

Create project-specific skills:

```bash
aikit skills create my-workflow
```

Edit `.aikit/skills/my-workflow.md` with your workflow.

## Sync Skills

Sync global skills to project:

```bash
aikit skills sync
```

## Next Steps

- **[Agents](../agents/intro)** - Learn about specialized agents
- **[Commands](../commands/intro)** - All slash commands
- **[Tools](../tools/intro)** - Built-in tools
