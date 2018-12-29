<!--架构组 - 基础组件调试 - Cell-group 组件-->
<template>
  <van-cell-group class="ns-cell-group" :border="border">
    <slot></slot>
  </van-cell-group>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'cell-group',
    created() {
    },
    props: {
      border: {type: Boolean, default: true}
    }
  })

</script>
<style rel="stylesheet/scss" lang="less">

</style>

