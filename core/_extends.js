import directives from '../src/directives'
import filters from '../src/filters'
import components from '../src/components'
import $api from './_apifiles'

const register = function (_vue) {
  Object.keys(directives).forEach(e => _vue.directive(e, directives[e]));
  Object.keys(filters).forEach(e => _vue.filter(e, filters[e]));
  Object.keys(components).forEach(e => _vue.component(e, components[e]));

  const allExtends = {$api};
  Object.keys(allExtends).forEach(e => {
    const plugin = {};
    plugin[e] = {
      get() {
        return allExtends[e]
      }
    };
    Object.defineProperties(_vue.prototype, plugin)
  })
};
const install = e => register(e);

export default {
  install,
  register
}
