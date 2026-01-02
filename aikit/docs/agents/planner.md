---
sidebar_position: 1
---

# Planner Agent

## Overview

**@planner** is the strategic planning agent responsible for coordinating complex tasks that require architecture decisions, multi-step planning, or coordination between specialist agents.

## When to Use

Use @planner when:
- Designing system architecture
- Planning complex features
- Breaking down large tasks
- Coordinating multi-agent workflows
- Making architectural decisions
- Creating implementation roadmaps

## Capabilities

- Break down complex tasks into sub-tasks
- Coordinate between specialist agents
- Make architecture decisions
- Create implementation plans
- Track progress of sub-tasks

## How to Invoke

```bash
# Direct invocation
@planner Design authentication system

# Or via command
/ak_cm_delegator @planner Design authentication system
```

## Workflow

### 1. Analyze the Task

@planner will:
- Understand the full scope of the task
- Identify dependencies and constraints
- Determine complexity level
- Assess if task requires multiple agents

**Questions to consider:**
- What is the end goal?
- What are the requirements?
- What dependencies exist?
- What are the constraints?
- What's the complexity?

### 2. Create Implementation Plan

@planner breaks down complex tasks:
- Identify sub-tasks (typically 2-5 minutes each)
- Define task order and dependencies
- Assign appropriate specialist agents to each sub-task
- Create checkpoints and milestones

**Example plan structure:**
```markdown
# Plan: Authentication System

## Sub-tasks
1. **@scout**: Research authentication patterns (15 min)
2. **@explore**: Check existing auth code (10 min)
3. **@build**: Implement authentication service (20 min)
4. **@build**: Add login endpoint (10 min)
5. **@build**: Add token validation (10 min)
6. **@review**: Security audit (15 min)

## Dependencies
- Sub-task 3 depends on sub-tasks 1, 2
- Sub-task 6 depends on sub-task 3, 4, 5
```

### 3. Delegate to Specialist Agents

@planner delegates to appropriate agents:

| Sub-task | Agent | Purpose |
|----------|--------|---------|
| Research external patterns | @scout | Library docs, GitHub patterns |
| Explore codebase | @explore | Find existing implementations |
| Implement features | @build | Write production code |
| Code review | @review | Quality and security checks |
| Visual analysis | @vision | Mockups, diagrams, Figma |

### 4. Coordinate and Track Progress

@planner monitors:
- Status of each delegated sub-task
- Completion of sub-tasks
- Issues or blockers
- Overall progress toward goal

**Tracking example:**
```markdown
## Progress
- [x] @scout: Research authentication patterns - COMPLETED
- [x] @explore: Check existing auth code - COMPLETED
- [ ] @build: Implement authentication service - IN PROGRESS
- [ ] @build: Add login endpoint - PENDING
- [ ] @build: Add token validation - PENDING
- [ ] @review: Security audit - BLOCKED (waiting on implementation)
```

### 5. Verify Completion

When all sub-tasks complete:
- Verify implementation matches plan
- Check requirements are met
- Ensure quality standards
- Review overall architecture

## Best Practices

### Planning

✅ **DO:**
- Break tasks into small, manageable chunks
- Define clear dependencies
- Use time estimates (2-5 minutes per sub-task)
- Create checkpoints for large tasks
- Plan for alternatives

❌ **DON'T:**
- Create monolithic plans (one huge task)
- Ignore dependencies between sub-tasks
- Skip architectural considerations
- Forget to track progress

### Delegation

✅ **DO:**
- Choose right agent for each sub-task
- Provide clear context to delegated agents
- Track delegation results
- Re-delegate if agent fails
- Combine related sub-tasks for efficiency

❌ **DON'T:**
- Delegate inappropriate tasks (e.g., @build for research)
- Lose track of delegations
- Micromanage delegated agents
- Skip verification of delegated work

### Coordination

✅ **DO:**
- Monitor progress continuously
- Resolve blockers quickly
- Adapt plan if issues arise
- Communicate clearly between agents
- Document decisions made

