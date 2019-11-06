import Vue from 'vue'
import VueRouter from 'vue-router'

//一级路由

import xiang from '../views/xiang.vue'
import Xiangqing from "../views/xiangqing.vue"
// 二级路由

import home from "../views/main/home.vue"
import classify from "../views/main/classify.vue"
import daxue from "../views/main/daxue.vue"
import my from "../views/main/my.vue"

// 三级路由

import guanzhu from "../views/main/san/guanzhu.vue"
import tuijian from "../views/main/san/tuijian.vue"
import rebang from "../views/main/san/rebang.vue"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/xiang'
  },
  {
    path: '/xiang',
    component: xiang,
    children: [
       {
        path: "/xiang/home",
        redirect:"/xiang/home/guanzhu",
        component: home,
        children:[
          {
            path:"/xiang/home/guanzhu",
            component:guanzhu
          },
          {
            path:"/xiang/home/tuijian",
            component:tuijian
          },
          {
            path:"/xiang/home/rebang",
            component:rebang
          }
        ]
      },
      {
        path: "/xiang/classify",
        component: classify
      },
      {
        path: "/xiang/daxue",
        component: daxue
      },
      {
        path: "/xiang/my",
        component: my
      }
    ]
  },
  {
    path: "/Xiangqing",
    component: Xiangqing
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router