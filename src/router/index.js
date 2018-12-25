import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lifecycle from '@/views/lifecycle/lifecycle'
import Parent from '@/views/lifecycle/parent'
import KeepAliveA from '@/views/lifecycle/keepAliveA'
import KeepAliveB from '@/views/lifecycle/keepAliveB'
import KeepAliveC from '@/views/lifecycle/keepAliveC'
import KeepAliveViews from '@/views/lifecycle/keepAliveViews'
import MixinsView from '@/views/base/mixinsView'
import Extends from '@/views/base/extends'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle',
      component: Lifecycle,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/keepAliveViews',
      name: 'KeepAliveViews',
      component: KeepAliveViews,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/keepAliveA',
      name: 'keepAliveA',
      component: KeepAliveA,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/keepAliveB',
      name: 'keepAliveB',
      component: KeepAliveB,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/keepAliveC',
      name: 'keepAliveC',
      component: KeepAliveC,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/mixinsView',
      name: 'MixinsView',
      component: MixinsView,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/extends',
      name: 'extends',
      component: Extends,
      meta: {
        keepAlive: false
      }
    }
  ]
})
