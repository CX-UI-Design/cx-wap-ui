<!--架构组 - 基础组件调试 - Tab 标签页 组件-->
<template>
  <van-tab class="ns-tab" :title="title" :disabled="disabled">
    <slot></slot>
  </van-tab>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'tab',
    props: {
      title: {type: String},
      disabled: {type: Boolean, default: false}
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
