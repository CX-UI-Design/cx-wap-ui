<!--架构组 - 基础组件调试 - swipe-item 轮播Item 组件-->
<template>
  <van-swipe-item class="ns-swipe-item">
    <slot></slot>
  </van-swipe-item>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'swipe-item',
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
