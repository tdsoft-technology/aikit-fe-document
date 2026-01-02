---
sidebar_position: 1
---

# Skills

Skills are **structured workflow instructions** that AI agents must follow. They enforce consistent processes for common development tasks.

<MaterialIcon name="lightbulb" className="icon-info" /> **All skills now use the `/ak_sk_` prefix** (e.g., `/ak_sk_test-driven-development`)

## Why Skills?

Without skills, AI agents may:
- Skip important steps (like writing tests)
- Use inconsistent approaches for similar tasks
- Not follow best practices
- Make avoidable mistakes

With skills, AI agents:
- Follow proven workflows step-by-step
- Don't skip important steps
- Apply best practices automatically
- Produce more consistent, reliable code

## How to Use Skills

### Find Skills

```bash
# Find skills matching a topic
> find_skills("test")
> find_skills("debug")
> find_skills("react")
```

### Use Skills (OpenCode)

```bash
# Direct invocation with prefix
/ak_sk_test-driven-development

# Or via tool
> use_skill("test-driven-development")
> Implement user authentication
```

### CLI

```bash
# List all skills
aikit skills list

# Show skill details
aikit skills show test-driven-development

# Create custom skill
aikit skills create my-custom-skill
```

## All Skills

AIKit includes **22 built-in skills** organized into **11 categories**:

| Category | Skill | Description |
|----------|-------|-------------|
| **Debugging** | [Systematic Debugging](debugging/systematic-debugging) | Structured debugging workflow |
| **Design & UI** | [Accessibility](design/accessibility) | WCAG compliance and a11y guidelines |
| **Design & UI** | [Animation](design/animation) | CSS animations and transitions |
| **Design & UI** | [Design Measurement](design/design-measurement) | Design metrics and analysis |
| **Design & UI** | [Frontend Aesthetics](design/frontend-aesthetics) | UI design principles |
| **Design & UI** | [Shadcn UI](design/shadcn-ui) | Shadcn UI component patterns |
| **Design & UI** | [Tailwind CSS](design/tailwindcss) | Tailwind CSS utility-first framework |
| **Development** | [API Design](development/api-design) | REST API design best practices |
| **Development** | [Component Design](development/component-design) | React/Vue component patterns |
| **Development** | [State Management](development/state-management) | Application state patterns |
| **Development** | [Error Handling](development/error-handling) | Exception handling patterns |
| **Development** | [Refactoring](development/refactoring) | Code restructuring with tests |
| **Development** | [Performance Optimization](development/performance-optimization) | Frontend performance |
| **Development** | [Advanced React](development/advanced-react) | Advanced React patterns |
| **Development** | [Next.js](development/nextjs) | Next.js framework best practices |
| **Development** | [Backend Development](development/backend-development) | Server-side development |
| **Development** | [Mobile Development](development/mobile-development) | Mobile app development |
| **Documentation** | [Documentation](documentation/documentation) | Technical documentation best practices |
| **Figma** | [Analyze Figma](figma/analyze-figma) | Extract design tokens from Figma |
| **Figma** | [Figma to Code](figma/figma-to-code) | Convert Figma designs to code |
| **Git** | [Git Best Practices](git/git-best-practices) | Git conventions and guidelines |
| **Git** | [Git Workflow](git/git-workflow) | Branching strategies and workflows |
| **Meta** | [Using Superpowers](meta/using-superpowers) | How to use skills system |
| **Meta** | [Writing Plans](meta/writing-plans) | Implementation planning |
| **Platforms** | [Payments](platforms/payments) | Payment integration patterns |
| **Platforms** | [Shopify](platforms/shopify) | Shopify development |
| **Review** | [Code Review](review/code-review) | Code quality review |
| **Review** | [Security Audit](review/security-audit) | Security vulnerability scanning |
| **Testing** | [Integration Testing](testing/integration-testing) | Test component interactions |
| **Testing** | [Test-Driven Development](testing/test-driven-development) | TDD workflow (RED → GREEN → REFACTOR) |
| **Testing** | [Unit Testing](testing/unit-testing) | Test individual functions/components |
| **Testing** | [Testing Frontend](testing/testing-frontend) | Frontend testing strategies |
| **Tools** | [Docker](tools/docker) | Containerization with Docker |
| **Tools** | [Kubernetes](tools/kubernetes) | K orchestration and deployment |
| **Tools** | [CI/CD](tools/ci-cd) | Continuous integration and deployment |
| **Tools** | [AI Multimodal](tools/ai-multimodal) | Multi-modal AI capabilities |
| **Tools** | [Gemini Vision](tools/gemini-vision) | Google Gemini vision API |
| **Tools** | [MCP Builder](tools/mcp-builder) | Model Context Protocol builder |
| **Tools** | [Chrome DevTools](tools/chrome-devtools) | Browser debugging tools |
| **Tools** | [Three.js](tools/threejs) | 3D graphics with Three.js |
| **Tools** | [Google ADK Python](tools/google-adk-python) | Google Agent Development Kit for Python |

## By Category

 | Category | Count | Skills |
|----------|-------|--------|
| **Debugging** | 1 | Systematic Debugging |
| **Design** | 3 | Accessibility, Database Design, Frontend Aesthetics |
| **Development** | 4 | API Design, Component Design, Performance Optimization, State Management |
| **Documentation** | 1 | Documentation |
| **Figma** | 2 | Analyze Figma, Figma to Code |
| **Git** | 1 | Git Workflow |
| **Meta** | 2 | Using Superpowers, Writing Plans |
| **Review** | 2 | Code Review, Security Audit |
| **Testing** | 3 | Integration Testing, Test-Driven Development, Unit Testing |
| **Tools** | 0 | (See tools documentation) |
| **Total** | **22** | All built-in skills |

## Skill Format

Each skill has:

```markdown
---
name: skill-name
description: What this skill does
useWhen: When to use this skill
category: Category name
tags:
  - tag1
  - tag2
---

## Workflow

Step-by-step instructions...

## Checklist

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3
```

## Custom Skills

Create project-specific skills:

```bash
aikit skills create my-workflow
```

Edit `.aikit/skills/my-workflow.md` with your workflow.

## Sync Skills

Sync global skills to project:

```bash
aikit skills sync
```

## Popular Skills

Most commonly used skills:

1. **[Test-Driven Development](testing/test-driven-development)** - TDD workflow
2. **[Systematic Debugging](debugging/systematic-debugging)** - Debug workflow
3. **[Code Review](review/code-review)** - Review workflow
4. **[Refactoring](development/refactoring)** - Refactor workflow
5. **[API Design](development/api-design)** - API design
6. **[Component Design](development/component-design)** - Component design
7. **[Accessibility](design/accessibility)** - A11y guidelines
8. **[Performance Optimization](development/performance-optimization)** - Performance
9. **[Security Audit](review/security-audit)** - Security
10. **[Documentation](documentation/documentation)** - Documentation

## Next Steps

- **[Agents](../agents/intro)** - Learn about specialized agents
- **[Commands](../commands/intro)** - All slash commands (using `/ak_cm_` prefix)
- **[Tools](../tools/intro)** - Built-in tools
- **[Session Management](../sessions/intro)** - Track your development work
