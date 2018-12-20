const fs = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components')();
const packageJson = require('../package.json');

const version = process.env.VERSION || packageJson.version;
const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`;

function buildVantEntry() {
  const uninstallComponents = [
    'Lazyload',
    'Waterfall'
  ];
  //获取 import 导入 模板信息列表
  const importList = Components.map(name => `import ${uppercamelize(name)} from './packages/${name}/src/index';`);
  //获取 export 导出 模板信息列表
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  //获取 install 挂载 模板信息列表
  const intallList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelize(name)));


  console.log(intallList)
  const content = `${tips}
  
import * as filters from './filters/index';//filter
import $Var from './variable';
import resmount from './utils/resmount';
import {mergeOptions} from "./utils";
const version = '${version}';

${importList.join('\n')}


const components = [
  ${intallList.join(',\n  ')}
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
  ${exportList.join(',\n  ')}
};

export default {
  install,
  version
};
`;
  //写入内容，并且生成文件
  fs.writeFileSync(path.join(__dirname, '../src/index.js'), content);
}

buildVantEntry();
