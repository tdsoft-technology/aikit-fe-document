---
sidebar_position: 3
---

# Custom Skills

Create **project-specific skills** for your unique workflows.

## Create a Custom Skill

```bash
aikit skills create my-workflow
```

This creates `.aikit/skills/my-workflow.md`.

## Skill Format

```markdown
---
name: my-workflow
description: Custom workflow for my project
useWhen: When you need to do X
category: custom
tags:
  - custom
  - project-specific
---

# My Workflow

## Overview
Describe what this skill does.

## Workflow

### Step 1: Understand the Task
- Gather context
- Clarify requirements

### Step 2: Plan the Approach
- Break down into sub-tasks
- Identify dependencies

### Step 3: Execute
- Follow TDD principles
- Write tests first

### Step 4: Verify
- Run all tests
- Check for regressions

## Checklist
- [ ] Requirements understood
- [ ] Tests written
- [ ] Implementation complete
- [ ] All tests passing
- [ ] Code reviewed
```

## Frontmatter Options

- `name` (required) - Skill name
- `description` (required) - What the skill does
- `useWhen` (required) - When to use this skill
- `category` (required) - Category for organization
- `tags` (optional) - Tags for search

## Categories

Recommended categories:
- `custom` - Project-specific workflows
- `development` - Code development
- `testing` - Testing workflows
- `design` - Design tasks
- `review` - Code review processes

## Examples

### Frontend Component Skill

```markdown
---
name: create-component
description: Create React component with tests
useWhen: When user asks to create a component
category: custom
tags:
  - react
  - component
---

# Create React Component

## Workflow
1. Create component file
2. Write test first
3. Implement component
4. Add TypeScript types
5. Add accessibility attributes
6. Test component
```

### API Endpoint Skill

```markdown
---
name: create-endpoint
description: Create API endpoint with validation
useWhen: When user asks to create API route
category: custom
tags:
  - api
  - backend
---

# Create API Endpoint

## Workflow
1. Define route handler
2. Add input validation
3. Implement business logic
4. Add error handling
5. Write integration tests
6. Update API documentation
```

## Use Custom Skills

```bash
# Find your custom skill
> find_skills("my-workflow")

# Use it
> use_skill("my-workflow")
> Implement feature X
```

## Sync Skills

Sync global skills to project:

```bash
aikit skills sync
```

## Best Practices

1. **Keep skills focused** - One workflow per skill
2. **Make steps specific** - Clear, actionable steps
3. **Include checklists** - Verification steps
4. **Add examples** - Show expected output
5. **Document anti-patterns** - What to avoid

## Next Steps

- **[Skills Guide](../skills/intro)** - Learn about built-in skills
- **[Custom Tools](custom-tools)** - Create custom tools
