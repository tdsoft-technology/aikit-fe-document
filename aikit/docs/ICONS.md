# Google Material Icons Mapping

Replace emojis with these Material Design Icons:

## Common Mappings

| Emoji | Material Icon Name | Usage |
|--------|-------------------|--------|
| ✅ | check_circle | Success, done, complete |
| ❌ | cancel | Not done, fail, missing |
| 📚 | library_books | Documentation, guides |
| 🤖 | smart_toy | AI, agents, intelligence |
| ⚡ | bolt | Speed, quick, fast |
| 🎯 | track_changes | Target, focus, goals |
| 🛡️ | security | Security, protection |
| 💾 | save | Save, memory, storage |
| 🔧 | build | Build, tools, settings |
| 🚀 | rocket_launch | Launch, start, deployment |
| 📖 | description | Description, info |
| 🐛 | bug_report | Bugs, issues, problems |
| 💡 | lightbulb | Ideas, tips, insights |
| 🔍 | search | Search, find |
| ✨ | star | Features, highlights, sparkles |
| 📁 | folder | Directory, folder, files |
| 📄 | description | Document, file, page |
| 📋 | check_list | Tasks, checklist |
| 🔄 | refresh | Reload, update, sync |
| 🔗 | link | Links, connections |
| 📊 | bar_chart | Stats, analytics, data |
| 🎨 | palette | Design, colors, themes |
| ⚙️ | settings | Settings, config, options |

## Usage in MDX

```tsx
import MaterialIcon from '@site/src/components/MaterialIcon';

<MaterialIcon name="check_circle" className="icon-success" />
<MaterialIcon name="cancel" className="icon-error" />
<MaterialIcon name="library_books" />
```

## Example Replacements

### Before (Emoji)
```markdown
- ✅ Skills
- ❌ Without AIKit
- 🚀 Get Started
- 🐛 Report Issues
```

### After (Material Icons)
```markdown
- <MaterialIcon name="check_circle" /> Skills
- <MaterialIcon name="cancel" /> Without AIKit
- <MaterialIcon name="rocket_launch" /> Get Started
- <MaterialIcon name="bug_report" /> Report Issues
```

## Color Classes

- `icon-success` - Green (#22c55e)
- `icon-error` - Red (#ef4444)
- `icon-warning` - Yellow (#f59e0b)
- `icon-primary` - Primary purple (#6366f1)
- `icon-small` - 20px
- `icon-large` - 32px
