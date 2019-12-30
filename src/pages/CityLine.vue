<template>
  <div class="city-line">
    <header-bar active="home"></header-bar>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title block-name="城市采访线"></subpage-title>
      <across-calendar></across-calendar>
      <div class="article-list">
        <list-item v-for="i in 10" :no-img="i == 5 ? true : false"></list-item>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  import ListItem from '../components/ListItem/ListItem.vue';
  import AcrossCalendar from '../components/AcrossCalendar/AcrossCalendar.vue';
  export default {
    name: 'EventServices',
    data() {
      return {
      
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      ListItem,
      AcrossCalendar
    },
    created() {
    
    },
    mounted() {
    
    },
    methods: {
    
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";

</style>
