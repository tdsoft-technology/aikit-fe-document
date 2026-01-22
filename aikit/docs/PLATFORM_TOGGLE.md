# Documentation Platform Toggle

This folder contains the documentation platform toggle configuration file that controls visibility of Google Antigravity, OpenCode, Cursor, and Claude Code documentation.

## Supported Platforms

| Platform | Status | Badge | Description |
|----------|--------|-------|-------------|
| 🚀 **Google Antigravity** | Featured | NEW | Google DeepMind's AI IDE |
| 🔵 **OpenCode** | Stable | stable | Open-source AI coding assistant |
| 🟣 **Cursor** | Active | popular | Popular AI-powered code editor |
| 🟡 **Claude Code** | Beta | Beta | Anthropic's CLI tool |

## Quick Toggle

### Google Antigravity (Featured)

```bash
# Hide Antigravity from docs
cd document/aikit
npm run docs:hide-antigravity

# Show Antigravity in docs
npm run docs:show-antigravity
```

### Cursor

```bash
# Hide Cursor from docs
cd document/aikit
npm run docs:hide-cursor

# Show Cursor in docs
npm run docs:show-cursor
```

### Claude Code

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
    "antigravity": {
      "enabled": true,  // Featured - Google Antigravity
      "featured": true
    },
    "cursor": {
      "enabled": true   // Popular choice
    },
    "claude": {
      "enabled": false  // Set to true to show
    }
  }
}
```

## Configuration Structure

| Section | Description | Default |
|---------|-------------|---------|
| `platforms.antigravity.enabled` | Show Antigravity in docs | `true` |
| `platforms.antigravity.featured` | Highlight as featured | `true` |
| `platforms.opencode.enabled` | Show OpenCode in docs | `true` |
| `platforms.cursor.enabled` | Show Cursor in docs | `true` |
| `platforms.claude.enabled` | Show Claude Code in docs | `false` |
| `navigation.defaultPlatform` | Default tab selection | `antigravity` |
| `toggles.showBetaBadges` | Show badges | `true` |
| `navigation.showPlatformTabs` | Show platform switcher UI | `true` |

## Using in Docusaurus

### Platform Tab Component

```tsx
// src/components/PlatformTabs.tsx
import docsConfig from '../docs-config.json';

function PlatformTabs() {
  const platforms = Object.entries(docsConfig.platforms)
    .filter(([_, p]) => p.enabled)
    .sort((a, b) => (b[1].featured ? 1 : 0) - (a[1].featured ? 1 : 0));
  
  return (
    <div className="platform-tabs">
      {platforms.map(([key, platform]) => (
        <Tab 
          key={key}
          icon={docsConfig.ui.platformTabs[key].icon}
          color={docsConfig.ui.platformTabs[key].color}
          featured={platform.featured}
        >
          {platform.label}
          {platform.badge && (
            <Badge 
              {...docsConfig.ui.badgeStyles[platform.badge]}
              animated={platform.badge === 'NEW'}
            >
              {platform.badge}
            </Badge>
          )}
        </Tab>
      ))}
    </div>
  );
}
```

### Featured Platform Banner

```tsx
// src/components/FeaturedPlatform.tsx
import docsConfig from '../docs-config.json';

function FeaturedPlatformBanner() {
  const featured = Object.entries(docsConfig.platforms)
    .find(([_, p]) => p.featured);
  
  if (!featured) return null;
  
  const [key, platform] = featured;
  
  return (
    <div className="featured-banner gradient-bg">
      <span className="new-badge animated">🚀 NEW</span>
      <h3>Now with {platform.label} Support!</h3>
      <p>{platform.betaWarning}</p>
      <a href={`/docs/installation#${key}`}>Get Started →</a>
    </div>
  );
}
```

### Conditional Section Rendering

```tsx
// docs/quick-start.md
<!-- PLATFORM_CONDITION: antigravity -->
## Google Antigravity Quick Start
...Antigravity-specific content...
<!-- END_PLATFORM_CONDITION -->

<!-- PLATFORM_CONDITION: opencode -->
## OpenCode Quick Start
...OpenCode-specific content...
<!-- END_PLATFORM_CONDITION -->

<!-- PLATFORM_CONDITION: cursor -->
## Cursor Quick Start
...Cursor-specific content...
<!-- END_PLATFORM_CONDITION -->
```

## NPM Scripts

Add to `document/aikit/package.json`:

```json
{
  "scripts": {
    "docs:show-antigravity": "node scripts/toggle-platform.js antigravity true",
    "docs:hide-antigravity": "node scripts/toggle-platform.js antigravity false",
    "docs:show-cursor": "node scripts/toggle-platform.js cursor true",
    "docs:hide-cursor": "node scripts/toggle-platform.js cursor false",
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
  console.error(`Available: ${Object.keys(config.platforms).join(', ')}`);
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
- Show Google Antigravity as the featured/default platform
- Include enabled platforms in navigation
- Show platform-specific tabs with appropriate badges
- Display animated "NEW" badge for Antigravity
- Filter content based on platform conditions
