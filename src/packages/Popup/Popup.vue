<!--架构组 - 基础组件调试 - Popup 弹出层 组件-->
<template>
  <van-popup class="ns-popup" v-model="child_popup" :overlay="overlay" :position="position"
             :overlayClass="overlayClass" :overlayStyle="overlayStyle" :transition="transition"
             :getContainer="getContainer" :closeOnClickOverlay="closeOnClickOverlay"
             :lockScroll="lockScroll" :lazyRender="lazyRender" @clickOverlay="popup_clickOverlay">
    <slot></slot>
  </van-popup>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'popup',
    data() {
      return {
        child_popup: ''
      }
    },
    created() {
      this.child_popup = this.father_popup;
    },
    props: {
      father_popup: {type: Boolean},
      overlay: {type: Boolean, default: true},
      position: {type: String},//top bottom right left
      overlayClass: {type: String},
      overlayStyle: {type: Object},
      transition: {type: String},
      getContainer: {type: [String, Function]},
      closeOnClickOverlay: {type: Boolean, default: true},
      lockScroll: {type: Boolean, default: true},
      lazyRender: {type: Boolean, default: true}
    },
    methods: {
      popup_clickOverlay() {
        this.$emit('clickOverlay');
      }
    },
    watch: {
      child_popup() {
        this.$emit('change_popup', this.child_popup)
      },
      father_popup() {
        this.child_popup = this.father_popup;
      },
    },
    model: {
      prop: 'father_popup',
      event: 'change_popup'
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
