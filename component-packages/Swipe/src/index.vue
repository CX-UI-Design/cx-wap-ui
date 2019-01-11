<!--架构组 - 基础组件调试 - Swipe 轮播 组件-->
<template>
  <van-swipe class="ns-swipe" :autoplay="autoplay" :duration="duration" :initialSwipe="initialSwipe"
             :loop="loop" :showIndicators="showIndicators" :indicatorColor="indicatorColor"
             :vertical="vertical" :touchable="touchable" :width="width" :height="height"
             @change="swipe_change">
    <slot></slot>
  </van-swipe>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'swipe',
    props: {
      autoplay: {type: Number},
      duration: {type: Number, default: 500},
      initialSwipe: {type: Number, default: 0},
      loop: {type: Boolean, default: true},
      showIndicators: {type: Boolean, default: true},
      indicatorColor: {type: String, default: '#1989fa'},
      vertical: {type: Boolean, default: false},
      touchable: {type: Boolean, default: true},
      width: {type: Number, default: 0},
      height: {type: Number, default: 0}
    },
    methods: {
      /**
       * change - 每一页轮播结束后触发
       * @param index ( 当前页的索引 )
       */
      swipe_change(index) {
        this.$emit('change', index);
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
