/**
 * load file
 * @param file
 * @returns {function(): (Promise<*>|*)}
 */
module.exports = file => () => import('./packages/' + file + '/src/index.vue');

