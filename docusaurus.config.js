module.exports = {
  title: 'Cybersecurity Interview Questions',
  tagline: 'A comprehensive guide for security professionals',
  url: 'https://excalibra.github.io',
  baseUrl: '/cybersecurity-interview-questions/',
  favicon: 'img/logo.svg',
  organizationName: 'Excalibra',
  projectName: 'cybersecurity-interview-questions',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        language: 'en',
        searchResultLimits: 8,
      },
    ],
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        defer: true,
        src: 'https://cloud.umami.is/script.js',
        'data-website-id': '03e4dc18-2dfd-496e-a937-725a016e3312',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Excalibra/cybersecurity-interview-questions/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Cybersecurity Interview Questions',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Excalibra/cybersecurity-interview-questions',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Excalibra.`,
    },
  },
};
