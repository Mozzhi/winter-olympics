<template>
	<div class="home">
	    <header-bar active="home"></header-bar>
	     <div class="centerMain wrapper">
	     	<!--面包屑-->
	     	<div class="Breadcrumb">5555</div>
	     	<subpage-title block-name="赛事服务"></subpage-title>
	     	<div class="samllNav">
	     		<span class="tab-text">赛事日程</span>
	     		<span class="tab-text">赛事场馆</span>
	     		<span class="tab-text">比赛项目</span>
	     	</div>
	     	<!--比赛项目-->
	     	<div class=" dNone">
	     		<Row>
			        <Col span="6" v-for="(item,index) in list" :key="index" >
			       		<div class="e-bolck">
							<div  class="divImg"><img :src="'../../static/images/events/'+item.id+'.png'"/></div>
							<div class="title ellipsis">{{item.name}}</div>
			       		</div>
			        </Col>
			    </Row>
	     	</div>
	     	<!--比赛日程-->
	     	<div class="scheduleEvent dNone">
	     		<div class="s-line" v-for="(item, index) in 5" :key="index">
	     			<img src="../../static/images/events/dw2.png"/>
	     			<div class="time">02-01 08:30</div>
	     			<div class="title ellipsis">第十四届全国冬季运动会钢架雪车项目比赛在挪威利勒哈默尔圆满落第十四届全国冬季运动会钢架雪车项目比赛在挪威利勒哈默尔圆满落</div>
	     		</div>
	     		
	     	</div>
	     	<!--赛事场馆-->
	     	<div class="venues contestEvent">
	     		<Row>
			        <Col span="8" v-for="(item,index) in list" :key="index" >
			       		<div class="e-bolck">
							<div  class="divImg"></div>
							<div class="title ellipsis">{{item.name}}四届全国冬季运动会钢架雪车四届全国冬季运动会钢架雪车</div>
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
