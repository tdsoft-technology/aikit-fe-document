---
sidebar_position: 7
---

# /ak_cm_install Command

Install or reinstall AIKit globally.

## Usage

```bash
# Install globally
/ak_cm_install

# Reinstall (update)
/ak_cm_install --force

# Install from local source
cd /path/to/aikit
npm link
```

## Arguments

| Argument | Type | Required | Default | Description |
|---------|------|----------|----------|-------------|
| `--force` | flag | No | false | Force reinstall | Overwrite without asking |
| `--no-deps` | flag | No | false | Skip dependencies | Don't install dependencies |
| `--verbose` | flag | No | false | Verbose output | Show detailed output |

## Installation Methods

### npm Global Install (Recommended)

```bash
# Install from npm registry
npm install -g @tdsoft-tech/aikit

# Verify installation
aikit --version

# Show installed location
npm list -g @tdsoft-tech/aikit
```

### Local Source Install

```bash
# Clone repository
git clone https://github.com/tdsoft-tech/aikit.git
cd aikit

# Install dependencies
npm install

# Build project
npm run build

# Link globally
npm link

# Verify installation
aikit --version
```

### Reinstallation

```bash
# Force reinstall (use if issues)
/ak_cm_install --force

# Same as:
npm uninstall -g @tdsoft-tech/aikit
npm install -g @tdsoft-tech/aikit
```

## Installation Process

### 1. Download Package

Downloads from npm registry:

```bash
# Download and install
npm install -g @tdsoft-tech/aikit

# Output:
added 1 package in 3s
@aikit 0.1.17

# Installed location:
/usr/local/lib/node_modules/@tdsoft-tech/aikit
```

### 2. Setup Configuration

Initializes AIKit configuration:

```bash
# Initialize global config
aikit init --global

# Creates:
# ~/.config/aikit/aikit.json
# ~/.config/aikit/skills/
# ~/.config/aikit/commands/
# ~/.config/aikit/tools/
```

### 3. Verification

Verifies installation:

```bash
# Check version
aikit --version

# Check status
aikit status

# List skills
aikit skills list

# List commands
aikit commands list
```

## Post-Installation

### First Run

```bash
# First run sets up everything
aikit init --global

# Verify all components
aikit status

# Test basic command
aikit help
```

### Updating

```bash
# Update to latest version
npm update -g @tdsoft-tech/aikit

# Reinstall if issues
/ak_cm_install --force
```

## Troubleshooting

### Installation Fails

```bash
# Check npm permissions
npm config get prefix

# Fix permissions if needed
sudo npm install -g @tdsoft-tech/aikit

# Or use sudo with install
sudo npm install -g @tdsoft-tech/aikit
```

### Permission Denied (Linux/macOS)

```bash
# Check npm prefix
npm config get prefix

# Expected output: /usr/local or /home/user/.npm-global

# If different:
npm config set prefix '~/.npm-global'
export PATH="$PATH:$HOME/.npm-global/bin:$PATH"
npm install -g @tdsoft-tech/aikit
```

### Command Not Found

```bash
# Verify PATH
echo $PATH | grep -q "aikit"

# If not found, add to PATH:
export PATH="$PATH:/usr/local/lib/node_modules/@tdsoft-tech/aikit/bin"

# Refresh shell:
source ~/.bashrc  # or
source ~/.zshrc
```

### Windows Installation

On Windows, npm may require elevated privileges:

```bash
# Run as administrator
# Right-click Command Prompt
# "Run as administrator"

# Then install:
npm install -g @tdsoft-tech/aikit
```

## Verification

After installation, verify:

```bash
# Check version
aikit --version

# Should show: v0.1.17

# Check help
aikit help

# Should show available commands

# Check status
aikit status

# Should show configuration loaded
```

## Related Commands

- **[/ak_cm_version](version.md)** - Show installed version
- **[/ak_cm_status](status.md)** - Verify installation
- **[/ak_cm_init](../core/init.md)** - Initialize configuration

## Related Documentation

- **[Installation](../../installation.md)** - Complete installation guide
- **[Configuration](../../advanced/configuration.md)** - Post-installation setup
