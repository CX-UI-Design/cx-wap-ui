<!--架构组 - 基础组件调试 - List 列表 组件-->
<template>
  <van-list class="ns-list" :loading="loading" :finished="finished" :offset="offset"
            :loadingText="loadingText" :finishedText="finishedText"
            :immediateCheck="immediateCheck" @load="list_load">
    <slot></slot>
  </van-list>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'list',
    created() {
    },
    props: {
      loading: {type: Boolean, default: false},
      finished: {type: Boolean, default: false},
      offset: {type: Number, default: 300},
      loadingText: {type: String, default: '加载中...'},
      finishedText: {type: String},
      immediateCheck: {type: Boolean, default: true}
    },
    methods: {
      list_load() {
        this.$emit('load');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
