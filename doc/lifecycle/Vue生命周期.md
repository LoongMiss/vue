#Vue生命周期
先引用一下官方给出Vue生命周期的图片


![Vue生命周期图](../images/vue生命周期图.png)

| 生命周期钩子 | 组件状态 | 最佳实践 |
| --- | --- | --- |
|beforeCreate|实例初始化之后，this指向创建的实例，不能访问到data、computed、watch、methods上的方法和数据|常用于初始化非响应式变量|
|created|实例创建完成，可访问data、computed、watch、methods上的方法和数据，未挂载到DOM，不能访问到$el属性，$ref属性内容为空数组|常用于简单的ajax请求，页面的初始化|
|beforeMount|在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数| - |
|mounted|实例挂载到DOM上，此时可以通过DOM API获取到DOM节点，$ref属性可以访问|常用于获取VNode信息和操作，ajax请求|
|beforeUpdate|响应式数据更新时调用，发生在虚拟DOM打补丁之前|适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器|
|update|虚拟 DOM 重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作|避免在这个钩子函数中操作数据，可能陷入死循环|
|beforeDestroy|实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例|常用于销毁定时器、解绑全局事件、销毁插件对象等操作|
|destroyed|实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁| - |

```text
注意：
    1.created阶段的ajax请求与mounted请求的区别：前者页面视图未出现，如果请求信息过多，页面会长时间处于白屏状态
    2.mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick
```
以上内容出自[这里](http://web.jobbole.com/94470/)

通过这个图片可以看到Vue整个生命周期中有着很多钩子函数，通过钩子函数可以在Vue不同时刻做不一样的操作
还有一些钩子函数不在图片上

constants.js
````js
export const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
]
````
其中activated,deactivated,errorCaptured均没出现在生命周期图中。

那么什么时候来触发这三个钩子函数呢？？？

当使用了<keep-alive>元素将组件包裹起来的时候，可以对其中的组件进行缓存。当进入这样的组件时，会调用activated这个钩子函数，退出时调用deactivated钩子函数


errorCaptured
````js
function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}
````



##子组件钩子的执行时机
###创建
当进入一个包含子组件页面的时候，会先调用父页面的beforeCreate,create,beforeMount三个状态
然后继续调用子组件的beforeCreate,create,beforeMount，如果有多个子组件会按照顺序依次调用，
所有子组件都调用beforeMount钩子后，按照刚刚的顺序依次调用mount钩子，子组件都调用过mount
钩子后，父组件调用mount钩子。


| | 父组件 | 子组件 | 同级子组件 | 同级子组件
| --- | --- | --- | --- | --- |
|**beforeCreate**      |-0      |-2        |-4         |-6
|**create**            |        |          |           |
|**beforeMount**       |-1      |-3        |-5         |-7
|**mount**             |-11     |-8        |-9         |-10 


###更新
那里更新就调用那里的钩子


###销毁
当一个页面关闭时会调用销毁钩子，如果存在子组件，那么会先调用父组件的beforeDestroy,然后调用子组件的
beforeDestroy,destroyed两个钩子事件，如果有同级子组件依次调用beforeDestroy,destroyed钩子事件，所有
子组件执行完成后调用父组件的destroyed钩子事件


| |父组件|子组件|同级子组件|同级子组件
| --- | --- | --- | --- | --- |
|**beforeDestroy**      |-1      |-2        |-4         |-6
|**destroy**            |-8      |-3        |-5         |-7     
