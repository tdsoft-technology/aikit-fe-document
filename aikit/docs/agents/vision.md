---
sidebar_position: 7
---

# Vision Agent

## Overview

**@vision** is a multimodal analysis agent responsible for analyzing visual content including mockups, screenshots, PDFs, diagrams, and UI/UX designs.

## When to Use

Use @vision when:
- Analyzing mockups or design files
- Interpreting screenshots or screen captures
- Understanding diagrams and flowcharts
- Extracting information from images
- Converting visual designs to technical specifications
- Analyzing UI/UX designs

## Capabilities

- Image analysis and interpretation
- Mockup and design file analysis
- PDF content extraction
- Diagram understanding
- UI/UX component identification
- Design token extraction (colors, typography, spacing)
- Visual hierarchy and layout understanding

## How to Use

### Direct Invocation

```bash
# Analyze a screenshot
@vision Analyze this login form screenshot

# Analyze a mockup
@vision Extract design tokens from this Figma file

# Understand a diagram
@vision Explain this system architecture diagram
```

### Tool Invocation

```bash
# Use Vision tools
> read_figma_design(figmaUrl)
> develop_figma_screen(figmaUrl, screenId)
```

## Workflow

### Step 1: Receive Visual Input

1. Identify the visual content type
2. Understand the analysis goal
3. Consider the context (design review, implementation, etc.)

**Input types:**
- Screenshot: UI state or bug reproduction
- Mockup: Component design or flow
- PDF: Documentation or specification
- Diagram: System architecture or data flow
- Image: UI mockup or design asset

**Questions to ask:**
- What specific information should I extract?
- Is this for design review or implementation?
- What level of detail is needed?
- Are there specific questions to answer from the visual?

### Step 2: Analyze Visual Content

**For Screenshots:**
1. Identify UI elements (buttons, forms, navigation)
2. Note layout and structure
3. Observe styling (colors, spacing, typography)
4. Check for accessibility issues
5. Note any issues or bugs visible

**For Mockups:**
1. List all components visible
2. Identify component hierarchy
3. Note states (hover, active, disabled, etc.)
4. Extract text content and labels
5. Understand interactions and flow

**For Diagrams:**
1. Identify all entities and relationships
2. Understand data flow direction
3. Note decision points or conditions
4. Identify system boundaries
5. Understand notation and symbols

### Step 3: Extract Structured Information

1. Create organized list of findings
2. Categorize information (layout, components, content)
3. Note technical details (measurements if visible)
4. Identify design patterns or inconsistencies
5. Suggest improvements or questions

**Information categories:**
- Layout structure
- Component list and properties
- Color palette (if visible)
- Typography (fonts, sizes, weights)
- Spacing (margins, padding)
- Content and labels

### Step 4: Translate to Technical Specs

1. Convert visual design to implementation requirements
2. Define component specifications
3. Create detailed descriptions
4. Provide code structure suggestions
5. Note any implementation considerations

**Translation considerations:**
- Semantic HTML elements to use
- Component props and state needed
- Styling approach (CSS, Tailwind, etc.)
- Responsive behavior
- Accessibility requirements

### Step 5: Provide Actionable Output

1. Summarize key findings
2. Provide specific recommendations
3. Create implementation plan
4. Note any risks or uncertainties
5. Suggest next steps

## Analysis Techniques

### Screenshots

**UI Elements to Identify:**
- Navigation (header, sidebar, breadcrumbs)
- Actions (primary/secondary buttons, links)
- Forms (inputs, labels, validation messages)
- Content (text, images, lists)
- Feedback (success/error messages, loaders)

**Systematic Approach:**
1. Top-left to bottom-right scan
2. Left to right for each section
3. Note interactive elements and their states
4. Identify patterns and inconsistencies

### Mockups

**Component Extraction:**
1. List each distinct component
2. Note component variants and states
3. Identify reused components
4. Document interaction patterns

**Hierarchy Understanding:**
1. Identify parent-child relationships
2. Note container/contained elements
3. Understand nesting levels
4. Document layout structure

### Diagrams

**Entity Relationship:**
1. Identify all nodes (entities, systems, databases)
2. Map connections and relationships
3. Note data flow direction
4. Identify decision points

**System Architecture:**
1. Identify main systems and subsystems
2. Map data flow between systems
3. Note external dependencies
4. Understand deployment architecture

## Best Practices

### Visual Analysis

✅ **DO:**
- Be systematic and thorough
- Note all visible elements
- Extract exact information (colors, sizes, text)
- Consider responsive behavior
- Check for accessibility issues
- Ask clarifying questions

❌ **DON'T:**
- Guess information not clearly visible
- Assume implementation details
- Skip important elements
- Make assumptions without noting them
- Overlook design inconsistencies

### Technical Translation

✅ **DO:**
- Provide specific HTML/CSS recommendations
- Suggest component structures
- Define clear props and interfaces
- Note implementation considerations
- Consider existing design system

❌ **DON'T:**
- Suggest implementation without design reference
- Ignore technical constraints
- Make arbitrary design decisions
- Over-specify components

### Documentation

✅ **DO:**
- Document all findings clearly
- Use organized structure
- Provide visual context with text
- Link to original visual content
- Note any assumptions made

❌ **DON'T:**
- Just describe what you see
- Provide vague descriptions
- Skip technical details
- Leave out important observations

## Common Patterns

### Layout Analysis

**Grid Layouts:**
```markdown
# Typical pattern:
- Header (full-width)
  - Logo (left)
  - Nav (center/right)
  - Actions (right)
- Hero (full-width with content)
  - Features grid (3 columns)
- Footer (full-width)
```

**Flexbox Layouts:**
```markdown
# Typical pattern:
- Sidebar (fixed left)
- Main content (flex-1, scrollable)
- Header (fixed top)
- Content centered in main area
```

### Component Patterns

**Form Structure:**
```html
<form>
  <label>Field Label</label>
  <input type="text" placeholder="Placeholder" />
  <button type="submit">Submit</button>
  {error_message}
</form>
```

**Card Components:**
```html
<div class="card">
  <img src="thumbnail.jpg" alt="Thumbnail" />
  <h3>Card Title</h3>
  <p>Card description</p>
  <div class="actions">
    <button>Primary Action</button>
    <button>Secondary Action</button>
  </div>
</div>
```

## Anti-Patterns

❌ **DON'T:**
- Describe visuals in text without structure
- Guess measurements or values
- Assume colors without verification
- Skip important elements or states
- Make arbitrary implementation decisions
- Overlook accessibility issues
- Provide vague recommendations

## Verification

- [ ] All visible elements documented
- [ ] Design tokens extracted (if applicable)
- [ ] Layout structure understood
- [ ] Components identified and categorized
- [ ] Technical specs are specific and actionable
- [ ] Questions or uncertainties noted
- [ ] Original visual content referenced

## Related Skills

- [Frontend Aesthetics](../skills/design/frontend-aesthetics.md) - Visual quality principles
- [Accessibility](../skills/design/accessibility.md) - A11y compliance
- [API Design](../development/api-design.md) - API from visual specs
- [Component Design](../development/component-design.md) - Component structure

## Related Agents

- **[@build](build.md)** - Implement visual designs
- **[@scout](scout.md)** - Research visual design patterns
- **[@planner](planner.md)** - Plan implementation from designs

## Related Commands

- **[/ak_cm_analyze-figma](../commands/research/analyze-figma.md)** - Analyze Figma designs
- **[/ak_cm_develop-figma-screen](../commands/research/design.md)** - Implement from designs
