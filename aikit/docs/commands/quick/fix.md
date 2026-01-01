---
sidebar_position: 2
---

# Fix

Quick fixes for common issues.

## Usage

```bash
/fix button not clickable
/fix type error in auth.ts
/fix navigation bug
```

## Workflow

1. **Identify** - Understand the issue
2. **Locate** - Find where it occurs
3. **Fix** - Make minimal change to resolve
4. **Verify** - Test that fix works
5. **Regress** - Check nothing else broke

## Examples

### Typo Fix

```bash
/fix typo in header
```

### Simple Bug Fix

```bash
/fix button not responding to clicks
```

### Type Error Fix

```bash
/fix TypeScript error in auth.ts
```

## Best Practices

- Make minimal changes
- Don't refactor unrelated code
- Add tests for the fix
- Verify no regressions
- Document why fix was needed

## Related

- **[/implement](../core/implement)** - For larger fixes
- **[Systematic Debugging](../../skills/systematic-debugging)** - Complex debugging
