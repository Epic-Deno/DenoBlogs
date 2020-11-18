/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 15:13:39
 * @LastEditors: Pony
 * @LastEditTime: 2020-08-17 00:06:42
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页 . 博客 ｜ 张朕"
    }
  },
  {
    path: '/Document',
    name: 'Document',
    component: () => import('@/views/Document.vue'),
    meta: {
      title: "归档 . 博客 ｜ 张朕"
    }
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: "关于 . 博客 ｜ 张朕"
    }
  },
  {
    path: '/Links',
    name: 'Links',
    component: () => import('@/views/Links.vue'),
    meta: {
      title: "链接 . 博客 ｜ 张朕"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
