---
sidebar_position: 11
---

# Figma to Code

Convert Figma designs to code with extracted tokens and assets.

## When to Use

Use this skill when:
- Implementing Figma designs
- Converting mockups to code
- Building from design specifications

## Workflow

### Step 1: Analyze Figma

Extract design tokens first:

```bash
> read_figma_design("https://www.figma.com/design/...")
```

### Step 2: Select Screens

Choose which screens to implement from the analysis output.

### Step 3: Develop Screens

Use `develop_figma_screen` tool:

```bash
> develop_figma_screen(
    figmaUrl="https://...",
    screenId="screen-id"
  )
```

**Workflow:**
1. Check current code status
2. Compare with Figma design
3. Download needed assets
4. Generate development plan
5. Use downloaded assets (not placeholders)

### Step 4: Implement

Create components using extracted tokens:

```typescript
// Use design tokens
const colors = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
};

// Use typography
const typography = {
  heading: {
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};
```

## Best Practices

- **Use extracted assets** - Don't use placeholder images
- **Follow spacing system** - Use extracted 8px grid
- **Use exact colors** - Copy hex codes from Figma
- **Match typography** - Use fonts, sizes, weights from design
- **Responsive breakpoints** - Use extracted breakpoint values

## Anti-Patterns

- <MaterialIcon name="cancel" className="icon-error" />Guessing values instead of measuring
- <MaterialIcon name="cancel" className="icon-error" />Using placeholder images
- <MaterialIcon name="cancel" className="icon-error" />Not using extracted assets
- <MaterialIcon name="cancel" className="icon-error" />Ignoring spacing system
- <MaterialIcon name="cancel" className="icon-error" />Using different colors than design

## Example

```bash
# Analyze design
> read_figma_design("https://figma.com/design/abc")
# Extracts tokens...

# Select screen
# User confirms: "Main Page"

# Develop screen
> develop_figma_screen(
    figmaUrl="https://figma.com/design/abc",
    screenId="main-page"
  )

# Output:
# Development Plan for Screen: Main Page
# Current Code Status: ...
# Missing Sections: ...
# Downloaded Assets: ...
# Next Steps: ...
```

## Related

- **[Analyze Figma](analyze-figma)** - Extract design tokens
- **[Design Measurement](design-measurement)** - Extract measurements
