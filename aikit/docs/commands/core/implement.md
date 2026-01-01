---
sidebar_position: 4
---

# Implement

Implement a task with Test-Driven Development.

## Usage

```bash
/implement task-001
/implement "add login form"
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
/plan user login

# Implement with TDD
/implement

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

- **[/plan](plan)** - Plan first
- **[/finish](finish)** - Complete with quality gates
- **[Skills Guide](../../skills/intro)** - Learn TDD skill
