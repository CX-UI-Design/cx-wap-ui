/**
 * Create a basic component with common options
 */

import recls from './recls';
import i18n from './i18n';
import {isDef} from './';

const prefix = 'ns-';

function install(Vue) {
  Vue.component(this.name, this);
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
  sfc.name = prefix + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, recls);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = isDef;
  sfc.props && defaultProps(sfc.props);

  console.log(222222)
  console.log(sfc)
  return sfc;
}
