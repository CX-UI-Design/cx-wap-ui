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


