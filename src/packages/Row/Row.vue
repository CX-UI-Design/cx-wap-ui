<!--架构组 - 基础组件调试 - Row 行布局 组件-->
<template>
  <van-row class="ns-row" :type="type" :gutter="gutter" :tag="tag" :justify="justify" :align="align">
    <slot></slot>
  </van-row>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'row',
    props: {
      type: {type: String},//flex
      gutter: {type: [String, Number]},
      tag: {type: String, default: 'div'},
      justify: {type: String, default: 'start'},//end center space-around space-between
      align: {type: String, default: 'top'},//center bottom
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
