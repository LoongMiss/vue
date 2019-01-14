const router = [
  {
    path: '/parent',
    name: 'Parent',
    component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/parent'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/lifecycle'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/keepAliveA',
    name: 'keepAliveA',
    component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/keepAliveA'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/keepAliveB',
    name: 'keepAliveB',
    component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/keepAliveB'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/keepAliveC',
    name: 'keepAliveC',
    component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/keepAliveC'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/keepAliveViews',
    name: 'KeepAliveViews',
    component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/keepAliveViews'),
    meta: {
      keepAlive: false
    }
  }
]
export default router
