<template>
	<div class="home">
	    <header-bar active="home"></header-bar>
	     <div class="centerMain wrapper">
	     	<!--面包屑-->
	     	<div class="Breadcrumb">5555</div>
	     	<subpage-title block-name="赛事服务"></subpage-title>
	     	<div class="samll-nav">ssss</div>
	     	<!--比赛项目-->
	     	<div class="contestEvent">
	     		<Row>
			        <Col span="6" v-for="(item,index) in list" :key="index" >
			       		<div class="e-bolck">
							<div  class="divImg"><img :src="'../../static/images/events/'+item.id+'.png'"/></div>
							<div class="title bounceInUp">{{item.name}}</div>
			       		</div>
			        </Col>
			    </Row>
	     	</div>
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
			  list:[
				{
				 name:"雪橇",
				 id:"1"
				},
				{
				 name:"钢架雪车",
				 id:"2"
				},
				{
				 name:"雪车",
				 id:"3"
				},
				{
				 name:"自由式滑雪",
				 id:"4"
				},
				{
				 name:"北欧两项",
				 id:"5"
				},
				{
				 name:"跳台滑雪",
				 id:"6"
				},
				{
				 name:"越野滑雪",
				 id:"7"
				},
				{
				 name:"短道速滑",
				 id:"8"
				},
				{
				 name:"速度滑冰",
				 id:"9"
				},
				{
				 name:"单板滑雪",
				 id:"10"
				},
				{
				 name:"高山滑雪",
				 id:"11"
				},
				{
				 name:"冬季两项",
				 id:"12"
				},
				{
				 name:"冰球",
				 id:"13"
				},
				{
				 name:"冰壶",
				 id:"14"
				},
				{
				 name:"花样滑冰",
				 id:"15"
				},
				
			  ]
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
@import "../assets/EventServices";
</style>
