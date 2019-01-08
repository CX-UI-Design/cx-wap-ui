<!--架构组 - 基础组件调试 - Panel 面板 组件-->
<template>
  <van-panel class="ns-panel" :title="title" :desc="desc" :status="status" :icon="icon">
    <slot></slot>
  </van-panel>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'panel',
    props: {
      title: {type: String},
      desc: {type: String},
      status: {type: String},
      icon: {type: String}
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
