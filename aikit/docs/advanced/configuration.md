---
sidebar_position: 2
---

# Configuration

AIKit uses a **flexible two-level configuration** system: global and project-specific.

## Configuration Levels

### Global Config (~/.config/aikit/)

Applies to **all projects**. Contains:
- Default settings
- Shared skills
- Global commands
- Custom tools
- Plugins

### Project Config (.aikit/)

**Project-specific** settings that override global config. Contains:
- Project-specific rules
- Custom skills
- Custom commands
- Custom tools
- Project memory

## Directory Structure

### Global Config

```
~/.config/aikit/
├── aikit.json              # Global configuration
├── AGENTS.md               # Global agent rules
├── skills/                 # Global skills
├── commands/               # Global commands
├── tools/                  # Global tools
├── plugins/                # Global plugins
└── memory/                 # Global memory
    ├── observations/
    ├── handoffs/
    └── research/
```

### Project Config

```
your-project/
├── .aikit/
│   ├── aikit.json          # Project configuration
│   ├── AGENTS.md           # Project-specific agent rules
│   ├── skills/             # Project-specific skills
│   ├── commands/           # Project-specific commands
│   ├── tools/              # Project-specific tools
│   ├── plugins/            # Project-specific plugins
│   └── memory/             # Project memory
│       ├── observations/
│       ├── handoffs/
│       └── research/
├── .beads/               # Task tracking
├── spec.md               # Project specification
└── review.md             # Code review notes
```

## aikit.json Configuration

### Minimal Config

```json
{
  "version": "0.1.0"
}
```

### Full Config

```json
{
  "version": "0.1.0",
  "skills": {
    "enabled": true,
    "directory": "skills"
  },
  "agents": {
    "enabled": true,
    "default": "build"
  },
  "commands": {
    "enabled": true
  },
  "tools": {
    "enabled": true
  },
  "plugins": {
    "enabled": true,
    "autoload": ["enforcer", "compactor", "truncator"]
  },
  "memory": {
    "enabled": true,
    "maxSize": 1000000
  },
  "beads": {
    "enabled": true,
    "autoInit": false
  },
  "antiHallucination": {
    "enabled": true,
    "specFile": "spec.md",
    "reviewFile": "review.md"
  }
}
```

### Config Options

#### skills

```json
{
  "skills": {
    "enabled": true,
    "directory": "skills"
  }
}
```

- `enabled` (boolean) - Enable/disable skills system
- `directory` (string) - Skills directory name

#### agents

```json
{
  "agents": {
    "enabled": true,
    "default": "build"
  }
}
```

- `enabled` (boolean) - Enable/disable agent system
- `default` (string) - Default agent (`planner`, `build`, `rush`, `review`, `scout`, `explore`, `vision`, `one-shot`)

#### commands

```json
{
  "commands": {
    "enabled": true
  }
}
```

- `enabled` (boolean) - Enable/disable command system

#### tools

```json
{
  "tools": {
    "enabled": true
  }
}
```

- `enabled` (boolean) - Enable/disable tool system

#### plugins

```json
{
  "plugins": {
    "enabled": true,
    "autoload": ["enforcer", "compactor", "truncator", "notification", "session-management"]
  }
}
```

- `enabled` (boolean) - Enable/disable plugin system
- `autoload` (array) - Plugins to load automatically

#### memory

```json
{
  "memory": {
    "enabled": true,
    "maxSize": 1000000
  }
}
```

- `enabled` (boolean) - Enable/disable memory system
- `maxSize` (number) - Maximum memory size in bytes

#### beads

```json
{
  "beads": {
    "enabled": true,
    "autoInit": false
  }
}
```

- `enabled` (boolean) - Enable/disable Beads integration
- `autoInit` (boolean) - Automatically initialize Beads

#### antiHallucination

```json
{
  "antiHallucination": {
    "enabled": true,
    "specFile": "spec.md",
    "reviewFile": "review.md"
  }
}
```

- `enabled` (boolean) - Enable/disable anti-hallucination
- `specFile` (string) - Specification file name
- `reviewFile` (string) - Review file name

## AGENTS.md - Project Rules

Define project-specific rules for AI agents:

```markdown
# Project Rules

## Build Commands
- `npm run build` - Build project
- `npm run test` - Run tests
- `npm run lint` - Run linting

## Code Style
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas

## Naming Conventions
- Components: PascalCase
- Files: kebab-case
- Variables: camelCase
- Constants: SCREAMING_SNAKE_CASE

## Project-Specific Rules
- Always use TypeScript strict mode
- No `any` types allowed
- All functions must have JSDoc

## Testing
- Always use Vitest
- Test files must end in `.test.ts`
- Coverage target: 80%

## Git
- Use conventional commits: `type(scope): subject`
- Feature branches: `feat/*`
- Bug fix branches: `fix/*`
```

## CLI Commands

### Initialize Config

```bash
# Global config
aikit init --global

# Project config
aikit init
```

### Show Status

```bash
aikit status
```

Output shows:
- Config location
- Enabled features
- Version info

### Sync

```bash
# Sync global skills to project
aikit skills sync
```

## Next Steps

- **[Custom Skills](custom-skills)** - Create custom skills
- **[Custom Tools](custom-tools)** - Create custom tools
- **[Custom Plugins](custom-plugins)** - Create custom plugins
