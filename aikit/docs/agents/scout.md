---
sidebar_position: 5
---

# Scout Agent

## Overview

**@scout** is an external research agent responsible for finding information from external sources like library documentation, GitHub code examples, framework guides, and community best practices.

## When to Use

Use @scout when:
- Researching external libraries or frameworks
- Finding code patterns on GitHub
- Looking for best practices
- Learning about new technologies
- Researching API documentation
- Finding implementation examples

## Capabilities

- Web research (docs, blogs, official sites)
- GitHub code search and analysis
- Documentation lookup (library docs, API references)
- Framework exploration and pattern finding
- Best practices research from community
- Version compatibility checking

## How to Use

### Direct Invocation

```bash
# Ask scout to research
@scout Find best practices for JWT authentication

# Or with specific query
@scout Search GitHub for React hooks patterns

# Research documentation
@scout Research OAuth 2.0 specification
```

### Tool Invocation

```bash
# Use Scout tool
> find_skills("research")
> use_skill("research")
> Research React state management patterns
```

## Workflow

### Step 1: Understand Research Need

1. Identify what information is needed
2. Define scope of research
3. Consider potential sources
4. Determine depth of research

**Questions to ask:**
- What specific topic or technology?
- Are you looking for best practices or examples?
- Is there a specific version requirement?
- What's the use case (implementation, troubleshooting, comparison)?

### Step 2: Identify Sources

1. Official documentation
2. Community resources (Stack Overflow, GitHub)
3. Framework guides and tutorials
4. Code repositories and examples

**Priority order:**
1. Official docs (most reliable)
2. Framework guides
3. Community examples (verify quality)
4. Blog posts and articles

### Step 3: Execute Research

1. Read documentation thoroughly
2. Search GitHub for code examples
3. Look for real-world usage examples
4. Check community discussions
5. Verify information accuracy

**Research techniques:**
- Use specific search queries
- Filter by relevance and date
- Check multiple sources
- Cross-reference findings

### Step 4: Analyze and Synthesize

1. Compare information from multiple sources
2. Identify common patterns
3. Note conflicting advice
4. Determine best practice consensus
5. Document findings clearly

### Step 5: Provide Actionable Findings

1. Summarize key findings
2. Provide code examples where appropriate
3. Link to source materials
4. Recommend best practices
5. Note caveats or warnings

## Research Types

### Library Research

```bash
@scout Research React Router best practices

# @scout will:
# 1. Read React Router docs
# 2. Search for examples
# 3. Find best practices
# 4. Document patterns
```

**Deliverables:**
- Official documentation links
- Code examples
- Best practices list
- Common patterns
- Version considerations

### Framework Exploration

```bash
@scout Explore Next.js 14 features

# @scout will:
# 1. Read Next.js changelog
# 2. Review documentation
# 3. Find migration guides
# 4. Explore new features
```

**Deliverables:**
- Migration guides
- New feature list
- Breaking changes
- Upgrade recommendations
- Configuration examples

### Best Practices Research

```bash
@scout Find database indexing strategies

# @scout will:
# 1. Search for articles
# 2. Read Stack Overflow
# 3. Check GitHub repos
# 4. Compile best practices
```

**Deliverables:**
- Comprehensive best practices
- Code examples
- Performance considerations
- Common pitfalls to avoid

## Source Quality

### Evaluating Sources

✅ **DO:**
- Prefer official documentation
- Check information recency (recent is better)
- Verify author credibility
- Cross-reference multiple sources
- Look for peer reviews

❌ **DON'T:**
- Use outdated information
- Trust single source without verification
- Use information without understanding it
- Follow unverified advice

### Synthesis

✅ **DO:**
- Identify patterns across sources
- Note conflicting advice and explain
- Provide context for recommendations
- Categorize findings (patterns, examples, warnings)

❌ **DON'T:**
- Just list links without summary
- Mix good and bad advice
- Ignore tradeoffs
- Leave questions unanswered

## Common Research Topics

### Authentication & Security

```bash
@scout Research authentication best practices

# @scout will find:
# - JWT vs session-based auth
# - OAuth flow patterns
# - Password hashing best practices
# - Multi-factor authentication approaches
# - Token storage (cookies vs localStorage)
```

### API Design

```bash
@scout Research REST API pagination patterns

# @scout will find:
# - Offset-based pagination
# - Cursor-based pagination
# - Limit/offset pagination
# - Page-based pagination
# - Best practices for each approach
```

### Frontend Frameworks

```bash
@scout Find React performance patterns

# @scout will research:
# - React.memo usage
# - useMemo and useCallback patterns
# - Virtual scrolling libraries
# - Code splitting strategies
# - State management approaches
```

## Best Practices

### Effective Research Queries

✅ **Use specific queries:**
- "React state management best practices 2024"
- "TypeScript strict mode best practices"
- "PostgreSQL indexing strategies"

❌ **Avoid vague queries:**
- "React state management"
- "How to make fast API"
- "Best practices"

### Verification

✅ **DO:**
- Test code examples from research
- Verify version compatibility
- Check for deprecation warnings
- Update research if better information found

### Creditation

✅ **DO:**
- Cite all sources used
- Provide links to original materials
- Reference specific authors or repositories
- Note information dates

❌ **DON'T:**
- Claim credit for others' work
- Present findings as your own
- Remove or obscure attribution

## Anti-Patterns

❌ **DON'T:**
- Spend hours researching simple questions
- Over-research complex topics
- Ignore official documentation
- Collect too much information without synthesis
- Rely on outdated resources

## Verification

- [ ] Research sources are credible and current
- [ ] Findings are well-documented
- [ ] Code examples are tested and accurate
- [ ] Best practices are up to date
- [ ] Sources are properly credited
- [ ] Conflicting advice is noted

## Related Skills

- [Systematic Debugging](../skills/debugging/systematic-debugging.md) - Debugging for research
- [Test-Driven Development](../skills/testing/test-driven-development.md) - Testing researched code

## Related Agents

- **[@planner](planner.md)** - For planning research tasks
- **[@explore](explore.md)** - For codebase pattern search
- **[@build](build.md)** - For implementing researched patterns

## Related Commands

- **[/ak_cm_research](../commands/research/research.md)** - External research
- **[/ak_cm_analyze-project](../commands/research/analyze-project.md)** - Analyze codebase

## Next Steps

- **[@explore](explore.md)** - Use @explore to find codebase patterns
- **[@build](build.md)** - Implement researched patterns
