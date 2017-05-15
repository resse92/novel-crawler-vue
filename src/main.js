import Vue from 'vue'
import App from './App'

const VueResource = require('vue-resource')
const VueRouter = require('vue-router')
Vue.use(VueResource)
Vue.use(VueRouter)

import homepage from './components/homepage/homepage'
import category from './components/category/category'
import bookDetail from './components/book_detail/book_detail'
/* eslint-disable no-new */

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: homepage
  },
  {
    path: '/category/:category/:index',
    component: category,
    name: 'category'
  },
  {
    path: '/book/:category/:index',
    component: bookDetail,
    name: 'bookDetail'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
