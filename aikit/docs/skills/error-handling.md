---
sidebar_position: 8
---

# Error Handling

Add proper error handling to your code.

## When to Use

Use this skill when:
- Adding error handling to functions
- Implementing exception handling
- Handling async errors
- Validating user input

## Workflow

### Step 1: Identify Error Scenarios

- Invalid input data
- Network failures
- Database errors
- Permission errors
- Business logic violations

### Step 2: Define Error Types

```typescript
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}
```

### Step 3: Add Error Handling

```typescript
// Try-catch
async function fetchUser(id: string) {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new ValidationError('User not found');
    }
    throw new NetworkError('Failed to fetch user');
  }
}

// Error propagation
function processData(data: unknown) {
  if (!isValid(data)) {
    throw new ValidationError('Invalid data format');
  }
  return transform(data);
}
```

### Step 4: Handle Errors Gracefully

```typescript
// Provide fallbacks
function getConfig() {
  return config.load() || defaultConfig;
}

// User-friendly messages
function handleError(error: Error) {
  logger.error(error);
  notifyUser('An error occurred. Please try again.');
}
```

## Best Practices

- **Use specific error types** - Don't just use generic `Error`
- **Include context** - Add helpful info to error messages
- **Don't swallow errors** - Always handle or rethrow
- **Log errors** - Record for debugging
- **Provide fallbacks** - Graceful degradation

## Anti-Patterns

- <MaterialIcon name="bug_report" className="icon-warning" /> Catching all errors with `catch (e)`
- <MaterialIcon name="bug_report" className="icon-warning" /> Swallowing errors without handling
- <MaterialIcon name="bug_report" className="icon-warning" /> Returning errors instead of throwing
- <MaterialIcon name="bug_report" className="icon-warning" /> Silent failures
- <MaterialIcon name="bug_report" className="icon-warning" /> Not logging errors

## Verification

```bash
npm run test        # Error handling tests pass
```

## Related

- **[TDD](test-driven-development)** - Write error tests first
- **[Systematic Debugging](systematic-debugging)** - Debug errors
