"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = exports.version = exports.install = void 0;

var filters = _interopRequireWildcard(require("./filters/index"));

var _variable = _interopRequireDefault(require("./variable"));

var _resmount = _interopRequireDefault(require("./utils/resmount"));

var _utils = require("./utils");

var _index2 = _interopRequireDefault(require("./packages/Button/src/index"));

exports.Button = _index2.default;

var _index3 = _interopRequireDefault(require("./packages/Cell/src/index"));

exports.Cell = _index3.default;

var _index4 = _interopRequireDefault(require("./packages/Cell-group/src/index"));

exports.CellGroup = _index4.default;

/* eslint-disable */
// This file is auto gererated by build/build-entry.js
//filter
var version = '1.0.0';
exports.version = version;
var components = [_index2.default, _index3.default, _index4.default];

var install = function install(Vue, opts) {
  if (opts === void 0) {
    opts = {};
  }

  //Former plug-in external param config
  var option = (0, _utils.mergeOptions)({
    prefix: _variable.default._defprefix,
    //stage name config
    lan: _variable.default._lan,
    //language config
    log: _variable.default._log //log information show

  }, opts);
  Vue.prototype.$opts = option;
  Vue.$opts = option;
  console.log('===== 全局合并后参数：=====', option); //binding component

  components.forEach(function (Component) {
    var name = Component.name;
    name ? (0, _resmount.default)(Vue, Component, opts) : Vue.use(Component);
  }); //register global utility filters.

  Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key]);
  });
};
/* istanbul ignore if */


exports.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports.default = _default;