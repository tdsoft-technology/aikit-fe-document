---
sidebar_position: 1
---

# Anti-Hallucination System

AIKit provides a **3-layer system** to prevent AI from inventing APIs and losing track of requirements.

## Why Anti-Hallucination?

Common AI issues:
- <MaterialIcon name="cancel" className="icon-error" /> Invent non-existent APIs
- <MaterialIcon name="cancel" className="icon-error" /> Forget requirements mid-task
- <MaterialIcon name="cancel" className="icon-error" /> Skip important steps
- <MaterialIcon name="cancel" className="icon-error" /> Make assumptions without checking
- <MaterialIcon name="cancel" className="icon-error" /> Work on undefined tasks

AIKit's 3-layer system prevents these issues.

## Layer 1: Task Validation

**Purpose:** Validate task exists before starting work.

**How it works:**
- Checks `.beads/` directory
- Verifies task exists and has status "in-progress"
- Rejects work if no task exists

**Usage:**

```bash
# Create task first
bd create "Add user authentication"

# Or in OpenCode
/create Add user authentication

# Then implement
/implement
```

**Configuration:**

```json
{
  "beads": {
    "enabled": true,
    "autoInit": false
  }
}
```

## Layer 2: Spec Enforcement

**Purpose:** Enforce code follows `spec.md` constraints.

**How it works:**
- Checks code against spec constraints
- Reports violations
- Prevents forbidden patterns

**Create spec.md:**

```bash
aikit init-spec
```

**spec.md structure:**

```markdown
# Project Specification

## Constraints

### Naming
- Components: PascalCase
- Files: kebab-case
- Variables: camelCase
- Constants: SCREAMING_SNAKE_CASE

### Forbidden
- No inline styles
- No `any` types
- No console.log in production code
- No hardcoded secrets

### Required
- JSDoc on all exported functions
- Input validation on API routes
- Error handling for async operations

## Patterns

### Authentication
- Always use JWT with refresh tokens
- Store tokens in httpOnly cookies

### Database
- Always use transactions for multi-table operations
- Use connection pooling
```

## Layer 3: Review Gates

**Purpose:** Document changes in `review.md`.

**Auto-creates when:**
- Task is completed
- Code changes are made
- Quality gates pass

**review.md structure:**

```markdown
# Code Review

## What Changed
- Files Modified: src/auth.ts
- Functions Added: login(), logout()
- Tests Added: auth.test.ts

## What Was Skipped
- Feature X (out of scope)
- Performance optimization (deferred)

## Verification
- [x] All tests pass
- [x] Type check passes
- [x] Linting passes
- [x] Build succeeds

## Notes
- JWT library chosen: jsonwebtoken
- Refresh token rotation implemented
```

## Quality Gates (Hard Requirements)

All must pass before task completion:

1. <MaterialIcon name="check_circle" className="icon-success" />`npm run typecheck` - No type errors
2. <MaterialIcon name="check_circle" className="icon-success" />`npm run test` - All tests pass
3. <MaterialIcon name="check_circle" className="icon-success" />`npm run lint` - No linting errors
4. <MaterialIcon name="check_circle" className="icon-success" />`npm run build` - Build succeeds

**Usage:**

```bash
/finish
# Runs all gates automatically
# Only completes if ALL pass
```

## Configuration

Enable anti-hallucination in `.aikit/aikit.json`:

```json
{
  "antiHallucination": {
    "enabled": true,
    "specFile": "spec.md",
    "reviewFile": "review.md"
  }
}
```

## Recovery Protocol

### When Context is Lost

1. **Check for handoff:**

```bash
/resume
```

2. **Load previous session:**

```bash
> read_session("session-id")
```

3. **Check Beads status:**

```bash
> bead-list(filter="in-progress")
```

### When Task is Missing

```bash
# Create task
/create Add missing feature

# Check spec.md
> memory-read("spec.md")
```

## Best Practices

1. **Always create task before work:**

```bash
/create Task description
```

2. **Keep spec.md updated:**

```bash
# Add new constraints
> memory-update("spec.md", "## New Constraint")
```

3. **Use quality gates:**

```bash
/finish
# Runs all gates before completion
```

4. **Create handoffs:**

```bash
/handoff
# Preserves context for next session
```

## CLI Commands

```bash
# Initialize spec
aikit init-spec

# Check Beads status
aikit beads status

# List beads
aikit beads list
```

## Next Steps

- **[Configuration](configuration)** - Configuration system
- **[Skills](../skills/intro)** - Learn about skills
- **[Beads Integration](../tools/intro#beads-tools)** - Task tracking
