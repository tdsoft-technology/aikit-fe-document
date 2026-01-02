---
sidebar_position: 8
---

# One-Shot Agent

## Overview

**@one-shot** is an end-to-end autonomous task execution agent (beta) capable of handling entire workflows from requirements gathering to completion with minimal user intervention.

## When to Use

Use @one-shot when:
- Completing straightforward tasks autonomously
- Tasks where requirements are clear
- Multi-step workflows you want automated
- Tasks following established patterns
- Well-defined work with clear acceptance criteria

⚠️ **Note:** @one-shot is experimental. Start with simpler tasks first.

## Capabilities

- Interactive requirements gathering
- Automatic complexity analysis
- Dynamic agent selection
- Parallel task execution
- Multi-level verification
- Auto-recovery from failures
- Quality gates enforcement
- Completion proof generation

## How to Use

### Direct Invocation

```bash
# Execute task autonomously
@one-shot Implement user authentication

# Or via command
/ak_cm_one-shot Add user authentication

# With skill activation
@one-shot Implement user authentication with TDD
```

### Tool Invocation

```bash
# Delegates to one-shot internally
@planner Task: Implement feature
# @planner delegates to @one-shot for autonomous execution
```

## Workflow

### Phase 1: Requirements Gathering

1. **Interactive Clarification**
   - Ask clarifying questions about task scope
   - Confirm requirements and constraints
   - Identify success criteria
   - Understand dependencies

2. **Task Understanding**
   - Analyze what needs to be done
   - Break down into logical phases
   - Identify technical requirements
   - Note special considerations

**Quality of requirements:**
- ✅ Clear and specific
- ✅ Measurable and testable
- ✅ Realistic and achievable
- ✅ Well-defined boundaries
- ✅ Acceptance criteria established

### Phase 2: Planning

1. **Create Implementation Plan**
   - Use @planner agent for detailed planning
   - Break down into 2-5 minute sub-tasks
   - Define dependencies between sub-tasks
   - Assign appropriate agents to each sub-task
   - Create checkpoints and milestones

2. **Complexity Assessment**
   - Estimate task duration
   - Identify complexity factors:
     - Files affected: 1-5 files
     - Lines of code: 100-500 lines
     - Dependencies: External services, APIs
   - Decide if task needs auto-split

**Auto-Split Criteria:**
- Estimated > 30 minutes
- More than 10 files
- More than 500 lines of code
- High complexity level

### Phase 3: Execution

1. **Dynamic Agent Selection**
   - @one-shot chooses appropriate agent for each sub-task
   - Delegates to @build for implementation
   - Delegates to @scout for research
   - Delegates to @review for quality checks
   - Delegates to @explore for codebase navigation
   - Delegates to @vision for visual analysis

2. **Parallel Task Execution**
   - Execute independent sub-tasks concurrently
   - Coordinate dependent tasks properly
   - Monitor progress across all tasks
   - Handle conflicts and blockers

3. **Progress Monitoring**
   - Track completion of sub-tasks
   - Identify blockers early
   - Adjust plan if issues arise
   - Keep user informed of progress

### Phase 4: Quality Gates

**Hard Requirements (ALL must pass):**

```bash
# @one-shot runs these gates before completion:
npm run typecheck   # No TypeScript errors
npm run test         # All tests pass
npm run lint          # No linting errors
npm run build         # Build succeeds
```

**Gate Enforcement:**
- If any gate fails: task is NOT complete
- Must fix failures before marking done
- User sees which gates failed and why

### Phase 5: Verification

1. **Multi-Level Verification**
   - Level 1: Code quality (lint, typecheck, tests)
   - Level 2: User verification (manual testing)
   - Level 3: Deployment verification (build works)

2. **Comprehensive Testing**
   - Unit tests for new code
   - Integration tests for interactions
   - End-to-end testing for workflows
   - Manual testing of key features

3. **Review Gates**
   - Code review against best practices
   - Security review (if applicable)
   - Performance review (if applicable)
   - Accessibility review

### Phase 6: Completion

1. **Generate Completion Proof**
   - List all sub-tasks completed
   - Show quality gate results
   - Document changes made
   - Provide test results
   - Note deployment status

2. **Final Checks**
   - Verify all requirements met
   - Confirm all quality gates pass
   - User acceptance obtained
   - Task marked as complete

