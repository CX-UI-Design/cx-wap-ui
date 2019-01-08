<!--架构组 - 基础组件调试 - CheckboxGroup 组件-->
<template>
  <van-checkbox-group class="ns-checkbox-group" v-model="child_checkbox_group"
                      :disabled="disabled" :max="max"
                      @change="checkboxGroup_change">
    <slot></slot>
  </van-checkbox-group>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'checkbox-group',
    data() {
      return {
        child_checkbox_group: '',
        result: []//Array
      }
    },
    created() {
      this.child_checkbox_group = this.father_checkbox_group;
    },
    props: {
      father_checkbox_group: [String, Number],
      disabled: {type: Boolean, default: false},
      max: {type: Number, default: 0},
    },
    watch: {
      child_checkbox_group() {
        this.$emit('change_checkbox_group', this.child_checkbox_group)
      },
      father_checkbox_group() {
        this.child_checkbox_group = this.father_checkbox_group;
      }
    },
    methods: {
      checkboxGroup_change() {
        this.$emit('change');
      }
    },
    model: {
      prop: 'father_checkbox_group',
      event: 'change_checkbox_group'
    },
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
