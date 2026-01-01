# AIKit Documentation

Official documentation for AIKit - the Open-source AI coding agent toolkit for OpenCode.

## Quick Start

```bash
# Build documentation
cd document/aikit
npm install
npm run build

# Serve locally
npm run serve
```

Visit: http://localhost:3000

## Documentation Structure

```
docs/
├── intro.md              # Welcome and overview
├── features.md           # All AIKit features
├── installation.md        # Installation guide
├── quick-start.md        # Get started in 5 minutes
├── skills/              # Skills system
│   ├── intro.md
│   ├── test-driven-development.md
│   └── systematic-debugging.md
├── agents/              # Specialized agents
│   └── intro.md
├── commands/            # Slash commands
│   ├── intro.md
│   └── core/
│       ├── create.md
│       ├── plan.md
│       ├── implement.md
│       └── finish.md
├── tools/               # Built-in tools
│   └── intro.md
├── plugins/             # Plugin system
│   └── intro.md
└── advanced/            # Advanced features
    ├── anti-hallucination.md
    ├── configuration.md
    ├── custom-skills.md
    ├── custom-tools.md
    ├── custom-plugins.md
    └── one-shot-mode.md
```

## Adding Documentation

### New Page

1. Create `.md` file in appropriate `docs/` directory
2. Add frontmatter:

```markdown
---
sidebar_position: 1
---

# Page Title

Content here...
```

3. Add to `sidebars.ts`:

```typescript
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'your-page',
    // ...
  ],
};
```

4. Build and verify:

```bash
npm run build
npm run serve
```

### Style Guide

- Use clear, concise language
- Add code examples for all key concepts
- Include checklists where appropriate
- Add "When to Use" sections
- Show examples and anti-patterns
- Link to related documentation

## Updating Existing Pages

Edit `.md` files directly and rebuild:

```bash
npm run build
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run start

# Build production
npm run build

# Serve production build
npm run serve

# Check links
npm run write-translations
npm run write-heading-ids
```

## Deployment

### GitHub Pages

```bash
npm run build
```

Deploy `build/` directory to GitHub Pages.

### Vercel/Netlify

Deploy `build/` directory to your hosting service.

## Customization

### Theme

Edit `src/css/custom.css` to customize:
- Colors
- Typography
- Spacing
- Component styles

### Config

Edit `docusaurus.config.ts` to customize:
- Site title and tagline
- Navigation
- Footer links
- Social cards

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Build and verify documentation
5. Submit pull request

## License

MIT

## Links

- **Main Repository**: https://github.com/tdsoft-tech/aikit
- **Documentation**: https://aikit.dev
- **Issues**: https://github.com/tdsoft-tech/aikit/issues
