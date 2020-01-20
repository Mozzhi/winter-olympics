import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import {getToken} from '@/libs/auth'
Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
		{
        path: '*',
        redirect: to => {
          // if (getToken() != undefined) {
            return "/index"
          // } else {
          //   return "/login"
          // }
        }
    },
    {
      path: '/index',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true,
        title: '中国人民共和国第十四届冬季运动会'
      }
    },
    {
			path: '/login',
			meta: {
			    title: '登录'
			},
			component: (resolve) => require(['@/pages/Login.vue'], resolve)
    },
    {
			path: '/EventServices/:list_id?',
			name:'赛事服务',
			component: (resolve) => require(['@/pages/EventServices.vue'], resolve),
      meta: {
        keepAlive: true,
        title: '赛事服务'
      }
    },
    {
			path: '/cityline/:list_type/:keyword?',
			name:'城市采访线',
			component: (resolve) => require(['@/pages/CityLine.vue'], resolve)
    },
    {
			path: '/list_pages/:list_type/:type_id?',
			name:'每日新闻',
			component: (resolve) => require(['@/pages/ListPages.vue'], resolve)
    },
    {
			path: '/splendid_pages/:list_type/:type_id?',
			name:'精彩',
			component: (resolve) => require(['@/pages/SplendidPages.vue'], resolve)
    },
    {
			path: '/charm_inner_mongolia',
			name:'魅力内蒙古',
			component: (resolve) => require(['@/pages/CharmInnerMongolia.vue'], resolve),
      meta: {
        keepAlive: true,
          title: '魅力内蒙古'
      }
    },
    {
			path: '/hulun_buir',
			name:'这里是呼伦贝尔',
			component: (resolve) => require(['@/pages/NewHulunBuir.vue'], resolve),
      meta: {
        keepAlive: true,
        title: '这里是呼伦贝尔'
      }
    },
    {
			path: '/blessing',
			name:'寄语',
			component: (resolve) => require(['@/pages/Blessing.vue'], resolve)
    },
    {
			path: '/Details',
			name:'正文',
			component: (resolve) => require(['@/pages/Details.vue'], resolve)
    },
    {
      path: '/preview',
      component: (resolve) => require(['@/pages/preview.vue'], resolve)
		},
    {
      path: '/news_center',
      component: (resolve) => require(['@/pages/NewsCenter.vue'], resolve),
      meta: {
        keepAlive: true,
        title: '新闻中心'
      }
		}
  ]
})
