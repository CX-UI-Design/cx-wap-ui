<!--架构组 - 基础组件调试 - Steps 步骤条 组件-->
<template>
  <van-steps class="ns-steps" :active="active" :title="title" :description="description"
             :icon="icon" :iconClass="iconClass" :direction="direction"
             :activeColor="activeColor">
    <slot></slot>
  </van-steps>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'steps',
    props: {
      active: {type: Number, default: 0},
      title: {type: String},
      description: {type: String},
      icon: {type: String},
      iconClass: {type: String},
      direction: {type: String, default: 'horizontal'},//vertical
      activeColor: {type: String, default: '#4b0'}
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
