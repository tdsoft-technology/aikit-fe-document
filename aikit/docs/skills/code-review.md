---
sidebar_position: 7
---

# Code Review

Systematic review for code quality, security, and best practices.

## When to Use

Use this skill when:
- Reviewing pull requests
- Checking code for issues
- Auditing code quality
- Security review

## Workflow

### Step 1: Understand Context

- What is this code supposed to do?
- What feature/bug is it addressing?
- Are there related tests?
- Any performance requirements?

### Step 2: Review for Correctness

**Check:**
- [ ] Logic is correct
- [ ] Edge cases handled
- [ ] Error handling is appropriate
- [ ] Return types are correct

### Step 3: Review for Security

**Check:**
- [ ] No SQL injection
- [ ] No XSS vulnerabilities
- [ ] No hardcoded secrets
- [ ] Proper authentication/authorization
- [ ] Input validation on all inputs
- [ ] Output encoding

### Step 4: Review for Performance

**Check:**
- [ ] No unnecessary computations
- [ ] Efficient algorithms
- [ ] Proper database queries (N+1 issues)
- [ ] Caching where appropriate
- [ ] No memory leaks

### Step 5: Review for Maintainability

**Check:**
- [ ] Clear naming
- [ ] Appropriate abstractions
- [ ] No code duplication
- [ ] Comments for complex logic
- [ ] Consistent style

### Step 6: Review for Testing

**Check:**
- [ ] Tests cover happy path
- [ ] Tests cover edge cases
- [ ] Tests cover error cases
- [ ] Tests are readable
- [ ] No test duplication

## Review Checklist

```markdown
## Correctness
- [ ] Logic correct
- [ ] Edge cases handled
- [ ] Error handling appropriate

## Security
- [ ] No injection vulnerabilities
- [ ] No hardcoded secrets
- [ ] Input validation present
- [ ] Output encoding used

## Performance
- [ ] Efficient algorithms
- [ ] No N+1 queries
- [ ] Caching where needed

## Maintainability
- [ ] Clear naming
- [ ] No duplication
- [ ] Appropriate complexity
- [ ] Comments where needed

## Testing
- [ ] Adequate coverage
- [ ] Tests are meaningful
- [ ] No test duplication
```

## Related

- **[Systematic Debugging](systematic-debugging)** - Find bugs
- **[Security Audit](security-audit)** - Security-focused review
