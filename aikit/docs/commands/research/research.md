---
sidebar_position: 1
---

# /ak_cm_research Command

Conduct deep research on a topic, documenting findings and recommendations.

## Usage

```bash
# Research a topic
/ak_cm_research "React performance optimization"

# Research with output limit
/ak_cm_research "JWT best practices" --numResults 10

# Search for specific sources
/ak_cm_research "PostgreSQL indexing" --sources "docs,github"
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|-----------|-------------|
| `<query>` | string | Yes | - | Search term or topic |
| `--numResults` | number | No | 10 | Maximum results to gather |
| `--sources` | string | No | All | Specific sources (docs, github, blogs, etc.) |

## Workflow

### 1. Research Topic

1. **Define Research Scope**
   - What specific question or problem?
   - What depth of research needed?
   - What sources to prioritize?

2. **Information Gathering**
   - Official documentation
   - Community resources (Stack Overflow, GitHub)
   - Framework guides and tutorials
   - Blog posts and articles

3. **Analysis**
   - Identify patterns and best practices
   - Note trade-offs and considerations
   - Compare different approaches

4. **Synthesis**
   - Compile findings into coherent summary
   - Provide recommendations
   - Categorize information

5. **Documentation**
   - Save to memory for future reference
   - Create or update documentation

## Research Sources

### Official Documentation
- Library/framework official docs
- API specifications
- Design documentation
- Language specifications

### Community Resources
- Stack Overflow questions and answers
- GitHub repositories and code examples
- Developer blogs and tutorials
- Reddit and Discord communities
- Conference talks and videos

### Search Strategy

**Effective queries:**
- Specific: `"React hooks best practices 2024"`
- Problem-solving: `"Next.js slow build time optimization"`
- Comparison: `"Zustand vs Redux for state management"`
- Tutorial: `"How to use Django authentication"`

**Ineffective queries:**
- Too generic: `"authentication"`
- Too broad: `"React performance"`
- Opinionated: `"is Next.js good"`

## Output Format

```markdown
# Research: JWT Authentication

## Overview
JWT (JSON Web Tokens) are a compact, URL-safe means of representing claims...

## Best Practices

### Token Management
- Short expiration (15-30 minutes)
- Refresh token rotation
- Store in httpOnly cookies
- Use strong secret keys

### Security Considerations
- Never store tokens in localStorage
- Always use HTTPS
- Implement token revocation
- Validate all claims

## Recommendations

Based on research of 5+ sources:
1. Use short-lived access tokens (15 min)
2. Implement refresh token flow
3. Use httpOnly cookies for refresh tokens
4. Store in secure HTTP-only cookie

## Sources Consulted

- jwt.io documentation
- Auth0 library guide
- Stack Overflow: JWT security best practices
- OWASP JWT guidelines
```

## Examples

### Simple Research

```bash
# Research a topic
/ak_cm_research "React Context API"

# Result: Deep research with multiple sources, documented in memory
```

### Focused Research

```bash
# Research with limits
/ak_cm_research "Vue 3 composition API" --numResults 5

# Result: Top 5 most relevant resources
```

## Best Practices

### Research Quality

✅ **DO:**
- Use specific, targeted search queries
- Prioritize official documentation
- Verify information currency
- Cross-reference multiple sources
- Note caveats and limitations
- Consider project context

❌ **DON'T:**
- Accept first result as truth
- Use outdated information without verification
- Skip official documentation for blogs
- Gather too much information (analysis paralysis)
- Research without clear purpose
- Follow opinionated advice without verification

### Saving Findings

After completing research, save to memory:

```bash
# Save to memory for future reference
> memory_update("research/react-hooks", finded: [findings]")
```

## Related Commands

- **[/ak_cm_analyze-project](../analyze-project.md)** - Analyze project structure
- **[/ak_cm_review-codebase](../review-codebase.md)** - Review codebase
- **[/ak_cm_brainstorm](../brainstorm.md)** - Generate ideas
- **[/ak_cm_design](../design/design.md)** - Architecture design

## Related Skills

- **[Systematic Debugging](../../skills/debugging/systematic-debugging.md)** - Debug research findings
- **[API Design](../../skills/development/api-design.md)** - API patterns research
- **[Documentation](../../skills/documentation/documentation.md)** - Documenting research

## Related Documentation

- **[Commands Reference](../introl.md)** - All commands overview
- **[Tools](../../tools/intro.md)** - Research tools
