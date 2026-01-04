---
sidebar_position: 2
description: Complete feature guide for AIKit - visual diagramming, structured workflows, task tracking with quality gates, specialized AI agents, and session management for Claude Code and OpenCode.
keywords: ['Claude Code features', 'AI coding toolkit features', 'Draw.io integration', 'Mermaid diagrams', 'TDD workflow', 'task tracking', 'quality gates', 'AI agents', 'session management', 'code review automation', 'Figma integration']
---

# AIKit Features

**Everything AIKit brings to Claude Code and OpenCode.**

AIKit transforms Claude Code from a powerful AI assistant into a **complete development environment** with visual diagramming, structured workflows, task tracking, and automated quality gates.

---

## <MaterialIcon name="category" className="icon-primary" /> Features Overview

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Visual Diagrams** | Draw.io integration with Mermaid sync | Create diagrams 10x faster |
| **Structured Workflows** | 22 built-in skills | Consistent code quality |
| **Task Tracking** | Beads integration | Never lose track of work |
| **Quality Gates** | Automatic validation | Ship with confidence |
| **AI Agents** | 8 specialized types | Right agent for every job |
| **Session Memory** | Cross-session continuity | Pick up where you left off |
| **Code Review** | Automated reviews | Catch bugs early |
| **Figma Tools** | Design token extraction | Pixel-perfect implementation |

---

## <MaterialIcon name="brush" className="icon-primary" /> 1. Visual Diagrams with Draw.io

**Create diagrams visually - AI generates, you refine.**

### What It Does

- <MaterialIcon name="auto_awesome" className="icon-success" /> Describe in plain English → AI generates Mermaid diagram
- <MaterialIcon name="auto_awesome" className="icon-success" /> Edit visually in Draw.io (drag, drop, connect)
- <MaterialIcon name="auto_awesome" className="icon-success" /> Bidirectional sync with manual control
- <MaterialIcon name="auto_awesome" className="icon-success" /> Version control with Mermaid files

### Key Features

**AI-Generated Diagrams:**
```bash
/drawio-interact create user-authentication
# AI generates: flowchart, sequence diagram, or architecture
# Creates: mermaid/user-authentication.mmd
# Creates: .aikit/assets/drawio/user-authentication.drawio
# Opens Draw.io for visual editing
```

**Manual Sync (Reliable):**
```bash
# After editing in Draw.io, save (Cmd+S/Ctrl+S)
/drawio-interact sync-to-mmd user-authentication
# Updates Mermaid file with changes

# Or edit Mermaid directly
/drawio-interact sync-to-drawio user-authentication
# Updates Draw.io file
```

**Perfect For:**
- <MaterialIcon name="check_circle" className="icon-success" /> System architecture diagrams
- <MaterialIcon name="check_circle" className="icon-success" /> Flowcharts and process diagrams
- <MaterialIcon name="check_circle" className="icon-success" /> API design and sequence diagrams
- <MaterialIcon name="check_circle" className="icon-success" /> Database schema diagrams
- <MaterialIcon name="check_circle" className="icon-success" /> Network topology diagrams

**Why It Matters:**
- **10x faster** than manual Mermaid syntax
- **Visual editing** - no syntax to remember
- **Version controlled** - Mermaid files in git
- **Bidirectional** - Edit in code or visually
- **Reliable** - Deterministic conversions (no AI hallucination)

[Learn more →](commands/design/drawio-interact)

---

## <MaterialIcon name="track_changes" className="icon-primary" /> 2. Structured Workflows (22 Skills)

**Enforce best practices automatically.**

### What It Does

Skills ensure every task follows proven workflows - no shortcuts, no forgotten steps.

### Popular Skills

**Development:**
- **TDD** - Test-driven development (RED → GREEN → REFACTOR)
- **Refactoring** - Code cleanup with quality checks
- **Error Handling** - Robust error management patterns
- **State Management** - React/Redux/state patterns

**Testing:**
- **Unit Testing** - Isolated component tests
- **Integration Testing** - Cross-component tests

**Design:**
- **API Design** - RESTful API best practices
- **Component Design** - React/Next.js component patterns
- **Database Design** - Schema design and relationships

**Review:**
- **Code Review** - Automated quality and security checks
- **Security Audit** - Vulnerability detection

**How It Works:**
```bash
/use_skill "test-driven-development"
> Implement user authentication
# Agent follows TDD workflow automatically:
# 1. Write failing test
# 2. Implement feature
# 3. Refactor code
# 4. Run tests
# Cannot skip steps - workflow enforced
```

