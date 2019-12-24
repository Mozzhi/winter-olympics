// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Api } from './api'
import 'wc-messagebox/style.css'
import 'swiper/dist/css/swiper.css'
// 动态计算根字号
function setRem() {
  let rem = document.documentElement.clientWidth / 10;
  rem = rem > 192 ? 192 : (rem < 120 ? 120 : rem);
  document.documentElement.style.fontSize = rem + "px";
}
document.body.style.fontSize = "14px";
setRem();
window.addEventListener("resize", function () {
  setRem();
});

Vue.prototype.$http = new Api();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
