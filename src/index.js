/* eslint-disable */
// This file is auto gererated by build/build-entry.js

import * as filters from './filters/index';//filter
import $Var from './variable';
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
const version = '1.0.0';

import Button from './packages/Button/src/Button';
import Cell from './packages/Cell/src/Cell';
import CellGroup from './packages/Cell-group/src/Cell-group';


const components = [
  Button,
  Cell,
  CellGroup
];

const install = function (Vue, opts = {}) {
  //Former plug-in external param config
  const option = mergeOptions({
    prefix: $Var._defprefix,//stage name config
    lan: $Var._lan,//language config
    log: $Var._log,//log information show
  }, opts);
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
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Cell,
  CellGroup
};

export default {
  install,
  version
};
