<!--架构组 - 基础组件调试 - Tabs 标签页 组件-->
<template>
  <van-tabs class="ns-tabs" v-model="child_tabs"
            :color="color" :type="type" :duration="duration" :lineWidth="lineWidth"
            :swipeable="swipeable" :sticky="sticky" :offsetTop="offsetTop"
            :swipeThreshold="swipeThreshold" :animated="animated" :ellipsis="ellipsis"
            @click="tabs_click" @change="tabs_change" @disabled="tabs_disabled"
            @scroll="tabs_scroll">
    <slot></slot>
  </van-tabs>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'tabs',
    data() {
      return {
        child_tabs: 0
      }
    },
    created() {
      this.child_tabs = this.father_tabs;
    },
    props: {
      father_tabs: {type: [String, Number], default: 0},
      color: {type: String, default: '#f44'},
      type: {type: String, default: 'line'},//card
      duration: {type: Number, default: 0.3},
      lineWidth: {type: Number},
      swipeable: {type: Boolean, default: false},
      sticky: {type: Boolean, default: false},
      offsetTop: {type: Number, default: 0},
      swipeThreshold: {type: Number, default: 4},
      animated: {type: Boolean, default: false},
      ellipsis: {type: Boolean, default: true}
    },
    methods: {
      /**
       * click - 点击标签时触发
       * @param index    标签索引
       * @param title    标题
       */
      tabs_click(index, title) {
        this.$emit('click', {index, title});
      },
      /**
       * change  - 当前激活的标签改变时触发
       * @param index    标签索引
       * @param title    标题
       */
      tabs_change(index, title) {
        this.$emit('change', {index, title});
      },
      /**
       * disabled  - 点击被禁用的标签时触发
       * @param index    标签索引
       * @param title    标题
       */
      tabs_disabled(index, title) {
        this.$emit('disabled', {index, title});
      },
      /**
       * scroll  - 滚动时触发
       * @param scrollTop  距离顶部位置
       * @param isFixed    是否吸顶
       */
      tabs_scroll(scrollTop, isFixed) {
        this.$emit('scroll', {scrollTop, isFixed});
      },
    },
    watch: {
      child_tabs() {
        this.$emit('change_tabs', this.child_tabs)
      },
      father_tabs() {
        this.child_tabs = this.father_tabs;
      },
    },
    model: {
      prop: 'father_tabs',
      event: 'change_tabs'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
