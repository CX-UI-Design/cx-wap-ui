<template>
  <div class="Account">
    <!--changing-over  reg/reg/forget module-->
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Account',
    data() {
      return {}
    },
    created() {

    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss">


</style>
