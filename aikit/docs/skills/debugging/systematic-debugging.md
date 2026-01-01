---
sidebar_position: 3
---

# Systematic Debugging

Use a structured approach to find and fix bugs efficiently.

## When to Use

Use this skill when:
- Debugging complex issues
- Investigating bugs with unclear causes
- Reproducing issues is difficult
- Need to track debugging progress

## Workflow

### Step 1: REPRODUCE - Can You Recreate It?

1. Get exact steps to reproduce
2. Confirm the bug exists
3. Document reproduction steps
4. Identify conditions (environment, data, state)

**Checklist:**
- [ ] Bug is reproducible
- [ ] Reproduction steps are documented
- [ ] Environment is noted
- [ ] Relevant data/state is identified

### Step 2: ISOLATE - Find the Smallest Case

1. Remove unrelated factors
2. Simplify input data
3. Isolate to single component/module
4. Identify minimal reproduction case

**Checklist:**
- [ ] Minimal reproduction case found
- [ ] Isolated to specific code
- [ ] Unrelated factors removed
- [ ] Input data is simplified

### Step 3: IDENTIFY - Find Root Cause

1. Add logging at key points
2. Use debugger to trace execution
3. Check edge cases and assumptions
4. Verify actual vs. expected behavior

**Checklist:**
- [ ] Execution path is understood
- [ ] Actual behavior is documented
- [ ] Expected behavior is documented
- [ ] Root cause is identified

### Step 4: VERIFY - Fix and Confirm

1. Implement fix
2. Reproduce to verify bug is gone
3. Test edge cases
4. Check for regressions

**Checklist:**
- [ ] Bug no longer reproducible
- [ ] Edge cases are tested
- [ ] No regressions introduced
- [ ] Fix is minimal and targeted

## Debugging Techniques

### Logging

```typescript
console.log('DEBUG: value =', value);
console.log('DEBUG: state =', JSON.stringify(state));
```

### Debugger

```typescript
// Add breakpoints
debugger;

// Use Chrome DevTools or VS Code debugger
```

### Binary Search

If the bug is in a large codebase:

1. Narrow down to subsystem
2. Test half, narrow to quarter
3. Repeat until isolated

### Rubber Ducking

Explain the problem step-by-step to someone (or a rubber duck):
- Forces structured thinking
- Often reveals the issue
- No actual conversation needed

## Anti-Patterns

- <MaterialIcon name="cancel" className="icon-error" />Randomly changing code without understanding
- <MaterialIcon name="cancel" className="icon-error" />Adding fixes without verifying they work
- <MaterialIcon name="cancel" className="icon-error" />Skipping the isolation step
- <MaterialIcon name="cancel" className="icon-error" />Testing only the happy path
- <MaterialIcon name="cancel" className="icon-error" />Not checking for regressions

## Example

```typescript
// REPRODUCE
function calculateDiscount(price: number, quantity: number): number {
  return price * 0.9; // Bug: doesn't use quantity
}

// ISOLATE
test('discount with quantity > 10', () => {
  expect(calculateDiscount(100, 15)).toBe(850); // Fails
});

// IDENTIFY
// Root cause: quantity parameter is ignored

// VERIFY
function calculateDiscount(price: number, quantity: number): number {
  const discount = quantity > 10 ? 0.85 : 0.9;
  return price * discount;
}
```

## Verification

```bash
npm run test        # Bug test passes
npm run lint        # No new lint errors
npm run typecheck   # No type errors
```

## Related Skills

- **[Error Handling](../error-handling)** - Add proper error handling
- **[Code Review](../code-review)** - Review for similar bugs
