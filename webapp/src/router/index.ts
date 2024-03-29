import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
//  {
//    path: '/',
//    name: 'home',
//    component: Home
//  },
//  {
//    path: '/about',
//    name: 'about',
//    // route level code-splitting
//    // this generates a separate chunk (about.[hash].js) for this route
//    // which is lazy-loaded when the route is visited.
//    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//    path: '/test',
//    name: 'test',
//    component: () => import('../views/Test.vue')
//    },
   {
    path: '/top',
    name: 'top',
    component: () => import('../views/Top.vue')
   },
   {
    path: '/plan-detail/:planId',
    name: 'plan-detail',
    component: () => import('../views/PlanDetail.vue')
   },
   {
    path: '/plan-create/',
    name: 'plan-create',
    component: () => import('../views/PlanCreate.vue')
   },
   {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
   },
   {
    path: '/requestAccept',
    name: 'requestAccept',
    component: () => import('../views/RequestAccept.vue')
   },
   {
    path: '/mypage',
    name: 'mypage',
    component: () => import('../views/MyPage.vue')
   },
   {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue')
   },
   {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
