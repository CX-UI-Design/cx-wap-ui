<!--架构组 - 基础组件调试 - Checkbox 组件-->
<template>
  <van-checkbox class="ns-checkbox" v-model="child_checkbox"
                :name="name" :shape="shape" :disabled="disabled" :labelDisabled="labelDisabled"
                :labelPosition="labelPosition" :checkedColor="checkedColor" @change="checkbox_change">
    <slot></slot>
  </van-checkbox>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'checkbox',
    data() {
      return {
        child_checkbox: '',
        vModel: false//Boolean
      }
    },
    created() {
      this.child_checkbox = this.father_checkbox;
    },
    props: {
      father_checkbox: [String, Number],
      name: {type: [String, Number, Boolean, Array, Object]},
      shape: {type: String, default: 'round'},//square
      disabled: {type: Boolean, default: false},
      labelDisabled: {type: Boolean, default: false},
      labelPosition: {type: String, default: 'right'},//left
      checkedColor: {type: String, default: '#1989fa'}
    },
    methods: {
      checkbox_change() {
        this.$emit('change');
      }
    },
    watch: {
      child_checkbox() {
        this.$emit('change_checkbox', this.child_checkbox);
      },
      father_checkbox() {
        this.child_checkbox = this.father_checkbox;
      }
    },
    model: {
      prop: 'father_checkbox',
      event: 'change_checkbox'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
