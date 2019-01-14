const router = [
  {
    path: '/mixinsView',
    name: 'MixinsView',
    component: () => import(/* webpackChunkName: "group-base" */ '@/views/base/mixinsView'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/extends',
    name: 'extends',
    component: () => import(/* webpackChunkName: "group-base" */ '@/views/base/extends'),
    meta: {
      keepAlive: false
    }
  }
]

export default router
