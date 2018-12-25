#extends
类似Java中的类继承，同样vue中extends也只能实现一个继承
```text
允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件。
```
功能与[mixins](./mixins.md)类似

具体实现也和mixins一样，都是通过mergeOptions实现父子继承的

