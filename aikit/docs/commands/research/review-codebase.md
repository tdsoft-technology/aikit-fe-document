---
sidebar_position: 3
---

# /review-codebase Command

Review codebase for quality issues, patterns, and improvements.

## Usage

```bash
# Full codebase review
/review-codebase

# Review specific area
/review-codebase --focus authentication

# Quick review
/review-codebase --quick

# Deep review
/review-codebase --depth thorough
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|-----------|-------------|
| `--focus` | string | No | - | Focus review on specific area (authentication, utils, agents, etc.) |
| `--quick` | flag | No | false | Quick review mode (surface level) |
| `--depth` | string | No | medium | Review depth (quick, medium, thorough) |
| `--output` | string | No | console | Output format (console, md, json) |
| `--fix` | flag | No | false | Auto-fix some issues | Auto-fix simple problems |

## Workflow

### 1. Codebase Overview

AIKit reviews:

**Review Scope:**
- All files or focused area
- Code quality metrics
- Pattern consistency
- Security vulnerabilities
- Performance issues
- Test coverage gaps

**Analysis:**
- Code complexity and readability
- Naming conventions
- Consistency and patterns
- Error handling quality
- Testing strategy

### 2. Categorize Findings

**Categories:**
- ✅ Excellent - No issues
- ⚠️ Consideration - Minor issues
- ⛠ Issue - Needs fixing
- 🔴 Critical - Major issue

**Severity Levels:**
- ✅ Excellent: Following best practices
- ⚠️ Consideration: Minor improvements possible
- ⛠ Issue: Bug or anti-pattern
- 🔴 Critical: Security or major quality issue

### 3. Generate Report

Creates structured report with:
- Summary statistics
- File-by-file breakdown
- Issue listing with severity
- Pattern analysis
- Specific recommendations
- Code examples

### 4. Auto-Fix (if --fix)

When `--fix` flag is set, AIKit can:
- Fix simple typos
- Fix basic formatting
- Add missing imports
- Fix obvious type errors
- Remove unused code

## Output Formats

### Console Output

```bash
/review-codebase

# Shows review summary in terminal
```

### Markdown Report

```bash
/review-codebase --output md > code-review-report.md
```

**Generates:**
- Executive summary
- File-by-file findings
- Pattern analysis
- Recommendations
- Before/after comparisons

### JSON Output

```bash
/review-codebase --output json > code-review-report.json
```

**Generates:**
- Machine-readable analysis for tools

## Review Depth

### Quick (Default)

**Focus:**
- Surface-level issues
- Typos and spelling
- Basic formatting
- Missing imports
- Unused variables

**Duration:** ~10-20 minutes for average project

**When to use:**
- Before PR creation
- Regular code quality check
- Quick health check

### Medium

**Includes:**
- Quick analysis plus:
- Code complexity assessment
- Pattern identification
- Basic security scan
- Test coverage estimation

**Duration:** ~30-60 minutes

**When to use:**
- Before major refactoring
- Security review
- Performance assessment

### Thorough

**Includes:**
- All medium analysis plus:
- Deep security audit
- Performance profiling
- Test coverage analysis
- Architecture review
- Documentation review

**Duration:** ~1-2 hours for average project

**When to use:**
- Pre-release review
- Security audit
- Major version planning
- Complete code quality review

## Review Categories

### Code Quality

**Aspects to review:**
- Naming conventions
- Code organization
- Comments and documentation
- Function complexity
- Error handling
- Type safety

### Security

**Aspects to check:**
- Input validation
- SQL injection prevention
- XSS prevention
- Authentication/authorization
- Secret management
- API security
- Dependency vulnerabilities

### Performance

**Aspects to analyze:**
- Algorithm efficiency
- Bundle size impact
- Database query optimization
- Rendering performance
- Memory leaks

### Testing

**Aspects to evaluate:**
- Test coverage percentage
- Test organization
- Mock quality
- Integration test coverage

## Best Practices

### Before Reviewing

✅ **DO:**
- Review recent commits first
- Focus on changed files
- Understand context before critiquing
- Use code review checklist

❌ **DON'T:**
- Review entire codebase at once
- Critique without context
- Ignore documentation when reviewing
- Make assumptions without verification

### During Reviewing

✅ **DO:**
- Focus on actionable improvements
- Provide code examples
- Explain why something is an issue
- Suggest specific fixes
- Be constructive and helpful

❌ **DON'T:**
- Nitpick minor style issues
- Suggest major rewrites
- Critique code you don't understand
- Ignore project conventions
- Make vague recommendations

### After Reviewing

✅ **DO:**
- Prioritize critical issues
- Create action items
- Update documentation
- Follow up on fixes

❌ **DON'T:**
- Leave findings undocumented
- Forget to create action items
- Ignore critical security issues
- Make recommendations without tracking

## Output Examples

### Console Summary

```bash
/review-codebase

# Output:
📊 Codebase Review Report - Authentication Focus

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Files Reviewed: 8 files
📋 Total Lines: 842

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Quality Score: 78/100 (Good)

🔴 Issues Found: 3 critical, 5 minor
✅ Strengths: 7

📋 Patterns Identified: 3 patterns

💡 Recommendations: 5 actionable items
```

### Markdown Report File

```bash
/review-codebase --output md > code-review.md

# code-review.md contents:
# Summary statistics
# File-by-file review
# Issue listings
# Recommendations
```

## Related Commands

- **[/analyze-project](../analyze-project.md)** - Project analysis
- **[/research](../research/research.md)** - External research

## Related Skills

- **[Code Review](../../skills/review/code-review.md)** - Code review workflow
- **[Security Audit](../../skills/review/security-audit.md)** - Security review
- **[API Design](../../skills/development/api-design.md)** - API patterns
- **[Systematic Debugging](../../skills/debugging/systematic-debugging.md)** - Debug patterns

## Related Documentation

- **[Code Quality](../../documentation/) - Code quality guidelines
- **[Architecture](../../advanced/memory.md) - Architecture documentation
- **[Advanced Configuration](../../advanced/configuration.md) - Configuration system

## Next Steps

- **[Critical Issues](#)** - Fix security vulnerabilities immediately
- **[Create Action Plan](#)** - Plan improvements
- **[Document Findings](#)** - Save review to memory
