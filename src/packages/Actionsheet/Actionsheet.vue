<!--架构组 - 基础组件调试 - Actionsheet 上拉菜单 组件-->
<template>
  <van-actionsheet
    class="ns-actionsheet"
    :actions="actions"
    :title="title"
    :cancel-text="cancelText"
    :overlay="overlay"
    :close-on-click-overlay="closeOnClickOverlay"
    :lazyRender="lazyRender"
    :getContainer="getContainer"
    @select="actionsheet_select"
    @cancel="actionsheet_cancel"
  >
  </van-actionsheet>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'actionsheet',
    props: {
      actions: {
        type: Array, default: function () {
          return []
        }
      },//菜单选项
      title: {type: String},//标题
      cancelText: {type: String},//取消按钮文字，为空时不展示取消按钮
      overlay: {type: Boolean, default: true},//是否显示遮罩层
      closeOnClickOverlay: {type: Boolean, default: true},//是否在点击蒙层后关闭
      lazyRender: {type: Boolean, default: true},//是否在显示弹层时才渲染节点
      getContainer: {type: [String, Function]},//指定挂载的节点，可以传入选择器，或一个返回节点的函数
    },
    methods: {
      /**
       * select - 选中选项时触发，禁用或加载状态下不会触发
       * @param value ( 选项对应的对象 )
       */
      actionsheet_select(value) {
        this.$emit('click', value);
      },
      actionsheet_cancel() {
        this.$emit('click');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
