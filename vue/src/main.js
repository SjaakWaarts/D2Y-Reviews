import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App.vue'
import router from "./router";
// get index.js from store, index groups all modules
import store from './store';

// import BootstrapVue from "bootstrap-vue";
// import VeeValidate from "vee-validate";
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
