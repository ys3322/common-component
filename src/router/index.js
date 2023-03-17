import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/tree",
  },
  {
    name: "tree",
    path: "/tree",
    component: () => import("../views/tree/index.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
