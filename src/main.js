import 'style-loader!css-loader!./assets/fonts.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import Menu from './views/Menu.vue'

import Cinema from './views/Cinema.vue'
import CinemaIndex from './views/cinema/Index.vue'
import CinemaPierrot from './views/cinema/Pierrot.vue'
import CinemaClown from './views/cinema/Clown.vue'
import CinemaBock from './views/cinema/Bock.vue'

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
import PeopleAoki from './views/people/Aoki.vue'
import PeopleStonehouse from './views/people/Stonehouse.vue'
import PeopleShipman from './views/people/Shipman.vue'
import PeopleNormand from './views/people/Normand.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/menu', component: Menu },
  { path: '/cinema', component: Cinema,
    children: [
      { path: 'index', component: CinemaIndex },
      { path: 'pierrot', component: CinemaPierrot },
      { path: 'clown', component: CinemaClown },
      { path: 'bock', component: CinemaBock }
    ]
  },
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
      { path: 'falconetti', component: PeopleFalconetti },
      { path: 'aoki', component: PeopleAoki },
      { path: 'stonehouse', component: PeopleStonehouse },
      { path: 'shipman', component: PeopleShipman },
      { path: 'normand', component: PeopleNormand }
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
