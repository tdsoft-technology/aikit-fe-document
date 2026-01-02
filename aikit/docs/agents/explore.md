---
sidebar_position: 6
---

# Explore Agent

## Overview

**@explore** is a fast codebase navigation and pattern search agent responsible for quickly finding files, understanding codebase structure, and identifying patterns in the code.

## When to Use

Use @explore when:
- Finding files or components
- Understanding codebase structure
- Searching for specific patterns or usages
- Locating where specific functionality is implemented
- Understanding how systems connect
- Finding configuration or setup code

## Capabilities

- Fast file discovery and search
- Pattern search and identification
- Codebase navigation and understanding
- Dependency mapping between modules
- Quick context gathering for development tasks
- Structure analysis and architecture understanding

## How to Use

### Direct Invocation

```bash
# Search for files
@explore Find authentication components

# Search for patterns
@explore Search for useState patterns

# Navigate codebase
@explore Understand project structure
```

### Tool Invocation

```bash
# Use Explore tools
> find_skills("navigation")
> find_files("auth", recursive=true)
> search_code("useEffect.*dependency")
```

## Workflow

### Step 1: Understand Task

1. What are you looking for?
2. What is the context or goal?
3. What is the search scope?

**Questions to ask:**
- Are you looking for a specific file or component?
- Do you need to understand the codebase structure?
- Are you searching for how something is implemented?
- Is this a pattern search or file discovery?

### Step 2: Choose Approach

**File Discovery:**
- Use Glob patterns for file names
- Search by file extension
- Search directory structure
- Use find commands for location

**Pattern Search:**
- Use grep for code patterns
- Search for specific function calls
- Find import/export relationships
- Identify common patterns across files

**Structure Understanding:**
- Map module relationships
- Understand data flow
- Identify architectural patterns
- Note configuration locations

### Step 3: Execute Search

**File Discovery:**
```bash
# Find all test files
find src -name "*.test.ts" -o -name "*.spec.ts"

# Find components directory
find src -type d -name "components"

# Find configuration files
find . -name "*.config.*" -o -name ".env*"
```

**Pattern Search:**
```bash
# Search for specific function
grep -r "function authenticate" src/

# Find usages of a component
grep -r "Button" src/

# Search for imports
grep -r "import.*Button" src/
```

### Step 4: Analyze Results

1. Review discovered files
2. Identify patterns and relationships
3. Understand code flow
4. Note architecture and design decisions
5. Extract key information

**Analysis techniques:**
- Trace code flow from entry points
- Identify module boundaries
- Note data transformations
- Understand state management approaches

### Step 5: Provide Findings

1. List relevant files and locations
2. Explain code patterns found
3. Describe architecture and relationships
4. Provide code snippets as examples
5. Summarize key learnings

## Search Strategies

### File Discovery

✅ **Glob Patterns:**
- `src/**/*.ts` - All TypeScript files
- `src/components/**/*` - All component files
- `src/lib/**/*` - Library code
- `src/utils/**/*` - Utilities
- `tests/**/*.test.ts` - Test files

❌ **Avoid:**
- Too broad patterns (e.g., `**/*.js`)
- Searching too many locations
- Including node_modules or build artifacts

### Pattern Search

✅ **Effective Patterns:**
- Function names: `grep -r "function [A-Za-z]*" src/`
- Variable names: `grep -r "const [A-Za-z_]*" src/`
- Import patterns: `grep -r "import.*from" src/`
- Usage patterns: `grep -r "ComponentName" src/`

❌ **Avoid:**
- Too generic patterns (e.g., `grep -r "function" src/`)
- Searching comments only
- Searching for string literals

## Common Use Cases

### Finding Components

```bash
@explore Find Button component

# @explore will:
# 1. Search for Button files
# 2. Identify primary Button file
# 3. Find Button variants
# 4. List all Button-related files
```

**Expected output:**
```
Found files:
- src/components/Button/Button.tsx (primary)
- src/components/Button/SecondaryButton.tsx
- src/components/Button/IconButton.tsx
- src/components/Button/index.ts

Usage patterns:
- 15+ locations use Button component
```

### Understanding Architecture

```bash
@explore Understand authentication flow

# @explore will:
# 1. Find auth entry point
# 2. Trace auth middleware
# 3. Find auth controllers
# 4. Map auth flow
```

**Expected output:**
```
Architecture:
- src/auth/index.ts (entry)
- src/auth/middleware.ts (validation)
- src/auth/controllers/login.ts (controller)
- src/auth/controllers/token.ts (controller)
- src/auth/services/auth.service.ts (business logic)

Flow: 
request → middleware → controller → service → response
```

### Pattern Searching

```bash
@explore Find error handling patterns

# @explore will search for:
# 1. Try-catch patterns
# 2. Error logging patterns
# 3. Error boundary usage
# 4. Error middleware configuration
```

**Expected output:**
```
Pattern 1: Try-catch (found in 20+ files)
Pattern 2: Error logging to console (found in 15+ files)
Pattern 3: Error boundaries (found in 8 components)
Pattern 4: Centralized error middleware (src/utils/error-handler.ts)
```

## Navigation Techniques

### Quick Navigation

```bash
# Find test files
@explore tests/**/*.test.ts

# Find API routes
@explore src/api/**/*.ts

# Find component exports
@explore src/components/**/index.ts
```

### Understanding Relationships

1. **Module imports:** See what imports what
2. **Exports:** See what is exported
3. **Usage patterns:** See how components are used
4. **Data flow:** See how data flows through app

## Best Practices

### Fast Discovery

✅ **DO:**
- Use specific search patterns
- Focus on relevant directories
- Search for exact names
- Use multiple search terms
- Iterate and refine

❌ **DON'T:**
- Use too broad patterns
- Search everywhere indiscriminately
- Rely on memory alone
- Skip context gathering

### Code Understanding

✅ **DO:**
- Read key files thoroughly
- Follow import chains
- Understand data flow
- Note architectural decisions

❌ **DON'T:**
- Skim without understanding
- Focus only on syntax not semantics
- Miss important relationships
- Ignore configuration

### Pattern Identification

✅ **DO:**
- Look for repeated patterns
- Identify best practices
- Note anti-patterns
- Understand why patterns exist

❌ **DON'T:**
- Assume patterns without verification
- Copy patterns without understanding
- Ignore code comments explaining patterns
- Mix similar patterns incorrectly

## Anti-Patterns

❌ **DON'T:**
- Over-search (find too many matches)
- Search in node_modules or build directories
- Search in comments instead of code
- Return results without context
- Provide unverified information

## Related Skills

- [Systematic Debugging](../skills/debugging/systematic-debugging.md) - Debugging patterns
- [Test-Driven Development](../skills/testing/test-driven-development.md) - Test patterns

## Related Agents

- **[@scout](scout.md)** - For external research
- **[@build](build.md)** - For implementing discovered patterns
- **[@planner](planner.md)** - For planning codebase changes

## Related Commands

- **[/ak_cm_analyze-project](../commands/research/analyze-project.md)** - Analyze codebase
- **[/ak_cm_research](../commands/research/research.md)** - Research patterns

## Next Steps

- **[@scout](scout.md)** - Research external best practices
- **[@build](build.md)** - Implement code using discovered patterns
- **[@planner](planner.md)** - Plan architecture changes
