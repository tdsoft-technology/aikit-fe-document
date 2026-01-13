# Documentation Platform Toggle

This folder contains the documentation platform toggle configuration file that controls visibility of OpenCode and Claude Code documentation.

## Quick Toggle

To show or hide Claude Code documentation:

```bash
# Hide Claude Code from docs
cd document/aikit
npm run docs:hide-claude

# Show Claude Code in docs
npm run docs:show-claude
```

Or edit `document/aikit/docs-config.json`:

```json
{
  "platforms": {
    "claude": {
      "showInNav": false  // Set to false to hide
    }
  }
}
```

## Configuration Structure

| Section | Description | Default |
|---------|-------------|---------|
| `platforms.opencode.enabled` | Show OpenCode in docs | `true` |
| `platforms.claude.enabled` | Show Claude Code in docs | `true` |
| `toggles.showClaudeCode` | Master toggle for Claude | `true` |
| `toggles.showBetaBadges` | Show (Beta) badges | `true` |
| `navigation.showPlatformTabs` | Show platform switcher UI | `true` |

## Using in Docusaurus

### Platform Tab Component

```tsx
// src/components/PlatformTabs.tsx
import docsConfig from '../docs-config.json';

function PlatformTabs() {
  const platforms = Object.entries(docsConfig.platforms)
    .filter(([_, p]) => p.enabled);
  
  return (
    <div className="platform-tabs">
      {platforms.map(([key, platform]) => (
        <Tab 
          key={key}
          icon={docsConfig.ui.platformTabs[key].icon}
          color={docsConfig.ui.platformTabs[key].color}
        >
          {platform.label}
          {platform.badge && (
            <Badge {...docsConfig.ui.badgeStyles[platform.badge]}>
              {platform.badge}
            </Badge>
          )}
        </Tab>
      ))}
    </div>
  );
}
```

### Conditional Section Rendering

```tsx
// docs/quick-start.md
<!-- PLATFORM_CONDITION: claude -->
## Claude Code Quick Start
...Claude-specific content...
<!-- END_PLATFORM_CONDITION -->

<!-- PLATFORM_CONDITION: opencode -->
## OpenCode Quick Start
...OpenCode-specific content...
<!-- END_PLATFORM_CONDITION -->
```

## NPM Scripts

Add to `document/aikit/package.json`:

```json
{
  "scripts": {
    "docs:show-claude": "node scripts/toggle-platform.js claude true",
    "docs:hide-claude": "node scripts/toggle-platform.js claude false",
    "docs:status": "node scripts/docs-status.js"
  }
}
```

## Toggle Script

Create `document/aikit/scripts/toggle-platform.js`:

```javascript
import fs from 'fs';
import path from 'path';

const configPath = path.join(__dirname, '../docs-config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const [platform, show] = process.argv.slice(2);

if (!config.platforms[platform]) {
  console.error(`Platform not found: ${platform}`);
  process.exit(1);
}

config.platforms[platform].enabled = show === 'true';

fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
console.log(`✓ ${platform} ${show === 'true' ? 'shown' : 'hidden'} in documentation`);
console.log('Run: npm run docs:build');
```

## Example: Building Platform-Aware Documentation

After toggling platforms, build documentation with platform awareness:

```bash
# Build docs
npm run build

# Preview
npm run start
```

The Docusaurus build will now:
- Only include enabled platforms in navigation
- Show platform-specific tabs
- Display badges for Beta/recommended platforms
- Filter content based on platform conditions
