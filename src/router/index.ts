import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import LoginView from '@/view/LoginView.vue'
import Taskview from '@/view/TaskView.vue'
import UserView from '@/view/UserView.vue'


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

    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: {
        title: 'Tasks'
      }

    }


  ],
})

export default router
