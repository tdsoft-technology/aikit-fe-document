---
sidebar_position: 1
---

# Skills

Skills are **structured workflow instructions** that AI agents must follow. They enforce consistent processes for common development tasks.

<MaterialIcon name="lightbulb" className="icon-info" /> **All skills now use the `/ak_sk_` prefix** (e.g., `/ak_sk_test-driven-development`)

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

### Use Skills (OpenCode)

```bash
# Direct invocation with prefix
/ak_sk_test-driven-development

# Or via tool
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

Skills are organized into **9 categories** for better discoverability:

### Debugging (1 skill)

- **[Systematic Debugging](debugging/systematic-debugging)** - Structured debugging workflow

### Design (4 skills)

- **[Accessibility](design/accessibility)** - WCAG compliance and a11y guidelines
- **[Database Design](design/database-design)** - Schema design principles
- **[Design Measurement](design/design-measurement)** - Design metrics and analysis
- **[Frontend Aesthetics](design/frontend-aesthetics)** - UI design principles

### Development (6 skills)

- **[API Design](development/api-design)** - REST API design best practices
- **[Component Design](development/component-design)** - React/Vue component patterns
- **[Error Handling](development/error-handling)** - Exception handling patterns
- **[Performance Optimization](development/performance-optimization)** - Frontend performance
- **[Refactoring](development/refactoring)** - Code restructuring with tests
- **[State Management](development/state-management)** - Application state patterns

### Documentation (1 skill)

- **[Documentation](documentation/documentation)** - Technical documentation best practices

### Figma (2 skills)

- **[Analyze Figma](figma/analyze-figma)** - Extract design tokens from Figma
- **[Figma to Code](figma/figma-to-code)** - Convert Figma designs to code

### Git (1 skill)

- **[Git Workflow](git/git-workflow)** - Best git practices and workflow

### Meta (2 skills)

- **[Using Superpowers](meta/using-superpowers)** - How to use skills system
- **[Writing Plans](meta/writing-plans)** - Implementation planning

### Review (2 skills)

- **[Code Review](review/code-review)** - Code quality review
- **[Security Audit](review/security-audit)** - Security vulnerability scanning

### Testing (3 skills)

- **[Integration Testing](testing/integration-testing)** - Test component interactions
- **[Test-Driven Development](testing/test-driven-development)** - TDD workflow (RED → GREEN → REFACTOR)
- **[Unit Testing](testing/unit-testing)** - Test individual functions/components

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
- **[Commands](../commands/intro)** - All slash commands (using `/ak_cm_` prefix)
- **[Tools](../tools/intro)** - Built-in tools
