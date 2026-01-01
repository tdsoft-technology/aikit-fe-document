---
sidebar_position: 4
---

# Implement

Implement a task with Test-Driven Development.

<MaterialIcon name="terminal" className="icon-info" /> **Command:** `/ak_cm_implement`

## Usage

```bash
/ak_cm_implement task-001
/ak_cm_implement "add login form"
```

## Workflow

1. **LOAD** - Get task details from `.beads/` or plan
2. **TEST** - Write failing tests first (RED)
3. **IMPLEMENT** - Write minimal code to pass (GREEN)
4. **REFACTOR** - Clean up while keeping tests green
5. **VERIFY** - Run full test suite

## Hard Gates

Before marking complete:

- [ ] All new tests pass
- [ ] No regressions
- [ ] Type check passes
- [ ] Linting passes

## Example

```bash
# Plan first
/ak_cm_plan user login

# Implement with TDD
/ak_cm_implement

# AIKit follows RED-GREEN-REFACTOR:
# RED: Write test
test('should login with valid credentials', () => {
  expect(login('user', 'pass')).toBe(true);
});

# GREEN: Write minimum code
function login(user: string, pass: string): boolean {
  return user === 'user' && pass === 'pass';
}

# REFACTOR: Clean up
function login(credentials: LoginInput): AuthResult {
  return validateAndAuthenticate(credentials);
}
```

## Related Commands

- **[/ak_cm_plan](plan)** - Plan first
- **[/ak_cm_finish](finish)** - Complete with quality gates
- **[Skills Guide](../../skills/intro)** - Learn TDD skill (use `/ak_sk_test-driven-development`)
