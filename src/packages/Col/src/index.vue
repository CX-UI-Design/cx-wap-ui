<!--架构组 - 基础组件调试 - Col 列布局 组件-->
<template>
  <van-col class="ns-col" :span="span" :offset="offset" :tag="tag">
    <slot></slot>
  </van-col>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'col',
    props: {
      span: {type: [String, Number]},
      offset: {type: [String, Number]},
      tag: {type: String, default: 'div'}
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
