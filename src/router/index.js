import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'd',
    component: HomeView
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
    children: [
      {
        path: 'characters',
        name: 'characters',
        component: () => import('@/views/Characters/Characters.vue'),
      },
      {
        path: 'locations',
        name: 'locations',
        component: () => import('@/views/Characters/Characters.vue'),
      },
      {
        path: 'episodes',
        name: 'episodes',
        component: () => import('@/views/Characters/Characters.vue'),
      },
    ]
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
