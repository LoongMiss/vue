#Vue Router
```text
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：

嵌套的路由/视图表
模块化的、基于组件的路由配置
路由参数、查询、通配符
基于 Vue.js 过渡系统的视图过渡效果
细粒度的导航控制
带有自动激活的 CSS class 的链接
HTML5 历史模式或 hash 模式，在 IE9 中自动降级
自定义的滚动条行为
```

##[嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
这个没啥说的，唯一要注意的两个点

1.在想要嵌套其他页面的页面放入<router-view>

2.什么路由的时候，要记得将被嵌套的路由路径声明在嵌套路由的children属性里
```js
const router = [
  {
    path: '/routerFirst',
    name: 'routerFirst',
    component: () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerFirst'),
    children: [
      {
        path: '/routerFirst/routerSecond',
        name: 'routerSecond',
        component: () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerSecond'),
      }
    ]
  }
]      
```
##路由组件传值
###方法一 使用$route
```js
/**router/index.js**/
export default new Router({
  routes: [
    {
      path: '/routerFirst/:id',
      name: 'routerFirst',
      component: () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerFirst'),
    }
  ]
})

/**routerFirst.vue**/
//用来获取路径上的传值
this.$route.params.id
```
###方法二 使用props
```js
/**router/index.js**/
export default new Router({
  routes: [
    {
      path: '/routerFirst/:id',
      name: 'routerFirst',
      component: () => import(/* webpackChunkName: "group-router" */ '@/views/router/routerFirst'),
      props: true
    }
  ]
})

/**routerFirst.vue**/
//先声明props
props: ['id'],
//下面就可以直接用了
this.id

//如果不声明props
this.$attrs.id
```
props传值有三种模式:[布尔模式](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%B8%83%E5%B0%94%E6%A8%A1%E5%BC%8F)、
[对象模式](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F)、[函数模式](https://router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F)，
文档和demo中都用的是布尔模式，其他模式暂不介绍

##导航守卫

滋滋滋，有种和vue生命周期钩子同样的感觉

| | 中文名 | 写的地方 | 调用的时机 |
| --- | --- | --- | --- |
|beforeEach|全局前置守卫|新建Router的地方，即index.js|当一个导航触发时，全局前置守卫按照创建顺序调用|
|beforeResolve|全局解析守卫|同上|在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用|
|afterEach|全局后置钩子|同上|在导航被确认后，进行调用
|beforeEnter|路由独享的守卫|这个就是配置路由的地方|在beforeEach\beforeRouteUpdate(存在可重用组件)后进行调用
|beforeRouteEnter|组建内的守卫|组件内部|在渲染该组件的对应路由被 confirm 前调用|
|beforeRouteUpdate|组建内的守卫|同上|在当前路由改变，但是该组件被复用时调用|
|beforeRouteLeave|组建内的守卫|同上|导航离开该组件的对应路由时调用|

###完整的导航解析流程

```text
1.导航被触发。
2.在失活的组件里调用离开守卫。
3.调用全局的 beforeEach 守卫。
4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5.在路由配置里调用 beforeEnter。
6.解析异步路由组件。
7.在被激活的组件里调用 beforeRouteEnter。
8.调用全局的 beforeResolve 守卫 (2.5+)。
9.导航被确认。
10.调用全局的 afterEach 钩子。
11.触发 DOM 更新。
12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
```
###数据获取
之前一直在vue的生命周期(created,mount)中获取数据,知道导航守卫之后，那么就可以将数据获取分为两个方式：

[导航完成之后获取](https://router.vuejs.org/zh/guide/advanced/data-fetching.html#%E5%AF%BC%E8%88%AA%E5%AE%8C%E6%88%90%E5%90%8E%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE),
[导航完成之前获取](https://router.vuejs.org/zh/guide/advanced/data-fetching.html#%E5%9C%A8%E5%AF%BC%E8%88%AA%E5%AE%8C%E6%88%90%E5%89%8D%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE)
具体写法看链接里，这里不详细说了

####导航完成之后获取
这里官网中给出的调用时机是created，但是之前的项目大部分都是在mount中调用
这两个到底有什么区别呢？

在[Vue生命周期](./lifecycle/Vue生命周期.md)中有说
```text
一、看情况了，一般放到created里面就可以了，这样可以及早发请求获取数据，如果有依赖dom必须存在的情况，
    就放到mounted(){this.$nextTick(() => { /* code */ })}里面
  
二、首先，了解一下created到mounted都做了些什么事：
    有一件最重要的事情就是，虚拟dom根据数据模型渲染成真实dom的过程。
    可得知，mounted的出现时间比created晚，我们总是希望进入页面后能更迅速的获取数据。
    这点是mounted的劣势，但是劣势并不大，因为虚拟dom渲染很快的。
    更重要的一点是，mounted可以操作真实dom，操作ref，这点是created不具备的，而且对于我们来说却是很重要的。
    所以，一般情况下，可以选择mounted做数据请求。
```
以上是我在网上看到的，纠结半天我感觉`一`会更好






##懒加载
```text
“懒加载也叫延迟加载，即在需要的时候进行加载，随用随载。
在单页应用中，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，延时过长，不利于用户体验，
而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。”
```
如何实现[懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)呢？
先说下不用懒加载怎么写的
```js
//第一种
import HelloWorld from '@/components/HelloWorld'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
//第二种
export default new Router({
  routes: [
    {
      path: 'api/password/resetPassword',
      name: '密码设置',
      component: require('@/pages/system/account/account')
    }
  ]
})
```
使用懒加载的写法
```js
//第一种
export default new Router({
  routes: [
    {
      path: '/parent',
      name: 'Parent',
      component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/parent')
    }
  ]
})

//第二种
export default new Router({
  routes: [
    {
      path: 'api/password/resetPassword',
      name: '密码设置',
      component: function(resolve) {
        require(['@/views/lifecycle/parent'], resolve)
      }
    }
  ]
})
```

###把组件按组分块
什么是[按组分块](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)
`有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。`
也就是说没有命名chunk的时候，所有组件都打包在app.js里。

按组分块列子：
```js
component: () => import(/* webpackChunkName: "group-lifecycle" */ '@/views/lifecycle/parent')
```
