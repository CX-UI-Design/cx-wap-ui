<!--架构组 - 基础组件调试 - Pagination 分页 组件-->
<template>
  <van-pagination class="ns-pagination" v-model="child_pagination"
                  :mode="mode" :totalItems="totalItems" :itemsPerPage="itemsPerPage" :pageCount="pageCount"
                  :prevText="prevText" :nextText="nextText" :showPageSize="showPageSize" :forceEllipses="forceEllipses"
                  @change="pagination_change">
  </van-pagination>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'pagination',
    data() {
      return {
        child_pagination: ''
      }
    },
    created() {
      this.child_pagination = this.father_pagination;
    },
    props: {
      father_pagination: {type: [Number, String]},
      mode: {type: String, default: 'multi'},//simple
      totalItems: {type: Number, default: 0},
      itemsPerPage: {type: Number, default: 10},
      pageCount: {type: String},//default值为根据记录数计算的结果
      prevText: {type: String, default: '上一页'},
      nextText: {type: String, default: '下一页'},
      showPageSize: {type: Number, default: 5},
      forceEllipses: {type: Boolean, default: false}
    },
    methods: {
      pagination_change() {
        this.$emit('change');
      }
    },
    watch: {
      child_pagination() {
        this.$emit('change_pagination', this.child_pagination)
      },
      father_pagination() {
        this.child_pagination = this.father_pagination;
      },
    },
    model: {
      prop: 'father_pagination',
      event: 'change_pagination'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
