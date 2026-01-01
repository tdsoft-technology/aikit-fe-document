---
sidebar_position: 2
---

# Create

Create a new Beads task for tracking work.

<MaterialIcon name="terminal" className="icon-info" /> **Command:** `/ak_cm_create`

## Usage

```bash
/ak_cm_create Add user authentication
/ak_cm_create Fix navigation bug
/ak_cm_create Implement dark mode
```

## Workflow

1. **Create task** - Generates unique bead ID
2. **Set status** - Sets to "in-progress"
3. **Initialize notes** - Creates working notes section
4. **Track** - Updates in `.beads/` directory

## Output

```markdown
✓ Created bead: bead-001

Title: Add user authentication
Description: ...
Status: in-progress

Use /ak_cm_implement to start work
```

## Example

```bash
# Create task
/ak_cm_create Implement JWT authentication

# Output:
✓ Created bead: bead-001

# Plan work
/ak_cm_plan JWT authentication system

# Implement
/ak_cm_implement

# Complete
/ak_cm_finish bead-001
```

## Related Commands

- **[/ak_cm_plan](plan)** - Create implementation plan
- **[/ak_cm_implement](implement)** - Implement with TDD
- **[/ak_cm_finish](finish)** - Complete with quality gates
