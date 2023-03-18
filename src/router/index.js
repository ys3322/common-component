import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dynamic",
  },
  {
    name: "tree",
    path: "/tree",
    component: () => import("../views/tree/index.vue"),
  },
  {
    name: "dynamic",
    path: "/dynamic",
    component: () => import("../views/dynamic/index.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
