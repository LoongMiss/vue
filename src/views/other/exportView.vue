<template>
  <div>
    <h1>TEST EXPORT/IMPORT</h1>
    <a>{{zizizi}}----</a>
    <button @click="test">测试</button>
    <button @click="fn2">EXPORT</button>
  </div>
</template>

<script>
/** import export3, {message as text, fn, fn2} from '@/views/other/exportJs' **/
import * as A from '@/views/other/exportJs'

export default {
  name: 'exportView',
  data () {
    return {
      zizizi: A.message
      /** cicici: A.export3**/
    }
  },
  methods: {
    fn2: A.fn2,
    fn3: A.fn,
    test () {
      this.fn3()
      alert('2222222222')
    }
  }
}
</script>

<style scoped>

</style>
