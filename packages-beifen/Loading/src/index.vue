<!--架构组 - 基础组件调试 - Loading 加载 组件-->
<template>
  <van-loading class="ns-loading" :color="color" :type="type" :size="size"></van-loading>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'loading',
    props: {
      color: {type: String, default: '#c9c9c9'},
      type: {type: String, default: 'circular'},//spinner	String	circular
      size: {type: String, default: '30px'},
    },
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
