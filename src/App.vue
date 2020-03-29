<template>
  <div id="app" v-cloak>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      competition: [],
      interview: []
    }
  },
  methods: {
    getDateData () {
      this.$http.getDateData()
        .then((res) => {
          this.competition = res.data.competition;
          this.interview = res.data.interview;
        })
    }
  },
  created () {
    this.getDateData();
  }
}
</script>
<style>
  @import "assets/init.css";
</style>
