<!--架构组 - 基础组件调试 - Collapse 组件-->
<template>
  <van-collapse class="ns-collapse" v-model="child_collapse"
                :accordion="accordion" @change="collapse_change">
    <slot></slot>
  </van-collapse>
</template>
<script>
  import create from '../../utils/create';

  export default create({
    name: 'collapse',
    data() {
      return {
        child_collapse: ''
      }
    },
    created() {
      this.child_collapse = this.father_collapse;
    },
    props: {
      father_collapse: {type: [String, Number, Array]},
      accordion: {type: Boolean, default: false}
    },
    methods: {
      collapse_change() {
        this.$emit('change');
      }
    },
    watch: {
      child_collapse() {
        this.$emit('event_collapse', this.child_collapse)
      },
      father_collapse() {
        this.child_collapse = this.father_collapse;
      },
    },
    model: {
      prop: 'father_collapse',
      event: 'event_collapse'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
