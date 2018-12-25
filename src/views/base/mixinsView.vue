<template>
    <div>
      <h2>mixins测试</h2>
      <a>{{message}}</a>
      <button @click="alertText">测试</button>
    </div>
</template>

<script>
import MixinsJs from '../../mixins/mixinsJs'
export default {
  name: 'mixinsView',
  mixins: [MixinsJs],
  data () {
    return {
      message: 'view'
    }
  },
  methods: {
    alertText () {
      alert(this.text + '-----' + this.message)
    }
  },
  beforeCreate () {
    console.group('------beforeCreate创建前状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  created () {
    console.group('------create创建完毕的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  beforeMount () {
    console.group('------beforeMount挂载开始之前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  mounted () {
    console.group('------mounted挂载完成的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  beforeUpdate () {
    console.group('------beforeUpdateDOM更新前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  updated () {
    console.group('------updateDOM更新完成的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  activated () {
    console.group('------activate keep-alive 组件激活时的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  deactivated () {
    console.group('------deactivate keep-alive 组件停用时的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  beforeDestroy () {
    console.group('------beforeDestroy 实例销毁之前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  destroyed () {
    console.group('------destroy 实例销毁后的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.message)
    console.groupEnd()
  },

  errorCaptured (err, vm, info) {
    console.group('------errorCaptur  错误传播------')
    console.log('%c%s', 'color:red', 'err     :' + err)
    console.log('%c%s', 'color:red', 'vm      :' + vm)
    console.log('%c%s', 'color:red', 'info    :' + info)
    console.groupEnd()
  }
}
</script>

<style scoped>

</style>
