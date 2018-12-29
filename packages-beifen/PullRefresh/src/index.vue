<!--架构组 - 基础组件调试 - PullRefresh 下拉刷新 组件-->
<template>
  <van-loading class="ns-pullRefresh" v-model="child_pullRefresh"
               :pulling-text="pullingText" :loosing-text="loosingText" :loading-text="loadingText"
               :animation-duration="animationDuration" :head-height="headHeight" :disabled="disabled"
               @refresh="pullRefresh_refresh"
  >
    <slot></slot>
  </van-loading>
</template>

<script>6
  import create from '../../../utils/create';

  export default create({
    name: 'pullRefresh',
    data() {
      return {
        child_pullRefresh: '',
      }
    },
    created() {
      this.child_pullRefresh = this.father_pullRefresh;
    },
    props: {
      father_pullRefresh: Boolean,
      pullingText: {type: String, default: '下拉即可刷新...'},//下拉过程文案
      loosingText: {type: String, default: '释放即可刷新...'},//释放过程文案
      loadingText: {type: String, default: '加载中...'},//加载过程文案
      animationDuration: {type: Number, default: 300},//动画时长
      headHeight: {type: Number, default: 50},//顶部内容高度
      disabled: {type: Boolean, default: false},//是否禁用
    },
    methods: {
      /**
       * refresh - 下拉刷新时触发
       */
      pullRefresh_refresh() {
        this.$emit('refresh');
      }
    },
    watch: {
      child_pullRefresh() {
        this.$emit('change_pullRefresh', this.child_pullRefresh);
      },
      father_pullRefresh() {
        this.child_pullRefresh = this.father_pullRefresh;
      }
    },
    model: {
      prop: 'father_pullRefresh',
      event: 'change_pullRefresh'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
