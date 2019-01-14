<template>
  <div>
    <h2>APP下的第二层的同层</h2>
    <button @click="alertText">测试传值</button>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'routerSecondA',
  props: [
    'id'
  ],
  data () {
    return {
      sssId: ''
    }
  },
  methods: {
    alertText () {
      alert(this.id)
    }
  }
}
</script>

<style scoped>

</style>
