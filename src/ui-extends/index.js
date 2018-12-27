import ExtendsFn from './extends'

export default (Vue, options) => {
  Object.keys(ExtendsFn).forEach(key => {
    try {
      Vue.prototype[key] = ExtendsFn[key];
    }
    catch (e) {
      console.warn('Attributes or methods do not exist')
    }
  });
}
