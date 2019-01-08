<!--架构组 - 基础组件调试 - TabbarItem 标签栏  组件-->
<template>
  <van-tabbar-item class="ns-tabbar-item" :icon="icon" :dot="dot" :info="info"
                   :url="url" :to="to" :replace="replace">
    <slot></slot>
  </van-tabbar-item>
</template>
<script>
  import create from '../../utils/create';

  export default create({
    name: 'tabbar-item',
    props: {
      icon: {type: String},
      dot: {type: Boolean},
      info: {type: [String, Number]},
      url: {type: String},
      to: {type: [String, Object]},
      replace: {type: Boolean, default: false}
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
