<template>
	<div class="home">
	    <header-bar active="eventServices"></header-bar>
      <news-box></news-box>
	     <div class="centerMain wrapper">
	     	<!--面包屑-->
	     	<div class="Breadcrumb">5555</div>
	     	<subpage-title block-name="赛事服务"></subpage-title>
	     	<div class="tabs-box">
          <tabs :tab-arr="tabs" :current-key="column_id" @switchoverKey="changeId"></tabs>
        </div>
         <across-calendar v-show="column_id == 2"></across-calendar>
	     	<!--比赛项目-->
	     	<div class="game-project" v-if="column_id == 4">
	     		<Row>
			        <Col span="6"  v-for="(item, index) in list" :key="item.id" class="e-outer">
			       		<div class="e-bolck">
							<div  class="divImg"><img :src="`../../static/images/events/${item.id}.png`"/></div>
							<div class="title ellipsis">{{item.name}}</div>
			       		</div>
			        </Col>
			    </Row>
	     	</div>
	     	<!--比赛日程-->
	     	<div class="scheduleEvent" v-if="column_id == 2">
	     		<a :href="`/details?id=${item.id}`" target="_blank" class="s-line" v-for="(item, index) in mainList" :key="item.id">
	     			<img src="../../static/images/events/dw2.png"/>
	     			<div class="time">{{item.published_at1}}</div>
	     			<div class="title ellipsis">{{item.title}}</div>
	     		</a>
          <Page class="m-pages" :total="totalPage" @on-change="changePage"></Page>
	     	</div>
	     	<!--赛事场馆-->
	     	<div class="venues contestEvent" v-if="column_id == 3">
	     		<Row>
			        <Col span="8" v-for="(item, index) in mainList" :key="item.id" >
			       		<div class="e-bolck">
							<div class="divImg">
                <img :src="item.thumb" alt="">
              </div>
							<div class="title ellipsis">{{item.title}}</div>
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
  import Tabs from '../components/Tabs/Tabs';
  import AcrossCalendar from '../components/AcrossCalendar/AcrossCalendar';
  import NewsBox from '../components/NewsBox/NewsBox.vue';
  let tabs = [
    { text: "赛事日程", key: 2 },
    { text: "赛事场馆", key: 3 },
    { text: "比赛项目", key: 4 }
  ];
	export default {
		name: 'EventServices',
		data() {
			return {
        tabs: tabs,
        column_id: 2,
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
				
			  ],
        mainList: [],
        page: 1,
        totalPage: 1,
      }
		},
    components: {
	    HeaderBar,
	    Footer,
      SubpageTitle,
      Tabs,
      AcrossCalendar,
      NewsBox
    },
    created() {
      this.getData();
    },
    mounted() {
    
    },
    methods: {
		  changeId(id) {
		    this.column_id = id;
		    this.page = 1;
		    this.getData();
      },
      getData() {
        let params = {
          column_id: this.column_id,
          p: this.page,
        };
        if(this.column_id == 3) {
          params['psize'] = 99
        }
        this.$http.getArticleList(params)
          .then(res => {
            this.mainList = res.data.list;
            this.totalPage = res.data.total_page;
          })
      },
      changePage (p) {
		    this.page = p;
		    console.log(this.page)
		    this.getData();
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/commom";
@import "../assets/EventServices";
</style>
