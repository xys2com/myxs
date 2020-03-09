/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 17:20:04
 * @LastEditTime: 2019-08-23 15:54:03
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/router'
import store from '@/store/store'
import ElementUi from 'element-ui'
import mixin from './mixin'
import '../theme/index.css'
import '@/assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/font/iconfont.css'
import axios from './myAxios'
Vue.prototype.axios = axios
Vue.use(ElementUi)
Vue.mixin(mixin)
Vue.config.productionTip = false

const whiteList: Array<String> = ['/customer'] // 免登录白名单

// router.afterEach((to, from) => {
//   // 设置标题
//   // if (typeof to.meta.title !== 'undefined') {
//   //   document.title = to.meta.title
//   // }
//   // // 获取当前页权限组
//   // if (typeof to.name !== 'undefined') {
//   //   store.commit('GET_JURISDICTION', to.name)
//   // }
// })

// router.beforeEach((to, from, next) => {
//   // 全局loadding
//   // store.commit('SET_LOADING', true)
//   // 默认用户权限第一组位首页
//   // if (to.path === '/' || to.path === '/home') {
//   //   if (!store.state.isHome) {
//   //     console.log(store.state.menu[0]['path'])
//   //     next({ path: store.state.menu[0]['path'] })
//   //   }
//   //   next()
//   // }

//   // 禁止回退到login页
//   // if (store.state.userInfo) {
//   //   if (to.path === '/customer') {
//   //     next({ path: '/' })
//   //   }
//   //   next()
//   // } else {
//   // if (whiteList.includes(to.path)) {
//   //   // 在免登录白名单，直接进入
//   //   next()
//   // } else {
//   //   next('/customer') // 全部重定向到登录页
//   // }
//   // }
// })

router.onReady(() => {
  // 防止刷新动态路由失效
  if (store.state.userInfo !== null) {
    store.dispatch('CREATE_ROUTERS')
    router.addRoutes(store.state.menu)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
