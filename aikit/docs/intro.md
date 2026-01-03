---
sidebar_position: 1
description: AIKit - Supercharge Claude Code with structured workflows, visual diagramming, task tracking, and quality gates. The open-source AI coding agent toolkit for professional developers.
keywords: ['Claude Code', 'AI coding agent', 'AI development toolkit', 'Claude AI assistant', 'task tracking', 'quality gates', 'AI workflows', 'diagramming tool', 'Mermaid', 'Draw.io integration', 'TDD workflow', 'code review automation']
---

# Welcome to AIKit

**Transform Claude Code into a production-grade development environment.**

AIKit is an open-source toolkit that supercharges **Claude Code** (Anthropic's official CLI) and **OpenCode** with structured workflows, visual diagramming, task tracking, and automated quality gates. Built for developers who want reliable, repeatable AI-powered development.

---

## <MaterialIcon name="auto_awesome" className="icon-primary" /> Hot Features

### <MaterialIcon name="brush" className="icon-primary" /> Interactive Diagrams with Draw.io

**Create and edit diagrams visually - AI generates, you refine.**

```bash
/drawio-interact create user-authentication
# AI generates diagram → opens in Draw.io → edit visually
/drawio-interact sync-to-mmd user-authentication
# Sync back to Mermaid code for version control
```

**Why developers love it:**
- ✅ Describe in plain English → AI generates diagrams instantly
- ✅ Edit visually with drag-drop (no Mermaid syntax needed)
- ✅ Bidirectional sync with manual control (reliable, not flaky)
- ✅ Version control with Mermaid files
- ✅ Works offline with Draw.io desktop app

**Perfect for:** Architecture diagrams, flowcharts, API design, system design, database schemas

[Learn more →](commands/design/drawio-interact)

---

### <MaterialIcon name="track_changes" className="icon-primary" /> Structured Workflows (22 Built-in Skills)

**Stop leaving quality to chance.** Enforce best practices automatically.

```bash
/use_skill "test-driven-development"
Implement user authentication
# Agent follows: RED → GREEN → REFACTOR
```

**Popular Skills:**
- **TDD** - Automatic test-driven development workflow
- **Refactoring** - Code cleanup with quality checks
- **Error Handling** - Robust error management patterns
- **Code Review** - Automated security and quality audits
- **API Design** - RESTful API best practices
- **Component Design** - React/Next.js component patterns

**Result:** Consistent code quality across your entire team.

[Explore all 22 skills →](skills/intro)

---

### <MaterialIcon name="task_alt" className="icon-success" /> Task Tracking with Quality Gates

**Ship features with confidence.** Every task gets tracked, tested, and verified.

```bash
/create Add user authentication
/plan authentication system
/implement
/finish  # Runs: typecheck → test → lint → build
```

**What /finish checks:**
- ✅ TypeScript type checking passes
- ✅ All tests pass (unit + integration)
- ✅ Linting passes (ESLint/Prettier)
- ✅ Build succeeds
- ✅ No regressions introduced

**Result:** Zero surprises in production.

[Learn about Beads →](beads/intro)

---

### <MaterialIcon name="smart_toy" className="icon-primary" /> Specialized AI Agents (8 Types)

**Right agent for the right job.** Automatic delegation for complex tasks.

```bash
@planner Design microservices architecture
# Delegates to @scout for research
# Delegates to @build for implementation
# Delegates to @review for verification
```

**Available Agents:**
- **@planner** - Strategic planning & coordination
- **@build** - Feature implementation
- **@rush** - Quick fixes (hotfix mode)
- **@review** - Code review & security audits
- **@scout** - External research (docs, GitHub, npm)
- **@explore** - Fast codebase navigation
- **@vision** - Multimodal (images, PDFs, diagrams)
- **@one-shot** - End-to-end autonomous execution

[Meet the agents →](agents/intro)

---

### <MaterialIcon name="storage" className="icon-primary" /> Session Continuity & Memory

**Never lose context.** Pick up exactly where you left off.

```bash
/handoff
# Saves: files changed, git state, progress notes, decisions
# ... time passes ...
/resume
# Loads everything back - continue seamlessly
```

**What gets saved:**
- Modified files and git state
- Progress notes and decisions made
- Linked Beads task context
- Branch and commit information
- Next steps and blockers

**Result:** Seamless collaboration across days, weeks, or team members.

[Learn about sessions →](sessions/intro)

---

## <MaterialIcon name="local_fire_department" className="icon-warning" /> What Makes AIKit Different

### Before AIKit

```
❌ No structure - AI does whatever it wants
❌ No tracking - What did we work on yesterday?
❌ No quality gates - Bugs slip into production
❌ No continuity - Start from scratch every session
❌ No memory - Decisions get forgotten
❌ Manual checks - Did you run tests? Lint? Typecheck?
```

### After AIKit

```
✅ Structured workflows - Enforced best practices
✅ Task tracking - Know exactly what's being worked on
✅ Quality gates - Automatic verification in /finish
✅ Session continuity - Resume across sessions
✅ Persistent memory - Handoffs capture everything
✅ One command - /finish runs all quality checks
```

---

## <MaterialIcon name="bolt" className="icon-primary" /> Quick Wins in 5 Minutes

### 1. Ship Code with Quality Gates

```bash
/implement
# AI writes code with TDD workflow
/finish
# Automatically: typecheck → test → lint → build
```

**Time saved:** 15 minutes per feature (no manual checks)

### 2. Create Architecture Diagrams

```bash
/drawio-interact create microservices-architecture
# Edit in Draw.io, save
/drawio-interact sync-to-mmd microservices-architecture
```

**Time saved:** 30 minutes (no manual Mermaid syntax)

### 3. Resume Yesterday's Work

```bash
/session:current
# See what you were working on
/session:show <session-id>
# Load full context with /resume
```

**Time saved:** 10 minutes (no "what was I doing?" confusion)

---

## <MaterialIcon name="bar_chart" className="icon-primary" /> By The Numbers

| Metric | Without AIKit | With AIKit |
|--------|---------------|------------|
| **Workflow Enforcement** | Ad-hoc | 22 structured skills |
| **Quality Gates** | Manual (forgotten 50% of time) | Automatic (100%) |
| **Session Continuity** | None | Full context handoffs |
| **Task Tracking** | Mental/external tools | Built-in Beads integration |
| **Code Review Time** | 30+ minutes | 5 minutes (automated) |
| **Diagram Creation** | 60+ minutes | 5 minutes (AI-generated) |
| **Onboarding New Devs** | 2+ weeks | 3 days (structured workflows) |

---

## <MaterialIcon name="gps_fixed" className="icon-primary" /> What AIKit Solves

### Problem 1: Inconsistent AI Output

**Issue:** Claude Code gives different answers each time, skips steps, forgets best practices.

**Solution:** 22 built-in skills enforce structured workflows (TDD, refactoring, error handling).

### Problem 2: No Quality Enforcement

**Issue:** Bugs slip through because someone forgot to run tests/lint/typecheck.

**Solution:** `/finish` command runs automatic quality gates before shipping.

### Problem 3: Lost Context Between Sessions

**Issue:** "What were we working on yesterday?" → Wasted time re-learning context.

**Solution:** Session handoffs capture everything - files, git state, decisions, next steps.

### Problem 4: Manual Diagram Creation is Slow

**Issue:** Creating Mermaid diagrams requires learning syntax, takes forever.

**Solution:** Describe it → AI generates → Edit visually in Draw.io → Sync back to code.

### Problem 5: No Task Visibility

**Issue:** "Is feature X done? What's blocking Y?" → No clear answer.

**Solution:** Beads task tracking shows status, blockers, and quality gate results.

---

## <MaterialIcon name="build" className="icon-primary" /> Complete Feature List

- **22 Built-in Skills** - TDD, refactoring, debugging, API design, component design, database design, security audits, and more
- **8 Specialized Agents** - Planner, Builder, Rush, Reviewer, Scout, Explorer, Vision, One-Shot
- **50+ Slash Commands** - Quick shortcuts for every workflow
- **Task Tracking** - Beads integration with quality gates
- **Session Management** - Track work across sessions with handoffs
- **Quality Gates** - Automatic typecheck, test, lint, build in `/finish`
- **Anti-Hallucination** - 3-layer system to prevent AI errors
- **Persistent Memory** - Cross-session context with automatic handoffs
- **Draw.io Integration** - Visual diagram editing with bidirectional Mermaid sync
- **Figma Integration** - Extract design tokens and automate frontend development
- **MCP Server** - Full Claude Code and OpenCode integration
- **Code Review Automation** - Security audits, performance checks, best practice validation

---

## <MaterialIcon name="school" className="icon-primary" /> Who Uses AIKit?

### Frontend Developers
- Component design patterns
- State management workflows
- Accessibility enforcement
- Performance optimization

### Backend Developers
- API design best practices
- Database schema design
- Error handling patterns
- Security audits

### Full-Stack Developers
- System architecture diagrams
- TDD workflows
- Code refactoring
- Quality gates

### Tech Leads & Architects
- Architecture visualization
- Team workflow standardization
- Code review automation
- Knowledge management

---

## <MaterialIcon name="inbox" className="icon-primary" /> Get Started in 3 Steps

### 1. Install AIKit

```bash
npm install -g @tdsoft-tech/aikit
```

### 2. Initialize in Your Project

```bash
aikit init --global
cd your-project
aikit init
aikit install
```

### 3. Create Your First Task

```bash
/ak_cm_create Add user authentication
```

**Or try interactive diagrams:**

```bash
/drawio-interact create user-flow
```

---

## <MaterialIcon name="explore" className="icon-primary" /> Recommended Next Steps

### New to AIKit?

1. **[Quick Start Guide](quick-start)** - Get started in 5 minutes
2. **[Feature Overview](features)** - Understand all capabilities
3. **[Installation Guide](installation)** - Detailed setup instructions

### Want to Ship Better Code?

4. **[Quality Gates](beads/intro)** - Task tracking with `/finish`
5. **[TDD Workflow](skills/testing/test-driven-development)** - Test-driven development
6. **[Code Review](skills/review/code-review)** - Automated reviews

### Interested in Diagrams?

7. **[Draw.io Integration](commands/design/drawio-interact)** - Visual diagram editing
8. **[System Design](commands/design/design)** - Architecture design workflow

### Want to Understand AIKit?

9. **[Skills Guide](skills/intro)** - All 22 built-in skills
10. **[Agents Guide](agents/intro)** - Meet the 8 specialized agents
11. **[Commands Reference](commands/intro)** - All 50+ commands

---

## <MaterialIcon name="star" className="icon-warning" /> Why Developers Love AIKit

> "AIKit transformed how we use Claude Code. No more inconsistent outputs - every feature follows the same TDD workflow, and `/finish` catches bugs before they reach production."

**— Full-Stack Developer, Startup**

> "The Draw.io integration is a game-changer. I describe what I want, AI generates the diagram, I tweak it visually, and it syncs back to code. What used to take an hour now takes 5 minutes."

**— Tech Lead, E-commerce Platform**

> "Session handoffs mean I never lose context. Whether it's been a day or a week, `/resume` brings me right back to where I left off."

**— Backend Developer, Fintech Company**

---

## <MaterialIcon name="groups" className="icon-primary" /> Join the Community

- **[GitHub Repository](https://github.com/tdsoft-tech/aikit)** - Star us on GitHub <MaterialIcon name="star" className="icon-warning" />
- **[Report Issues](https://github.com/tdsoft-tech/aikit/issues)** - Bug reports and feature requests
- **[Discussions](https://github.com/tdsoft-tech/aikit/discussions)** - Ask questions, share ideas
- **[Documentation](https://github.com/tdsoft-tech/aikit/blob/main/docs)** - Contribute to docs

---

## <MaterialIcon name="rocket_launch" className="icon-success" /> Ready to Supercharge Claude Code?

```bash
npm install -g @tdsoft-tech/aikit
aikit init --global
```

**Ship better code, faster, with confidence.** <MaterialIcon name="celebration" className="icon-primary" />
