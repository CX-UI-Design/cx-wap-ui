<!--架构组 - 基础组件调试 - Picker 选择器 组件-->
<template>
  <van-picker class="ns-picker" :columns="columns" :showToolbar="showToolbar" :title="title"
              :loading="loading" :valueKey="valueKey" :itemHeight="itemHeight"
              :confirmButtonText="confirmButtonText" :cancelButtonText="cancelButtonText"
              :visibleItemCount="visibleItemCount" @confirm="picker_confirm" @cancel="picker_cancel"
              @change="picker_change">
  </van-picker>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'picker',
    created() {
    },
    props: {
      columns: {type: Array, default: []},
      showToolbar: {type: Boolean, default: false},
      title: {type: String, default: ''},
      loading: {type: Boolean, default: false},
      valueKey: {type: String, default: 'text'},
      itemHeight: {type: Number, default: 44},
      confirmButtonText: {type: String, default: '确认'},
      cancelButtonText: {type: String, default: '取消'},
      visibleItemCount: {type: Number, default: 5}
    },
    methods: {
      /**
       * confirm - 点击完成按钮时触发
       * @param value
       * 单列：选中值，选中值对应的索引
       * 多列：所有列选中值，所有列选中值对应的索引
       */
      picker_confirm(value) {
        this.$emit('confirm', value);
      },
      /**
       * cancel - 点击完成按钮时触发
       * @param value
       * 单列：选中值，选中值对应的索引
       * 多列：所有列选中值，所有列选中值对应的索引
       */
      picker_cancel(value) {
        this.$emit('cancel', value);
      },
      /**
       * change - 选项改变时触发
       * @param Picker
       * 单列：Picker 实例，选中值，选中值对应的索引
       * 多列：Picker 实例，所有列选中值，当前列对应的索引
       */
      picker_change(Picker) {
        this.$emit('change', Picker);
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
