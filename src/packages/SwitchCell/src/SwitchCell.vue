<!--架构组 - 基础组件调试 - SwitchCell 开关单元格 组件-->
<template>
  <van-switch-cell class="ns-switch-cell" v-model="child_circle"
                   :title="title" :loading="loading" :disabled="disabled"
                   :size="size" :activeColor="activeColor" :inactiveColor="inactiveColor"
                   @change="switchCell_change">
  </van-switch-cell>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'switch-cell',
    data() {
      return {
        child_circle: ''
      }
    },
    created() {
      this.child_circle = this.father_circle;
    },
    props: {
      father_circle: {type: Boolean},
      title: {type: Boolean, default: ''},
      loading: {type: Boolean, default: false},
      disabled: {type: Boolean, default: false},
      size: {type: String, default: '24px'},
      activeColor: {type: String, default: '#1989fa'},
      inactiveColor: {type: String, default: '#fff'}
    },
    methods: {
      /**
       * change  - 开关状态切换回调
       * @param value ( 是否选中开关 )
       */
      switchCell_change(value) {
        this.$emit('change', value);
      }
    },
    watch: {
      child_circle() {
        this.$emit('change_circle', this.child_circle)
      },
      father_circle() {
        this.child_circle = this.father_circle;
      },
    },
    model: {
      prop: 'father_circle',
      event: 'change_circle'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
