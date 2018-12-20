import create from '../../../utils/create';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('van-button', {
      staticClass: "ns-button",
      attrs: {
        "type": _vm.type,
        "size": _vm.size,
        "text": _vm.text,
        "tag": _vm.tag,
        "disabled": _vm.disabled,
        "loading": _vm.loading,
        "block": _vm.block,
        "plain": _vm.plain,
        "square": _vm.square,
        "round": _vm.round
      },
      on: {
        "click": _vm.button_click
      }
    }, [_vm._t("default")], 2);
  },
  name: 'button',
  created: function created() {
    console.log(33333333);
    console.log(this.$opts);
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    //default primary warning danger
    size: {
      type: String,
      default: 'normal'
    },
    //normal large small mini
    text: {
      type: String
    },
    tag: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    button_click: function button_click() {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  }
});