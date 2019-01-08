<!--架构组 - 基础组件调试 - Uploader 图片上传 组件-->
<template>
  <van-uploader class="ns-uploader"
                :resultType="resultType" :accept="accept" :disabled="disabled"
                :before-read="beforeRead" :after-read="afterRead"
                :multiple="multiple" :max-size="maxSize"
                @oversize="uploader_oversize">

  </van-uploader>
</template>

<script>
  import create from '../../utils/create';

  export default create({
    name: 'uploader',
    props: {
      resultType: {type: String, default: 'dataUrl'},
      accept: {type: String, default: 'image/*'},
      disabled: {type: Boolean, default: false},
      beforeRead: {type: Function},
      afterRead: {type: Function},
      maxSize: {type: Number},
      multiple: {type: Boolean, default: false},
    },
    methods: {
      uploader_oversize() {
        this.$emit('oversize');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
