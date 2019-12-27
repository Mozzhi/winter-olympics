<template>
	<div class="home">
	  <header-bar active="home"></header-bar>
    <news-box></news-box>
    <msg-service></msg-service>
    <block-item block-name="赛事服务" more-class="none-bg">
      <div class="game-tabs" slot="headCenter">
        <div class="game-tab game-date"><span class="tab-text">赛事日程</span></div>
        <div class="game-tab game-house"><span class="tab-text">赛事场馆</span></div>
        <div class="game-tab games"><span class="tab-text">比赛项目</span></div>
      </div>
      <div class="main-content" slot="blockContent">
        <game-content></game-content>
      </div>
    </block-item>
    <block-item block-name="每日新闻" more-class="none-bg">
      <div class="venue" slot="headCenter">
      
      </div>
      <div class="daily" slot="blockContent">
        <daily-news></daily-news>
      </div>
    </block-item>
    <div class="hulun-buir">
      <img src="../../static/images/snow-forest.png" alt="">
    </div>
    <block-item block-name="城市采访线" more-class="none-bg">
      <div class="interview-date-bar" slot="headCenter">
        <span class="inline-box contr-btn"></span>
        <div class="inline-box date-lists" ref="dateScroll">
          <div class="content" ref="dateContent">
            <div class="dates" v-for="i in 9" :class="{'active': i == 1}">2月1{{i}}日</div>
          </div>
        </div>
        <span class="inline-box contr-btn next-btn"></span>
      </div>
      <div class="city-view" slot="blockContent">
        <city-interview></city-interview>
      </div>
    </block-item>
    <Footer></Footer>
	</div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import NewsBox from '../components/NewsBox/NewsBox.vue';
  import MsgService from '../components/MsgService/MsgService.vue';
  import BlockItem from '../components/BlockItem/BlockItem';
  import GameContent from '../components/GameContent/GameContent';
  import DailyNews from '../components/DailyNews/DailyNews';
  import CityInterview from '../components/CityInterview/CityInterview';
  import Bscroll from 'better-scroll';
	export default {
		name: 'Home',
		data() {
			return {
			  
      }
		},
    components: {
	  HeaderBar,
	  Footer,
      NewsBox,
      MsgService,
      BlockItem,
      GameContent,
      DailyNews,
      CityInterview
    },
    created() {
		  this.$http.getTags()
    },
    mounted() {
      this.$nextTick(() => {
        this.scrollInit();
      })
    },
    methods: {
		  scrollInit () {
		    this.$refs.dateContent.style.width = 9 * 100 + 'px'
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.dateScroll, {
              scrollY: false,
              scrollX: true,
              click: true,
              eventPassthrough: "vertical",
              startX: 0
            })
          }else {
            this.scroll.refresh();
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/commom";
@import "../assets/home";
</style>
