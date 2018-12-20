"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _variable = _interopRequireDefault(require("../variable"));

var _ = require(".");

/**
 * component resources mounting.
 * @param vue
 * @param component
 * @param opts
 * @param isglobal
 */
var _default = function _default(vue, component, opts, isglobal) {
  if (isglobal === void 0) {
    isglobal = true;
  }

  var name = component.name;
  name = (0, _.prefixName)(name, opts.prefix, _variable.default._defprefix);
  vue.component(name, component);

  if (!isglobal) {
    vue.component((0, _.camelize)("-" + name), component);
  }

  console.log((isglobal ? '全局' : '局部') + '加载组件');
  console.log('传入参数', opts);
  console.log('组件本身', component);
  console.log('处理后名称');
  console.log(name);
  console.log((0, _.camelize)("-" + name));
};

exports.default = _default;