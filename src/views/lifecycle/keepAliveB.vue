<template>
  <div>
    <a>It isType B</a>
    <input v-model="message">
    <p>
      <router-link to="/keepAliveA">Go to KeepAliveA</router-link>
      <router-link to="/keepAliveC">Go to KeepAliveC</router-link>
    </p>
  </div>

</template>

<script>
export default {
  name: 'keepAliveB',
  data () {
    return {
      message: 'BBBBB'
    }
  },
  methods: {
    alertTitle () {
      alert(this.message)
    }
  },
  beforeCreate () {
    console.group('------beforeCreate创建前状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  created () {
    console.group('------create创建完毕的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  beforeMount () {
    console.group('------beforeMount挂载开始之前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  mounted () {
    console.group('------mounted挂载完成的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  beforeUpdate () {
    console.group('------beforeUpdateDOM更新前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  updated () {
    console.group('------updateDOM更新完成的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log(this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },
  activated () {
    console.group('------activate keep-alive 组件激活时的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  deactivated () {
    console.group('------deactivate keep-alive 组件停用时的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  }
}
</script>

<style scoped>

</style>
