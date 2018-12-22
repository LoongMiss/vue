#vuex

##vuex是什么
[Vuex](https://vuex.vuejs.org/zh/) 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
##项目结构
Vuex规定了一些需要遵守的规则

````text
1.应用层级的状态应该集中到单个store对象中

2.提交mutation是更改状态的唯一方法，并且这个过程是同步的，不允许出现异步事件

3.异步逻辑都应该封装在action里面
````

项目结构示例：
````sh
|— index.html
|— main.js
|— api
|    ﹂ ... #抽取出API请求
|— components
|    |— App.vue
|    ﹂ ...
﹂  store
    |— index.js         #组装模块并导出store的地方
    |— action.js        #根级别的 action
    |— mutations.js     #根级别的 mutations
     ﹂ modules
        |— cart.js      #购物车模块
         ﹂ products.js  #产品模块
````
##核心概念
简单说一下Vuex的[核心概念](https://vuex.vuejs.org/zh/guide/state.html)，
Vuex中有State,Getter,Mutation,Action,Module这5个概念

其中State就是存储整个应用层级的状态信息，也就是作为唯一数据源的存在

Getter就是对状态信息进行处理，派生出新的状态

Mutation是Vuex官方指定修改状态信息的渠道，每个mutation都有一个字符串的事件类型(type)和一个回调函数(handler)
但是回调函数中不能包含`异步事件`
````js
const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state, payload){
            state.count += payload.amount
        }
    }
})
````
想要调用一个mutation,需要以相应的type调用store.commit方法,一下展示两种提交方式
````js
this.$store.commit('increment',{amount: 11})

this.$store.commit({type:'increment', amount: 11})
````







以车码头中的例子store/modules/permissions.js,也就是权限控制模块的代码

App.vue
````html
<template>
  <div id="app">
    <router-view class="app-container"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    mounted () {
      if (this.$route.fullPath !== '/login') 
          /**这里调用的是permissions.js中action下的updatePermissions**/
          this.updatePermissions()
    },
    methods: {
      /**这里的三个点是对象展开运算符**/
      ...mapActions([
        'updatePermissions'
      ])
    }
  }
</script>
````


store/index.js
````js
import Vuex from 'vuex'
import Vue from 'vue'
import permissions from './modules/permissions'
import treeCollection from './modules/treeCollection'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tree: treeCollection,
    permissions
  },
  strict: debug,
  plugins: []
})
````
store/modules/permissions.js
````js
import {permission} from '@/service/api'

const state = {
  permissions: null
}

const getters = {
  permissions: state => state.permissions
}

const actions = {
  updatePermissions ({ commit }, sys) {
    permission.getPermissionForButton(sys)
      .then((data) => {
        commit('UPDATEPERMISSION', data)
      })
  }
}

const mutations = {
  'UPDATEPERMISSION' (state, permissions) {
    state.permissions = permissions
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
````