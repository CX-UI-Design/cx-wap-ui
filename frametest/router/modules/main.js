const _import = require('../_import_');

export const mainRouter = [
  {
    path: '/basic',
    component: _import('Layout/index'),
    redirect: '/basic/button',
    children: [
      {path: 'button', name: 'Button 按钮', component: _import('Basic/Button/index'), meta: {auth: true}},
      {path: 'cell', name: 'Cell 单元格', component: _import('Basic/Cell/index'), meta: {auth: true}},
      {path: 'icon', name: 'Icon 图标', component: _import('Basic/Icon/index'), meta: {auth: true}},
      {path: 'layout', name: 'Layout 布局', component: _import('Basic/Layout/index'), meta: {auth: true}},
      {path: 'popup', name: 'Popup 弹出层', component: _import('Basic/Popup/index'), meta: {auth: true}}
    ]
  },
  {
    path: '/form',
    component: _import('Layout/index'),
    redirect: '/form/checkbox',
    children: [
      {path: 'checkbox', name: 'Checkbox 复选框', component: _import('Form/Checkbox/index'), meta: {auth: true}},
      {path: 'datetimePicker', name: 'DatetimePicker 时间选择', component: _import('Form/DatetimePicker/index'), meta: {auth: true}},
      {path: 'field', name: 'Field 输入框', component: _import('Form/Field/index'), meta: {auth: true}},
      {path: 'numberKeyboard', name: 'NumberKeyboard 数字键盘', component: _import('Form/NumberKeyboard/index'), meta: {auth: true}},
      {path: 'passwordInput', name: 'PasswordInput 密码输入框', component: _import('Form/PasswordInput/index'), meta: {auth: true}},
      {path: 'picker', name: 'Picker 选择器', component: _import('Form/Picker/index'), meta: {auth: true}},
      {path: 'radio', name: 'Radio 单选框', component: _import('Form/Radio/index'), meta: {auth: true}},
      {path: 'rate', name: 'Rate 评分', component: _import('Form/Rate/index'), meta: {auth: true}},
      {path: 'search', name: 'Search 搜索', component: _import('Form/Search/index'), meta: {auth: true}},
      {path: 'slider', name: 'Slider 滑块', component: _import('Form/Slider/index'), meta: {auth: true}},
      {path: 'stepper', name: 'Stepper 步进器', component: _import('Form/Stepper/index'), meta: {auth: true}},
      {path: 'switch', name: 'Switch 开关', component: _import('Form/Switch/index'), meta: {auth: true}},
      {path: 'switchCell', name: 'SwitchCell 开关单元格', component: _import('Form/SwitchCell/index'), meta: {auth: true}},
      {path: 'uploader', name: 'Uploader 图片上传', component: _import('Form/Uploader/index'), meta: {auth: true}}
    ]
  },
  {
    path: '/feedback',
    component: _import('Layout/index'),
    redirect: '/feedback/actionsheet',
    children: [
      {path: 'actionsheet', name: 'Actionsheet 上拉菜单', component: _import('Feedback/Actionsheet/index'), meta: {auth: true}},
      {path: 'dialog', name: 'Dialog 弹出框', component: _import('Feedback/Dialog/index'), meta: {auth: true}},
      {path: 'loading', name: 'Loading 加载', component: _import('Feedback/Loading/index'), meta: {auth: true}},
      {path: 'notify', name: 'Notify 消息通知', component: _import('Feedback/Notify/index'), meta: {auth: true}},
      {path: 'pullRefresh', name: 'PullRefresh 下拉刷新', component: _import('Feedback/PullRefresh/index'), meta: {auth: true}},
      {path: 'swipeCell', name: 'SwipeCell 滑动单元格', component: _import('Feedback/SwipeCell/index'), meta: {auth: true}},
      {path: 'toast', name: 'Toast 轻提示', component: _import('Feedback/Toast/index'), meta: {auth: true}}
    ]
  },
  {
    path: '/display',
    component: _import('Layout/index'),
    redirect: '/display/circle',
    children: [
      {path: 'circle', name: 'Circle 环形进度条', component: _import('Display/Circle/index'), meta: {auth: true}},
      {path: 'collapse', name: 'Collapse 折叠面板', component: _import('Display/Collapse/index'), meta: {auth: true}},
      {path: 'imagePreview', name: 'ImagePreview 图片预览', component: _import('Display/ImagePreview/index'), meta: {auth: true}},
      {path: 'lazyLoad', name: 'LazyLoad 图片懒加载', component: _import('Display/LazyLoad/index'), meta: {auth: true}},
      {path: 'list', name: 'List 列表', component: _import('Display/List/index'), meta: {auth: true}},
      {path: 'noticeBar', name: 'NoticeBar 通告栏', component: _import('Display/NoticeBar/index'), meta: {auth: true}},
      {path: 'panel', name: 'Panel 面板', component: _import('Display/panel/index'), meta: {auth: true}},
      {path: 'progress', name: 'Progress 进度条', component: _import('Display/Progress/index'), meta: {auth: true}},
      {path: 'steps', name: 'Steps 步骤条', component: _import('Display/Steps/index'), meta: {auth: true}},
      {path: 'swipe', name: 'Swipe 轮播', component: _import('Display/Swipe/index'), meta: {auth: true}},
      {path: 'tag', name: 'Tag 标记', component: _import('Display/Tag/index'), meta: {auth: true}}
    ]
  },
  {
    path: '/navDistribute',
    component: _import('Layout/index'),
    redirect: '/navDistribute/badge',
    children: [
      {path: 'badge', name: 'Badge 徽章', component: _import('NavDistribute/Badge/index'), meta: {auth: true}},
      {path: 'navBar', name: 'NavBar 导航栏', component: _import('NavDistribute/NavBar/index'), meta: {auth: true}},
      {path: 'pagination', name: 'Pagination 分页', component: _import('NavDistribute/Pagination/index'), meta: {auth: true}},
      {path: 'tab', name: 'Tab 标签页', component: _import('NavDistribute/Tab/index'), meta: {auth: true}},
      {path: 'tabbar', name: 'Tabbar 标签栏', component: _import('NavDistribute/Tabbar/index'), meta: {auth: true}},
      {path: 'treeSelect', name: 'TreeSelect 分类选择', component: _import('NavDistribute/TreeSelect/index'), meta: {auth: true}}
    ]
  }
];
