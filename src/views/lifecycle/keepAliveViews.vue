<template>
  <div>
    <h2>keep-alive-view</h2>
    <div>
      <keep-alive>
        <!--一个keep-alive下面只能有一个组件-->
        <keep-alive-a></keep-alive-a>
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
    KeepAliveA,
    KeepAliveB,
    KeepAliveC
  },
  data () {
    return {
      type: ''
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
