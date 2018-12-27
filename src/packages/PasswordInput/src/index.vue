<!--架构组 - 基础组件调试 - PasswordInput 密码输入框 组件-->
<template>
  <van-field class="ns-password-input" :value="value" :length="length" :info="info"
             :errorInfo="errorInfo" @focus="passwordInput_focus">
  </van-field>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'password-input',
    props: {
      value: {type: String, default: ''},
      length: {type: Number, default: 6},
      info: {type: String},
      errorInfo: {type: String}
    },
    methods: {
      passwordInput_focus() {
        this.$emit('focus');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