❌ **DON'T:**
- Let agents work in isolation
- Ignore blockers or issues
- Make arbitrary plan changes
- Forget to verify final result

## Example Usage

### Complex Feature Development

```bash
# Ask planner to design and coordinate
@planner Implement user authentication with OAuth 2.0

# Planner will:
# 1. Analyze requirements
# 2. Create detailed plan
# 3. Delegate to specialists:
#    - @scout: Research OAuth patterns
#    - @build: Implement OAuth flow
#    - @review: Security audit
# 4. Coordinate and track progress
# 5. Verify completion
```

### Architecture Decisions

```bash
# Let planner make architectural decisions
@planner Design state management architecture for our e-commerce app

# Planner will:
# 1. Research state management options
# 2. Compare Redux, Zustand, Context API
# 3. Evaluate tradeoffs
# 4. Recommend solution
# 5. Provide rationale
```

### Multi-Agent Workflow

```bash
# Complex task requiring multiple specialists
@planner Design and implement a dashboard with:
- Data visualization components
- Real-time data updates
- User permissions
- Responsive layout

# Planner delegates to:
# - @scout: Research charting libraries
# - @explore: Check existing dashboard patterns
# - @vision: Analyze dashboard mockup
# - @build: Implement core dashboard
# - @build: Add charts
# - @build: Implement permissions
# - @review: Review implementation
```

## System Prompt

```
You are a strategic planner agent. Your role is to:

1. ANALYZE the task and understand the full scope
2. BREAK DOWN complex tasks into smaller, manageable sub-tasks
3. DELEGATE to appropriate specialist agents
4. COORDINATE the overall workflow
5. VERIFY completion of the overall goal

When delegating:
- Use @build for implementation tasks
- Use @scout for external research
- Use @review for code review and security audits
- Use @explore for codebase navigation
- Use @vision for visual analysis

Always create a clear plan before delegating. Track progress and ensure all sub-tasks complete successfully.
```

## Common Patterns

### Research-Plan-Implement Pattern

```bash
@planner Create user profile feature

# 1. Research (@scout)
#    - Research profile data models
#    - Find privacy best practices

# 2. Plan
#    - Design profile structure
#    - Create implementation plan

# 3. Implement (@build)
#    - Implement profile CRUD
#    - Add privacy controls

# 4. Review (@review)
#    - Security audit
#    - Data protection verification
```

### Architecture-First Approach

```bash
@planner Design microservices architecture

# 1. Research (@scout)
#    - Research microservices patterns
#    - Find best practices

# 2. Plan
#    - Design service boundaries
#    - Define communication patterns
#    - Plan migration strategy

# 3. Coordinate (@build, @build, @build)
#    - Implement core services
#    - Implement API gateway
#    - Implement service discovery
#    - Add monitoring

# 4. Verify (@review)
#    - Architecture review
#    - Security audit
```

## Anti-Patterns

❌ **DON'T:**
- Skip planning and start implementing directly
- Create plans without understanding requirements
- Ignore agent expertise and assignments
- Delegate tasks without clear context
- Forget to track delegated work
- Make arbitrary changes to the plan mid-execution

## Related Skills

- [API Design](../development/api-design.md) - System architecture
- [Writing Plans](../meta/writing-plans.md) - Implementation planning

## Related Commands

- [Create Command](../../commands/core/create.md) - Create planning tasks
- [Plan Command](../../commands/core/plan.md) - Detailed planning

## Related Agents

- [@build](../agents/build.md) - Implementation
- [@scout](../agents/scout.md) - Research
- [@review](../agents/review.md) - Code review
- [@explore](../agents/explore.md) - Codebase navigation
- [@vision](../agents/vision.md) - Visual analysis

## Next Steps

- [Build Agent](../agents/build.md) - Implementation tasks
- [Scout Agent](../agents/scout.md) - External research
- [Review Agent](../agents/review.md) - Code quality and security
