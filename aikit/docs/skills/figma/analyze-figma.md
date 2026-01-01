---
sidebar_position: 10
---

# Analyze Figma

Extract design tokens from Figma designs.

## When to Use

Use this skill when:
- User provides Figma URL
- Needs design specifications
- Converting Figma to code

## Workflow

### Step 1: Extract Design Tokens

Use `read_figma_design` tool:

```bash
> read_figma_design("https://www.figma.com/design/...")
```

**Extracts:**
- Colors (hex codes)
- Typography (fonts, sizes, weights)
- Spacing system (8px grid)
- Components
- Screens/Frames
- Breakpoints

### Step 2: Analyze Structure

**Identify:**
- Component hierarchy
- Layout patterns
- Reusable elements
- Design tokens used

### Step 3: Save to Memory

```bash
> memory-update("research/figma-analysis", "# Design tokens...")
```

## Example Output

```markdown
# Figma Design Analysis

## Colors
- Primary: #6366f1
- Secondary: #8b5cf6
- Background: #ffffff

## Typography
- Heading: Inter, 24px, bold
- Body: Inter, 16px, regular

## Spacing
- Base unit: 8px
- Scale: 4, 8, 12, 16, 24, 32

## Components
- Buttons
- Cards
- Forms
- Modals
```

## Requirements

- Figma API token configured
- Design file is accessible
- Figma file is shared with your account

## Related

- **[Figma to Code](figma-to-code)** - Convert to code
- **[Design Measurement](design-measurement)** - Extract measurements
