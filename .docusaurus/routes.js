import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ML-Previsao-do-Tempo/docs',
    component: ComponentCreator('/ML-Previsao-do-Tempo/docs', '0b1'),
    routes: [
      {
        path: '/ML-Previsao-do-Tempo/docs',
        component: ComponentCreator('/ML-Previsao-do-Tempo/docs', 'c9b'),
        routes: [
          {
            path: '/ML-Previsao-do-Tempo/docs',
            component: ComponentCreator('/ML-Previsao-do-Tempo/docs', '862'),
            routes: [
              {
                path: '/ML-Previsao-do-Tempo/docs/etica-e-conformidade',
                component: ComponentCreator('/ML-Previsao-do-Tempo/docs/etica-e-conformidade', '83b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ML-Previsao-do-Tempo/docs/fontes-de-dados',
                component: ComponentCreator('/ML-Previsao-do-Tempo/docs/fontes-de-dados', 'dbd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ML-Previsao-do-Tempo/docs/intro',
                component: ComponentCreator('/ML-Previsao-do-Tempo/docs/intro', '0c1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ML-Previsao-do-Tempo/docs/metodologia',
                component: ComponentCreator('/ML-Previsao-do-Tempo/docs/metodologia', 'd91'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ML-Previsao-do-Tempo/docs/projeto',
                component: ComponentCreator('/ML-Previsao-do-Tempo/docs/projeto', 'ec7'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ML-Previsao-do-Tempo/',
    component: ComponentCreator('/ML-Previsao-do-Tempo/', 'a34'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
