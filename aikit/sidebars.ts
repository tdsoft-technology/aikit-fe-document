import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'features',
        'installation',
        'quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Skills',
      collapsible: true,
      collapsed: false,
      items: [
        'skills/intro',
        'skills/test-driven-development',
        'skills/systematic-debugging',
        'skills/refactoring',
        'skills/unit-testing',
        'skills/integration-testing',
        'skills/code-review',
        'skills/error-handling',
        'skills/design-measurement',
        'skills/analyze-figma',
        'skills/figma-to-code',
      ],
    },
    {
      type: 'category',
      label: 'Agents',
      collapsible: true,
      collapsed: false,
      items: [
        'agents/intro',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      collapsible: true,
      collapsed: false,
      items: [
        'commands/intro',
        {
          type: 'category',
          label: 'Core Workflow',
          items: [
            'commands/core/create',
            'commands/core/plan',
            'commands/core/implement',
            'commands/core/finish',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsible: true,
      collapsed: false,
      items: [
        'tools/intro',
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsible: true,
      collapsed: false,
      items: [
        'plugins/intro',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: true,
      collapsed: true,
      items: [
        'advanced/anti-hallucination',
        'advanced/configuration',
        'advanced/custom-skills',
        'advanced/custom-tools',
        'advanced/custom-plugins',
        'advanced/one-shot-mode',
      ],
    },
  ],
};

export default sidebars;
