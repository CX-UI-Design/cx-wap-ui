const _import = require('../_import_');

export const testRouter = [
  {
    path: '/',
    component: _import('Layout/index'),
    redirect: '/test',
    children: [
      {path: 'test', name: '测试页面', component: _import('TestDemo/index'), meta: {auth: true}}
    ]
  },
];
