---
sidebar_position: 5
---

# /ak_cm_brainstorm Command

Brainstorm ideas, solutions, or approaches for problems.

## Usage

```bash
# Brainstorm solutions for authentication
/ak_cm_brainstorm "JWT token refresh strategy"

# Brainstorm new feature ideas
/ak_cm_brainstorm "Next big product features"

# Brainstorm debugging approaches
/ak_cm_brainstorm "Performance optimization ideas"
```

## Arguments

| Argument | Type | Required | Description |
|---------|------|----------|----------|-----------|
| `<problem>` | string | Yes | - | Problem or topic to brainstorm |
| `--count` | number | No | 10 | Number of ideas to generate |
| `--techniques` | flags | No | - | Use specific techniques |
| `--focus` | string | No | - | Focus area (technical, product, UX) |

## Brainstorming Process

### 1. Problem Definition

Clarify the problem:
- What are we trying to solve?
- What are the constraints?
- What's the timeline?
- Who are the stakeholders?

### 2. Idea Generation

AIKit generates ideas by:
- **Quantity First**: Many ideas, then filter
- **Diverse Approaches**: Multiple angles
- **Feasible Solutions**: Can actually be implemented
- **Scalable Solutions**: Will work at scale

### 3. Evaluation

**Evaluate each idea:**
- Feasibility (can we do this?)
- Complexity (how hard?)
- Cost (time/money?)
- Impact (how much value?)
- Risk (what could go wrong?)

### 4. Categorization

Group ideas by:
- Quick wins (easy, high value)
- Strategic (complex, high value)
- Research items (need more info)
- Long-term (strategic, can wait)

### 5. Selection

Choose best options based on:
- Time constraints
- Resource availability
- Risk tolerance
- Value delivered

## Brainstorming Techniques

### Mind Mapping

```bash
# Start mind map
/ak_cm_brainstorm "Authentication system" --count 15

# Generates 15 ideas organized around central topic
```

### SWOT Analysis

```bash
# SWOT analysis
/ak_cm_brainstorm "Project migration"

# Generates:
# Strengths
- Weaknesses
- Opportunities
- Threats
```

### SCAMPER

```bash
# SCAMPER brainstorm
/ak_cm_brainstorm "Revenue optimization"

# Generates:
- Substitute
- Combine
- Adapt
- Modify
- Put to other uses
- Eliminate
- Reverse
- ```

### Starbursting

```bash
# Rapid idea generation
/ak_cm_brainstorm "Quick bug fixes" --count 20
```

Generates 20 ideas quickly.

## Output Formats

### Console Summary

```bash
/ak_cm_brainstorm

# Output:
💡 Brainstorm Results: "Authentication token refresh"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 15 ideas generated in 30 seconds

📈 Categories:
  - Quick Wins: 4 ideas (can do today)
  - Strategic: 6 ideas (important but complex)
  - Research: 3 ideas (need more info)
  - Long-term: 2 ideas (strategic)

💡 Top Idea: Implement refresh token rotation using sliding window pattern

📋 Top 3 Ideas:
1. Refresh token rotation using sliding window (Recommended)
2. Implement refresh endpoint for seamless token refresh
3. Store refresh tokens in memory-efficient cache

🎯 Recommendation: Start with sliding window pattern, evaluate performance
```

### Markdown Report

```bash
/ak_cm_brainstorm --output md > brainstorm-results.md

# Generates: brainstorm-results.md with:
# All 15 ideas with descriptions
# Evaluation of each
- Recommended priority
- Implementation notes
```

## Examples

### Problem-Solving Brainstorm

```bash
# Brainstorm solutions for slow API
/ak_cm_brainstorm "API performance optimization" --count 10

# AIKit generates ideas:
# 1. Add Redis caching layer
# 2. Implement database query optimization
# 3. Add API versioning for backward compatibility
4. Implement request batching
 5. Optimize N+1 queries
 6. Add CDN for static assets
 7. Implement HTTP/2 for API
 8. Optimize response sizes
 9. Implement pagination for large datasets
10. Add compression middleware
```

### Feature Brainstorming

```bash
# Brainstorm new features
/ak_cm_brainstorm "Next product roadmap" --count 15

# AIKit generates feature ideas:
1. Dark mode support
2. User preferences system
3. Notification center
4. Analytics dashboard
5. Admin panel
6. API marketplace
7. Integrations with popular tools
8. Mobile apps
9. CLI tools
10. Developer documentation
11. Real-time collaboration
12. Automated testing
13. Continuous integration
14. Multi-tenancy support
15. Global search
```

## Best Practices

### Effective Brainstorming

✅ **DO:**
- Start with quantity over quality
- Defer judgment during idea generation
- Consider all angles and perspectives
- Focus on solving the right problem
- Note constraints early

❌ **DON'T:**
- Critique ideas during generation
- Filter too aggressively
- Focus on practicality too early
- Ignore wild ideas completely
- Stop at first good idea

### After Brainstorming

✅ **DO:**
- Evaluate all ideas against criteria
- Prioritize by impact and effort
- Document evaluation criteria
- Select top 2-3 options for testing
- Save all ideas to memory

❌ **DON'T:**
- Select first idea without evaluation
- Forget non-selected ideas
- Implement without validation
- Skip documentation

### Idea Evaluation Criteria

**For each idea, consider:**
- **Impact**: How much value does this provide?
- **Effort**: How much work is required?
- **Risk**: What could go wrong?
- **Urgency**: Time-sensitive or can wait?
- **Dependencies**: What needs to be done first?
- **Alignment**: Does this fit our goals?

## Related Commands

- **[/ak_cm_research](../research/research.md)** - Research before brainstorming
- **[/ak_cm_analyze-project](../analyze-project.md)** - Analyze context

## Related Skills

- **[API Design](../../skills/development/api-design.md)** - API design
- **[Problem Solving](#)` - Systematic problem solving
- **[Writing Plans](../../skills/meta/writing-plans.md)** - Implementation planning

## Related Documentation

- **[Documentation](../../skills/documentation/documentation.md)** - Documenting brainstorming
- **[Advanced Configuration](../../advanced/configuration.md)** - Configuration