**Why It Matters:**
- ✅ Consistent quality across team
- ✅ No forgotten steps
- ✅ Best practices embedded
- ✅ Reduces AI errors

[Explore all 22 skills →](skills/intro)

---

## <MaterialIcon name="task_alt" className="icon-success" /> 3. Task Tracking with Quality Gates

**Ship features with confidence.**

### What It Does

Track every feature, bug fix, and task with automatic quality verification before completion.

### Workflow

```bash
/create Add user authentication
# Creates task in .beads/

/plan authentication system
# Generates implementation plan

/implement
# Updates status to in-progress

/finish
# Runs quality gates:
# ✅ TypeScript type checking
# ✅ All tests pass
# ✅ Linting passes
# ✅ Build succeeds
# Only completes if ALL pass
```

### Quality Gates (Automatic)

**What `/finish` Checks:**
1. **Type checking** - `npm run typecheck` (no errors)
2. **Tests** - `npm run test` (all pass)
3. **Linting** - `npm run lint` (no warnings)
4. **Build** - `npm run build` (succeeds)
5. **Regressions** - No broken tests

**Why It Matters:**
- <MaterialIcon name="block" className="icon-error" /> **Without**: Bugs slip into production, forgotten checks, inconsistent quality
- <MaterialIcon name="check_circle" className="icon-success" /> **With**: Zero surprises, automatic verification, consistent quality

[Learn about Beads →](beads/intro)

---

## <MaterialIcon name="smart_toy" className="icon-primary" /> 4. Specialized AI Agents (8 Types)

**Right agent for the right job.**

### Agent Types

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| **@planner** | Strategic planning | Complex features requiring coordination |
| **@build** | Feature implementation | Standard development work |
| **@rush** | Quick fixes | Hotfixes, urgent bugs |
| **@review** | Code review | Quality checks, security audits |
| **@scout** | External research | Docs, GitHub, npm packages |
| **@explore** | Codebase navigation | Find patterns, understand structure |
| **@vision** | Multimodal analysis | Images, PDFs, diagrams |
| **@one-shot** | Autonomous execution | End-to-end task completion |

### Automatic Delegation

```bash
@planner Design microservices architecture
# @planner analyzes requirements
# Delegates to @scout for research
# Delegates to @build for implementation
# Delegates to @review for verification
# All automatic - no manual coordination needed
```

**Why It Matters:**
- ✅ Optimal agent for every task
- ✅ Automatic delegation
- ✅ Specialized expertise
- ✅ Better quality

[Meet all agents →](agents/intro)

---

## <MaterialIcon name="storage" className="icon-primary" /> 5. Session Continuity & Memory

**Never lose context.**

### What It Does

Capture everything from your development session - files changed, decisions made, progress notes - and restore it instantly when you return.

### Handoff Workflow

```bash
/handoff
# Saves:
# - Modified files
# - Git state (branch, commits)
# - Progress notes
# - Decisions made
# - Next steps

# ... time passes (hours, days, weeks) ...

/resume
# Restores everything
# Continue where you left off
# No "what was I doing?" confusion
```

### Session Tracking

```bash
/session:start "auth-refactor"
# Start named session with goals

/session:update "Implemented OAuth flow"
# Add timestamped progress notes

/session:end
# Creates comprehensive summary
```

**What Gets Saved:**
- ✅ Files modified
- ✅ Git branch and commits
- ✅ Progress notes with timestamps
- ✅ Decisions and reasoning
- ✅ Linked Beads task
- ✅ Next steps and blockers

**Why It Matters:**
- ✅ Seamless collaboration
- ✅ Cross-day/week continuity
- ✅ Team handoffs work perfectly
- ✅ No lost context

[Learn about sessions →](sessions/intro)

---

## <MaterialIcon name="verified_user" className="icon-success" /> 6. Anti-Hallucination System

**Prevent AI from inventing APIs or skipping requirements.**

### 3-Layer Protection

**Layer 1: Task Validation**
- Validates task exists before starting
- Checks `.beads/` directory
- Requires "in-progress" status

**Layer 2: Spec Enforcement**
- Follows `spec.md` constraints
- Naming conventions enforced
- Forbidden patterns blocked

**Layer 3: Review Gates**
- Documents changes in `review.md`
- Records what was skipped
- Verification steps required

**Quality Gates (Hard Requirements):**
```
✓ TypeScript: No type errors
✓ Tests: All tests pass
✓ Lint: No linting errors
✓ Build: Build succeeds
```

**Why It Matters:**
- ✅ Reduces AI errors by 90%
- ✅ Enforces project standards
- ✅ Prevents work on undefined tasks
- ✅ Ensures quality before completion

