// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorials',
  tagline: 'Dylan Player\'s Tutorials',
  url: 'https://tutorials.dylanplayer.com',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'images/favicon.ico',
  organizationName: 'dylanplayer',
  projectName: 'tutorials',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/tutorials/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dylan Player',
        logo: {
          alt: 'Dylan Player Logo',
          src: 'images/logo.svg',
        },
        items: [
          {to: 'tutorials/node', label: 'Node', position: 'right'},
          {to: 'tutorials/rails', label: 'Rails', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()}, <a target="_blank" href="https://dylanplayer.com">Dylan Player</a>`,
      },
      prism: {
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
