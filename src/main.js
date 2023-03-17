import Vue from "vue";
import ElementUI from "element-ui";

import router from "./router/index";

import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/reset.css";
import "./assets/css/icons.scss";

import App from "./App.vue";

// 如何引入element ui
// https://element.eleme.cn/#/zh-CN/component/quickstart
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
