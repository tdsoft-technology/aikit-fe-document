---
sidebar_position: 1
---

# /drawio-interact Command

Create and edit diagrams with AI + Draw.io integration using **manual sync** for reliable, predictable conversions.

## Overview

Describe what you want → AI generates diagram → Edit visually in Draw.io → **Manually sync** changes back to code.

**Version**: Manual Sync (v3) - More reliable than auto-sync

## Quick Start

```bash
# Create a new diagram
/drawio-interact create login-flow

# Open existing diagram in Draw.io
/drawio-interact open login-flow

# Edit in Draw.io, save, then sync back to Mermaid
/drawio-interact sync-to-mmd login-flow

# Edit Mermaid directly, then update Draw.io
/drawio-interact sync-to-drawio login-flow

# List all diagrams
/drawio-interact list
```

## What This Solves

You get the **best of both worlds**:

✅ **AI Generation** - Describe in plain English → Get a diagram instantly
✅ **Visual Editing** - Drag-drop in Draw.io (no syntax to remember)
✅ **Manual Sync** - You control when sync happens (predictable!)
✅ **Version Control** - Mermaid files work with git
✅ **Change Reporting** - See exactly what changed

## Why Manual Sync?

The previous auto-sync version (v2) had reliability issues:
- ❌ Inconsistent behavior across platforms
- ❌ Background processes could fail silently
- ❌ Sometimes required npm installs during sync
- ❌ Hard to debug when things went wrong

**v3 Manual Sync** solves these:
- ✅ Deterministic conversions (same input → same output)
- ✅ No background processes
- ✅ Clear error messages
- ✅ Works consistently on all platforms

## Commands

### create

Creates a new diagram from a description.

```bash
/drawio-interact create <name>
```

**What happens**:
1. AI generates Mermaid code based on name/description
2. Creates `mermaid/<name>.mmd`
3. Converts to `.aikit/assets/drawio/<name>.drawio`
4. Opens Draw.io app
5. Displays generated code and file paths

**Example**:
```bash
/drawio-interact create user-authentication
```

### open

Opens an existing diagram in Draw.io.

```bash
/drawio-interact open <name>
```

**Example**:
```bash
/drawio-interact open login-flow
```

### sync-to-mmd

Converts Draw.io file → Mermaid format.

```bash
/drawio-interact sync-to-mmd <name>
```

**Use this after**: Editing diagram in Draw.io and saving (Cmd+S/Ctrl+S)

**Accepts**:
- Diagram name: `login-flow`
- Relative path: `diagrams/my-flow.drawio`
- Absolute path: `/Users/.../diagram.drawio`

**Example**:
```bash
# Edit in Draw.io, save (Cmd+S), then:
/drawio-interact sync-to-mmd login-flow
```

### sync-to-drawio

Converts Mermaid file → Draw.io format.

```bash
/drawio-interact sync-to-drawio <name>
```

**Use this after**: Editing `.mmd` file in code editor

**Accepts**:
- Diagram name: `login-flow`
- Relative path: `docs/diagram.mmd`
- Absolute path: `/Users/.../diagram.mmd`

**Example**:
```bash
# Edit mermaid/login-flow.mmd, save, then:
/drawio-interact sync-to-drawio login-flow
```

### list

Lists all diagrams in the project.

```bash
/drawio-interact list
```

**Example output**:
```
Diagrams in this project:

1. user-auth
   Mermaid: mermaid/user-auth.mmd ✓
   Drawio: .aikit/assets/drawio/user-auth.drawio ✓

2. order-flow
   Mermaid: mermaid/order-flow.mmd ✓
   Drawio: [missing]
   Run: /drawio-interact sync-to-drawio order-flow
```

## File Structure

```
your-project/
├── mermaid/                              # Version controlled
│   ├── user-authentication.mmd           # Edit with code editor
│   ├── order-flow.mmd
│   └── api-design.mmd
│
└── .aikit/assets/drawio/                 # Visual editing
    ├── user-authentication.drawio        # Edit in Draw.io
    ├── order-flow.drawio
    └── api-design.drawio
```

## Usage Examples

### Example 1: Create & Edit Diagram

```bash
/drawio-interact create user-authentication
```

**Response**:
```
Creating diagram: user-authentication

📄 Generated Mermaid Code:
graph TD
    User[User] -->|Login| Login[Login Page]
    Login -->|Success| Dashboard[Dashboard]

✅ Files created:
   - mermaid/user-authentication.mmd
   - .aikit/assets/drawio/user-authentication.drawio

🎨 Opening in Draw.io...

💡 After editing, run: /drawio-interact sync-to-mmd user-authentication
```

### Example 2: Edit in Draw.io & Sync

1. **Edit in Draw.io** (already open)
   - Drag "Password Reset" node
   - Connect from Login page
   - **SAVE** (Cmd+S / Ctrl+S)

2. **Sync changes**:
```bash
/drawio-interact sync-to-mmd user-authentication
```

**Response**:
```
Syncing Draw.io → Mermaid...

📊 Reading: .aikit/assets/drawio/user-authentication.drawio
🔄 Converting...
✅ Updated: mermaid/user-authentication.mmd

Changes:
• 4 nodes
• 3 edges

Preview:
graph TD
    User[User] -->|Login| Login[Login Page]
    Login -->|Success| Dashboard[Dashboard]
    Login -->|Forgot Password| Recovery[Password Reset]
```

