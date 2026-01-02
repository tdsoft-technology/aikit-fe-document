---
sidebar_position: 2
---

# Component Design Skill

Use this skill when designing React/Vue/Angular components or UI elements.

## Overview

Design reusable, maintainable UI components following composition and single responsibility principles.

## When to Use

Use this skill when:
- Creating a new UI component
- Refactoring an existing component
- Designing component architecture
- Building reusable UI elements

## Workflow

### Step 1: Analyze Requirements

1. What is the component's purpose?
2. What data does it need?
3. What interactions does it support?
4. Where will it be used?

**Questions:**
- Is this a presentational or container component?
- What props does it need?
- What events does it emit?
- Is it reusable or specific?

### Step 2: Design Component Interface

1. Define props/inputs
2. Define events/callbacks
3. Define slots/children
4. Consider variants and states

**Props Design Principles:**
- Keep props minimal
- Use composition over configuration
- Provide sensible defaults
- Type all props

**Example:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### Step 3: Design Component Structure

1. Break into smaller components if needed
2. Identify reusable parts
3. Design composition pattern
4. Plan for extensibility

**Composition Patterns:**
- Compound components
- Render props
- Higher-order components
- Hooks for shared logic

### Step 4: Design State Management

1. Identify local state
2. Identify shared state
3. Choose state management approach
4. Design state shape

**State Decisions:**
- Local state: Component-specific
- Lifted state: Shared between siblings
- Context: Shared across tree
- External store: Global state

### Step 5: Design Styling Approach

1. Choose styling method (CSS modules, styled-components, Tailwind)
2. Design responsive behavior
3. Plan for theming
4. Consider accessibility

**Styling Principles:**
- Consistent spacing system
- Reusable design tokens
- Mobile-first approach
- Accessible colors and contrast

### Step 6: Write Component

1. Start with types/interfaces
2. Write component structure
3. Add styling
4. Add interactions
5. Write tests

**Component Checklist:**
- [ ] Props are typed
- [ ] Default props provided
- [ ] Handles edge cases
- [ ] Accessible (ARIA labels, keyboard nav)
- [ ] Responsive
- [ ] Tested

## Design Principles

### Single Responsibility
One purpose, one responsibility. Components should do one thing well.

### Composition
Build complex components from simple ones. Use composition over inheritance.

### Reusability
Generic enough to reuse, specific enough to be useful.

### Accessibility
Works for all users, including those with disabilities.

### Performance
Efficient rendering, minimal re-renders, optimized for React.

### Maintainability
Easy to modify, clear structure, well-documented.

## Anti-Patterns

❌ **Don't do:**
- God components (too many responsibilities)
- Prop drilling (passing through many levels)
- Tight coupling to specific use case
- No error boundaries
- Ignoring accessibility
- No loading/error states
- Using `<div>` for everything

✅ **Do instead:**
- Focused, single-purpose components
- Use Context or state management for shared state
- Generic and reusable
- Implement error boundaries
- Add ARIA labels and keyboard support
- Handle loading, error, empty states
- Use semantic HTML elements

## Common Patterns

### Compound Components
```typescript
function Dialog({ children, ...props }) {
  return <dialog {...props}>{children}</dialog>;
}

function DialogHeader({ children }) {
  return <header>{children}</header>;
}

function DialogContent({ children }) {
  return <div>{children}</div>;
}

// Usage:
<Dialog>
  <DialogHeader>Title</DialogHeader>
  <DialogContent>Content</DialogContent>
</Dialog>
```

### Render Props
```typescript
function List({ children, ...props }) {
  return <ul {...props}>{children}</ul>;
}

function ListItem({ children }) {
  return <li>{children}</li>;
}

// Usage:
<List>
  {items.map(item => <ListItem>{item}</ListItem>)}
</List>
```

### Higher-Order Component
```typescript
function withLoading<P>(Component: React.ComponentType<P>) {
  return function WithLoading(props: P & { loading?: boolean }) {
    const { loading, ...rest } = props;
    return loading ? <Spinner /> : <Component {...rest} />;
  };
}

// Usage:
const ButtonWithLoading = withLoading(Button);
```

## Accessibility Checklist

- [ ] Semantic HTML elements used
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Screen reader friendly
- [ ] Proper form labels
- [ ] Error messages announced

## Performance Checklist

- [ ] Uses React.memo where appropriate
- [ ] Uses useMemo for expensive computations
- [ ] Uses useCallback for event handlers
- [ ] Avoids unnecessary re-renders
- [ ] Proper key usage in lists

## Verification

- [ ] Component is typed
- [ ] Props documented
- [ ] Tests written
- [ ] Accessible
- [ ] Responsive
- [ ] Styled appropriately
- [ ] Performance optimized

## Related Skills

- [Frontend Aesthetics](../design/frontend-aesthetics.md) - Visual quality
- [Accessibility](../design/accessibility.md) - A11y compliance
- [State Management](../development/state-management.md) - Component state
- [API Design](../development/api-design.md) - API integration

## Related Commands

- [Implement Command](../../commands/core/implement.md) - Build components
- [Test Command](../../commands/quick/test.md) - Test components

## Next Steps

- [Accessibility](../design/accessibility.md) - Ensure accessible design
- [Test Driven Development](../testing/test-driven-development.md) - Write tests
