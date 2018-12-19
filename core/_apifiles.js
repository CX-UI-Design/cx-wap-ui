var files = require.context('../src/api/modules', true, /\.js/);
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
