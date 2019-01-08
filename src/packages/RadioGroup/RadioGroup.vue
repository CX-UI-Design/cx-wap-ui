<!--架构组 - 基础组件调试 - RadioGroup 单选框组 组件-->
<template>
  <van-radio-group class="ns-radio-group" v-model="child_radio_group"
                   :disabled="disabled" @change="radioGroup_change">
    <slot></slot>
  </van-radio-group>
</template>
<script>
  import create from '../../utils/create';

  export default create({
    name: 'radio-group',
    data() {
      return {
        child_radio_group: ''
      }
    },
    created() {
      this.child_radio_group = this.father_radio_group;
    },
    props: {
      father_radio_group: {type: [String, Number, Boolean, Array, Object]},
      disabled: {type: Boolean, default: false}
    },
    methods: {
      /**
       * change  - 当绑定值变化时触发的事件
       * @param value (当前选中项的 name)
       */
      radioGroup_change(value) {
        this.$emit('change', value);
      }
    },
    watch: {
      child_radio_group() {
        this.$emit('change_radio_group', this.child_radio_group)
      },
      father_radio_group() {
        this.child_radio_group = this.father_radio_group;
      },
    },
    model: {
      prop: 'father_radio_group',
      event: 'change_radio_group'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
