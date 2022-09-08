export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      showTab: true
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue'),
    meta: {
      title: '我的',
      showTab: true
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue'),
    meta: {
      title: '测试'
    }
  }
]
