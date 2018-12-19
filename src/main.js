/**
 * 架构组 - 基础组件调试 - 入口文件
 * 业务人员请勿修改 - BusinessCoder do not modify.
 * Architecture Group - Basic Component Debugging - Entry File
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import _extends from '../core/_extends'
import './UI'

_extends.register(Vue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});


