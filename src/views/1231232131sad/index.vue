<!--架构组 - 基础组件调试 - 主页-->
<template>
  <div id="Dashboard">



    <img src="../../assets/css/img/logo.png">
    <HelloWorld></HelloWorld>
    <h1 @click="login()">登录</h1>
    <h1 @click="clickGET()">测试GET</h1>
    <h1 @click="clickPOST()">测试POST</h1>
    <h1 class="testh1">testh1</h1>
  </div>
</template>

<script>
  import qs from 'querystring';

  export default {
    name: 'Dashboard',
    created() {
    },
    methods: {
      login() {
        console.log('login');
        this.$fetch({
            url: '/oauth/login',
            method: 'post',
            data: {
              username: "test-name",
              password: "LXgbEFC8kna7yznMVtmheA==",
              sex: 2
            },
            transformRequest: [function (data) {
              data = qs.stringify(data);
              console.log('登录请求发送前数据处理，处理结果：————' + data);
              return data;
            }]
          }
        ).then(res => {
          console.log(res);
        });
      },
      clickGET() {
        this.$fetch(
          {
            url: '/test/get',
            method: 'get',
            data: {
              name: 'get-name'
            },
          }
        ).then(res => {
          console.log(res);
        });
      },
      clickPOST() {
        this.$fetch(
          {
            url: '/test/post',
            method: 'post',
            data: {
              name: 'post-name'
            },
          }
        ).then(res => {
          console.log(res);
        });
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss">

</style>
