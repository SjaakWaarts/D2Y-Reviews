import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./app/Home.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./search/Search.vue'),
    },
    {
      path: '/club',
      name: 'club',
      component: () => import('./app/Home.vue'),
    },
    {
      path: '/workshops',
      name: 'workshops',
      component: () => import('./app/Home.vue'),
    },
    {
      path: '/dhk_admin',
      name: 'dhk_admin',
      component: () => import('./app/Home.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./app/Register.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./app/Favorites.vue'),
    },
  ],
});
