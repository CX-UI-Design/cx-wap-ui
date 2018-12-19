<!--chageList-->
<template>
  <van-tree-select class="chageList" :items="arealist" :active-id="activeId" :main-active-index="mainActiveIndex"
                   @navclick="onNavClick" @itemclick="onItemClick"/>
</template>
<script>
  export default {
    name: 'chageList',
    data() {
      return {
        arealist: [],
        mainActiveIndex: 0,
        activeId: 1
      }
    },
    created() {
      this.getArea();
    },
    methods: {
      getArea() {
        const q = {};
        this.$api.area.getArea(q).then(res => {
          this.arealist = res.resultData;
        });
      },
      onNavClick(index) {
        this.mainActiveIndex = index;
      },
      onItemClick(data) {
        this.activeId = data.id;
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">


</style>
