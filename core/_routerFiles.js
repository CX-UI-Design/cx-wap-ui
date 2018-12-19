var filesSrc = require.context('../src/router/modules', true, /\.js/);
var filesFra = require.context('../frametest/router/modules', true, /\.js/);
var frameState = require('../frametest/switch');
var files = frameState.frameSwitch ? filesFra : filesSrc;
var modules = [];
files.keys().forEach(key => {
  // var mk = key.replace(/(^\.\/|\.js$)/g, '')
  var m = files(key);
  var item = Object.keys(m).reduce((s, e) => {
    if (e !== 'default') {
      if (Array.isArray(m[e])) {
        modules = modules.concat(m[e]);
        return s
      } else s[e] = m[e]
    }
    return s
  }, m.default || {});
  if (item && item.path) modules.push(item)
});
export default modules
