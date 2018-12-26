<!--架构组 - 基础组件调试 - BadgeGroup 组件-->
<template>
  <van-badge-group class="ns-badge-group" :activeKey="activeKey" @change="badgeGroup_change">
    <slot></slot>
  </van-badge-group>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'badge-group',
    created() {
    },
    props: {
      activeKey: {type: [String, Number], default: 0}
    },
    methods: {
      badgeGroup_change() {
        this.$emit('change');
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