### Example 3: Edit Mermaid & Sync

```bash
# Edit mermaid/user-authentication.mmd in your editor
# Add a new node or edge, save

/drawio-interact sync-to-drawio user-authentication
```

**Response**:
```
Syncing Mermaid → Draw.io...

📝 Reading: mermaid/user-authentication.mmd
🔄 Converting...
✅ Updated: .aikit/assets/drawio/user-authentication.drawio

Changes:
• 4 nodes
• 3 edges

Open in Draw.io? (y/n): y
🎨 Opening...
```

## Supported Diagram Types

The AI recognizes common patterns:

| Description | Generated Diagram |
|------------|-------------------|
| "login flow", "authentication" | Flowchart with login steps |
| "order process", "checkout" | Flowchart with payment |
| "API request", "sequence" | Sequence diagram |
| Generic description | Basic flowchart |

## Error Handling

### File Not Found

```
❌ File not found: mermaid/login-flow.mmd

Did you mean:
- mermaid/auth-flow.mmd
- mermaid/login.mmd

Or run: /drawio-interact create login-flow
```

### Invalid Mermaid Syntax

```
❌ Invalid Mermaid syntax at line 5:

4:   A --> B
5:   B -- > C    ← Missing space before >
6:   C --> D

Common issues:
- Use --> for edges (not -- >)
- Labels use |text| syntax
- Nodes use [name] or {name}

Validate at: https://mermaid.live
```

## Tips & Best Practices

### Creating Diagrams

1. **Be descriptive**:
   - ✅ "User authentication flow with social login and password reset"
   - ❌ "flowchart"

2. **Mention key elements**:
   - "Decision point for payment success/failure"
   - "Three roles: admin, editor, viewer"

### Editing Workflow

1. **Draw.io → Mermaid**:
   - Edit in Draw.io
   - **SAVE** (Cmd+S / Ctrl+S) - Critical!
   - Run `/drawio-interact sync-to-mmd <name>`

2. **Mermaid → Draw.io**:
   - Edit `.mmd` file
   - Save
   - Run `/drawio-interact sync-to-drawio <name>`

3. **Keep structure simple** for best conversion results

### Version Control

```bash
# Commit Mermaid files to git
git add mermaid/*.mmd
git commit -m "Add authentication flow diagram"

# .drawio files are for visual editing
# Can add to .gitignore if desired
echo ".aikit/assets/drawio/*.drawio" >> .gitignore
```

### Custom Paths

You can use custom paths for non-standard locations:

```bash
# Custom directories
/drawio-interact sync-to-mmd docs/diagrams/my-flow.drawio

# Creates/updates paired file:
docs/diagrams/my-flow.drawio → docs/diagrams/my-flow.mmd
```

## Technical Details

### Conversion Tools

**Location**: `src/tools/drawio-convert/`

**Modules**:
- `convert-to-mermaid.js` - Draw.io → Mermaid conversion
- `convert-to-drawio.js` - Mermaid → Draw.io conversion
- `diagram-utils.js` - Path resolution, validation, utilities
- `open-diagram.js` - Cross-platform Draw.io opener

**Key Features**:
- Deterministic conversions (same input → same output)
- Comprehensive error handling
- Clear error messages with line numbers
- Validation before conversion
- Support for custom file paths

### Platform Support

**Draw.io Opening**:
- macOS: Uses `open -a "Draw.io"`
- Linux: Uses `xdg-open` or Draw.io desktop app
- Windows: Uses `start` command
- Fallback: Opens https://app.diagrams.net/ if desktop app not found

## Migration from Auto-Sync (v2)

If you were using the previous auto-sync version:

**Old workflow (v2)**:
```bash
/drawio-interact create my-diagram
[Edit in Draw.io, save]
[Auto-sync detects and updates Mermaid automatically]
```

**New workflow (v3)**:
```bash
/drawio-interact create my-diagram
[Edit in Draw.io, save]
/drawio-interact sync-to-mmd my-diagram  ← Run this manually
```

**Benefits**:
- ✅ Predictable behavior
- ✅ No background processes
- ✅ Clear visibility into what changed
- ✅ Easier debugging
- ✅ Works consistently on all platforms

## Related Commands

- **[/design](./design.md)** - Design architecture and workflows
- **[/analyze-project](../core/analyze-project.md)** - Analyze codebase structure

## Related Skills

- **[API Design](../../skills/development/api-design.md)** - Design API diagrams
- **[Component Design](../../skills/development/component-design.md)** - Design component diagrams
- **[Database Design](../../skills/design/database-design.md)** - Design database schemas

## Summary

**This command gives you**:
- 🚀 Speed: AI generates diagrams in seconds
- 🎨 Flexibility: Visual editing with drag-drop
- 🔄 Control: Manual sync (you decide when)
- 📝 Version Control: Mermaid files in git
- 🔍 Visibility: See exactly what changed
- ✅ Reliability: Deterministic conversions

**Ready to use**:
```bash
/drawio-interact create my-first-diagram
```

Happy diagramming! 🎉
