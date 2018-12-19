<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Layout from './views/Layout/index'
  import {changeCard} from './utils'

  export default {
    name: 'App',
    components: {Layout},
    created() {


    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

