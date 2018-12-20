"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _variable = _interopRequireDefault(require("../variable"));

var _recls = _interopRequireDefault(require("./recls"));

var _i18n = _interopRequireDefault(require("./i18n"));

var _resmount = _interopRequireDefault(require("./resmount"));

var _ = require(".");

/**
 * Create a basic component with common options
 */

/**
 * component install
 * @param Vue
 * @param opts
 */
function install(Vue, opts) {
  if (opts === void 0) {
    opts = {};
  }

  (0, _resmount.default)(Vue, this, opts, false);

  if ((0, _.judgeType)(opts) !== 'object') {
    throw 'Opts should be in object format. Check it';
  }

  var option = (0, _.mergeOptions)(Vue.$opts, opts);
  Vue.prototype.$opts = option;
  Vue.$opts = option;
  console.log('===== 局部合并后参数：=====', option);
  console.log(5555555555555);
  console.log(Vue.$opts);
}

function returnArray() {
  return [];
}

function defaultProps(props) {
  Object.keys(props).forEach(function (key) {
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

function _default(sfc) {
  sfc.name = _variable.default._defprefix + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(_i18n.default, _recls.default);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = _.isDef;
  sfc.props && defaultProps(sfc.props);
  return sfc;
}