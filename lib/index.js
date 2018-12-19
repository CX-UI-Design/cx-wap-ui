import * as filters from './filters/index';//filter
import $Var from './variable';

const version = require('../package.json').version;
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
/* ------------- About Form , its components and other components we need------------- */
//Basic
// const Button = _import('Basic/Button');
import Button from './packages/Basic/Button/src/index'


const components = [
  //Baisc
  Button,

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
    // Vue.use(Component);
    resmount(Vue, Component, opts);
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
  //Baisc
  Button,
}

export default {
  install,
  version
};


