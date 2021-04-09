import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./search/Search.vue")
    },
    {
      path: "/club",
      name: "club",
      component: () => import("./components/Home.vue")
    },
    {
      path: "/workshops",
      name: "workshops",
      component: () => import("./components/Home.vue")
    },
    {
      path: "/dhk_admin",
      name: "dhk_admin",
      component: () => import("./components/Home.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/Register.vue")
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("./components/Favorites.vue")
    },
  ]
});