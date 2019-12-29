<template>
  <div id="app">
    <news-box v-if="$router.currentRoute.name !== 'Login'"></news-box>
    <router-view/>
  </div>
</template>

<script>
  import NewsBox from './components/NewsBox/NewsBox'
export default {
  name: 'App',
  components: {
    NewsBox
  },
  created() {
    console.log(this.$router.currentRoute.name)
  }
}
</script>
<style>
  @import "assets/init.css";
</style>
