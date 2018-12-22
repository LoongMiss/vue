<template>
  <div>
    <h2>keep-alive-view</h2>
    <input>
    <div v-show="isType == 'a'">
      <keep-alive>
        <component :is="keepAlive1"></component>
      </keep-alive>
    </div>
    <div v-show="isType == 'b'">
      <keep-alive>
        <component :is="keepAlive2"></component>
      </keep-alive>
    </div>
    <div v-show="isType == 'c'">
      <keep-alive>
        <component :is="keepAlive3"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import KeepAliveA from './keepAliveA'
import KeepAliveB from './keepAliveB'
import KeepAliveC from './keepAliveC'
export default {
  name: 'keepAliveView',
  components: {
    'keep-alive-a': KeepAliveA,
    'keep-alive-b': KeepAliveB,
    'keep-alive-c': KeepAliveC
  },
  props: {
    isType: ''
  },
  data () {
    return {
      type: this.isType.isType,
      keepAlive1: KeepAliveA,
      keepAlive2: KeepAliveB,
      keepAlive3: KeepAliveC
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
