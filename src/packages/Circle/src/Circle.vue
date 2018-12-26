<!--架构组 - 基础组件调试 - Circle 组件-->
<template>
  <van-circle class="ns-circle" v-model="child_circle"
              :rate="rate" :size="size" :color="color" :layerColor="layerColor"
              :fill="fill" :speed="speed" :text="text" :strokeWidth="strokeWidth"
              :clockwise="clockwise">
  </van-circle>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'circle',
    data() {
      return {
        child_circle: ''
      }
    },
    created() {
      this.child_circle = this.father_circle;
    },
    props: {
      father_circle: {type: Number},
      rate: {type: Number, default: 100},
      size: {type: String, default: '100px'},
      color: {type: String, default: '#1989fa'},
      layerColor: {type: String, default: '#fff'},
      fill: {type: String, default: 'none'},
      speed: {type: Number},
      text: {type: String},
      strokeWidth: {type: Number, default: 40},
      clockwise: {type: Boolean, default: true}
    },
    methods: {},
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
