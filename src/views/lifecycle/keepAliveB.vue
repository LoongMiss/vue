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
