import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './router-config'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: constantRoutes
})

router.beforeEach((to, from, next) => {
  useDocumentTitle(to.meta.title as string)
  next()
})

export default router
