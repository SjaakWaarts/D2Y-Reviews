import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import VueColumnsResizableVuetify from 'vue-columns-resizable-vuetify';
import VueGoogleCharts from 'vue-google-charts';
import vuetify from './plugins/vuetify'; // path to vuetify export
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueColumnsResizableVuetify);
Vue.use(VueGoogleCharts);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
