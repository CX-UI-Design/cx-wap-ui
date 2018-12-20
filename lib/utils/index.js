"use strict";

exports.__esModule = true;
exports.get = get;
exports.range = range;
exports.isObj = isObj;
exports.isDef = isDef;
exports.camelize = camelize;
exports.isAndroid = isAndroid;
exports.judgeType = judgeType;
exports.prefixName = prefixName;
exports.mergeOptions = mergeOptions;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

var camelizeRE = /-(\w)/g;
/**
 * 首字母大写 ab-cd =》 AbCd
 * @param str
 * @returns {*}
 */

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
/**
 * judge type accurate
 * @param value
 * @returns {*}
 */


function judgeType(value) {
  var t = Object.prototype.toString.call(value);
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };

  if (value instanceof Element) {
    return 'element';
  }

  return map[t];
}
/**
 * prefix name
 * @param name
 * @param prefix
 * @param def
 * @returns {*}
 */


function prefixName(name, prefix, def) {
  console.log("原始名称，前缀名，默认前缀名称：", name, prefix, def);
  if (!name) throw "the component should be set with the initial name，" + "please check every component' name whether it's property is set";
  if (typeof prefix !== "string" || !prefix) return name;

  if (name.indexOf(def) === 0) {
    var reg = new RegExp(def, "g"); //'[ default- ]' => prefix name + connector

    return name.replace(reg, prefix);
  } else {
    return name;
  }
}
/**
 * merge options
 * @param opt1
 * @param opt2
 * @returns {*}
 */


function mergeOptions(opt1, opt2) {
  //validate for param user config
  var _confValidate = function _confValidate(obj, key) {
    if (!obj.hasOwnProperty(key)) return false;
    var t = judgeType(obj[key]);
    if (t === 'null' || t === 'undefined') return false;
    return true;
  };

  var option = opt1;

  if (opt2 && Object.keys(opt2).length !== 0) {
    var _arr = Object.keys(opt2);

    for (var _i = 0; _i < _arr.length; _i++) {
      var key = _arr[_i];

      if (_confValidate(opt2, key)) {
        option[key] = opt2[key];
      }
    }
  }

  return option;
}