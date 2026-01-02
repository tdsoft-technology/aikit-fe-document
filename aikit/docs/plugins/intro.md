<!-- ---
sidebar_position: 1
---

# Plugins

Plugins hook into **Claude Code and OpenCode events** to provide automatic behaviors and enhance the AIKit experience.

## How Plugins Work

Plugins listen to events and react automatically:

```typescript
// Hooks into events:
- session.idle - Session completed
- session.created - New session started
- session.error - Session error occurred
- tool.execute.before - Before tool execution
- tool.execute.after - After tool execution
- file.edited - File was edited
- file.watcher.updated - File watcher updated
- message.updated - Message updated
- message.removed - Message removed
```

## Built-in Plugins

### Enforcer Plugin

**Purpose:** Warns when session ends with incomplete TODOs.

**How it works:**
- Listens for `session.idle` events
- Checks for remaining TODOs
- Warns user about abandoned work

**Enable/Disable:**

In `.aikit/aikit.json`:

```json
{
  "plugins": {
    "enforcer": {
      "enabled": true
    }
  }
}
```

### Compactor Plugin

**Purpose:** Warns at 70%, 85%, 95% context usage.

**How it works:**
- Monitors context usage
- Warns at thresholds
- Prevents rushed work and context overflow

**Enable/Disable:**

```json
{
  "plugins": {
    "compactor": {
      "enabled": true
    }
  }
}
```

### Truncator Plugin

**Purpose:** Automatically truncates large tool outputs.

**How it works:**
- Monitors tool output size
- Truncates outputs > 50KB
- Preserves context space

**Enable/Disable:**

```json
{
  "plugins": {
    "truncator": {
      "enabled": true
    }
  }
}
```

### Notification Plugin

**Purpose:** OS notifications when Claude Code or OpenCode completes session.

**How it works:**
- Listens for `session.idle` events
- Sends OS notification with session summary
- Works on macOS, Linux, Windows

**Notification displays:**
- "Session Complete"
- Session summary

**Enable/Disable:**

```json
{
  "plugins": {
    "notification": {
      "enabled": true
    }
  }
}
```

### Session Management Plugin

**Purpose:** Cross-session context transfer.

**How it works:**
- Integrates with `/handoff` and `/resume` commands
- Provides `list_session` and `read_session` tools
- Keeps sessions under 150k tokens

**Enable/Disable:**

```json
{
  "plugins": {
    "session-management": {
      "enabled": true
    }
  }
}
```

## Custom Plugins

Create custom plugins for project-specific behaviors:

```bash
aikit plugins create my-plugin
```

Edit `.aikit/plugins/my-plugin.ts`:

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

## All Plugins

```bash
aikit plugins list
```

## Next Steps

- **[Advanced](../advanced/anti-hallucination)** - Advanced features
- **[Tools](../tools/intro)** - Built-in tools
- **[Skills](../skills/intro)** - Learn about skills -->



# TO BE DEVELOPING  