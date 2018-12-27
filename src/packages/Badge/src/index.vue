<!--架构组 - 基础组件调试 - Badge 徽章 组件-->
<template>
  <van-badge class="ns-badge" :title="title" :info="info" :url="url" @click="badge_click"/>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'badge',
    created() {
    },
    props: {
      title: {type: String, default: ''},
      info: {type: [String, Number], default: ''},
      url: {type: String}
    },
    methods: {
      badge_click() {
        this.$emit('click');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
