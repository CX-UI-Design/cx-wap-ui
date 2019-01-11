<!--架构组 - 基础组件调试 - Stepper 步进器 组件-->
<template>
  <van-stepper class="ns-stepper" v-model="child_stepper"
               :disabled="disabled" :max="max" :min="min" :step="step" :barHeight="barHeight"
               @change="stepper_change" @overlimit="stepper_overlimit" @plus="stepper_plus"
               @minus="stepper_minus" @blur="stepper_blur">
  </van-stepper>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'stepper',
    data() {
      return {
        child_stepper: ''
      }
    },
    created() {
      this.child_stepper = this.father_stepper;
    },
    props: {
      father_stepper: {type: [String, Number]},
      min: {type: [String, Number], default: 1},
      max: {type: [String, Number]},
      step: {type: [String, Number], default: 1},
      integer: {type: Boolean, default: false},
      disabled: {type: Boolean, default: false},
      disableInput: {type: Boolean, default: false},
      asyncChange: {type: Boolean, default: false}
    },
    methods: {
      /**
       * change  - 当绑定值变化时触发的事件
       * @param value ( 当前组件的值 )
       */
      stepper_change(value) {
        this.$emit('change', value);
      },
      /**
       * overlimit  - 点击不可用的按钮时触发
       */
      stepper_overlimit() {
        this.$emit('overlimit');
      },
      /**
       * plus  - 点击增加按钮时触发
       */
      stepper_plus() {
        this.$emit('plus');
      },
      /**
       * minus -  点击减少按钮时触发
       */
      stepper_minus() {
        this.$emit('minus');
      },
      /**
       * blur  - 输入框失焦时触发
       */
      stepper_blur() {
        this.$emit('blur');
      }
    },
    watch: {
      child_stepper() {
        this.$emit('change_stepper', this.child_stepper)
      },
      father_stepper() {
        this.child_stepper = this.father_stepper;
      },
    },
    model: {
      prop: 'father_stepper',
      event: 'change_stepper'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
