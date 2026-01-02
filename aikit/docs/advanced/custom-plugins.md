---
sidebar_position: 5
---

# Custom Plugins

Create **custom plugins** to hook into Claude Code and OpenCode events and add automatic behaviors.

## Create a Custom Plugin

```bash
aikit plugins create my-plugin
```

This creates `.aikit/plugins/my-plugin.ts`.

## Plugin Format

```typescript
import { Plugin } from 'aikit';

export const MyPlugin: Plugin = async ({ project, config, emit }) => {
  return {
    event: async ({ event }) => {
      if (event.type === 'session.idle') {
        console.log('Session idle');
      }
    },
    'tool.execute.before': async (input) => {
      // Modify input before tool execution
      return input;
    },
    'tool.execute.after': async (input, output) => {
      // Modify output after tool execution
      return output;
    },
  };
};

export default MyPlugin;
```

## Plugin Events

### session.idle

Session completed:

```typescript
event: async ({ event }) => {
  if (event.type === 'session.idle') {
    console.log('Session completed at:', event.timestamp);
  }
}
```

### session.created

New session started:

```typescript
event: async ({ event }) => {
  if (event.type === 'session.created') {
    console.log('New session started');
  }
}
```

### session.error

Session error occurred:

```typescript
event: async ({ event }) => {
  if (event.type === 'session.error') {
    console.log('Session error:', event.error);
  }
}
```

### tool.execute.before

Before tool execution:

```typescript
'tool.execute.before': async (input) => {
  // Log tool call
  console.log('Executing tool:', input.tool);
  // Modify input
  return input;
}
```

### tool.execute.after

After tool execution:

```typescript
'tool.execute.after': async (input, output) => {
  // Log result
  console.log('Tool result:', output);
  // Modify output
  return output;
}
```

### file.edited

File was edited:

```typescript
'file.edited': async ({ event }) => {
  if (event.type === 'file.edited') {
    console.log('File edited:', event.path);
  }
}
```

## Plugin Options

### Parameters

```typescript
export const MyPlugin: Plugin = async ({
  project,  // Project configuration
  config,   // AIKit configuration
  emit,     // Emit events
}) => {
  // Plugin implementation
};
```

### Returns

```typescript
return {
  event: async ({ event }) => { },
  'tool.execute.before': async (input) => { },
  'tool.execute.after': async (input, output) => { },
  'file.edited': async ({ event }) => { },
  // ... more events
};
```

## Examples

### Auto-Save Plugin

```typescript
import { Plugin } from 'aikit';

export const AutoSavePlugin: Plugin = async () => {
  return {
    'file.edited': async ({ event }) => {
      if (event.type === 'file.edited') {
        console.log(`Auto-saving: ${event.path}`);
        // Trigger save logic
      }
    },
  };
};

export default AutoSavePlugin;
```

### Analytics Plugin

```typescript
import { Plugin } from 'aikit';

export const AnalyticsPlugin: Plugin = async () => {
  const events: any[] = [];

  return {
    event: async ({ event }) => {
      events.push({
        type: event.type,
        timestamp: Date.now(),
      });
    },
    'tool.execute.after': async ({ event }) => {
      console.log('Total tool calls:', events.filter(e => e.type.startsWith('tool.')).length);
    },
  };
};

export default AnalyticsPlugin;
```

### Custom Validation Plugin

```typescript
import { Plugin } from 'aikit';

export const ValidationPlugin: Plugin = async () => {
  return {
    'tool.execute.after': async ({ event, input, output }) => {
      if (event.type === 'tool.execute.after') {
        if (input.tool === 'memory-update') {
          // Validate memory updates
          if (output.includes('secret')) {
            return 'Error: Cannot store secrets in memory';
          }
        }
      }
    },
  };
};

export default ValidationPlugin;
```

## Enable Custom Plugins

In `.aikit/aikit.json`:

```json
{
  "plugins": {
    "enabled": true,
    "autoload": ["my-plugin", "enforcer", "compactor"]
  }
}
```

## Best Practices

1. **Keep plugins focused** - One responsibility per plugin
2. **Handle errors** - Don't let plugin errors break AIKit
3. **Be async** - Always use async for event handlers
4. **Log actions** - Provide feedback for debugging
5. **Test thoroughly** - Test plugin doesn't break workflows

## List All Plugins

```bash
aikit plugins list
```

## Next Steps

- **[Plugins Guide](../plugins/intro)** - Built-in plugins
- **[Custom Skills](custom-skills)** - Create custom skills
- **[Custom Tools](custom-tools)** - Create custom tools
