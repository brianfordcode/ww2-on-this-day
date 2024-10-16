import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


function getTodaysDate() {
  const d = new Date()
  const year = '1939'
  const month = (d.getMonth() < 9 ? '0' : '') + (d.getMonth() + 1)
  const day = (d.getDate() < 9 ? '0' : '') + (d.getDate())
  const todaysDate = year + '-' + month + '-' + day
  return todaysDate
}

const routes = [
  {
    path: '/',
    redirect: getTodaysDate(),
    name: 'Home',
    component: Home,
    meta: {
      title: "WW2 on this day"
    }
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