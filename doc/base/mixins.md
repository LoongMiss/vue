#mixins
这个mixins就像Java中的接口
```text
mixins 选项接受一个混入对象的数组。这些混入实例对象可以像正常的实例对象一样包含选项，
他们将在 Vue.extend() 里最终选择使用相同的选项合并逻辑合并。
举例：如果你的混入包含一个钩子而创建组件本身也有一个，两个函数将被调用。
Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
```
mixins选项的*作用*：
```text
1.做html与js的分离
2.提取公共属性，方法等
```
例如[mixinsView.vue](../../src/views/base/mixinsView.vue)

值得一说的是

1.mixins选项中指向的文件中如果包含生命周期的钩子函数，会与本文件中的钩子函数进行“合并”，即当要执行
钩子函数时，率先执行mixins中设置的钩子函数，再执行当前文件中的钩子函数(这里与生命周期有些关系)

2.mixins选择中如果包含data,methods...，同样与当前文件内容进行“合并”，合并方式为：如果当前文件有，即
以当前文件为主，没有则使用mixins中的

```js
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}
```


