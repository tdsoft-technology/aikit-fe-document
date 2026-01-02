import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AIKit',
  tagline: 'Structure OpenCode with Skills, Agents, and Workflows',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://aikit.dev',
  baseUrl: '/',

  organizationName: 'tdsoft-tech',
  projectName: 'aikit',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/tdsoft-tech/aikit/edit/main/document/aikit/docs',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v0.1.17',
              path: '/',
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
          editUrl: 'https://github.com/tdsoft-tech/aikit/edit/main/document/aikit/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
    },

    navbar: {
      title: 'AIKit',
      logo: {
        alt: 'AIKit Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'doc',
          docId: 'features',
          position: 'left',
          label: 'Features',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tdsoft-tech/aikit',
          label: 'GitHub',
          position: 'right',
          className: 'github-link',
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
            {
              label: 'Installation',
              to: '/docs/installation',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Skills Guide',
              to: '/docs/skills/intro',
            },
            {
              label: 'Agents Guide',
              to: '/docs/agents/intro',
            },
            {
              label: 'Commands Reference',
              to: '/docs/commands/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tdsoft-tech/aikit',
            },
            {
              label: 'Issues',
              href: 'https://github.com/tdsoft-tech/aikit/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/tdsoft-tech/aikit/discussions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TDSoft. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['typescript', 'bash', 'json', 'markdown'],
    },
    announcementBar: {
      id: 'beta-notice',
      content: '⚡ AIKit v0.1.17 is now available - Check out the new features!',
      backgroundColor: '#25c2a0',
      textColor: '#091e42',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
