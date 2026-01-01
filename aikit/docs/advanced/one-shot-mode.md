---
sidebar_position: 6
---

# One-Shot Mode

One-shot mode enables **end-to-end autonomous task execution** from requirements to completion.

## What is One-Shot?

One-shot mode is an autonomous agent that:
- Gathers requirements interactively
- Creates detailed implementation plans
- Executes tasks with dynamic agent selection
- Runs quality gates until all pass
- Performs multi-level verification
- Auto-recovers from failures
- Generates completion proof

## When to Use

Use one-shot mode for:
- <MaterialIcon name="check_circle" className="icon-success" /> Straightforward, well-defined tasks
- <MaterialIcon name="check_circle" className="icon-success" /> Features with clear requirements
- <MaterialIcon name="check_circle" className="icon-success" /> Bug fixes with known solutions
- <MaterialIcon name="check_circle" className="icon-success" /> Tasks that can be broken down into clear sub-tasks

**Avoid for:**
- <MaterialIcon name="cancel" className="icon-error" /> Complex, ambiguous requirements
- <MaterialIcon name="cancel" className="icon-error" /> Tasks requiring extensive domain knowledge
- <MaterialIcon name="cancel" className="icon-error" /> Multi-day features
- <MaterialIcon name="cancel" className="icon-error" /> Tasks needing user approvals

## Workflow

### Phase 1: Requirements

1. **Gather task type** - Feature, bug fix, refactor, etc.
2. **Clarify scope** - What to include/exclude
3. **Identify dependencies** - Other tasks or systems
4. **Define success criteria** - How to verify completion

**Example:**

```bash
> @one-shot Add user login with JWT
# One-shot asks:
# 1. What authentication method? (password, OAuth, etc.)
# 2. What JWT library to use?
# 3. Any existing auth code to integrate?
# 4. Success criteria?
```

### Phase 2: Planning

1. **Research** - Use @scout to find patterns
2. **Analyze complexity** - Estimate time, files, lines of code
3. **Create plan** - Break down into sub-tasks
4. **Recommend skills/tools** - Suggest workflows

**Complexity Analysis:**

- **Small task**: `< 30min, < 10 files, < 500 lines`
- **Medium task**: `30-60min, 10-25 files, 500-2000 lines`
- **Large task**: `> 60min, > 25 files, > 2000 lines`

Large tasks are automatically split into smaller tasks.

### Phase 3: Execution

1. **Dynamic agent selection** - Choose right agent for each sub-task
2. **Parallel execution** - Run independent tasks together
3. **Agent delegation** - Agents delegate as needed
4. **Progress tracking** - Update status as tasks complete

**Agent Flow:**

```
@planner → @scout → @build → @review → @vision
```

### Phase 4: Testing

Run quality gates (must ALL pass):

1. <MaterialIcon name="check_circle" className="icon-success" /> `npm run typecheck` - No type errors
2. <MaterialIcon name="check_circle" className="icon-success" /> `npm run test` - All tests pass
3. <MaterialIcon name="check_circle" className="icon-success" /> `npm run lint` - No linting errors
4. <MaterialIcon name="check_circle" className="icon-success" /> `npm run build` - Build succeeds

**Auto-fix attempts:**
- Try `--fix` flags for type errors
- Try `--fix` flags for lint errors
- Run gates up to 3 times

### Phase 5: Verification

Multi-level verification:

1. **Gate verification** - All quality gates pass
2. **Manual verification** - User can review changes
3. **Deployment verification** - If applicable, verify deployment

### Phase 6: Completion

1. **Generate proof** - Summary of what was done
2. **Update tracking** - Mark task as complete in Beads
3. **Collect feedback** - Ask for user feedback

## Error Recovery

### Level 1: Auto-fix

Automatically attempt fixes for:
- Type errors
- Lint errors
- Simple syntax issues

```typescript
// Auto-fix attempt
npm run typecheck
// Fails
npm run typecheck --fix
// Re-check
```

### Level 2: Alternative Approach

If auto-fix fails, use @review to analyze:

```bash
> @review Analyze the failure and suggest alternative approach
```

### Level 3: User Intervention

If Level 2 fails:
1. Stop execution
2. Report issue to user
3. Create follow-up task
4. Ask for guidance

## Example

```bash
> @one-shot Add user logout button

# Phase 1: Requirements
User input:
- Logout should clear JWT token
- Redirect to login page
- Show confirmation dialog

# Phase 2: Planning
Plan created:
1. Create LogoutButton component
2. Add logout API endpoint
3. Add confirmation dialog
4. Implement JWT clearing logic
5. Add tests

# Phase 3: Execution
- @build creates component
- @build implements API
- @review checks code

# Phase 4: Testing

Running quality gates...
- <MaterialIcon name="check_circle" className="icon-success" /> typecheck: PASSED
- <MaterialIcon name="check_circle" className="icon-success" /> test: PASSED
- <MaterialIcon name="check_circle" className="icon-success" /> lint: PASSED
- <MaterialIcon name="check_circle" className="icon-success" /> build: PASSED

# Phase 5: Verification
- <MaterialIcon name="check_circle" className="icon-success" /> Logout button clears token
- <MaterialIcon name="check_circle" className="icon-success" /> Redirects to login
- <MaterialIcon name="check_circle" className="icon-success" /> Shows confirmation


# Phase 5: Verification
✅ Logout button clears token
✅ Redirects to login
✅ Shows confirmation

# Phase 6: Completion
Task completed!
Changes:
- src/components/LogoutButton.tsx
- src/api/logout.ts
- src/utils/auth.ts
- tests/LogoutButton.test.tsx
```

## Configuration

Enable one-shot in `.aikit/aikit.json`:

```json
{
  "agents": {
    "enabled": true
  }
}
```

## Best Practices

1. **Start simple** - Use one-shot for straightforward tasks first
2. **Be specific** - Clear requirements = better results
3. **Review changes** - Always review before final approval
4. **Use /plan for complex** - For complex features, use `/plan` + `/implement` instead
5. **Provide feedback** - Help one-shot learn from mistakes

## Limitations

- <MaterialIcon name="warning" className="icon-warning" /> **Beta feature** - Still under development
- <MaterialIcon name="warning" className="icon-warning" /> May not handle edge cases
- <MaterialIcon name="warning" className="icon-warning" /> Requires clear requirements
- <MaterialIcon name="warning" className="icon-warning" /> May need manual intervention for complex tasks

## Comparison: One-Shot vs Manual

| Aspect | One-Shot | Manual |
|---------|-----------|---------|
| Speed | Faster (autonomous) | Slower (step-by-step) |
| Control | Less control | Full control |
| Complexity | Simple tasks only | Any complexity |
| Understanding | Less transparent | More transparent |
| Best for | Quick wins | Complex features |

## CLI

```bash
# One-shot is accessed via @one-shot agent in OpenCode
> @one-shot Your task here
```

## Next Steps

- **[Quick Start](../quick-start)** - Get started with basic workflows
- **[Agents](../agents/intro)** - Learn about all agents
- **[Skills](../skills/intro)** - Learn about skills
