import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'x',
    // redirect: `1939-${new Date().getMonth()+1}-${new Date().getDate()}`
    redirect: '1939-03-17'
  },
  {
    path: '/:datestring',
    name: 'datestring',
    component: Home,
    meta: {
      title: "ww2 on this day"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "About | WW2 on this day"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: "Contact | WW2 on this day"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router