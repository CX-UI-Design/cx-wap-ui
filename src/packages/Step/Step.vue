<!--架构组 - 基础组件调试 - Steps 步骤条 组件-->
<template>
  <van-step class="ns-step">
    <slot></slot>
  </van-step>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'step',
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
