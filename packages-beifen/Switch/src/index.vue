<!--架构组 - 基础组件调试 - Switch 开关 组件-->
<template>
  <van-switch class="ns-switch" v-model="child_switch"
              :loading="loading" :disabled="disabled" :size="size" :activeColor="activeColor"
              :inactiveColor="inactiveColor" @change="switch_change">
  </van-switch>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'switch',
    data() {
      return {
        child_switch: ''
      }
    },
    created() {
      this.child_switch = this.father_switch;
    },
    props: {
      father_switch: {type: Boolean},
      loading: {type: Boolean, default: false},
      disabled: {type: Boolean, default: false},
      size: {type: String, default: '30px'},
      activeColor: {type: String, default: '#1989fa'},
      inactiveColor: {type: String, default: '#fff'}
    },
    methods: {
      switch_change() {
        this.$emit('change');
      }
    },
    watch: {
      child_switch() {
        this.$emit('change_switch', this.child_switch)
      },
      father_switch() {
        this.child_switch = this.father_switch;
      },
    },
    model: {
      prop: 'father_switch',
      event: 'change_switch'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
