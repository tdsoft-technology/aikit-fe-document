---
sidebar_position: 2
---

# Build Agent

## Overview

**@build** is the primary execution agent responsible for implementing features, writing production code, and making changes to the codebase.

## When to Use

Use @build when:
- Implementing new features
- Writing production code
- Making code changes
- Refactoring code
- Fixing bugs and implementing tests
- Creating components or modules

## Capabilities

- Write production code
- Write tests
- Refactor code
- Fix bugs
- Implement features
- Follow TDD practices
- Run quality checks

## Use Cases

### Feature Implementation
```bash
@build Implement user authentication
# @build will:
# 1. Write tests first (TDD)
# 2. Implement authentication logic
# 3. Write production code
# 4. Run tests to verify
# 5. Ensure code quality
```

### Code Changes
```bash
@build Refactor user profile component
# @build will:
# 1. Analyze current code
# 2. Identify refactoring opportunities
# 3. Make changes while keeping tests green
# 4. Update tests if needed
```

### Bug Fixes
```bash
@build Fix login button not working
# @build will:
# 1. Debug the issue
# 2. Write tests for the fix
# 3. Implement fix
# 4. Verify tests pass
# 5. Check for regressions
```

## Principles

### Test-Driven Development

✅ **DO:**
- Write tests before implementation (RED)
- Write minimal code to pass tests (GREEN)
- Refactor while keeping tests green (REFACTOR)
- Verify all tests pass before moving on

❌ **DON'T:**
- Skip tests
- Write implementation first, tests later
- Refactor without tests
- Move on before tests pass

### Incremental Changes

✅ **DO:**
- Make small, focused commits
- One logical change per commit
- Test after each change
- Verify quality checks pass

❌ **DON'T:**
- Large, monolithic commits
- Multiple unrelated changes in one commit
- Skip testing between changes
- Commit broken code

### Code Quality

✅ **DO:**
- Follow project conventions
- Write clear, readable code
- Add comments for complex logic
- Run linting and type checking
- Ensure tests provide good coverage

❌ **DON'T:**
- Ignore project style
- Write unclear or "clever" code
- Skip code comments
- Ignore linting/type errors
- Leave tests incomplete

## Workflow

### 1. Understand Requirements

Before implementing:
- Read task description or plan
- Ask clarifying questions if needed
- Check existing code patterns
- Identify dependencies

### 2. Plan Implementation

- Break down into small steps
- Consider test cases
- Identify edge cases
- Plan for refactoring

### 3. Write Tests First (TDD)

- Write failing tests
- Define expected behavior
- Cover edge cases
- Test error conditions

### 4. Implement Code

- Write minimal code to pass tests
- Follow project conventions
- Keep implementation simple
- Add comments for complex logic

### 5. Verify Tests Pass

- Run test suite
- Fix any failures
- Ensure new tests pass
- Check for regressions

### 6. Refactor if Needed

- Improve code structure
- Extract reusable code
- Remove duplication
- Keep tests green

### 7. Run Quality Checks

```bash
npm run typecheck  # TypeScript compilation
npm run test         # All tests pass
npm run lint          # Code quality
npm run build         # Production build
```

## Best Practices

### For New Features
1. **Understand context**: Read related code and patterns
2. **Follow existing style**: Match project conventions
3. **Write tests first**: TDD approach
4. **Keep it simple**: Avoid over-engineering
5. **Commit frequently**: Small, logical changes
6. **Document changes**: Add comments and update docs

### For Bug Fixes
1. **Reproduce the bug**: Understand the issue
2. **Write test for bug**: Test that reproduces the issue
3. **Fix the bug**: Make minimal changes
4. **Verify the fix**: Test passes, bug is resolved
5. **Check for regressions**: Related code still works

### For Refactoring
1. **Understand current code**: Know why it needs refactoring
2. **Write tests first**: Ensure existing behavior
3. **Refactor step by step**: Keep tests green
4. **Maintain functionality**: Don't change behavior
5. **Improve structure**: Better code organization

## Anti-Patterns

❌ **DON'T:**
- Skip tests to save time
- Write code without understanding requirements
- Ignore project style conventions
- Make large, monolithic changes
- Skip quality checks
- Commit broken code
- Leave code in worse state

## Related Agents

- **[@planner](planner)** - For planning and coordination
- **[@review](review)** - For code review and verification
- **[@explore](explore)** - For codebase navigation and pattern search
- **[@scout](scout)** - For external research

## Related Skills

- **[Test-Driven Development](../skills/testing/test-driven-development.md)** - TDD workflow
- **[Refactoring](../skills/development/refactoring.md)** - Code restructuring
- **[Error Handling](../skills/development/error-handling.md)** - Exception handling

## Related Commands

- **[/ak_cm_implement](../commands/core/implement.md)** - Implement with TDD workflow
- **[/ak_cm_test](../commands/quick/test.md)** - Run tests
- **[/ak_cm_fix](../commands/quick/fix.md)** - Quick fixes

## Example Workflows

### Feature Development
```bash
# Task: Implement user authentication

# 1. Plan (if needed)
/ak_cm_plan User authentication system

# 2. Use TDD skill
/ak_sk_test-driven-development

# 3. Implement
@build Implement user authentication with OAuth 2.0

# @build will:
# 1. Write failing tests for auth
# 2. Implement auth logic
# 3. Run tests
# 4. Refactor if needed
# 5. Ensure quality
```

### Bug Fix
```bash
# Task: Fix login timeout

# 1. Understand issue
@build Investigate login timeout issue

# 2. Write reproducing test
# @build will write test that reproduces the timeout

# 3. Implement fix
# @build will fix the timeout issue

# 4. Verify fix
# @build will test and verify the fix works
```

## Verification

Before marking work complete:
- [ ] All new tests pass
- [ ] No regressions introduced
- [ ] Type check passes (npm run typecheck)
- [ ] All tests pass (npm run test)
- [ ] Linting passes (npm run lint)
- [ ] Build succeeds (npm run build)
- [ ] Code follows project conventions
- [ ] Code is well-documented
