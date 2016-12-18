import 'style-loader!css-loader!./assets/fonts.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import Menu from './views/Menu.vue'
import Cinema from './views/Cinema.vue'

import Events from './views/Events.vue'
import EventsIndex from './views/events/Index.vue'
import EventsKinetoscope from './views/events/Kinetoscope.vue'
import EventsSkladanowsky from './views/events/Skladanowsky.vue'
import EventsTheatre from './views/events/Theatre.vue'

import People from './views/People.vue'
import PeopleIndex from './views/people/Index.vue'
import PeopleHardy from './views/people/Hardy.vue'
import PeopleWeixler from './views/people/Weixler.vue'
import PeopleWarner from './views/people/Warner.vue'
import PeoplePickford from './views/people/Pickford.vue'
import PeopleFalconetti from './views/people/Falconetti.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/menu', component: Menu },
  { path: '/cinema', component: Cinema },
  { path: '/events', component: Events,
    children: [
      { path: 'index', component: EventsIndex },
      { path: 'kinetoscope/:lang', component: EventsKinetoscope },
      { path: 'skladanowsky/:lang', component: EventsSkladanowsky },
      { path: 'theatre/:lang', component: EventsTheatre }
    ]
  },
  { path: '/people', component: People,
    children: [
      { path: 'index', component: PeopleIndex },
      { path: 'hardy', component: PeopleHardy },
      { path: 'weixler', component: PeopleWeixler },
      { path: 'warner', component: PeopleWarner },
      { path: 'pickford', component: PeoplePickford },
      { path: 'falconetti', component: PeopleFalconetti }
    ]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router
})
