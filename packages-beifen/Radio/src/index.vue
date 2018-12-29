<!--架构组 - 基础组件调试 - Radio 单选框 组件-->
<template>
  <van-radio class="ns-radio" :name="name" :disabled="disabled" :labelDisabled="labelDisabled"
             :labelPosition="labelPosition" :checkedColor="checkedColor">
    <slot></slot>
  </van-radio>
</template>
<script>
  import create from '../../../utils/create';

  export default create({
    name: 'radio',
    props: {
      name: {type: [String, Number, Boolean, Array, Object]},
      disabled: {type: Boolean, default: false},
      labelDisabled: {type: Boolean, default: false},
      labelPosition: {type: String, default: 'right'},//left
      checkedColor: {type: String, default: '#1989fa'}
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
