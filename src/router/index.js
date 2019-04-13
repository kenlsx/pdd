// 1. 引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Chat from '@/pages/Chat/Chat'
import Mine from '@/pages/Me/Me'
import Search from '@/pages/Search/Search'
import Login from '@/pages/Me/Login/Login'

// 路由缓存
// const Home = () => import('@/pages/Home/Home')
// const Recommend = () => import('@/pages/Recommend/Recommend')
// const Chat = () => import('@/pages/Chat/Chat')
// const Mine = () => import('@/pages/Me/Me')
// const Search = () => import('@/pages/Search/Search')
// const Login = () => import('@/pages/Me/Login/Login')


import Hot from '@/pages/Home/children/Hot/Hot'
import Box from '@/pages/Home/children/Box'
import Dress from '@/pages/Home/children/Dress'
import Ele from '@/pages/Home/children/Ele'
import Food from '@/pages/Home/children/Food'
import General from '@/pages/Home/children/General'
import Man from '@/pages/Home/children/Man'
import Mbaby from '@/pages/Home/children/Mbaby'
import Shirt from '@/pages/Home/children/Shirt'
import Setting from '@/pages/Me/MeSetting'
import MeDetail from '@/pages/Me/MeDetail'


// 2.声明引用
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {showBottomTabBar: true},
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'hot', component: Hot,meta: {showBottomTabBar: true}},
        {path: 'box', component: Box},
        {path: 'dress', component: Dress},
        {path: 'food', component: Food},
        {path: 'general', component: General},
        {path: 'man', component: Man},
        {path: 'ele', component: Ele},
        {path: 'mbaby', component: Mbaby},
        {path: 'shirt', component: Shirt},
        {path: '/home', redirect: '/home/hot'}
      ]
    },
    {
      path: '/recommend',
      meta: {showBottomTabBar: true},
      component: Recommend
    },
    {
      path: '/mine',
      meta: {showBottomTabBar: true},
      component: Mine
    },
    {
      path: '/chat',
      meta: {showBottomTabBar: true},
      component: Chat
    },
    {
      path: '/search',
      meta: {showBottomTabBar: true},
      component: Search
    },
    {
      path: '/login',
      meta: {showBottomTabBar: false},
      component: Login
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/detail',
      component: MeDetail
    }
  ]
})


