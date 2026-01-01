---
sidebar_position: 1
---

# Agents

AIKit provides **8 specialized AI personas** optimized for different types of development tasks. Each agent has specific capabilities and can delegate to other agents when needed.

## Agent Types

| Agent | Purpose | Delegates To |
|--------|----------|---------------|
| `@planner` | Strategic planning & coordination | @build, @scout, @review, @explore, @vision |
| `@build` | Implementation & code changes | @review, @explore |
| `@rush` | Quick fixes & simple edits | None |
| `@review` | Code review, security, debugging | None |
| `@scout` | External research (docs, GitHub, frameworks) | None |
| `@explore` | Codebase navigation & pattern search | None |
| `@vision` | Visual analysis (mockups, PDFs, diagrams) | None |
| `@one-shot` | End-to-end autonomous execution | All agents |

## How to Use Agents

### Automatic Selection

AIKit automatically selects the best agent:

```bash
> Implement user authentication
# Uses @build agent

> Plan authentication system
# Uses @planner agent

> Research JWT patterns
# Uses @scout agent
```

### Explicit Selection

Specify the agent directly:

```bash
@planner Design authentication system
@build Implement the plan
@review Check the code
```

### Agent Delegation

Agents automatically delegate when needed:

```bash
> @planner Design authentication system
# @planner delegates to @scout to research patterns
# Then delegates to @build to implement
# Finally delegates to @review to verify
```

## Default Agent

The default agent is `@build`. You can change this in `.aikit/aikit.json`:

```json
{
  "agents": {
    "default": "planner"
  }
}
```

## Agent Descriptions

### @planner

**Use for:** Complex tasks requiring architecture decisions and multi-step planning.

**Capabilities:**
- Break down complex tasks
- Coordinate between specialist agents
- Make architecture decisions
- Create implementation plans

**Delegates to:** @build, @scout, @review, @explore, @vision

### @build

**Use for:** Implementing features, writing code, making changes.

**Capabilities:**
- Write production code
- Write tests
- Refactor code
- Fix bugs
- Implement features

**Delegates to:** @review, @explore

### @rush

**Use for:** Quick fixes, hotfixes, simple edits.

**Capabilities:**
- Quick bug fixes
- Simple refactoring
- Minor changes
- Hotfixes

**Delegates to:** None (direct execution)

### @review

**Use for:** Reviewing code quality, finding bugs, security reviews.

**Capabilities:**
- Code review
- Security audit
- Performance analysis
- Bug finding
- Best practices enforcement

**Delegates to:** None

### @scout

**Use for:** Researching external libraries, GitHub patterns, frameworks.

**Capabilities:**
- Web research
- GitHub code search
- Documentation lookup
- Framework exploration
- Best practices research

**Delegates to:** None

### @explore

**Use for:** Finding files, understanding codebase structure, searching patterns.

**Capabilities:**
- File discovery
- Pattern search
- Codebase navigation
- Structure analysis
- Dependency mapping

**Delegates to:** None

### @vision

**Use for:** Analyzing images, mockups, screenshots, PDFs, diagrams.

**Capabilities:**
- Image analysis
- Mockup interpretation
- PDF extraction
- Diagram understanding
- UI/UX analysis

**Delegates to:** None

### @one-shot

**Use for:** Complete tasks autonomously from start to finish.

**Capabilities:**
- Interactive requirements gathering
- Detailed implementation planning
- Dynamic agent selection
- Parallel task execution
- Multi-level verification
- Auto-recovery from failures

**Delegates to:** @planner, @build, @review, @scout, @explore, @vision

## List All Agents

```bash
aikit agents list
```

## Next Steps

- **[Skills](../skills/intro)** - Learn about skills
- **[Commands](../commands/intro)** - All slash commands
- **[Tools](../tools/intro)** - Built-in tools
