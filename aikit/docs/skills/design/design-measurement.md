---
sidebar_position: 9
---

# Design Measurement

Extract precise measurements from design references for pixel-perfect implementation.

## When to Use

Use this skill when:
- User provides design image/mockup
- Needs exact specifications extracted
- Implementing from design

## Workflow

### Step 1: Layout Structure

**Identify:**
- Overall canvas size
- Layout type (single/two/three columns, grid)
- Column breakdown
- Vertical sections

**Measure:**
- Width/height of each section
- Margins and padding
- Column gaps

### Step 2: Typography

**Extract:**
- Font family and weight
- Font sizes by hierarchy
- Line heights
- Letter spacing

### Step 3: Colors

**Extract:**
- All hex codes
- Color usage (primary, secondary, etc.)
- Gradients and shadows

### Step 4: Spacing

**Measure:**
- Margin and padding values
- Gap spacing between elements
- Grid system
- Responsive breakpoints

## Example Output

```markdown
## Layout
- Canvas: 1280×844
- Layout: Two columns (sidebar + main)
- Sidebar: 280px wide
- Main: 1000px wide
- Gap: 40px

## Typography
- Heading 1: Inter Bold, 48px, 1.2 lh
- Body: Inter Regular, 16px, 1.6 lh

## Colors
- Primary: #6366f1
- Secondary: #8b5cf6
- Background: #ffffff
- Text: #1e293b
```

## Tools

- Figma inspection panel
- Browser dev tools
- Color picker tools
- Ruler/measurement tools

## Related

- **[Figma Integration](../advanced/figma-integration)** - Figma tools
- **[Component Design](../component-design)** - Design components
