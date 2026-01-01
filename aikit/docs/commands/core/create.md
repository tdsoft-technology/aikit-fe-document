---
sidebar_position: 2
---

# Create

Create a new Beads task for tracking work.

## Usage

```bash
/create Add user authentication
/create Fix navigation bug
/create Implement dark mode
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

Use /implement to start work
```

## Example

```bash
# Create task
/create Implement JWT authentication

# Output:
✓ Created bead: bead-001

# Plan work
/plan JWT authentication system

# Implement
/implement

# Complete
/finish bead-001
```

## Related Commands

- **[/plan](plan)** - Create implementation plan
- **[/implement](implement)** - Implement with TDD
- **[/finish](finish)** - Complete with quality gates
