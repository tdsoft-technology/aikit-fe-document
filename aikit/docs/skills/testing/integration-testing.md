---
sidebar_position: 6
---

# Integration Testing

Test how multiple components work together.

## When to Use

Use this skill when:
- Testing component interactions
- Verifying API endpoints
- Testing database operations
- Validating external service integrations

## Workflow

### Step 1: Identify Integration Points

- Component → Component
- Frontend → Backend API
- Backend → Database
- System → External Service

### Step 2: Setup Test Environment

```typescript
// Setup database
beforeAll(async () => {
  await database.connect();
  await database.migrate();
});

// Clear data
beforeEach(async () => {
  await database.clear();
});
```

### Step 3: Write Integration Test

```typescript
test('should save user to database', async () => {
  // Arrange
  const user = { name: 'John', email: 'john@example.com' };

  // Act
  await api.createUser(user);

  // Assert
  const saved = await database.findUser(user.email);
  expect(saved).toBeDefined();
  expect(saved.email).toBe(user.email);
});
```

### Step 4: Clean Up

```typescript
afterAll(async () => {
  await database.disconnect();
});
```

## Test Types

### API Integration

```typescript
test('POST /users should create user', async () => {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'John' }),
  });

  expect(response.status).toBe(201);
});
```

### Database Integration

```typescript
test('should persist user to database', async () => {
  await repository.save(user);

  const found = await repository.findById(user.id);
  expect(found).toEqual(user);
});
```

### Component Integration

```typescript
test('Login form should call API on submit', async () => {
  render(<LoginForm />);

  await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
  await userEvent.click(screen.getByText('Login'));

  await waitFor(() => {
    expect(mockApi.login).toHaveBeenCalled();
  });
});
```

## Best Practices

- Use real dependencies, not mocks (for real integration)
- Clear state between tests
- Test error flows
- Use realistic data
- Test performance if needed

## Verification

```bash
npm run test        # Integration tests pass
```

## Related

- **[Unit Testing](unit-testing)** - Test in isolation
- **[TDD](test-driven-development)** - Test-first development
