"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('van-cell-group', {
      staticClass: "ns-cell-group",
      attrs: {
        "border": _vm.border
      }
    }, [_vm._t("default")], 2);
  },
  name: 'cell-group',
  created: function created() {},
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
};
exports.default = _default;