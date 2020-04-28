import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Redirector from '../components/Redirector'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/link/:key',
    component: Redirector
  }
]

const router = new VueRouter({
  routes
})

export default router
