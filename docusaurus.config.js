// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Reflective Engineer',
  tagline: 'Where Engineering Meets Philosophy',
  favicon: 'img/favicon.ico',

  // Recommended for github
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://thereflectiveengineer.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'claygorman', // Usually your GitHub org/user name.
  projectName: 'the-reflective-engineer', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/claygorman/the-reflective-engineer/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/claygorman/the-reflective-engineer/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-1LJ0PYXJQ5',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/thinking-man-social-card.jpg',
      metadata: [{name: 'keywords', content: 'technology, software engineering, devops, devsecops, philosophies'}],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'The Reflective Engineer',
        logo: {
          alt: 'The Reflective Engineer Logo',
          src: 'img/thinking-man-head-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'researchSidebar',
            position: 'left',
            label: 'Research',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/claygorman/the-reflective-engineer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Research',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/claygorman/the-reflective-engineer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Clay Gorman.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
