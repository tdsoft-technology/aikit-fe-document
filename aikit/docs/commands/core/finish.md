---
sidebar_position: 5
---

# Finish

Complete task with mandatory quality gates.

## Usage

```bash
/finish
/finish bead-001
```

## Quality Gates (Must ALL Pass)

1. <MaterialIcon name="check_circle" className="icon-success" /> **Type check** - `npm run typecheck` - No type errors
2. <MaterialIcon name="check_circle" className="icon-success" /> **Tests** - `npm run test` - All tests pass
3. <MaterialIcon name="check_circle" className="icon-success" /> **Lint** - `npm run lint` - No linting errors
4. <MaterialIcon name="check_circle" className="icon-success" /> **Build** - `npm run build` - Build succeeds

## Workflow

1. **Run all gates** - Execute each quality gate
2. **Report issues** - If any fail, report and stop
3. **Update status** - If all pass, mark task as completed
4. **Create summary** - Generate summary of changes
5. **Suggest commit message** - Conventional commit format

## Example - Success

```bash
/finish bead-001

# AIKit runs:
Running quality gates...

✓ typecheck: PASSED (0 errors)
✓ test: PASSED (42/42 tests passing)
✓ lint: PASSED (0 errors)
✓ build: PASSED

All quality gates passed!

Summary:
- Files modified: src/auth.ts, src/login.tsx
- Tests added: tests/auth.test.ts
- Functions added: login(), logout(), validateToken()

Suggested commit:
feat: add JWT authentication with login/logout

Use /commit to create this commit.
```

## Example - Failure

```bash
/finish bead-001

# AIKit runs:
Running quality gates...

✗ typecheck: FAILED (3 errors)
  src/auth.ts:23:5 - error TS2322: Type 'string' is not assignable to type 'boolean'
  src/login.tsx:15:2 - error TS2345: Argument of type 'string' is not assignable...
  src/utils/token.ts:8:3 - error TS2580: Cannot find name 'token'

Quality gates failed. Please fix errors before completing task.
```

## Best Practices

1. **Fix errors locally** - Don't rely on AI to auto-fix
2. **Run gates manually** - Test before using `/finish`
3. **Review changes** - Check all changes are correct
4. **Update tests** - Ensure tests cover new code

## Anti-Patterns

- <MaterialIcon name="cancel" className="icon-error" /> Skipping gates manually
- <MaterialIcon name="cancel" className="icon-error" /> Fixing errors after marking complete
- <MaterialIcon name="cancel" className="icon-error" /> Not reviewing generated commit message
- <MaterialIcon name="cancel" className="icon-error" /> Committing without all gates passing

## Related Commands

- **[/implement](implement)** - Implement work
- **[/commit](../quick/commit)** - Create commit
- **[Anti-Hallucination](../../advanced/anti-hallucination)** - Learn about quality gates
