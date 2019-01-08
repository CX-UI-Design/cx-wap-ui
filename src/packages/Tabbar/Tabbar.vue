<!--架构组 - 基础组件调试 - Tabbar 标签栏 组件-->
<template>
  <van-tabbar class="ns-tabbar" v-model="child_tabbar"
              :fixed="fixed" :zIndex="zIndex" @change="tabbar_change">
    <slot></slot>
  </van-tabbar>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'tabbar',
    data() {
      return {
        child_tabbar: ''
      }
    },
    created() {
      this.child_tabbar = this.father_tabbar;
    },
    props: {
      father_tabbar: {type: Number},
      fixed: {type: Boolean, default: true},
      zIndex: {type: Number, default: 1}
    },
    methods: {
      /**
       * change  - 切换标签时触发
       * @param active ( 当前选中标签 )
       */
      tabbar_change(active) {
        this.$emit('change', mactive);
      }
    },
    watch: {
      child_tabbar() {
        this.$emit('change_tabbar', this.child_tabbar)
      },
      father_tabbar() {
        this.child_tabbar = this.father_tabbar;
      },
    },
    model: {
      prop: 'father_tabbar',
      event: 'change_tabbar'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
