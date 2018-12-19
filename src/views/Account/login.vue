<!--登录页-->
<template>
  <div class="Login">
    <h1 class="txtC">登录</h1>
    <!-- 居中 -->
    <van-cell-group>
      <van-field v-model="username" label="用户名" icon="question"
                 clearable placeholder="请输入用户名"
                 @click-icon="$toast('question')"/>
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"/>
    </van-cell-group>
    <van-button size="large" type="primary" @click="login()">登录</van-button>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'

  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    created() {
      this.login()
    },
    methods: {
      login() {
        if (this.username && this.password) {
          this.$router.push({path: '/dashboard'});
          Cookie.set('username', this.username)
        }
        else {

        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .Login {
    .van-cell {
      padding: 15px 15px;
    }
    .van-button {
      margin-top: 30px;
    }
  }

</style>
