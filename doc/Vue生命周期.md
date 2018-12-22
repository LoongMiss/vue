#Vue生命周期
先引用一下官方给出Vue生命周期的图片


![Vue生命周期图](../images/vue生命周期图.png)

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
````
                父组件   子组件   同级子组件  同级子组件

beforeCreate      |        |-2        |-4         |-6
create            |        |          |           |
beforeMount       |-1      |-3        |-5         |-7
mount             |-11     |-8        |-9         |-10 
````

###更新
那里更新就调用那里的钩子


###销毁
当一个页面关闭时会调用销毁钩子，如果存在子组件，那么会先调用父组件的beforeDestroy,然后调用子组件的
beforeDestroy,destroyed两个钩子事件，如果有同级子组件依次调用beforeDestroy,destroyed钩子事件，所有
子组件执行完成后调用父组件的destroyed钩子事件

````
                父组件   子组件   同级子组件  同级子组件

beforeDestroy      |-1      |-2        |-4         |-6
destroy            |-8      |-3        |-5         |-7
````
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                

beforeUpdate      |-1            
updated           |-4               
beforeDestroy              |-2     
destroyed                  |-3     
````
