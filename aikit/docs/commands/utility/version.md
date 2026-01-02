---
sidebar_position: 2
---

# /ak_cm_version Command

Display AIKit version and environment information.

## Usage

```bash
/ak_cm_version
```

## Output

Shows:
- AIKit version
- Node.js version
- npm version
- Platform/OS
- Architecture

**Example output:**
```bash
🚀 AIKit v0.1.17

Node.js: v18.19.0
npm: 10.8.2
Platform: darwin (macOS)
Architecture: arm64

Global Config: ~/.config/aikit/aikit.json
Project Config: .aikit/aikit.json
```

## Environment Information

AIKit displays the following information:

| Information | Description | Example |
|------------|-------------|---------|
| **Version** | AIKit semantic version | v0.1.17 |
| **Node.js** | Node.js runtime version | v18.19.0 |
| **npm** | Package manager version | 10.8.2 |
| **Platform** | Operating system | darwin (macOS), linux, win32 |
| **Architecture** | CPU architecture | x64, arm64, arm |
| **Global Config** | Global configuration file | ~/.config/aikit/aikit.json |
| **Project Config** | Project configuration (if any) | .aikit/aikit.json |

## Version Format

AIKit uses semantic versioning: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes
- **MINOR**: New features (backwards compatible)
- **PATCH**: Bug fixes (backwards compatible)

**Example versions:**
- v0.1.0 - Initial release
- v0.1.1 - Bug fixes
- v0.2.0 - New features
- v1.0.0 - Breaking changes

## Checking for Updates

```bash
# Check current version
/ak_cm_version

# Check latest version (if installed via npm)
npm outdated @tdsoft-tech/aikit
```

**Output:**
```bash
Package @tdsoft-tech/aikit is up to date with v0.1.17
```

## Troubleshooting

### Version Not Showing

```bash
# If version doesn't show, check installation
which aikit

# Verify global installation
npm list -g @tdsoft-tech/aikit

# Check local installation
aikit --version
```

### Inconsistent Versions

```bash
# Reinstall to fix version issues
npm uninstall -g @tdsoft-tech/aikit
npm install -g @tdsoft-tech/aikit
```

## Related Commands

- **[/ak_cm_status](status.md)** - Show AIKit status
- **[/ak_cm_install](install.md)** - Install or reinstall AIKit

## Related Documentation

- **[Installation](../../installation.md)** - Installation guide
- **[Configuration](../../advanced/configuration.md)** - Configuration system
- **[Changelog](../../CHANGELOG.md)** - Version history
