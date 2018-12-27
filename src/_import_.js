/**
 * load file
 * @param file
 * @returns {function(): (Promise<*>|*)}
 */
module.exports = file => () => import('./packages/' + file + '/docs/index.vue');

