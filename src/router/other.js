const router = [
  {
    path: '/exportView',
    name: 'exportView',
    component: () => import(/* webpackChunkName: "group-other" */ '@/views/other/exportView'),
    meta: {
      keepAlive: false
    }
  }
]

export default router
