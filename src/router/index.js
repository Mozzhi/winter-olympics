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
    {
			path: '/cityline',
			name:'城市采访线',
			component: (resolve) => require(['@/pages/CityLine.vue'], resolve)
    },
    {
			path: '/list_pages/:list_type',
			name:'城市采访线',
			component: (resolve) => require(['@/pages/ListPages.vue'], resolve)
    },
    {
			path: '/Details',
			name:'正文',
			component: (resolve) => require(['@/pages/Details.vue'], resolve)
    },
    {
        path: '/preview',
        component: (resolve) => require(['@/pages/preview.vue'], resolve)
		}
  ]
})
