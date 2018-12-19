<template>
  <div class="DrawerContent">
    <img class='avator' src="../../assets/img/avator/avator.jpg" alt="avator"/>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,index) in navlist" :key="index" :title="item.name"
        @click="navjump(item.path)"
      />
    </van-list>
  </div>
</template>

<script>
  export default {
    name: 'DrawerContent',
    data() {
      return {
        navlist: [],
        loading: false,
        finished: false,
      }
    },
    created() {
      this.getNav();
    },
    methods: {
      getNav() {
        const q = {};
        this.$api.nav.getNav(q).then(res => {
          this.navlist = res.resultData;
          this.loading = false;
          this.finished = true;
        });
      },
      navjump(path) {
        console.log('侧边导航点击跳转：', path);
        this.$router.push({path: path});
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          this.getNav();
        }, 500);
      }
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>

  .DrawerContent {
    height: 100%;
    overflow-y: auto;
    background: #fff;
    .avator {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
    }
  }

</style>
