<!--架构组 - 基础组件调试 - Icon 图标 组件-->
<template>
  <van-icon class="ns-icon" :name="name" :info="info" :color="color" :size="size"
            :classPrefix="classPrefix" @click="icon_click">
  </van-icon>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'icon',
    created() {
    },
    props: {
      name: {type: String},
      info: {type: [String, Number]},
      color: {type: String},
      size: {type: String, default: 'button'},
      classPrefix: {type: String, default: 'van-icon'},
    },
    methods: {
      icon_click() {
        this.$emit('click');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
