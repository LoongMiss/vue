export default {
  data () {
    return {
      message: 'mixins',
      text: 'mixins'
    }
  },
  methods: {
    alertText () {
      alert('111111111')
    }
  },

  beforeCreate () {
    console.group('------beforeCreate创建前状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  created () {
    console.group('------create创建完毕的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  beforeMount () {
    console.group('------beforeMount挂载开始之前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  mounted () {
    console.group('------mounted挂载完成的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  beforeUpdate () {
    console.group('------beforeUpdateDOM更新前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  updated () {
    console.group('------updateDOM更新完成的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  activated () {
    console.group('------activate keep-alive 组件激活时的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  deactivated () {
    console.group('------deactivate keep-alive 组件停用时的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  beforeDestroy () {
    console.group('------beforeDestroy 实例销毁之前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
    console.groupEnd()
  },

  destroyed () {
    console.group('------destroy 实例销毁后的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.text)
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
