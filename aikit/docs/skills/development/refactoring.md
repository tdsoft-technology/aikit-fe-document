---
sidebar_position: 4
---

# Refactoring

Restructure code without changing its external behavior.

## When to Use

Use this skill when:
- Improving code structure
- Reducing complexity
- Making code more maintainable
- Removing duplication

## Workflow

### Step 1: Ensure Tests Exist

```bash
npm run test
```

If no tests exist, write them first using TDD.

### Step 2: Identify Refactoring Opportunities

- Duplicate code
- Long functions (>30 lines)
- Complex conditionals
- Unclear naming
- Large classes

### Step 3: Make Small Changes

1. Extract duplicate code to functions
2. Split long functions
3. Simplify conditionals
4. Improve naming
5. Reduce complexity

### Step 4: Run Tests After Each Change

```bash
npm run test
```

Keep tests green throughout.

## Anti-Patterns

- <MaterialIcon name="rocket_launch" className="icon-warning" /> Refactoring without tests
- <MaterialIcon name="rocket_launch" className="icon-warning" /> Making big changes at once
- <MaterialIcon name="rocket_launch" className="icon-warning" /> Changing behavior while refactoring
- <MaterialIcon name="rocket_launch" className="icon-warning" /> Not running tests after changes

## Verification

```bash
npm run test        # All tests pass
npm run typecheck   # No new type errors
```

## Related

- **[TDD](test-driven-development)** - Test-first development
- **[Error Handling](error-handling)** - Add error handling
