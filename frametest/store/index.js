import Vue from 'vue';
import Vuex from 'vuex';
import Drawer from './modules/Drawer';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Drawer
  },
  getters
});

export default store;
