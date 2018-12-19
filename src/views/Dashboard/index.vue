<!--主页-->
<template>
  <div class="Dashboard">
    <van-nav-bar title="收费易">
      <van-icon name="wap-nav" slot="left" @click="handleToggleDrawer"/>
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <form action="/">
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action @search="onSearch"/>
    </form>
    <van-tabs v-model="active">
      <van-tab title="收费">
        <chage-list></chage-list>
      </van-tab>
      <van-tab title="收押金">收押金</van-tab>
      <van-tab title="临时收费">临时收费</van-tab>
      <van-tab title="预收">预收</van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import chageList from './chageList/chageList'

  export default {
    name: 'Dashboard',
    components: {chageList},
    data() {
      return {
        active: 0,
        searchValue: '',
      }
    },
    created() {

    },
    methods: {
      handleToggleDrawer() {
        console.log('handleToggleDrawer');
        this.$store.dispatch('toggleDrawerState');
      },
      onSearch() {

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
