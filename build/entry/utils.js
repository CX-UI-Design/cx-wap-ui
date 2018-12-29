const uppercamelize = require('uppercamelcase');
const Components = require('../components/get-components')();


/**
 * components list
 * @returns {*}
 * @constructor
 */
exports.ComponentsList = function () {
  const unEntryComponents = [
    'Lazyload',
    'Waterfall'
  ];
  const ComponentsList = Components.map(name => `${uppercamelize(name)}`);
  return ComponentsList.filter(name => !~unEntryComponents.indexOf(uppercamelize(name)));
};
