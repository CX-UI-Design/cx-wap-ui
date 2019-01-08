<!--架构组 - 基础组件调试 - Slider 滑块 组件-->
<template>
  <van-slider class="ns-slider" v-model="child_slider"
              :disabled="disabled" :max="max" :min="min" :step="step" :barHeight="barHeight"
              @change="slider_change">
  </van-slider>

</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'slider',
    data() {
      return {
        child_slider: 0
      }
    },
    created() {
      this.child_slider = this.father_slider;
    },
    props: {
      father_slider: {type: Number, default: 0},
      disabled: {type: Boolean, default: false},
      max: {type: Number, default: 100},
      min: {type: Number, default: 0},
      step: {type: Number, default: 1},
      barHeight: {type: String, default: '2px'}
    },
    methods: {
      /**
       * change  - 进度值改变后触发
       * @param value ( 当前进度 )
       */
      slider_change(value) {
        this.$emit('change', value);
      }
    },
    watch: {
      child_slider() {
        this.$emit('change_slider', this.child_slider)
      },
      father_slider() {
        this.child_slider = this.father_slider;
      },
    },
    model: {
      prop: 'father_slider',
      event: 'change_slider'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
