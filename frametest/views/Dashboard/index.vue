<!--架构组 - 基础组件调试 - 主页-->
<template>
  <div id="Dashboard">
    <van-nav-bar title="主页分发列表">
      <van-icon name="wap-nav" slot="left" @click="handleToggleDrawer"/>
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(firstItem,index) in navlist" :key="index" :name="index" :title="firstItem.title">
        <van-list v-model="loading" :finished="finished" @load="onLoad">
          <van-cell v-for="(secondItem,index) in firstItem.children" :key="index" :title="secondItem.title"
                    @click="navjump(secondItem.path)"
          />
        </van-list>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>

  export default {
    name: 'Dashboard',
    data() {
      return {
        activeNames: [],
        navlist: [
          {
            "title": "基础组件",
            "path": "/dashboard",
            "children": [
              {"title": "Button 组件", "path": "/dashboard", "children": []},
              {"title": "CEll 组件", "path": "/dashboard", "children": []},
            ]
          },
          {
            "title": "基础组件2",
            "path": "/dashboard",
            "children": [
              {"title": "Button 组件2", "path": "/dashboard", "children": []},
              {"title": "CEll 组件2", "path": "/dashboard", "children": []},
            ]
          },
        ],
        loading: false,
        finished: false,
      }

    },
    created() {
      this.getNav();//get nav list data
    },
    methods: {
      /**
       * get nav list data
       */
      getNav() {
        const q = {};
        this.$api.fb_nav.getNav(q).then(res => {
          this.navlist = res.resultData;
          this.loading = false;
          this.finished = true;
        }).catch(
          error => {
            this.navlist = [];
            this.loading = false;
            this.finished = true;
          }
        );
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
      },
      /**
       * handle toggle drawer 切换侧边抽屉组件
       */
      handleToggleDrawer() {
        console.log('handleToggleDrawer');
        this.$store.dispatch('toggleDrawerState');
      },
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss">

</style>
