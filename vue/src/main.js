import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import vuetify from './plugins/vuetify'; // path to vuetify export
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
