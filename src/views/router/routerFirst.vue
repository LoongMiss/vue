<template>
  <div>
    <h2>APP下的第一层</h2>
    <button @click="alertText">测试传值</button>
    <router-view></router-view>
    <router-view name="a"></router-view>
  </div>
</template>

<script>
export default {
  name: 'routerFirst',
  methods: {
    alertText () {
      alert(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
