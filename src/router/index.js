import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
<<<<<<< HEAD
    }
=======
    },
    {
			path: '/Login',
			meta: {
			    title: '登录'
			},
			component: (resolve) => require(['@/pages/Login.vue'], resolve)
    },
    {
			path: '/EventServices',
			name:'赛事服务',
			component: (resolve) => require(['@/pages/EventServices.vue'], resolve)
    },
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
  ]
})
