---
sidebar_position: 4
---

# Review Agent

## Overview

**@review** is a code review and quality assurance agent responsible for debugging issues, finding bugs, conducting security audits, performance analysis, and enforcing best practices.

## When to Use

Use @review when:
- Reviewing code quality
- Finding bugs
- Security auditing
- Performance analysis
- Checking for best practices
- Debugging complex issues

## Capabilities

- Code review
- Security audit
- Performance analysis
- Bug finding
- Best practices enforcement

## Use Cases

### Code Review
```bash
@review Review the authentication implementation

# @review will:
# 1. Check code correctness
# 2. Identify potential issues
# 3. Suggest improvements
# 4. Check for security vulnerabilities
# 5. Verify best practices
```

### Security Audit
```bash
@review Audit the payment processing code

# @review will:
# 1. Check for security vulnerabilities
# 2. Validate input sanitization
# 3. Review authentication/authorization
# 4. Check for sensitive data exposure
# 5. Verify secure coding practices
```

### Performance Analysis
```bash
@review Analyze the dashboard performance

# @review will:
# 1. Identify performance bottlenecks
# 2. Check for inefficient algorithms
# 3. Review unnecessary re-renders
# 4. Suggest optimizations
# 5. Check bundle size impact
```

### Bug Finding
```bash
@review Find the source of the login bug

# @review will:
# 1. Investigate the issue systematically
# 2. Review related code
# 3. Identify root cause
# 4. Suggest fix approach
# 5. Verify other areas not affected
```

## Review Checklist

### Code Quality

- [ ] Code is correct and functional
- [ ] Follows project conventions
- [ ] No obvious bugs or typos
- [ ] Proper error handling
- [ ] Good variable/function naming
- [ ] Appropriate comments

### Security

- [ ] No security vulnerabilities
- [ ] Input validation in place
- [ ] Authentication/authorization correct
- [ ] No hardcoded secrets
- [ ] Proper error messages (no info leakage)
- [ ] SQL injection prevention
- [ ] XSS prevention

### Performance

- [ ] No obvious performance issues
- [ ] Efficient algorithms used
- [ ] No unnecessary re-renders
- [ ] Appropriate caching
- [ ] Minimal DOM manipulation

### Best Practices

- [ ] Single responsibility principle
- [ ] DRY (Don't Repeat Yourself)
- [ ] SOLID principles followed
- [ ] Good error handling
- [ ] Proper logging
- [ ] Type safety

## Anti-Patterns

❌ **DON'T:**
- Review without understanding context
- Provide only generic feedback
- Miss security vulnerabilities
- Suggest over-engineering
- Ignore project conventions
- Skip edge case analysis

## Review Process

### 1. Understand Context

- Read the PR or code changes
- Understand the requirements
- Check related code and patterns
- Review existing issues or tickets

### 2. Systematic Review

- Go through code systematically
- Check each component/function
- Look for common issues
- Consider edge cases

### 3. Specific Feedback

- Be specific about issues
- Provide exact line numbers or code snippets
- Explain why something is wrong
- Suggest concrete improvements

### 4. Prioritize Issues

- **Critical**: Must fix before merge
- **High**: Should fix soon
- **Medium**: Nice to have
- **Low**: Minor improvements

### 5. Verify Fixes

- Ensure proposed fixes work
- Check for unintended side effects
- Verify no new issues introduced

## Security Review

### Common Vulnerabilities

#### SQL Injection
```typescript
// ❌ Vulnerable
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ Secure
const query = `SELECT * FROM users WHERE id = ?`;
db.execute(query, [userId]);
```

#### XSS (Cross-Site Scripting)
```typescript
// ❌ Vulnerable
const content = `<div>${userInput}</div>`;

// ✅ Secure
const content = `<div>{escape(userInput)}</div>`;
```

#### Authentication Bypass
```typescript
// ❌ Vulnerable
if (user.role === 'admin') {
  grantFullAccess(user);
}

// ✅ Secure
if (user.role === 'admin' && verifyAdminSession(user)) {
  grantFullAccess(user);
}
```

## Performance Review

### Common Issues

#### N+1 Queries
```sql
-- ❌ Inefficient: Multiple queries
SELECT * FROM users WHERE id IN (1, 2, 3, ...);

-- ✅ Efficient: Single query with JOIN
SELECT * FROM users WHERE id IN (SELECT user_id FROM active_users);
```

#### Unnecessary Re-renders
```typescript
// ❌ Causes re-renders
function Parent() {
  const [value, setValue] = useState(0);
  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }) {
  return <SubComponent value={value} onChange={onChange} />;
}

// ✅ Memoized
const Child = React.memo(function Child({ value, onChange }) {
  return <SubComponent value={value} onChange={onChange} />;
});
```

## Best Practices

### Code Review

✅ **DO:**
- Be constructive and specific
- Focus on code quality and correctness
- Consider security implications
- Suggest practical improvements
- Verify no new bugs introduced

❌ **DON'T:**
- Be overly critical
- Focus on style over substance
- Suggest rewrites without reason
- Nitpick minor issues
- Ignore actual problems

### Feedback Format

```markdown
## Issue: [Clear, specific description]

**Location**: [File:line numbers]

**Problem**: [Explain what's wrong]

**Example**:
```typescript
// ❌ Current code
function authenticate(email, password) {
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  // ...
}

// ✅ Suggested fix
function authenticate(email, password) {
  const query = `SELECT * FROM users WHERE email = $1`;
  db.execute(query, [email]);
  // ...
}
```

**Explanation**: [Why the change is needed]

**Impact**: [Critical/High/Medium/Low]
```

## Related Agents

- **[@planner](planner.md)** - For planning review tasks
- **[@build](build.md)** - For implementing fixes
- **[@scout](scout.md)** - For researching best practices

## Related Skills

- **[Code Review](../skills/review/code-review.md)** - Code review workflow
- **[Security Audit](../skills/review/security-audit.md)** - Security vulnerabilities

## Related Commands

- **[/ak_cm_review-codebase](../commands/research/review-codebase.md)** - Review codebase
- **[/ak_cm_test](../commands/quick/test.md)** - Run tests after review

## Example Workflows

### Full Code Review
```bash
@review Review PR #123: User authentication

# @review will provide:
# 1. Overall assessment (Good / Needs Changes / Reject)
# 2. Detailed feedback with line-by-line issues
# 3. Security analysis
# 4. Performance assessment
# 5. Best practices check
# 6. Specific improvement suggestions
```

### Security-Focused Review
```bash
@review Audit payment processing for security

# @review will check:
# 1. Input validation and sanitization
# 2. Authentication and authorization
# 3. Sensitive data handling
# 4. API security (rate limiting, CORS)
# 5. Database security (SQL injection)
# 6. Logging (no sensitive data in logs)
```

### Performance Review
```bash
@review Analyze dashboard load time

# @review will check:
# 1. Bundle size and composition
# 2. Rendering performance (re-renders)
# 3. Network requests (number and size)
# 4. Database query efficiency
# 5. Memory usage
# 6. Suggest optimizations
```

## Verification

Before marking review complete:
- [ ] All issues documented with specifics
- [ ] Priorities assigned (Critical/High/Medium/Low)
- [ ] Suggestions provided for all issues
- [ ] Security audit complete
- [ ] Performance analysis done
- [ ] Best practices checked
- [ ] Overall assessment provided
