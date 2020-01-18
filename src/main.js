// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Api } from './api'
import store from './store'
import 'wc-messagebox/style.css'
import 'swiper/dist/css/swiper.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// 进度条配置
Vue.prototype.$Loading.config({
	color: '#2d8cf0',
	failedColor: '#f0ad4e',
	height: 3
});
router.beforeEach((to, from, next) => {
	iView.LoadingBar.start();
	//  console.log(getToken())
  if(to.meta.title) {
    document.title = to.meta.title;
  }
	next();
	//  if(getToken()==undefined || getToken()==""){
	//  	next('/login');
	//  }else{
	//  	next();
	//  }

});
//
router.afterEach((to, from, next) => {
	iView.LoadingBar.finish();
	window.scrollTo(0, 0);
});
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

//自定义背景指令
Vue.directive('bg', {
  bind: function (el, binding, vnode) {
    el.style.backgroundImage = `url(${binding.value})`;
  }
});

Vue.prototype.$http = new Api();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
