import 'style-loader!css-loader!./assets/fonts.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import Menu from './views/Menu.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/menu', component: Menu }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router
})
