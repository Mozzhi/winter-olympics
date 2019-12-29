<template>
	<div class="home">
	    <header-bar active="home"></header-bar>
	     <div class="centerMain wrapper">
	     	<!--面包屑-->
	     	<div class="Breadcrumb">5555</div>
	     	<subpage-title block-name="赛事服务"></subpage-title>
	     </div>
	    <Footer></Footer>
	</div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
	export default {
		name: 'EventServices',
		data() {
			return {
			  
      }
		},
    components: {
	    HeaderBar,
	    Footer,
      SubpageTitle
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
