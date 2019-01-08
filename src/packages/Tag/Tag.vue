<!--架构组 - 基础组件调试 - Tag 标记 组件-->
<template>
  <van-tag class="ns-tag" :type="type" :size="size" :color="color" :plain="plain"
           :round="round" :mark="mark" :textColor="textColor">
    <slot></slot>
  </van-tag>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'tag',
    props: {
      type: {type: String},//primary success danger
      size: {type: String},//large medium
      color: {type: String},
      plain: {type: Boolean, default: false},
      round: {type: Boolean, default: false},
      mark: {type: Boolean, default: false},
      textColor: {type: String, default: 'white'}
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
