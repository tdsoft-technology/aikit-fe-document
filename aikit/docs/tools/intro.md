---
sidebar_position: 1
---

# Tools

Tools are **functions that AI agents can call** during conversations. They provide persistent memory, external research, and integration with external services.

## How to Use Tools

### In Claude Code or OpenCode

```bash
# Read from memory
> memory-read("observations/project-patterns")

# Update memory
> memory-update("observations/new-pattern", "Content here")

# Find skills
> find_skills("test")

# Use skill
> use_skill("test-driven-development")

# Analyze Figma
> read_figma_design("https://www.figma.com/design/...")
```

### CLI

```bash
# List all tools
aikit tools list

# Create custom tool
aikit tools create my-tool
```

## Tool Categories

### Memory Tools

- **[memory-read](#memory-read)** - Read from persistent memory
- **[memory-update](#memory-update)** - Update persistent memory

### Session Management

- **[list_session](#list_session)** - List previous sessions
- **[read_session](#read_session)** - Load session context

### Skill Tools

- **[find_skills](#find_skills)** - Find available skills
- **[use_skill](#use_skill)** - Load and use skill

### Figma Tools

- **[read_figma_design](#read_figma_design)** - Extract design tokens
- **[develop_figma_screen](#develop_figma_screen)** - Develop Figma screen

### Beads Tools

- **[bead-create](#bead-create)** - Create new task
- **[bead-update-status](#bead-update-status)** - Update task status
- **[bead-complete](#bead-complete)** - Complete with quality gates
- **[bead-list](#bead-list)** - List all tasks
- **[bead-update-type](#bead-update-type)** - Update task type

### Research Tools

- **[websearch](#websearch)** - Web search (requires config)
- **[codesearch](#codesearch)** - GitHub code search (requires config)

## Tool Definitions

### memory-read

Read from persistent memory (project or global).

```bash
> memory-read("observations/project-patterns")
> memory-read("research/figma-analysis")
```

**Arguments:**
- `key` (string, required) - The memory key to read

### memory-update

Update persistent memory with new information.

```bash
> memory-update("observations/auth-pattern", "Always use JWT")
> memory-update("research/api-design", "Findings...", append=true)
```

**Arguments:**
- `key` (string, required) - The memory key to update
- `content` (string, required) - The content to write
- `append` (boolean, optional) - Whether to append (default: true)

### list_session

List previous sessions to discover what happened and when.

```bash
> list_session(limit=10)
```

**Arguments:**
- `limit` (number, optional) - Maximum sessions to return (default: 10)

### read_session

Load context from a previous session.

```bash
> read_session("2024-01-15T10-30-00")
```

**Arguments:**
- `sessionId` (string, required) - Session ID from list_session

### find_skills

Find available workflow skills.

```bash
> find_skills("test")
> find_skills("debug")
```

**Arguments:**
- `query` (string, optional) - Search query to filter skills

### use_skill

Load and use a specific skill workflow.

```bash
> use_skill("test-driven-development")
```

**Arguments:**
- `name` (string, required) - Name of skill to use

### read_figma_design

Read and analyze a Figma design using Figma API.

```bash
> read_figma_design("https://www.figma.com/design/...")
```

**Arguments:**
- `url` (string, required) - Figma design URL

**Extracts:**
- Colors (hex codes)
- Typography (fonts, sizes, weights)
- Spacing system (8px grid)
- Components
- Screens/Frames
- Breakpoints

### develop_figma_screen

Smart workflow to develop a specific Figma screen.

```bash
> develop_figma_screen(figmaUrl="https://...", screenId="screen-id")
```

**Arguments:**
- `figmaUrl` (string, required) - Figma design URL
- `screenId` (string, required) - Screen ID or name

**Workflow:**
1. Check current code status
2. Compare with Figma design
3. Download needed assets
4. Generate development plan
5. Use downloaded assets (not placeholders)

### bead-create

Create a new bead/task for tracking work.

```bash
> bead-create(title="Add auth", description="Implement JWT auth")
```

**Arguments:**
- `title` (string, required) - Title of bead/task
- `description` (string, required) - Description of what needs to be done

### bead-update-status

Update bead status.

```bash
> bead-update-status(id="bead-001", status="in-progress")
```

**Arguments:**
- `id` (string, required) - Bead ID
- `status` (string, required) - New status (todo, in-progress, completed, blocked)

### bead-complete

Complete a bead with quality gates.

```bash
> bead-complete(id="bead-001")
```

**Arguments:**
- `id` (string, required) - Bead ID

**Quality Gates (all must pass):**
- `npm run typecheck`
- `npm run test`
- `npm run lint`
- `npm run build`

### bead-list

List all beads in project.

```bash
> bead-list(filter="in-progress")
```

**Arguments:**
- `filter` (string, optional) - Filter by status (todo, in-progress, completed, blocked)

### bead-update-type

Update type of an existing bead.

```bash
> bead-update-type(id="bead-001", type="feature")
```

**Arguments:**
- `id` (string, required) - Bead ID
- `type` (string, required) - New type (feature, pattern, decision, knowledge)

## Custom Tools

Create custom tools for project-specific needs:

```bash
aikit tools create my-tool
```

Edit `.aikit/tools/my-tool.ts`:

```typescript
import { defineTool } from 'aikit';

export default defineTool({
  name: 'my-tool',
  description: 'Does something useful',
  args: {
    input: {
      type: 'string',
      description: 'The input',
      required: true,
    },
  },
  async execute({ input }) {
    return `Result for: ${input}`;
  },
});
```

## Next Steps

- **[Plugins](../plugins/intro)** - Learn about plugins
- **[Agents](../agents/intro)** - Learn about agents
- **[Advanced](../advanced/anti-hallucination)** - Advanced features
