<template>
  <div id="Layout">
    <vue-drawer-layout
      ref="drawerLayout"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick"
    >
      <div class="drawer" slot="drawer">
        <drawer-content></drawer-content>
      </div>
      <div class="content" slot="content">
        <transition leave-active-class="" enter-active-class="out-in">
          <router-view :key="key"></router-view>
        </transition>
      </div>
    </vue-drawer-layout>
  </div>
</template>

<script>
  import DrawerContent from '../../components/DrawerContent/index';
  import {mapGetters} from 'vuex';

  export default {
    name: 'Layout',
    components: {DrawerContent},
    data() {
      return {}
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      },
      ...mapGetters(['drawerState']),
    },
    watch: {
      drawerState(val) {
        this.$refs.drawerLayout.toggle();
      },
    },
    created() {
    },
    methods: {
      handleSlideStart() {
        console.info('slide-start');
      },
      handleSlideMove(position) {
        console.info('slide-move', position);
      },
      handleSlideEnd(visible) {
        console.info('slide-end', visible);
      },
      handleMaskClick() {
        console.info('mask-click');
        this.$refs.drawerLayout.toggle(false);
      },
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .drawer {
    height: 100%;
  }
</style>