---

## <MaterialIcon name="build" className="icon-primary" /> 7. Code Review & Security

**Automated code reviews and security audits.**

### Features

**Automated Reviews:**
```bash
/review-codebase src/auth/
# Analyzes code quality
# Checks for bugs
# Identifies security issues
# Suggests improvements
```

**Security Audits:**
- SQL injection detection
- XSS vulnerability checks
- Authentication/authorization review
- Data validation verification
- Dependency vulnerability scanning

**Performance Checks:**
- N+1 query detection
- Memory leak patterns
- Unnecessary re-renders
- Bundle size analysis

**Why It Matters:**
- ✅ Catch bugs before production
- ✅ Security-first development
- ✅ Performance optimization
- ✅ Best practice enforcement

---

## <MaterialIcon name="design_services" className="icon-primary" /> 8. Figma Integration

**Extract design tokens and automate implementation.**

### Workflow

```bash
/analyze-figma https://www.figma.com/design/...
# Extracts:
# - Color palette
# - Typography (fonts, sizes, weights)
# - Spacing system
# - Component library
# - Border radius, shadows, etc.

# Saves to memory for future use
```

**Smart Implementation:**
```typescript
develop_figma_screen(figmaUrl, screenId)
// 1. Checks existing code
// 2. Downloads assets (images, icons)
// 3. Generates implementation plan
// 4. Uses downloaded assets (no placeholders)
// 5. Creates pixel-perfect UI
```

**Why It Matters:**
- ✅ Pixel-perfect implementation
- ✅ Automated asset management
- ✅ Design consistency
- ✅ 10x faster frontend development

---

## <MaterialIcon name="terminal" className="icon-primary" /> 9. Slash Commands (50+ Commands)

**Quick shortcuts for every workflow.**

### Core Workflow Commands

| Command | Purpose |
|---------|---------|
| `/create <task>` | Create tracked task |
| `/plan <feature>` | Generate implementation plan |
| `/implement` | Execute with TDD workflow |
| `/finish` | Complete with quality gates |
| `/handoff` | Save session context |
| `/resume` | Restore from handoff |

### Quick Action Commands

| Command | Purpose |
|---------|---------|
| `/fix <issue>` | Quick fixes |
| `/fix-types` | Fix TypeScript errors |
| `/fix-ci` | Fix CI failures |
| `/commit` | Create conventional commits |
| `/pr` | Create pull request |
| `/test` | Run tests |
| `/lint` | Run linter |

**Why It Matters:**
- ✅ One-command execution
- ✅ Consistent workflows
- ✅ Reduced cognitive load
- ✅ Enforced processes

[All commands →](commands/intro)

---

## <MaterialIcon name="settings_suggest" className="icon-primary" /> 10. MCP Server Integration

**Full Claude Code and OpenCode integration via Model Context Protocol.**

### What It Provides

**Exposes via MCP:**
- All 22 skills (usable from Claude Code)
- All 8 agents (delegation support)
- 50+ commands (run any command)
- Session management (list, read sessions)
- Memory system (read, update memory)
- Task tracking (create, update tasks)

### Configuration

```json
{
  "mcpServers": {
    "aikit": {
      "command": "node",
      "args": ["/path/to/aikit/dist/mcp-server.js"]
    }
  }
}
```

**Why It Matters:**
- ✅ Seamless Claude Code integration
- ✅ Standard protocol (MCP)
- ✅ All AIKit features accessible
- ✅ Automatic tool discovery

---

## <MaterialIcon name="compare_arrows" className="icon-primary" /> Before vs After AIKit

### Without AIKit

```
❌ No workflow enforcement
❌ Inconsistent code quality
❌ Manual quality checks (forgotten 50% of time)
❌ No task tracking
❌ Lost context between sessions
❌ Manual diagram creation (60+ minutes)
❌ Code reviews take 30+ minutes
❌ Onboarding new devs: 2+ weeks
```

### With AIKit

```
✅ 22 structured skills (enforced workflows)
✅ Automatic quality gates (/finish)
✅ Task tracking with Beads
✅ Session continuity (handoffs + resume)
✅ Visual diagrams in 5 minutes (AI-generated)
✅ Automated code reviews (5 minutes)
✅ Onboarding: 3 days (structured workflows)
```

### Impact Metrics

