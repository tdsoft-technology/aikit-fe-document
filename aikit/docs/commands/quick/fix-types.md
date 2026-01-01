---
sidebar_position: 3
---

# Fix Types

Fix TypeScript errors automatically.

## Usage

```bash
/fix-types
/fix-types src/auth.ts
```

## Workflow

1. **Run typecheck** - Find all type errors
2. **Analyze** - Understand each error
3. **Fix** - Apply type fixes
4. **Verify** - Re-run typecheck

## Common Errors

### Missing Type

```typescript
// Error
const value: any = getData();

// Fix
const value: DataType = getData();
```

### Type Mismatch

```typescript
// Error
const result: string = calculateNumber();

// Fix
const result: number = calculateNumber();
```

### Missing Property

```typescript
// Error
user.name.toUppercase();

// Fix
user.name?.toUppercase() || '';
```

## Auto-Fix

```bash
npm run typecheck --fix
```

Note: Not all type errors can be auto-fixed.

## Related

- **[/fix](fix)** - Quick fixes
- **[/lint](lint)** - Fix lint errors
