// @ts-check

const config = {
  title: 'Previsão Climática no DF',
  tagline: 'Documentação profissional do projeto de Machine Learning aplicado ao agronegócio do Distrito Federal',
  favicon: 'img/favicon.svg',

  // 🔥 CORREÇÃO PRINCIPAL
  url: 'https://fabiofonteles1.github.io',
  baseUrl: '/ML-Previsao-do-Tempo/',

  organizationName: 'fabiofonteles1',
  projectName: 'ML-Previsao-do-Tempo',
  trailingSlash: false,

  onBrokenLinks: 'throw',
markdown: {
  hooks: {
    onBrokenMarkdownLinks: 'warn',
  },
},

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/social-card.svg',
      navbar: {
        title: 'Previsão Climática no DF',
        logo: {
          alt: 'Logo do projeto',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/', label: 'Início', position: 'left' },
          { to: '/docs/intro', label: 'Documentação', position: 'left' },
          {
            href: 'https://github.com/fabiofonteles1/ML-Previsao-do-Tempo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projeto',
            items: [
              { label: 'Visão geral', to: '/docs/intro' },
              { label: 'Fontes de dados', to: '/docs/fontes-de-dados' },
              { label: 'Metodologia', to: '/docs/metodologia' },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fabiofonteles1/ML-Previsao-do-Tempo',
              },
            ],
          },
          {
            title: 'Universidade',
            items: [
              {
                label: 'Universidade de Brasília',
                href: 'https://www.unb.br/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Grupo 06 · Projeto de Aprendizado de Máquina · UnB`,
      },
      prism: {
        additionalLanguages: ['bash'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
