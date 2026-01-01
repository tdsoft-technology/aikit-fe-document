---
sidebar_position: 5
---

# Unit Testing

Write focused tests for individual functions and components.

## When to Use

Use this skill when:
- Writing tests for functions
- Testing components in isolation
- Increasing test coverage
- Verifying specific behavior

## Workflow

### Step 1: Understand What to Test

**What to Test:**
- Happy path (normal operation)
- Edge cases (boundaries, empty inputs)
- Error cases (invalid inputs, failures)
- Side effects (state changes, API calls)

### Step 2: Write Test

```typescript
test('should do X when Y', () => {
  // Arrange
  const input = 'test';

  // Act
  const result = myFunction(input);

  // Assert
  expect(result).toBe(expected);
});
```

### Step 3: Run Test

```bash
npm run test
```

### Step 4: Make Test Pass

Write minimal code to make test pass.

## Test Structure

```typescript
describe('MyFunction', () => {
  describe('happy path', () => {
    it('should return correct value', () => {
      expect(myFunction('input')).toBe('output');
    });
  });

  describe('edge cases', () => {
    it('should handle empty input', () => {
      expect(myFunction('')).toBe('default');
    });
  });

  describe('error cases', () => {
    it('should throw on invalid input', () => {
      expect(() => myFunction(null)).toThrow();
    });
  });
});
```

## Best Practices

- One assertion per test
- Descriptive test names
- Test one behavior at a time
- Mock external dependencies
- Clean up after tests

## Verification

```bash
npm run test        # New test passes
npm run test -- --coverage  # Coverage increases
```

## Related

- **[TDD](test-driven-development)** - Test-first development
- **[Integration Testing](integration-testing)** - Test interactions
