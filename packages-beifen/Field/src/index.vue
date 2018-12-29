<!--架构组 - 基础组件调试 - Field 输入框 组件-->
<template>
  <van-field class="ns-field" v-model="child_field"
             :label="label" :type="type" :border="border" :disabled="disabled" :readonly="readonly"
             :clearable="clearable" :required="required" :isLink="isLink" :error="error" :icon="icon"
             :errorMessage="errorMessage" :labelAlign="labelAlign" :inputAlign="inputAlign"
             :autosize="autosize" :leftIcon="leftIcon" @clickIcon="field_clickIcon" @clear="field_clear">
  </van-field>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'field',
    data() {
      return {
        child_field: ''
      }
    },
    created() {
      this.child_field = this.father_field;
    },
    props: {
      father_field: {type: [String, Number]},
      label: {type: String},
      type: {type: String, default: 'datetime'},//number tel textarea
      border: {type: Boolean, default: false},
      disabled: {type: Boolean, default: false},
      readonly: {type: Boolean, default: false},
      clearable: {type: Boolean, default: false},
      required: {type: Boolean, default: false},
      isLink: {type: Boolean, default: false},
      error: {type: Boolean, default: false},
      errorMessage: {type: String, default: ''},
      labelAlign: {type: String, default: 'left'},//center right
      inputAlign: {type: String, default: 'left'},//center right
      autosize: {type: [Boolean, Object], default: false},//{ maxHeight: 100, minHeight: 50 }
      icon: {type: String},
      leftIcon: {type: String}
    },
    methods: {
      field_clickIcon() {
        this.$emit('clickIcon');
      },
      field_clear() {
        this.$emit('clear');
      }
    },
    watch: {
      child_field() {
        this.$emit('change_field', this.child_field)
      },
      father_field() {
        this.child_field = this.father_field;
      }
    },
    model: {
      prop: 'father_field',
      event: 'change_field'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
