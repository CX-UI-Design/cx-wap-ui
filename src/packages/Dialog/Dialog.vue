<!--架构组 - 基础组件调试 - Dialog 弹出框 组件-->
<template>
  <van-dialog class="ns-dialog" v-model="child_dialog"
              :title="title" :message="message" :message-align="messageAlign" :show-confirmButton="showConfirmButton"
              :show-cancel-button="showCancelButton" :confirm-button-text="confirmButtonText"
              :cancel-button-text="cancelButtonText" :overlay="overlay" :close-on-click-overlay="closeOnClickOverlay"
              :lock-scroll="lockScroll" :before-close="beforeClose" :get-container="getContainer"
              @confirm="confirm" @cancel="cancel"
  >
    <slot></slot>
  </van-dialog>
</template>
<script>
  import create from '../../utils/create';

  export default create({
    name: 'dialog',
    data() {
      return {
        child_dialog: ''
      }
    },
    created() {
      this.child_dialog = this.father_dialog;
    },
    props: {
      father_dialog: {type: Boolean},
      title: {type: String},//标题
      message: {type: String},//内容
      messageAlign: {type: String, default: 'center'},//内容对齐方式，可选值为left right center
      showConfirmButton: {type: Boolean, default: true},//是否展示确认按钮
      showCancelButton: {type: Boolean, default: false},//是否展示取消按钮
      confirmButtonText: {type: String, default: '确认'},//确认按钮的文案
      cancelButtonText: {type: String, default: '取消'},//取消按钮的文案
      overlay: {type: Boolean, default: true},//是否展示蒙层
      closeOnClickOverlay: {type: Boolean, default: false},//是否在点击蒙层后关闭
      lockScroll: {type: Boolean, default: true},//是否锁定背景滚动
      beforeClose: {type: Function},//关闭前的回调函数，调用 done() 后关闭弹窗，调用 done(false) 阻止弹窗关闭
      getContainer: {type: [String, Function]},//指定挂载的节点，可以传入选择器，或一个返回节点的函数
    },
    methods: {
      /**
       * confirm  - 点击确认按钮时触发
       */
      dialog_confirm() {
        this.$emit('confirm')
      },
      /**
       * cancel  - 点击取消按钮时触发
       */
      dialog_cancel() {
        this.$emit('cancel')
      }
    },
    watch: {
      child_dialog() {
        this.$emit('change_dialog', this.child_dialog)
      },
      father_dialog() {
        this.child_dialog = this.father_dialog;
      },
    },
    model: {
      prop: 'father_dialog',
      event: 'change_dialog'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
