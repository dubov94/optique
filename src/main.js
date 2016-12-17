import 'style-loader!css-loader!./assets/fonts.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import Menu from './views/Menu.vue'
import Cinema from './views/Cinema.vue'
import Events from './views/Events.vue'
import People from './views/People.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/menu', component: Menu },
  { path: '/cinema', component: Cinema },
  { path: '/events', component: Events },
  { path: '/people', component: People }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router
})
