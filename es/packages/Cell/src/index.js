export default {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('van-cell', {
      staticClass: "ns-cell",
      attrs: {
        "icon": _vm.icon,
        "title": _vm.title,
        "value": _vm.value,
        "label": _vm.label,
        "size": _vm.size,
        "url": _vm.url,
        "to": _vm.to,
        "border": _vm.border,
        "replace": _vm.replace,
        "clickable": _vm.clickable,
        "isLink": _vm.isLink,
        "required": _vm.required,
        "center": _vm.center,
        "arrowDirection": _vm.arrowDirection,
        "titleClass": _vm.titleClass,
        "valueClass": _vm.valueClass,
        "labelClass": _vm.labelClass
      },
      on: {
        "click": _vm.cell_click
      }
    }, [_vm._t("default")], 2);
  },
  name: 'cell',
  created: function created() {},
  props: {
    icon: {
      type: String
    },
    title: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    label: {
      type: String
    },
    size: {
      type: String
    },
    //large	String
    url: {
      type: String
    },
    to: {
      type: [String, Object]
    },
    border: {
      type: Boolean,
      default: true
    },
    replace: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    arrowDirection: {
      type: String
    },
    //left up down
    titleClass: {
      type: String
    },
    valueClass: {
      type: String
    },
    labelClass: {
      type: String
    }
  },
  methods: {
    cell_click: function cell_click() {
      this.$emit('click');
    }
  }
};