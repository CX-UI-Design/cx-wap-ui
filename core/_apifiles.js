var filesSrc = require.context('../src/api/modules', true, /\.js/);
var filesFra = require.context('../frametest/api/modules', true, /\.js/);
var frameState = require('../frametest/switch');
var files = frameState.frameSwitch ? filesFra : filesSrc;
const modules = {};
files.keys().forEach(key => {
  if (key === './_routerFiles.js') {
    return
  }
  var mk = key.replace(/(^\.\/|\.js$)/g, '');
  var m = files(key);
  modules[mk] = Object.keys(m).reduce((s, e) => {
    if (e !== 'default') {
      s[e] = m[e]
    }
    return s
  }, m.default || {})
});
export default modules;
