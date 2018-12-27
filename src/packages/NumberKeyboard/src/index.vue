<!--架构组 - 基础组件调试 - NumberKeyboard 数字键盘 组件-->
<template>
  <van-number-keyboard class="ns-number-keyboard" :show="show" :theme="theme" :title="title" :transition="transition"
                       :zIndex="zIndex" :extraKey="extraKey" :closeButtonText="closeButtonText"
                       :deleteButtonText="deleteButtonText" :showDeleteKey="showDeleteKey" :hideOnClickOutside="hideOnClickOutside"
                       @input="numberKeyboard_input" @delete="numberKeyboard_delete" @close="numberKeyboard_close"
                       @blur="numberKeyboard_blur" @show="numberKeyboard_show" @hide="numberKeyboard_hide">
  </van-number-keyboard>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'number-keyboard',
    created() {
    },
    props: {
      show: {type: Boolean},
      theme: {type: String, default: 'default'},//default custom
      title: {type: String},
      transition: {type: Boolean, default: true},
      zIndex: {type: Number, default: 100},
      extraKey: {type: String, default: ''},
      closeButtonText: {type: String},
      deleteButtonText: {type: String, default: '删除'},
      showDeleteKey: {type: Boolean, default: true},
      hideOnClickOutside: {type: Boolean, default: true}
    },
    methods: {
      /**
       * input - 点击按键时触发
       * @param val
       */
      numberKeyboard_input(val) {
        this.$emit('input', val);
      },
      /**
       * 点击删除键时触发
       */
      numberKeyboard_delete() {
        this.$emit('delete');
      },
      /**
       * close - 点击关闭按钮时触发
       */
      numberKeyboard_close() {
        this.$emit('close');
      },
      /**
       * blur - 点击关闭按钮或非键盘区域时触发
       */
      numberKeyboard_blur() {
        this.$emit('blur');
      },
      /**
       * show - 键盘完全弹出时触发
       */
      numberKeyboard_show() {
        this.$emit('show');
      },
      /**
       * hide - 键盘完全收起时触发
       */
      numberKeyboard_hide() {
        this.$emit('hide');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
