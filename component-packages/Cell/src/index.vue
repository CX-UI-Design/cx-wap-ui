<!--架构组 - 基础组件调试 - Cell 组件-->
<template>
  <van-cell class="ns-cell" :icon="icon" :title="title" :value="value" :label="label" :size="size" :url="url" :to="to"
            :border="border" :replace="replace" :clickable="clickable" :isLink="isLink" :required="required"
            :center="center" :arrowDirection="arrowDirection" :titleClass="titleClass" :valueClass="valueClass"
            :labelClass="labelClass" @click="cell_click"
  >
    <slot></slot>
  </van-cell>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'cell',
    created() {
    },
    props: {
      icon: {type: String},
      title: {type: [String, Number]},
      value: {type: [String, Number]},
      label: {type: String},
      size: {type: String},//large
      url: {type: String},
      to: {type: [String, Object]},
      border: {type: Boolean, default: true},
      replace: {type: Boolean, default: false},
      clickable: {type: Boolean, default: false},
      isLink: {type: Boolean, default: false},
      required: {type: Boolean, default: false},
      center: {type: Boolean, default: false},
      arrowDirection: {type: String},//left up down
      titleClass: {type: String},
      valueClass: {type: String},
      labelClass: {type: String},
    },
    methods: {
      cell_click() {
        this.$emit('click');
      }
    }
  })

</script>

<style rel="stylesheet/scss" lang="less">

</style>
