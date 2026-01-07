---
sidebar_position: 2
---

# /analyze-project Command

Analyze project structure, architecture, and patterns.

## Usage

```bash
# Analyze full project
/analyze-project

# Analyze specific area
/analyze-project --focus authentication
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|-----------|-------------|
| `--focus` | string | No | - | Focus analysis on specific area (authentication, state, routing, etc.) |
| `--depth` | string | No | medium | Analysis depth (quick, medium, thorough) |
| `--output` | string | No | console | Output format (console, md, json) |

## Workflow

### 1. Project Overview

AIKit analyzes:

**Directory Structure:**
- Identify top-level directories
- Map module boundaries
- Note entry points (main.tsx, index.html, etc.)

**Technology Stack:**
- Frameworks and libraries used
- Build system and configuration
- State management approach
- API framework
- Testing framework

**Architecture Patterns:**
- Module organization
- Component structure
- Data flow patterns
- Dependency injection patterns
- Configuration approach

### 2. Code Patterns

**Identify patterns:**
- Naming conventions
- Code organization
- Common utilities and helpers
- Error handling patterns
- State management patterns
- API design patterns

**Document anti-patterns:**
- Code smells found
- Inconsistent patterns
- Security issues
- Performance concerns

### 3. Dependencies

**Analyze:**
- External dependencies (npm packages)
- Internal dependencies between modules
- Service dependencies (APIs, databases)

**Document:**
- Dependency graph
- Usage patterns
- Version constraints

### 4. Build System

**Analyze:**
- Build configuration
- Build scripts
- Build time and performance
- Optimization opportunities

### 5. Data Flow

**Trace:**
- User requests → API routes
- Data access patterns
- State updates
- External service calls

**Document:**
- Data models and schemas
- API endpoint mappings
- Cache strategy

### 6. Testing Approach

**Identify:**
- Unit test coverage
- Integration test strategy
- E2E testing approach
- Mocking strategy

**Document:**
- Test file organization
- Test conventions
- CI/CD integration

## Output Formats

### Console Output

```bash
/analyze-project

# Shows structured analysis in terminal
```

### Markdown Report

```bash
/analyze-project --output md > project-analysis.md
```

**Generates:**
- Table of contents
- Architecture diagram suggestions
- Code pattern examples
- Recommendations

### JSON Output

```bash
/analyze-project --output json
```

**Generates:**
- Structured JSON with all findings
- Machine-readable analysis

## Examples

### Full Project Analysis

```bash
# Comprehensive analysis
/analyze-project --depth thorough --output md

# Creates: project-analysis.md with complete report
```

### Focused Analysis

```bash
# Analyze authentication system
/analyze-project --focus authentication

# Creates: auth-analysis.md with specific findings
```

### Quick Analysis

```bash
# Fast overview
/analyze-project --depth quick

# Creates: quick-analysis.md with high-level findings
```

## Analysis Depth

### Quick (Default)
- Scan directory structure
- Identify tech stack
- Note obvious patterns
- Duration: ~2-5 minutes

**When to use:**
- Initial project familiarization
- Getting quick overview
- Before making major changes

### Medium
- All quick analysis plus:
- Code pattern identification
- Dependency analysis
- Architecture patterns
- Duration: ~10-20 minutes

**When to use:**
- Understanding complex codebase
- Before architectural decisions
- Onboarding new team members

### Thorough
- In-depth code review including:
- Security audit
- Performance analysis
- Testing review
- Documentation completeness
- Duration: ~30-60 minutes

**When to use:**
- Pre-refactoring planning
- Security audit
- Performance optimization
- Complete documentation review

## Analysis Focus Areas

### Authentication

```bash
# Analyze authentication system
/analyze-project --focus authentication
```

**Analyzes:**
- Authentication flow and patterns
- Token management strategy
- Security best practices
- Password hashing approach
- Session management

### State Management

```bash
# Analyze state management
/analyze-project --focus state
```

**Analyzes:**
- State libraries and approach
- Data flow patterns
- Update mechanisms
- Performance considerations

### API Layer

```bash
# Analyze API structure
/analyze-project --focus api
```

**Analyzes:**
- API organization and routing
- Data models and validation
- Error handling strategy
- Rate limiting approach

### Component Architecture

```bash
# Analyze components
/analyze-project --focus components
```

**Analyzes:**
- Component organization
- Reusability patterns
- State management
- Props and events
- Composition patterns

## Best Practices

### Before Analyzing

✅ **DO:**
- Clean git state (no uncommitted changes)
- Run tests and linting
- Review documentation first
- Define analysis goals
- Take notes during analysis

❌ **DON'T:**
- Analyze with uncommitted changes
- Skip documentation review
- Analyze without clear goal
- Make assumptions without verification

### During Analyzing

✅ **DO:**
- Use multiple analysis depths as needed
- Document findings as you go
- Ask clarifying questions
- Verify assumptions with code inspection
- Focus on actionable insights

❌ **DON'T:**
- Make assumptions without verification
- Focus on minor issues
- Ignore architecture
- Critique style without reason

### After Analyzing

✅ **DO:**
- Create summary report
- Save findings to memory
- Update documentation
- Suggest improvements
- Prioritize recommendations

❌ **DON'T:**
- Leave findings undocumented
- Make assumptions without noting them
- Ignore critical issues
- Over-engineer recommendations

## Analysis Output

### Example Console Output

```bash
/analyze-project

# Output:
📊 Project Analysis Report

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏗️ Project: AIKit v0.1.17
📁 Root: /Users/phannguyenthanhduy/code/TDSolution/aikit/aikit
📦 Total Files: 1,247
📦 Total Lines: 124,834

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 Technology Stack:
- TypeScript
- React
- Node.js
- Express.js
- Commander.js

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📂 Architecture:
- CLI Tool
- MCP Server
- Plugin System
- Agent System
- Tool/Command Layer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Key Findings:
✅ Well-organized module structure
✅ Clear separation of concerns
✅ Consistent naming conventions
⚠️ Some tightly coupled components
⚠️ Limited test coverage in utils/

💡 Recommendations:
1. Extract utility functions for reuse
2. Increase test coverage in utils
3. Consider dependency injection for tight coupling
4. Document utils module publicly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 Patterns Identified:
- Tool pattern for command execution
- Agent delegation pattern
- Memory access pattern
- MCP tool registration pattern
- Configuration loading pattern

```

### Example Markdown Report

```bash
# Generate markdown report
/analyze-project --output md > project-analysis.md

# project-analysis.md contents:
# Table of contents
# Architecture diagram
# Code patterns
# Recommendations
```

## Related Commands

- **[/research](../research/research.md)** - External research
- **[/review-codebase](../review/review-codebase.md)** - Code review
- **[/design](../design/design.md)** - Design architecture

## Related Skills

- **[API Design](../../skills/development/api-design.md)** - API architecture
- **[Systematic Debugging](../../skills/debugging/systematic-debugging.md)** - Debug patterns
- **[Code Review](../../skills/review/code-review.md)** - Review findings
- **[Performance Optimization](../../skills/development/performance-optimization.md)** - Performance patterns

## Related Documentation

- **[Architecture](../../advanced/memory.md)** - Project architecture
- **[Documentation](../../skills/documentation/documentation.md)** - Document findings
- **[Advanced Configuration](../../advanced/configuration.md)** - Configuration system

## Next Steps

- **[Save Findings](#)` - `> memory_update("research/project-analysis", finded)`

- **[Document Architecture](#)** - Update documentation
- **[Create Action Plan](#)** - Implement recommendations
