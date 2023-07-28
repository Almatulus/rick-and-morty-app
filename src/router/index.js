import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hello'
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/views/HelloView.vue'),
    meta: {layout: 'hello'}
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {layout: 'main'},
  },
  {
    path: '/characters',
    name: 'characters',
    meta: {layout: 'main'},
    component: () => import('@/views/Characters/Characters.vue'),
  },
  {
    path: '/character/:id',
    name: 'character/id',
    params: true,
    meta: {layout: 'main'},
    component: () => import('@/views/Characters/CharacterInfo.vue'),
  },
  {
    path: '/locations',
    name: 'locations',
    meta: {layout: 'main'},
    component: () => import('@/views/Locations/Locations.vue'),
  },
  // {
  //   path: '/locations/:id',
  //   name: 'locations/id',
  //   meta: {layout: 'main'},
  //   component: () => import('@/components/locations/LocationInfo.vue'),
  // },
  {
    path: '/episodes',
    name: 'episodes',
    meta: {layout: 'main'},
    component: () => import('@/views/Episodes/Episodes.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
