/* eslint-disable */
// This file is auto gererated by build/build-entry.js
  
import * as filters from './filters/index';//filter
import ui_extends from './ui-extends';
import $Var from './variable';
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
const version = '0.0.1';

import Button from './packages/Button/Button';
import Cell from './packages/Cell/Cell';


const components = [
  Button,
  Cell
];

const install = function (Vue, opts = {}) {
  //Former plug-in external param config
 const option = mergeOptions($Var, opts);
  Vue.prototype.$opts = option;
  Vue.$opts = option;
  console.log('===== 全局合并后参数：=====', option);


  //binding component
  components.forEach(Component => {
   let {name} = Component;
    name ? resmount(Vue, Component, opts) : Vue.use(Component);
  });

  //register global utility filters.
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  });
  
  ui_extends(Vue, option);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Cell
};

export default {
  install,
  version
};
