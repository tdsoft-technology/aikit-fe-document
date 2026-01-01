---
sidebar_position: 2
---

# Test-Driven Development (TDD)

Enforce the RED-GREEN-REFACTOR cycle for all code changes.

## When to Use

Use this skill when:
- Implementing new features
- Fixing bugs
- Adding new functionality

## Workflow

### Step 1: RED - Write Failing Test

1. Understand the requirement clearly
2. Write a test that describes the expected behavior
3. Run the test - confirm it FAILS
4. If test passes without code, the test is wrong

**Checklist:**
- [ ] Test describes expected behavior
- [ ] Test is minimal and focused
- [ ] Test fails for the right reason

### Step 2: GREEN - Make It Pass

1. Write the MINIMUM code to pass the test
2. Don't add extra functionality
3. Don't optimize yet
4. Run the test - confirm it PASSES

**Checklist:**
- [ ] Only code needed to pass is written
- [ ] Test now passes
- [ ] No other tests broken

### Step 3: REFACTOR - Clean Up

1. Remove duplication
2. Improve naming
3. Simplify logic
4. Run tests after each change

**Checklist:**
- [ ] Code is clean and readable
- [ ] No duplication
- [ ] All tests still pass

## Anti-Patterns to Avoid

- <MaterialIcon name="rocket_launch" className="icon-warning" /> Writing code before tests
- <MaterialIcon name="rocket_launch" className="icon-warning" /> Writing multiple tests before implementing
- <MaterialIcon name="rocket_launch" className="icon-warning" /> Over-engineering first implementation
- <MaterialIcon name="rocket_launch" className="icon-warning" /> Skipping the refactor step
- <MaterialIcon name="rocket_launch" className="icon-warning" /> Testing implementation details instead of behavior

## Verification

Before marking complete:

```bash
npm run test        # All tests pass
npm run typecheck   # No type errors
npm run lint        # No lint errors
```

## Example

```typescript
// RED: Write failing test
test('should authenticate user', () => {
  expect(authenticate('user', 'pass')).toBe(true);
});

// GREEN: Write minimum code
function authenticate(username: string, password: string): boolean {
  return username === 'user' && password === 'pass';
}

// REFACTOR: Clean up
function authenticate(username: string, password: string): boolean {
  return validateCredentials(username, password);
}
```

## Related Skills

- **[Unit Testing](unit-testing)** - Test individual functions
- **[Integration Testing](integration-testing)** - Test component interactions
- **[Refactoring](refactoring)** - Improve code structure
