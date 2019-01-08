<!--架构组 - 基础组件调试 - CollapseItem 组件-->
<template>
  <van-collapse-item class="ns-collapse-item" :name="name" :icon="icon" :title="title" :value="value"
                     :label="label" :border="border" :isLink="isLink" :disabled="disabled"
                     :titleClass="titleClass" :valueClass="valueClass" :labelClass="labelClass">
    <slot></slot>
  </van-collapse-item>
</template>
<script>
  import create from '../../utils/create';

  export default create({
    name: 'collapse-item',
    created() {
    },
    props: {
      name: {type: [String, Number], default: 'index'},
      icon: {type: String},
      title: {type: [String, Number]},
      value: {type: [String, Number]},
      label: {type: [String, Number]},
      border: {type: Boolean, default: true},
      isLink: {type: Boolean, default: true},
      disabled: {type: Boolean, default: false},
      titleClass: {type: String},
      valueClass: {type: String},
      labelClass: {type: String}
    },
    methods: {}
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
