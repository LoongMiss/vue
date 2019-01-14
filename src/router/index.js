import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Other from './other'
import Lifecycle from './lifecycle'
import Base from './base'
import RouterView from './router'

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
    ...Other,
    ...Base,
    ...Lifecycle,
    ...RouterView
  ]
})
