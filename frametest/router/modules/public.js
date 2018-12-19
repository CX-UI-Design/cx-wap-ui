const _import = require('../_import_');

const iniView = '/account/login';
const error = '/errorpage/pageError';

export const publicRouter = [

  {path: '/', redirect: iniView},
  {path: '*', redirect: iniView},

  {path: '/404', name: '404', component: _import('Public/404'), meta: {auth: false}},

  {
    path: '/account',
    component: _import('Account/index'),
    redirect: '/account/login',
    name: "前台",
    children: [
      {path: 'login', name: '登录', component: _import('Account/login'), meta: {auth: false}},
    ]
  },

  {
    path: '/',
    component: _import('Layout/index'),
    redirect: '/dashboard',
    children: [
      {path: 'dashboard', name: '主页', component: _import('Dashboard/index'), meta: {auth: true}}
    ]
  },
];
