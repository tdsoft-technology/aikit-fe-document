---
sidebar_position: 2
---

# Memory System

AIKit's memory system provides persistent knowledge storage across sessions, allowing you to build up a knowledge base and maintain context between development sessions.

## Overview

Memory system stores structured information in markdown files, organized by category and accessible throughout your work.

## Memory Structure

```
.aikit/memory/
├── observations/           # Project observations and learnings
│   ├── project-patterns.md
│   ├── auth-patterns.md
│   └── debugging-notes.md
├── handoffs/              # Session handoffs between sessions
│   ├── 2026-01-02-1430.md
│   ├── 2026-01-03-1000.md
│   └── ...
└── research/              # External research findings
    ├── library-docs/
    ├── best-practices/
    ├── api-patterns/
    └── github-patterns/
└── plans/                 # Implementation plans
    ├── task-plans/
    ├── architecture-decisions/
    └── roadmap/
```

## Memory Tools

### Reading Memory

```bash
# Read from memory
> memory-read("observations/project-patterns")

# CLI command
aikit memory read observations/project-patterns
```

### Updating Memory

```bash
# Update memory (append by default)
> memory_update("observations/project-patterns", "New finding: Use JWT with refresh tokens")

# Update memory (overwrite)
> memory_update("observations/project-patterns", "Revised: Always use refresh tokens", "overwrite")

# Update memory (prepend)
> memory_update("observations/project-patterns", "NOTE: This is critical", "prepend")

# CLI command
aikit memory update observations/project-patterns "New finding: ..."
```

### Memory Modes

| Mode | Description | Use Case |
|-------|-------------|---------|
| `append` (default) | Add content to end | Adding new observations |
| `overwrite` | Replace entire content | Updating outdated information |
| `prepend` | Add content to beginning | Critical notes at top |

## Memory Categories

### Observations

Store project-specific observations, patterns, and learnings.

**Examples:**
- Code patterns discovered
- Architecture decisions
- Performance learnings
- Debugging solutions
- Common issues and resolutions

**Template:**
```markdown
---
id: "auth-patterns-001"
title: "Authentication Patterns"
created: "2026-01-02T14:30:00Z"
---

# Authentication Patterns

## JWT Token Management

Always use JWT with refresh token pattern:
- Access tokens expire in 1 hour
- Refresh tokens expire in 7 days
- Store refresh tokens in httpOnly cookies

## Password Security

- Never store plain text passwords
- Use bcrypt for hashing
- Minimum 8 characters for passwords

## Best Practices

- Implement rate limiting
- Use HTTPS for all endpoints
- Validate tokens on each request
```

### Handoffs

Store handoffs between development sessions for continuity.

**Content:**
- Goals completed
- In-progress work
- Current git state
- Blocked issues
- Next steps
- Context for next session

**Template:**
```markdown
---
id: "2026-01-02-1430"
name: "Authentication Refactor"
sessionStart: "2026-01-02T14:30:00Z"
sessionEnd: "2026-01-02T17:00:00Z"
duration: "2h 30m"

# Completed Work
- [x] Refactor OAuth 2.0 flow
- [x] Add JWT support

# In-Progress Work
- [ ] Fix authentication bugs
- [ ] Add error handling

# Git State
Branch: feature/auth
Last Commit: abc1234
Modified Files: 12 files

# Next Steps
- Complete bug fixes
- Add error handling
- Run full test suite
- Create PR for review
```

### Research

Store external research, documentation, and best practices.

**Examples:**
- Library documentation findings
- GitHub code examples
- Best practice articles
- API patterns

**Template:**
```markdown
---
id: "jwt-best-practices"
title: "JWT Best Practices"
source: "https://jwt.io/introduction"
date: "2026-01-02T10:15:00Z"
---

# JWT Best Practices

## Token Storage

- Store in httpOnly cookies
- Use short expiration (15-30 minutes)
- Implement refresh token rotation

## Security

- Always use HTTPS
- Validate token signatures
- Implement token revocation
- Use strong secret keys
```

### Plans

Store implementation plans, architecture decisions, and roadmaps.

**Template:**
```markdown
---
id: "user-auth-plan"
title: "User Authentication Implementation Plan"
created: "2026-01-02T10:00:00Z"
status: "planned"

# Phase 1: Planning
- [ ] Define requirements
- [ ] Research JWT libraries
- [ ] Choose architecture

# Phase 2: Implementation
- [ ] Implement login endpoint
- [ ] Add JWT generation
- [ ] Add token validation
- [ ] Create refresh mechanism

# Phase 3: Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] Security audit

# Phase 4: Deployment
- [ ] Deploy to staging
- [ ] Monitor performance
- [ ] Test in production

# Timeline
- Phase 1: 1-2 days
- Phase 2: 3-5 days
- Phase 3: 2-3 days
- Phase 4: 1-2 days
```

## Best Practices

### Memory Organization

✅ **DO:**
- Use consistent file naming
- Add metadata (id, title, created)
- Organize by category
- Update regularly
- Keep entries concise and focused
- Add timestamps
- Cross-reference related entries

❌ **DON'T:**
- Store duplicate information
- Leave outdated entries
- Mix different topics in one file
- Skip metadata
- Create overly long files

### Memory Quality

**Good entries:**
- Clear and specific
- Include examples and code snippets
- Provide context and rationale
- Link to related resources
- Include date for relevance

**Poor entries:**
- Vague or generic
- Missing context or examples
- Outdated information
- Duplicate content
- Unorganized or hard to find

### Memory Search

When using memory:

```bash
# Search for patterns
grep -r "authentication" .aikit/memory/

# Find specific entry
grep -r "jwt" .aikit/memory/research/jwt-best-practices.md

# Browse observations
ls -la .aikit/memory/observations/
```

## Related Documentation

- **[Tools](../tools/introl.md)** - Memory tools and commands
- **[Session Management](../sessions/introl.md)** - Session handoffs
- **[Advanced Configuration](../../advanced/configuration.md)** - Memory configuration
