/**
 * Create a basic component with common options
 */
import $Var from '../variable';
import recls from './recls';
import i18n from './i18n';
import resmount from './resmount';
import {isDef, judgeType, mergeOptions} from '.';

/**
 * component install
 * @param Vue
 * @param opts
 */
function install(Vue, opts = {}) {
  resmount(Vue, this, opts, false);
  if (judgeType(opts) !== 'object') {
    throw 'Opts should be in object format. Check it'
  }
  const option = mergeOptions(Vue.$opts, opts);
  Vue.prototype.$opts = option;
  Vue.$opts = option;
  console.log('===== 局部合并后参数：=====',option);
  console.log(5555555555555);
  console.log(Vue.$opts);
}

function returnArray() {
  return [];
}

function defaultProps(props) {
  Object.keys(props).forEach(key => {
    if (props[key] === Array) {
      props[key] = {
        type: Array,
        default: returnArray
      };
    } else if (props[key] === Number) {
      props[key] = {
        type: Number,
        default: 0
      };
    }
  });
}

export default function (sfc) {

  sfc.name = $Var._defprefix + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, recls);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = isDef;
  sfc.props && defaultProps(sfc.props);

  return sfc;
}
