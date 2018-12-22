<template>
  <div>
    <h2>我是儿子</h2>
    <a>111</a>
    <button @click="testErr">错误呢</button>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      a: Array(-1)
    }
  },
  methods: {
    // 看来要想要调用到错误的钩子函数，需要对vue中的数据进行操作。
    // 其实也是不叫他一起犯错，他怎么知道他犯错了呢
    testErr () {
      let a
      try {
        a = new Array(-1)
      } catch (e) {
        throw e
      }
      alert(a)
    }
  },
  beforeCreate () {
    console.group('------beforeCreate创建前状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  created () {
    console.group('------create创建完毕的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  beforeMount () {
    console.group('------beforeMount挂载开始之前的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  mounted () {
    console.group('------mounted挂载完成的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  beforeUpdate () {
    console.group('------beforeUpdateDOM更新前的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  updated () {
    console.group('------updateDOM更新完成的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  activated () {
    console.group('------activate keep-alive 组件激活时的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  deactivated () {
    console.group('------deactivate keep-alive 组件停用时的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  beforeDestroy () {
    console.group('------beforeDestroy 实例销毁之前的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  destroyed () {
    console.group('------destroy 实例销毁后的状态------子')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  errorCaptured (err, vm, info) {
    console.group('------errorCaptured  错误传播------子')
    console.log('%c%s', 'color:red', 'err     :' + err)
    console.log('%c%s', 'color:red', 'vm      :' + vm)
    console.log('%c%s', 'color:red', 'info    :' + info)
    console.groupEnd()
  }
}
</script>

<style scoped>

</style>