## Error Recovery (3 Levels)

### Level 1: Auto-Fix

**When it's used:**
- Type errors (easy fixes)
- Linting errors (automatic fixes)
- Simple bugs or typos

**Actions:**
```bash
# Auto-fix TypeScript errors
npm run typecheck
npm run typecheck --fix  # If supported

# Auto-fix linting errors
npm run lint --fix

# Simple code corrections
# Fix typos
# Fix simple syntax errors
# Add missing imports
```

### Level 2: Alternative Approach

**When it's used:**
- Code design issues
- Complex bugs
- Implementation disagreements
- Quality gate failures

**Actions:**
```bash
# Delegate to @review for alternative approach
@review Current approach has issues, suggest alternative

# Try different implementation strategy
# Consider refactoring existing code
# Review architecture decisions

# @review will:
# 1. Analyze current implementation
# 2. Identify issues
# 3. Suggest alternatives
# 4. Provide rationale for changes
```

### Level 3: User Intervention

**When it's used:**
- Design decisions needed
- Requirements clarification
- Ambiguous specifications
- Complex technical trade-offs

**Actions:**
```bash
# Ask user for input
@one-shot Can you clarify: [specific question]

# Present options
@one-shot Here are 3 approaches: [options 1, 2, 3]
Which do you prefer?

# Await user decision
# Continue after user provides direction
```

## Best Practices

### For Using @one-shot

✅ **Good for:**
- Straightforward tasks with clear requirements
- Well-established patterns
- Tasks following known workflows
- Single-feature implementations
- Bug fixes with clear scope
- Tasks with minimal dependencies

❌ **Not ideal for:**
- Complex, multi-feature projects
- Tasks with unclear requirements
- New feature development (unknown patterns)
- Architectural decisions
- Projects requiring multiple approvals
- Tasks with many unknowns

### Requirements Definition

✅ **DO:**
- Define specific deliverables
- Establish acceptance criteria
- Set clear boundaries
- Specify technical constraints
- Define success metrics

❌ **DON'T:**
- Use vague descriptions
- Leave requirements open-ended
- Ignore technical constraints
- Skip edge cases
- Make unrealistic promises

### Quality Gates

✅ **DO:**
- Enforce all gates strictly
- Fix failures before completion
- Keep user informed of issues
- Maintain code quality standards

❌ **DON'T:**
- Skip quality gates to save time
- Mark tasks complete if gates fail
- Ignore linting or type errors
- Leave tests failing

## Anti-Patterns

❌ **DON'T:**
- Use @one-shot for complex multi-feature projects
- Skip quality gates for speed
- Ignore user feedback or questions
- Proceed without understanding requirements
- Leave tasks incomplete or broken
- Make arbitrary design decisions

## Verification

### Before Completion:
- [ ] All requirements clearly defined
- [ ] Implementation plan approved by user
- [ ] All sub-tasks completed
- [ ] All quality gates pass
- [ ] Testing completed successfully
- [ ] Code review passed (if applicable)
- [ ] User acceptance obtained

### For Multi-Session Tasks:
- [ ] Handoff created with context
- [ ] Progress tracked across sessions
- [ ] No blockers or unresolved issues
- [ ] All work documented

## Related Agents

- **[@planner](planner.md)** - For detailed planning
- **[@build](build.md)** - For implementation
- **[@review](review.md)** - For quality gates
- **[@scout](scout.md)** - For research tasks
- **[@explore](explore.md)** - For codebase analysis

## Related Skills

- **[Test-Driven Development](../skills/testing/test-driven-development.md)** - Testing workflow
- **[Systematic Debugging](../skills/debugging/systematic-debugging.md)** - Debugging approach
- **[Code Review](../skills/review/code-review.md)** - Code quality

## Related Commands

- **[/ak_cm_create](../commands/core/create.md)** - Create task for tracking
- **[/ak_cm_plan](../commands/core/plan.md)** - Detailed planning
- **[/ak_cm_implement](../commands/core/implement.md)** - Implementation with TDD
- **[/ak_cm_finish](../commands/core/finish.md)** - Quality gates

## Related Documentation

- **[Beads Workflow](../beads/workflow.md)** - Task tracking
- **[Session Management](../sessions/intro.md)** - Multi-session work
- **[Advanced Configuration](../advanced/configuration.md)** - Agent and tool configuration
