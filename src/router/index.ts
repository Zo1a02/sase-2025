import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import LoginView from '@/view/LoginView.vue'
import Taskview from '@/view/Taskview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Taskview,
      meta: {
        title: 'Tasks'
      }

    }

  ],
})

export default router
