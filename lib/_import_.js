"use strict";

/**
 * load file
 * @param file
 * @returns {function(): (Promise<*>|*)}
 */
module.exports = function (file) {
  return function () {
    return import('./packages/' + file + '/docs/index.vue');
  };
};