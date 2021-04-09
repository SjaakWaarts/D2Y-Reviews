import Vuex from 'vuex';
import Vue from 'vue';

import dhk from './modules/dhk';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dhk,
        user,
    }
})
