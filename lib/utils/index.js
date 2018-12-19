import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

const camelizeRE = /-(\w)/g;

/**
 * 首字母大写 ab-cd =》 AbCd
 * @param str
 * @returns {*}
 */
function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
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
  const t = Object.prototype.toString.call(value);
  let map = {
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
  if (!name) throw ("the component should be set with the initial name，" +
    "please check every component' name whether it's property is set");
  if (typeof prefix !== "string" || !prefix) return name;
  if (name.indexOf(def) === 0) {
    const reg = new RegExp(def, "g"); //'[ default- ]' => prefix name + connector
    return name.replace(reg, prefix);
  }
  else {
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
  let _confValidate = (obj, key) => {
    if (!obj.hasOwnProperty(key)) return false;
    const t = judgeType(obj[key]);
    if (t === 'null' || t === 'undefined') return false;
    return true;
  };
  let option = opt1;
  if (opt2 && Object.keys(opt2).length !== 0) {
    for (const key of Object.keys(opt2)) {
      if (_confValidate(opt2, key)) {
        option[key] = opt2[key];
      }
    }
  }
  return option;
}

export {
  get,
  range,
  isObj,
  isDef,
  isServer,
  camelize,
  isAndroid,
  judgeType,
  prefixName,
  mergeOptions
};
