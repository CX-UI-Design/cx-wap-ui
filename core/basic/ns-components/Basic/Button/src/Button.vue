<!--架构组 - 基础组件调试 - Button 组件-->
<template>
  <van-button class="ns-button" :type="type" :size="size" :text="text" :tag="tag" :disabled="disabled"
              :loading="loading" :block="block" :plain="plain" :square="square" :round="round"
              @click="button_click">
    <slot></slot>
  </van-button>
</template>

<script>
  import create from '../../../../utils/create';

  export default create({
    name: 'button',
    created() {
    },
    props: {
      type: {type: String, default: 'default'},//default primary warning danger
      size: {type: String, default: 'normal'},//normal large small mini
      text: {type: String},
      tag: {type: String, default: 'button'},
      disabled: {type: Boolean, default: false},
      loading: {type: Boolean, default: false},
      block: {type: Boolean, default: false},
      plain: {type: Boolean, default: false},
      square: {type: Boolean, default: false},
      round: {type: Boolean, default: false},
    },
    methods: {
      button_click() {
        if (!this.loading && !this.disabled) {
          this.$emit('click', event);
        }
      }
    }
  });

</script>

<style rel="stylesheet/scss" lang="scss">
  .ns-button {

  }
</style>
