import Vue from 'vue'
import Vant from 'vant';

/*============ Global （ do not to change ）============**/
import UIExtends from '@_core/basic/ui-extends';
import 'vant/lib/index.css';
import '@_ui_cover';
import '@_ui_public';
/*======================================================**/
import '../assets/css/index.scss';//modeules and biz comannd style set

import {Lazyload} from 'vant';
import DrawerLayout from 'vue-drawer-layout'

Vue.use(DrawerLayout);

Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('@/assets/img/error/error.png'),
  loading: require('@/assets/img/error/error.png'),
  attempt: 1,
  listenEvents: ['scroll'],
  lazyComponent: true
});
Vue.use(Vant, DrawerLayout);


import CXWAPUI from '../../lib/index';

Vue.use(CXWAPUI, {
  prefix: 'ns-',//stage name
  log: false,//show log information
  type: 'globle',
  a:1
});


import {Button} from '../../lib/index';

Vue.use(Button, {
  prefix: 'ns-',//stage name
  log: false,//show log information
  type: 'local'
});


const UI_NAME = 'ns_';
Vue.use(UIExtends, {name: UI_NAME});


