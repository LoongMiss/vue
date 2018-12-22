<template>
  <div>
    <h2>Vue生命周期</h2>
    <h3 ref="a">111{{aaa}}</h3>
    <button @click='buttonClick'>点击</button>
    <a v-if='visible'>别点啦!</a>
    <input ref="message" v-model="message">
    <keep-alive-view :is-type="message"></keep-alive-view>
  </div>
</template>

<script>
import KeepAliveView from '@/views/lifecycle/keepAliveView'

export default {
  name: 'lifecycle',
  components: {
    'keep-alive-view': KeepAliveView
  },
  data () {
    return {
      lifecycle: 2,
      visible: false,
      message: '',
      aaa: 123,
      keep: KeepAliveView
    }
  },
  mixins: {
    methods: {
      qqq () {
        alert(1)
      }
    }
  },
  methods: {
    test () {
      alert(1)
    },
    buttonClick () {
      /* this.visible = !this.visible
      this.lifecycle = 3 */
      this.$refs['a'].innerText = 111
      this.$router.push('/keepAliveA')
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
  },

  beforeDestroy () {
    console.group('------beforeDestroy 实例销毁之前的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
    console.groupEnd()
  },

  destroyed () {
    console.group('------destroy 实例销毁后的状态------')
    console.log('%c%s', 'color:red', 'el     :' + this.$el.innerHTML)
    console.log('%c%s', 'color:red', 'data   :' + this.$data)
    console.log('%c%s', 'color:red', 'message:' + this.message)
  },

  errorCaptured (err, vm, info) {
    console.group('------errorCaptur  错误传播------')
    console.log('%c%s', 'color:red', 'err     :' + err)
    console.log('%c%s', 'color:red', 'vm      :' + vm)
    console.log('%c%s', 'color:red', 'info    :' + info)
  }
}
</script>

<style scoped>

</style>
