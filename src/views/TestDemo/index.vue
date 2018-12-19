<!--测试页-->
<template>
  <div class="TestDemo">
    <van-nav-bar title="测试页面">
      <van-icon name="wap-nav" slot="left" @click="handleToggleDrawer"/>
      <van-icon name="search" slot="right"/>
    </van-nav-bar>
    <img class='avator' src="../../assets/img/logo.png" alt="avator"/>
    <van-row gutter="20">
      <van-col span="6">
        <van-button type="default" @click="login()">登录</van-button>
      </van-col>
      <van-col span="6">
        <van-button type="primary" @click="clickGET()">测试GET</van-button>
      </van-col>
      <van-col span="6">
        <van-button type="warning" @click="clickPOST()">测试POST</van-button>
      </van-col>
      <van-col span="6">
        <van-button type="danger">other</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'TestDemo',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      this.$ns_alert('弹窗导入成功!!');
    },
    methods: {
      login() {
        console.log('login');
        const q = {
          username: "test-name",
          password: "LXgbEFC8kna7yznMVtmheA==",
          sex: 2
        };
        this.$api.account.loginByUserName(q).then(res => {
          console.log(res);
        });
      },
      clickGET() {
        const q = {
          name: 'get-name'
        };
        this.$api.test.get_test(q).then(res => {
          console.log(res);
        });
      },
      clickPOST() {
        const q = {
          name: 'post-name'
        };
        this.$api.test.post_test(q).then(res => {
          console.log(res);
        });
      },
      handleToggleDrawer() {
        console.log('handleToggleDrawer');
        this.$store.dispatch('toggleDrawerState');
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .TestDemo {
    .avator {
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
    }
    .van-row {
      padding: 0 15px;
    }
  }
</style>
