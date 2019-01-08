<!--架构组 - 基础组件调试 - NoticeBar 通告栏 组件-->
<template>
  <van-notice-bar class="ns-notice-bar" :mode="mode" :delay="delay" :speed="speed"
                  :scrollable="scrollable" :leftIcon="leftIcon" :color="color"
                  :background="background" @click="noticeBar_click">
    <slot></slot>
  </van-notice-bar>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'notice-bar',
    created() {
    },
    props: {
      mode: {type: String, default: ''},//closeable link
      delay: {type: Number, default: 1},
      speed: {type: Number, default: 50},
      scrollable: {type: Boolean, default: true},
      leftIcon: {type: String},
      color: {type: String, default: '#f60'},
      background: {type: String, default: '#fff7cc'}
    },
    methods: {
      noticeBar_click() {
        this.$emit('click');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
