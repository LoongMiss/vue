<template>
  <div>
    <h2>extends测试</h2>
    <a>{{message}}</a>
    <button @click="alertTitle">点击就送</button>
  </div>
</template>

<script>
import KeepAliveB from '@/views/lifecycle/keepAliveB'
export default {
  name: 'extends',
  data () {
    return {
      text: 'extends'
    }
  },
  extends: KeepAliveB,
  methods: {
    alertTitle () {
      alert(this.text)
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
  }
}
</script>

<style scoped>

</style>
