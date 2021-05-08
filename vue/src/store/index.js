import Vuex from 'vuex';
import Vue from 'vue';
import { getField, updateField } from 'vuex-map-fields';
import dhk from './modules/dhk';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dhk: dhk,
    user: user,
  },

  state: {
  },

  getters: {
    getField,
  },

  actions: {
  },

  mutations: {
    updateField,
  },

});
