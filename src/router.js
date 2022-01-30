import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Error from "@/views/Error.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      name: "erro 404",
      component: Error,
    },
  ],
});
