---
sidebar_position: 4
---

# Custom Tools

Create **custom tools** for project-specific needs.

## Create a Custom Tool

```bash
aikit tools create my-tool
```

This creates `.aikit/tools/my-tool.ts`.

## Tool Format

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
    // Tool logic here
    return `Result for: ${input}`;
  },
});
```

## Tool Definition

### name

Tool name (used to call it):

```typescript
name: 'my-tool'
```

### description

What the tool does:

```typescript
description: 'Does something useful'
```

### args

Tool arguments with schema:

```typescript
args: {
  input: {
    type: 'string',  // 'string' | 'number' | 'boolean' | 'array' | 'object'
    description: 'The input',
    required: true,
  },
}
```

- `type` (required) - Argument type
- `description` (required) - What this argument is for
- `required` (optional) - Whether argument is required (default: true)
- `default` (optional) - Default value

### execute

Tool implementation:

```typescript
async execute(args: Record<string, unknown>) {
  // Tool logic
  return string result;
}
```

## Examples

### Git Status Tool

```typescript
import { defineTool } from 'aikit';

export default defineTool({
  name: 'git-status',
  description: 'Show git status',
  args: {},
  async execute() {
    const { execSync } = require('child_process');
    const status = execSync('git status --short').toString();
    return status;
  },
});
```

### File Search Tool

```typescript
import { defineTool } from 'aikit';
import { glob } from 'glob';

export default defineTool({
  name: 'find-files',
  description: 'Find files by pattern',
  args: {
    pattern: {
      type: 'string',
      description: 'File pattern (e.g., "*.ts")',
      required: true,
    },
  },
  async execute({ pattern }) {
    const files = await glob(pattern);
    return files.join('\n');
  },
});
```

### API Call Tool

```typescript
import { defineTool } from 'aikit';

export default defineTool({
  name: 'call-api',
  description: 'Make API request',
  args: {
    url: {
      type: 'string',
      description: 'API endpoint URL',
      required: true,
    },
    method: {
      type: 'string',
      description: 'HTTP method',
      required: true,
    },
  },
  async execute({ url, method }) {
    const response = await fetch(url, { method });
    const data = await response.json();
    return JSON.stringify(data, null, 2);
  },
});
```

## Use Custom Tools

```bash
# Call tool in Claude Code or OpenCode
> git-status()
> find-files(pattern="*.test.ts")
> call-api(url="https://api.example.com/users", method="GET")
```

## Tool Types

### Type Definitions

```typescript
type ToolArgType = 'string' | 'number' | 'boolean' | 'array' | 'object';
```

### Required vs Optional

```typescript
// Required
{
  name: {
    type: 'string',
    description: 'Name',
    required: true,
  }
}

// Optional with default
{
  limit: {
    type: 'number',
    description: 'Limit',
    required: false,
    default: 10,
  }
}
```

## Error Handling

```typescript
async execute({ input }) {
  try {
    // Tool logic
    return 'Success';
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
```

## Best Practices

1. **Keep tools focused** - One responsibility per tool
2. **Validate inputs** - Check required arguments
3. **Handle errors** - Return clear error messages
4. **Return strings** - Always return string output
5. **Add description** - Clear description of what tool does
6. **Use async** - Always use async/await for I/O

## List All Tools

```bash
aikit tools list
```

## Next Steps

- **[Tools Guide](../tools/intro)** - Built-in tools
- **[Custom Skills](custom-skills)** - Create custom skills
- **[Custom Plugins](custom-plugins)** - Create custom plugins
