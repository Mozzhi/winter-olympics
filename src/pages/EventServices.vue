<template>
	<div class="home">
	    <header-bar active="eventServices"></header-bar>
      <news-box></news-box>
	     <div class="centerMain wrapper">
	     	<!--面包屑-->
         <breadcrumb :current="tabs[index]['text']"></breadcrumb>
	     	<subpage-title block-name="赛事服务"></subpage-title>
	     	<div class="tabs-box">
          <tabs class="list-tab" :tab-arr="tabs" :current-key="column_id" @switchoverKey="changeId"></tabs>
        </div>
         <across-calendar v-show="column_id == 2" @getDate="changeDate"></across-calendar>
	     	<!--比赛项目-->
	     	<div class="game-project" v-if="column_id == 4">
            <Row>
                <Col span="6"  v-for="(item, index) in list" :key="item.id" class="e-outer">
                  <a :href="`/list_pages/Daily_News_competition/${item.id}?on=100&tw=4&th=${item.id}`">
                  <div class="e-bolck">
                <div  class="divImg"><img :src="`../../static/images/events/${item.id - 22}.png`"/></div>
                <div class="title ellipsis">{{item.name}}</div>
                  </div>
                  </a>
                </Col>
            </Row>
	     	</div>
	     	<!--比赛日程-->
	     	<div class="scheduleEvent" v-if="column_id == 2">
	     		<a :href="`/details?id=${item.id}&on=60&tw=2`" target="_blank" class="s-line" v-for="(item, index) in mainList" :key="item.id">
	     			<img src="../../static/images/events/dw2.png"/>
	     			<div class="time">{{item.published_at1}}</div>
	     			<div class="title ellipsis">{{item.title}}</div>
	     		</a>
          <Page class="m-pages" :total="totalPage - 0" @on-change="changePage" v-show="totalPage > 1"></Page>
          <div class="no-data" v-if="!mainList.length"><img src="../../static/images/nodata.png" alt=""></div>
	     	</div>
	     	<!--赛事场馆-->
	     	<div class="venues contestEvent" v-if="column_id == 3">
	     		<Row>
			        <Col span="8" v-for="(item, index) in venueList" :key="item.id" >
                <a :href="`/list_pages/Daily_News_venue/${item.id}?on=100&tw=3&th=${item.id}`" target="_blank">
			       		<div class="e-bolck">
							<div class="divImg">
                <img :src="`https://info.dah.isport.nm.cn/d/upload/cg/${index + 1}.png`" alt="">
              </div>
							<div class="title ellipsis">{{item.name}}</div>
			       		</div>
                </a>
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
  import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';
  import { gameList, venueList } from "../util/static_data";

  let tabs = [
    { text: "赛事日程", key: 2 },
    { text: "赛事场馆", key: 3 },
    { text: "比赛项目", key: 4 }
  ];
	export default {
		name: 'EventServices',
		data() {
		  let listId = this.$route.params.list_id;
			return {
        tabs: tabs,
        index: listId - 2 || 0,
        column_id: listId || 2,
        selectDay: new Date().getDate(),
        listType: this.$route.params.list_id,
			  list: gameList,
        venueList: venueList,
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
      NewsBox,
      Breadcrumb
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
		    this.index = id - 2;
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
        if(this.column_id == 2){
          params['schedule_at'] = this.selectDay;
        }
        const loading = this.$Message.loading({
          content: '正在加载中...',
          duration: 0
        });
        this.$http.getArticleList(params)
          .then(res => {
            loading();
            this.mainList = res.data.list;
            this.totalPage = res.data.total_page;
          })
      },
      changePage (p) {
		    this.page = p;
		    this.getData();
      },
      changeDate(date) {
		    this.selectDay = date;
		    this.getData()
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/commom";
@import "../assets/EventServices";
</style>
