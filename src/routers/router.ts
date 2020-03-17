/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 17:20:04
 * @LastEditTime: 2019-08-23 15:43:11
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/customer',
      name: 'Customer',
      component: () => import('../views/Customer/customer.vue')
    },
    {
      path: '/application',
      name: 'Application',
      component: () => import('../views/application.vue')
    },
    {
      path: '/addcenter',
      name: 'Addcenter',
      component: () => import('../views/Addcenter/addcenter.vue')
    },
    {
      path: '/setting',
      name: 'Setting',
      component: () => import('../views/Addcenter/setting.vue')
    },
    {
      path: '/management',
      name: 'Management',
      component: () => import('../views/Management/management.vue')
    },
    {
      path: '/usercenter',
      name: 'Usercenter',
      component: () => import('../views/Usercenter/usercenter.vue')
    },
    {
      redirect: '/customer',
      path: '/'
    }
  ]
})