| Metric | Without | With | Improvement |
|--------|---------|------|-------------|
| **Workflow** | Ad-hoc | 22 skills | **100% consistent** |
| **Quality Gates** | Manual | Automatic | **Never forgotten** |
| **Diagrams** | 60+ min | 5 min | **12x faster** |
| **Code Review** | 30+ min | 5 min | **6x faster** |
| **Context Switch** | 10+ min | 0 min | **Seamless** |
| **Onboarding** | 2 weeks | 3 days | **4x faster** |

---

## <MaterialIcon name="tips_and_updates" className="icon-primary" /> Who Should Use AIKit?

### Frontend Developers

<MaterialIcon name="check_circle" className="icon-success" /> Component design patterns
<MaterialIcon name="check_circle" className="icon-success" /> State management workflows
<MaterialIcon name="check_circle" className="icon-success" /> Accessibility enforcement
<MaterialIcon name="check_circle" className="icon-success" /> Performance optimization
<MaterialIcon name="check_circle" className="icon-success" /> **Figma integration** - Design tokens → code

### Backend Developers

<MaterialIcon name="check_circle" className="icon-success" /> API design best practices
<MaterialIcon name="check_circle" className="icon-success" /> Database schema design
<MaterialIcon name="check_circle" className="icon-success" /> Error handling patterns
<MaterialIcon name="check_circle" className="icon-success" /> Security audits
<MaterialIcon name="check_circle" className="icon-success" /> **Architecture diagrams** - System design visualization

### Full-Stack Developers

<MaterialIcon name="check_circle" className="icon-success" /> **Visual diagrams** - Architecture, flows, APIs
<MaterialIcon name="check_circle" className="icon-success" /> TDD workflows
<MaterialIcon name="check_circle" className="icon-success" /> Code refactoring
<MaterialIcon name="check_circle" className="icon-success" /> Quality gates
<MaterialIcon name="check_circle" className="icon-success" /> Session continuity

### Tech Leads & Architects

<MaterialIcon name="check_circle" className="icon-success" /> **Architecture visualization** - Draw.io diagrams
<MaterialIcon name="check_circle" className="icon-success" /> Team workflow standardization
<MaterialIcon name="check_circle" className="icon-success" /> Code review automation
<MaterialIcon name="check_circle" className="icon-success" /> Knowledge management (memory system)

---

## <MaterialIcon name="rocket_launch" className="icon-success" /> Get Started with These Features

### New to AIKit?

1. **[Quick Start Guide](quick-start)** - Get started in 5 minutes
2. **[Installation Guide](installation)** - Detailed setup
3. **[Intro](intro)** - Overview and hot features

### Want to Create Diagrams?

4. **[Draw.io Integration](commands/design/drawio-interact)** - Visual diagram editing
5. **[Design Workflow](commands/design/design)** - Architecture design

### Want Better Code Quality?

6. **[Quality Gates](beads/intro)** - Task tracking with `/finish`
7. **[TDD Workflow](skills/testing/test-driven-development)** - Test-driven development
8. **[Code Review](skills/review/code-review)** - Automated reviews

### Want to Understand AIKit?

9. **[Skills Guide](skills/intro)** - All 22 built-in skills
10. **[Agents Guide](agents/intro)** - Meet the 8 specialized agents
11. **[Commands Reference](commands/intro)** - All 50+ commands

---

## <MaterialIcon name="summarize" className="icon-primary" /> Summary

**AIKit transforms Claude Code into a production-grade development environment with:**

1. <MaterialIcon name="brush" className="icon-primary" /> **Visual Diagrams** - Draw.io integration (10x faster)
2. <MaterialIcon name="track_changes" className="icon-primary" /> **Structured Workflows** - 22 built-in skills
3. <MaterialIcon name="task_alt" className="icon-success" /> **Task Tracking** - Beads integration
4. <MaterialIcon name="verified_user" className="icon-success" /> **Quality Gates** - Automatic validation
5. <MaterialIcon name="smart_toy" className="icon-primary" /> **AI Agents** - 8 specialized types
6. <MaterialIcon name="storage" className="icon-primary" /> **Session Memory** - Cross-session continuity
7. <MaterialIcon name="build" className="icon-primary" /> **Code Review** - Automated reviews
8. <MaterialIcon name="design_services" className="icon-primary" /> **Figma Tools** - Design token extraction
9. <MaterialIcon name="terminal" className="icon-primary" /> **Slash Commands** - 50+ quick shortcuts
10. <MaterialIcon name="settings_suggest" className="icon-primary" /> **MCP Server** - Full Claude Code integration

**Result: Ship better code, faster, with confidence.**

<MaterialIcon name="checkroom" className="icon-primary" /> **Ready to supercharge your development workflow?**

```bash
npm install -g @tdsoft-tech/aikit
aikit init --global
```
