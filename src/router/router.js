const routerSecond = () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerSecond')
const routerSecondA = () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerSecondA')
const routerThird = () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerThird')
const routerThirdA = () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerThirdA')
const router = [
  {
    path: '/routerFirst/:id',
    name: 'routerFirst',
    component: () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerFirst'),
    meta: {
      keepAlive: false
    },
    children: [
      {
        path: '/routerFirst/routerSecond/:id',
        name: 'routerSecond',
        components: {default: routerSecond, a: routerSecondA},
        props: {default: true, a: false},
        meta: {
          keepAlive: false
        },
        children: [
          {
            path: '/routerFirst/routerSecond/routerThird',
            name: 'routerThird',
            components: {default: routerThird, b: routerThirdA},
            meta: {
              keepAlive: false
            }
          }
        ]
      }
    ]
  }
]

export default router
