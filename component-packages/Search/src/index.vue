<!--架构组 - 基础组件调试 - Search 搜索 组件-->
<template>
  <van-search class="ns-search" :background="background" :showAction="showAction"
              :disabled="disabled" :readonly="readonly" :error="error" :inputAlign="inputAlign"
              @cancel="search_cancel" @search="search_search" @clear="search_clear">
  </van-search>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'search',
    props: {
      background: {type: String, default: '#f2f2f2'},
      showAction: {type: Boolean, default: false},
      disabled: {type: Boolean, default: false},
      readonly: {type: Boolean, default: false},
      error: {type: Boolean, default: false},
      inputAlign: {type: String, default: 'left'}//center right left
    },
    methods: {
      /**
       * cancel - 取消搜索
       */
      search_cancel() {
        this.$emit('cancel');
      },
      /**
       * search  - 确定搜索
       */
      search_search() {
        this.$emit('search');
      },
      /**
       * clear - 点击清除按钮后触发
       */
      search_clear() {
        this.$emit('clear');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
