import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/contacts'
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/contacts/Contacts.vue')
  },
  {
    path: '/contacts/create',
    name: 'Add Contact',
    component: () => import('../views/contacts/CreateContact.vue')
  },
  {
    path: '/contacts/:id/update',
    name: 'Edit Contact',
    component: () => import('../views/contacts/UpdateContact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
