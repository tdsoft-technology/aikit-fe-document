---
sidebar_position: 4
---

# State Management Skill

Use this skill when managing application state, choosing state management approach, or implementing state.

## Overview

Choose and implement appropriate state management strategy based on application needs and complexity.

## When to Use

Use this skill when:
- Choosing state management library
- Implementing state in components
- Refactoring state architecture
- Designing application state structure

## Workflow

### Step 1: Analyze State Requirements

1. Identify what state exists
2. Determine state scope (local vs global)
3. Understand state relationships
4. Consider state complexity

**State Types:**
- **Local State**: Component-specific
- **Shared State**: Between components
- **Global State**: App-wide
- **Server State**: From API
- **Form State**: User input
- **UI State**: Modal, sidebar, etc.

### Step 2: Choose State Management Approach

1. Local state (useState)
2. Lifted state (props)
3. Context API
4. External library (Redux, Zustand, Jotai)

**Decision Tree:**
- Simple local state → useState
- Shared between siblings → Lift to parent
- Shared across tree → Context API
- Complex global state → Redux/Zustand
- Server state → React Query/SWR

### Step 3: Design State Structure

1. Normalize nested data
2. Avoid duplication
3. Keep state minimal
4. Design for updates

**State Structure:**
```typescript
interface AppState {
  user: {
    id: string;
    name: string;
    email: string;
  };
  posts: {
    [id: string]: Post;
  };
  ui: {
    sidebarOpen: boolean;
    theme: 'light' | 'dark';
  };
}
```

### Step 4: Implement State Management

1. Set up state store/provider
2. Define actions/reducers
3. Connect components
4. Handle async state

**Context Example:**
```typescript
const StateContext = createContext<AppState | null>(null);

export function StateProvider({ children }) {
  const [state, setState] = useState(initialState);
  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  );
}
```

### Step 5: Handle State Updates

1. Immutable updates
2. Batch updates
3. Optimize re-renders
4. Handle side effects

**Update Patterns:**
- Immutable updates (spread operator)
- Functional updates
- Batch multiple updates
- Memoize selectors

### Step 6: Manage Server State

1. Use React Query/SWR
2. Handle loading states
3. Handle error states
4. Implement caching

**Server State:**
- Fetching data
- Caching responses
- Refetching on demand
- Optimistic updates

### Step 7: Optimize Performance

1. Memoize selectors
2. Split contexts
3. Use React.memo
4. Avoid unnecessary re-renders

## State Management Patterns

- **Flux**: Unidirectional data flow
- **Redux**: Centralized store with reducers
- **Context API**: Built-in React solution
- **Zustand**: Lightweight state management
- **Jotai**: Atomic state management

## Anti-Patterns

❌ **Don't do:**
- Over-using global state
- Storing derived state
- Mutating state directly
- Not normalizing nested data
- Too many contexts
- Storing server state in global state

✅ **Do instead:**
- Local state for component-specific data
- Lift state only when needed
- Immutable updates
- Normalize nested data
- Split contexts by concern
- Use React Query/SWR for server state

## Verification

- [ ] State structure designed
- [ ] State management implemented
- [ ] Updates are immutable
- [ ] Performance optimized
- [ ] Server state handled

## Related Skills

- [Component Design](../design/component-design.md) - Component state
- [API Design](../development/api-design.md) - Server state integration
- [Error Handling](../development/error-handling.md) - State error handling

## Related Commands

- [Implement Command](../../commands/core/implement.md) - Implement state management
- [Test Command](../../commands/quick/test.md) - Test state logic

## Next Steps

- [Component Design](../design/component-design.md) - Design component interfaces
- [Test Driven Development](../testing/test-driven-development.md) - Write state tests
