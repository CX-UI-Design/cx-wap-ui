<!--架构组 - 基础组件调试 - TreeSelect 分类选择 组件-->
<template>
  <van-tree-select class="ns-tree-select" :items="items" :height="height"
                   :activeId="activeId" :mainActiveIndex="mainActiveIndex"
                   @navclick="treeSelect_navclick" @itemclick="treeSelect_itemclick">
    <slot></slot>
  </van-tree-select>
</template>

<script>
  import create from '../../../utils/create';

  export default create({
    name: 'tree-select',
    props: {
      items: {type: Array, default: []},
      height: {type: Number, default: 300},
      mainActiveIndex: {type: Number, default: 0},
      activeId: {type: [String, Number], default: 0}
    },
    methods: {
      /**
       * navclick  - 左侧导航点击时，触发的事件
       * @param index ( 被点击的导航的索引 )
       */
      treeSelect_navclick(index) {
        this.$emit('navclick', index);
      },
      /**
       * temclick  右侧选择项被点击时，会触发的事件
       * @param data ( 该点击项的数据 )
       */
      treeSelect_itemclick(data) {
        this.$emit('itemclick', data);
      }
    }
  })
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
