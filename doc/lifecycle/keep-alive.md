#keep-alive
```text
Props：
    include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
    exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
    max - 数字。最多可以缓存多少组件实例。
用法：
    <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
    当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

主要用于保留组件状态或避免重新渲染。
```
**注意，<keep-alive>内只能包含一个组件**
###为啥呢？？
keep-alive.js
```js
render ()
 {
    const slot = this.$slots.default
    // 这里获取的便是<keep-alive>下的第一个子组件
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
```
通过render方法可以看出，keep-alive只对第一个子组件进行处理。

###与vue-router搭配使用
keep-alive可以与vue-router联动实现一种全局的缓存处理

```html
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
```
```js
routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        //启用页面缓存
        keepAlive: true
      }
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
      meta: {
        //不启用页面缓存
        keepAlive: false
      }
    }
    ]
```

###清除缓存
既然实现了缓存，那么当缓存不被需要的时候就应该删除掉它，该如何实现呢？

####方法一
在2.5.0版本新增了max属性，当缓存数达到设定的数字，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
根据上面render方法中,可以看出缓存是如何被销毁的
```js
// prune oldest entry
  if (this.max && keys.length > parseInt(this.max)) {
     pruneCacheEntry(cache, keys[0], keys, this._vnode)
   }
```
```js
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}
```
这样可以看出通过找到对应的缓存，一样可以手动进行清理。
[参考网络资源](https://segmentfault.com/a/1190000015845117)

####方法二
在2.1.0版本新增include和exclude属性，通过这两个属性可以动态的增减缓存
[参考网络资源](https://juejin.im/post/5b4320f9f265da0f7f4488f6)



