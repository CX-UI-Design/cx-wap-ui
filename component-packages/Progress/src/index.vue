<!--架构组 - 基础组件调试 - Progress 进度条 组件-->
<template>
  <van-progress class="ns-progress" :inactive="inactive" :percentage="percentage"
                :showPivot="showPivot" :color="color" :textColor="textColor"
                :pivotText="pivotText" :pivotColor="pivotColor">
    <slot></slot>
  </van-progress>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'progress',
    props: {
      inactive: {type: Boolean, default: false},
      percentage: {type: String, default: false},
      showPivot: {type: Boolean, default: true},
      color: {type: String, default: '#1989fa'},
      textColor: {type: String, default: '#fff'},
      pivotText: {type: String},//默认值为'xx%'
      pivotColor: {type: String}//默认值与进度条颜色一致
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
