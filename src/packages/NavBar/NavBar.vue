<!--架构组 - 基础组件调试 - NavBar 导航栏 组件-->
<template>
  <van-nav-bar class="ns-nav-bar" :title="title" :leftText="leftText" :rightText="rightText"
               :leftArrow="leftArrow" :fixed="fixed" :border="border" :zIndex="zIndex"
               @clickLeft="navBar_clickLeft" @clickRight="navBar_clickRight">
  </van-nav-bar>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'nav-bar',
    created() {
    },
    props: {
      title: {type: String, default: ''},
      leftText: {type: String, default: ''},
      rightText: {type: String, default: ''},
      leftArrow: {type: Boolean, default: false},
      fixed: {type: Boolean, default: false},
      border: {type: Boolean, default: true},
      zIndex: {type: Number, default: 1}
    },
    methods: {
      navBar_clickLeft() {
        this.$emit('clickLeft');
      },
      navBar_clickRight() {
        this.$emit('clickRight');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
