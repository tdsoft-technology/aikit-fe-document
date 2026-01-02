---
sidebar_position: 6
---

# /ak_cm_docs Command

Generate project documentation from code and configuration.

## Usage

```bash
# Generate documentation
/ak_cm_docs

# Generate to specific directory
/ak_cm_docs --output docs/

# Generate with template
/ak_cm_docs --template custom-template.md
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|----------|-------------|
| `--output` | string | No | docs | Output directory | Target directory for docs |
| `--template` | string | No | - | Custom template file | Template file to use |
| `--force` | flag | No | false | Overwrite existing | Overwrite without asking |

## Documentation Structure

AIKit generates documentation with this structure:

```markdown
docs/
├── intro.md               # Project introduction
├── installation.md         # Installation guide
├── quick-start.md          # Quick start guide
├── features.md            # Features overview
├── skills/                # Skills documentation
│   ├── intro.md
│   ├── debugging/
│   ├── design/
│   ├── development/
│   ├── documentation/
│   ├── figma/
│   ├── git/
│   ├── meta/
│   ├── review/
│   └── testing/
├── agents/                # Agents documentation
│   ├── intro.md
│   ├── planner.md
│   ├── build.md
│   ├── rush.md
│   ├── review.md
│   ├── scout.md
│   ├── explore.md
│   ├── vision.md
│   └── one-shot.md
├── commands/             # Commands documentation
│   ├── intro.md
│   ├── core/
│   ├── quick/
│   ├── research/
│   ├── design/
│   ├── git/
│   ├── utility/
│   ├── sessions/
│   └── checkpoint/
├── beads/                # Beads documentation
│   ├── intro.md
│   └── workflow.md
├── mcp-server/            # MCP Server documentation
│   └── intro.md
├── sessions/              # Session management
│   └── intro.md
├── tools/                 # Tools documentation
│   └── intro.md
├── plugins/               # Plugins documentation
│   └── intro.md
└── advanced/              # Advanced features
    ├── anti-hallucination.md
    ├── configuration.md
    ├── custom-skills.md
    ├── custom-tools.md
    ├── custom-plugins.md
    └── one-shot-mode.md
```

## Examples

### Generate All Documentation

```bash
# Generate to docs/ directory
/ak_cm_docs --output docs/

# Result: Creates all documentation pages
```

### Generate with Custom Template

```bash
# Use custom template
/ak_cm_docs --template .aikit/docs-template.md

# Result: Uses your template structure
```

## Documentation Sources

AIKit generates documentation from:

### 1. Configuration Files

- `aikit.json` - Project configuration
- `AGENTS.md` - Agent rules
- Package.json - Project metadata

### 2. Skills Files

- `skills/*/*.md` - Skill definitions in project
- `~/.config/aikit/skills/*/*.md` - Global skills

### 3. Code Structure

- `src/` - Source code
- Tool and command implementations
- Agent system

### 4. Comments and JSDoc

- TypeScript/JSDoc comments in code
- Function documentation
- Type definitions

## Generated Content

### Skills Documentation

Each skill file generates documentation page with:
- Skill name and description
- When to use
- Workflow steps
- Best practices
- Anti-patterns
- Verification checklist
- Related skills and commands

### Commands Documentation

Each command file generates documentation page with:
- Command name and description
- Usage examples
- Arguments table
- Examples
- Best practices
- Related commands

### Agents Documentation

Each agent file generates documentation page with:
- Agent name and description
- When to use
- Capabilities
- System prompt
- Use cases
- Best practices
- Related agents and skills

## Best Practices

### Documentation Quality

✅ **DO:**
- Keep documentation up to date
- Use clear examples
- Include code snippets
- Add troubleshooting sections
- Link related topics
- Use consistent formatting

❌ **DON'T:**
- Generate outdated documentation
- Skip examples
- Leave out edge cases
- Use inconsistent formatting
- Generate without validation

### When to Generate

✅ **Generate:**
- Before releasing version
- After major feature additions
- After API changes
- After configuration changes
- When documentation is missing

✅ **Don't Generate:**
- During active development (too frequent)
- For minor bug fixes
- For typos or formatting

## Related Commands

- **[/ak_cm_config](config.md)** - Configure documentation generation
- **[/ak_cm_status](status.md)** - Check documentation state

## Related Documentation

- **[Writing Plans](../../skills/meta/writing-plans.md)** - How to plan documentation
- **[Documentation Skill](../../skills/documentation/documentation.md)** - Documentation best practices
- **[Skills Reference](../skills/intro.md)** - Skills system overview
