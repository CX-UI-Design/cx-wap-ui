<!--架构组 - 基础组件调试 - SwipeCell 滑动单元格 组件-->
<template>
  <van-swipe-cell class="ns-swipeCell" :right-width="rightWidth" :left-width="leftWidth" :on-close="onClose" :disabled="disabled"
                  @click="swipeCell_click">
    <slot></slot>
  </van-swipe-cell>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'swipeCell',
    data() {
      return {}
    },
    props: {
      leftWidth: {type: Number, default: 0},//左侧滑动区域宽度
      rightWidth: {type: Number, default: 0},//右侧滑动区域宽度
      onClose: {type: Function},//关闭时的回调函数
      disabled: {type: Boolean, default: false},//是否禁用滑动
    },
    methods: {
      /**
       * click - 点击时触发
       * @param postion  关闭时的点击位置 (left right cell outside)
       */
      swipeCell_click(postion) {
        this.$emit('click', postion);
      }
    },
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
