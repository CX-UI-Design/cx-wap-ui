"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _createBasic = _interopRequireDefault(require("./create-basic"));

/**
 * Create a component with common options
 */
// import Icon from '../icon';
// import Loading from '../loading';
// import Cell from '../cell';
// import CellGroup from '../cell-group';
function _default(sfc) {
  sfc.components = (0, _extends2.default)(sfc.components || {}, {// Icon,
    // Loading,
    // Cell,
    // CellGroup
  });
  return (0, _createBasic.default)(sfc);
}

;