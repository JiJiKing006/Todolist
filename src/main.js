// 引入vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 关闭提示
Vue.config.productionTip = false;
// 创建对象
new Vue({
  el: "#app",
  render: (h) => h(App),
});
