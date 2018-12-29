const fs = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const utils = require('../utils/index');
const comEntryUtils = require('./utils');
const packageJson = require('../../package.json');


/**
 * build component entry file
 * @param component
 * @param target
 */
function baseCompile(component, target) {

  const importVueTemp = () => `import _${uppercamelize(component)} from './${component}';`;
  const importStyleTemp = () => `import './style';`;
  const exportTemp = () => `export default _${uppercamelize(component)};`;

  const content = `${utils.tips(packageJson.author)}
  
${importVueTemp()}

${importStyleTemp()}

${exportTemp()}`;

  fs.writeFileSync(target, content);
}


/**
 * build every component entry file
 * @param dir
 */
function buildComponentEntry(dir) {
  comEntryUtils.ComponentsList().forEach(component => {
    const target = path.resolve(`./${dir}/packages/${component}/index.js`);

    //delete every component entry file first
    fs.remove(target, function (err) {
      if (err) console.log(err);
      //build every component entry file
      baseCompile(component, target);
    });
  });
}

// compile components entry file by src dir
buildComponentEntry('src');

