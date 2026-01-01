---
sidebar_position: 3
---

# Plan

Create a detailed implementation plan.

<MaterialIcon name="terminal" className="icon-info" /> **Command:** `/ak_cm_plan`

## Usage

```bash
/ak_cm_plan user authentication system
/ak_cm_plan refactor database layer
/ak_cm_plan add dark mode
```

## Workflow

1. **UNDERSTAND** - Clarify requirements through Socratic questioning
2. **RESEARCH** - Check existing patterns and dependencies
3. **BREAK DOWN** - Create 2-5 minute sub-tasks
4. **DOCUMENT** - Write plan to `memory/plans/`

## Output Format

```markdown
# Plan: [Feature Name]

## Overview
Brief description of goal.

## Tasks
1. [ ] Task 1 - file.ts
2. [ ] Task 2 - component.tsx
3. [ ] Task 3 - api.ts
...

## Dependencies
- List dependencies

## Risks
- Potential issues

## Verification
- How to verify completion
```

## Example

```bash
/ak_cm_plan user authentication system

# AIKit generates:
# Plan: User Authentication System

## Overview
Implement JWT-based authentication with login/logout.

## Tasks
1. [ ] Create auth utility - src/utils/auth.ts
2. [ ] Create login API - src/api/login.ts
3. [ ] Create logout API - src/api/logout.ts
4. [ ] Create login page - src/pages/login.tsx
5. [ ] Add tests - tests/auth.test.ts

## Dependencies
- JWT library
- User model

## Risks
- JWT secret management
- Token refresh logic

## Verification
- Login works
- Logout clears token
- Tokens are stored securely
```

## Best Practices

1. **Break down into small tasks** - 2-5 minutes each
2. **Specify exact files** - Clear where changes go
3. **List dependencies** - What depends on what
4. **Identify risks** - What could go wrong
5. **Define verification** - How to know it's done

## Related Commands

- **[/ak_cm_create](create)** - Create task first
- **[/ak_cm_implement](implement)** - Implement the plan
