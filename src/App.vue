<template>
  <div id="app">
    <news-box v-if="$route.path !== '/login'"></news-box>
    <router-view/>
  </div>
</template>

<script>
  import NewsBox from './components/NewsBox/NewsBox'
export default {
  name: 'App',
  components: {
    NewsBox
  }
}
</script>
<style>
  @import "assets/init.css";
</style>
