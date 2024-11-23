import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent(() => import('../views/Home/home_index.vue'))
const Feedbacks = defineAsyncComponent(() => import('../views/Feedbacks/feedbacks_index.vue'))
const Credentials = defineAsyncComponent(() => import('../views/Credentials/credentials_index.vue'))

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
