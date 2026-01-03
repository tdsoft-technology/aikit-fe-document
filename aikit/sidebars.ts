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
    // {
    //   type: 'category',
    //   label: 'Skills',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     'skills/intro',
    //     {
    //       type: 'category',
    //       label: 'Debugging',
    //       items: [
    //         'skills/debugging/systematic-debugging',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Design',
    //       items: [
    //         'skills/design/accessibility',
    //         'skills/design/database-design',
    //         'skills/design/design-measurement',
    //         'skills/design/frontend-aesthetics',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Development',
    //       items: [
    //         'skills/development/api-design',
    //         'skills/development/component-design',
    //         'skills/development/error-handling',
    //         'skills/development/performance-optimization',
    //         'skills/development/refactoring',
    //         'skills/development/state-management',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Documentation',
    //       items: [
    //         'skills/documentation/documentation',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Figma',
    //       items: [
    //         'skills/figma/analyze-figma',
    //         'skills/figma/figma-to-code',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Git',
    //       items: [
    //         'skills/git/git-workflow',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Review',
    //       items: [
    //         'skills/review/code-review',
    //         'skills/review/security-audit',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Testing',
    //       items: [
    //         'skills/testing/integration-testing',
    //         'skills/testing/test-driven-development',
    //         'skills/testing/unit-testing',
    //       ],
    //     },
    //   ],
    // },
    {
      type: 'category',
      label: 'Agents',
      collapsible: true,
      collapsed: false,
      items: [
        'agents/intro',
        'agents/planner',
        'agents/build',
        'agents/rush',
        'agents/review',
        'agents/scout',
        'agents/explore',
        'agents/vision',
        'agents/one-shot',
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
        {
          type: 'category',
          label: 'Quick Actions',
          items: [
            'commands/quick/fix',
            'commands/quick/fix-types',
          ],
        },
        {
          type: 'category',
          label: 'Research & Design',
          items: [
            'commands/research/research',
            'commands/research/analyze-project',
            'commands/research/review-codebase',
            'commands/research/brainstorm',
            'commands/design/design',
            'commands/design/drawio-interact',
          ],
        },
        {
          type: 'category',
          label: 'Git',
          items: [
            'commands/git/branch',
            'commands/git/merge',
            'commands/git/rebase',
            'commands/git/cherry-pick',
            'commands/git/stash',
          ],
        },
        {
          type: 'category',
          label: 'Utility',
          items: [
            'commands/utility/index',
            'commands/utility/help',
            'commands/utility/version',
            'commands/utility/status',
            'commands/utility/config',
            'commands/utility/sync',
            'commands/utility/docs',
            'commands/utility/install',
          ],
        },
        {
          type: 'category',
          label: 'Checkpoint',
          collapsible: true,
          collapsed: false,
          items: [
            'commands/checkpoint/create',
            'commands/checkpoint/list',
            'commands/checkpoint/restore',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Sessions',
      collapsible: true,
      collapsed: false,
      items: [
        'sessions/intro',
        'commands/sessions/session-start',
        'commands/sessions/session-update',
        'commands/sessions/session-end',
        'commands/sessions/session-list',
        'commands/sessions/session-current',
        'commands/sessions/session-show',
        'commands/sessions/session-search',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Beads',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     'beads/intro',
    //     'beads/workflow',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'MCP Server',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     'mcp-server/intro',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Tools',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     'tools/intro',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Plugins',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     'plugins/intro',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Advanced',
    //   collapsible: true,
    //   collapsed: true,
    //   items: [
    //     'advanced/anti-hallucination',
    //     'advanced/configuration',
    //     'advanced/custom-skills',
    //     'advanced/custom-tools',
    //     'advanced/custom-plugins',
    //     'advanced/memory',
    //     'advanced/one-shot-mode',
    //   ],
    // },
  ],
};

export default sidebars;
