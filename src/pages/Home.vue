<template>
	<div class="home">
	  <header-bar active="home"></header-bar>
    <msg-service :stick="stick" :message="message"></msg-service>
    <block-item block-name="赛事服务">
      <div class="game-tabs" slot="headCenter">
        <tabs :tab-arr="gameTab"></tabs>
      </div>
      <div class="main-content" slot="blockContent">
        <game-content></game-content>
      </div>
    </block-item>
    <block-item block-name="每日新闻">
      <div class="venue" slot="headCenter">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="i in 4"  :key="i"><img src="../../static/images/training-center.png" alt=""></swiper-slide>
        </swiper>
      </div>
      <div class="daily" slot="blockContent">
        <daily-news :daily-news="dailyNews"></daily-news>
      </div>
    </block-item>
    <div class="wrapper clearfix">
      <div class="inline-box jalousie">
        <div class="inline-box jalousie-per"
             v-for="(item, index) in jalousieList"
             :class="{'hover-show': index == jalousieIndex}"
             @mouseenter.stop="jalousieIndex = index">
          <div class="out-title">{{item.index}}<span>{{item.title}}</span></div>
          <div class="which-one">{{item.index}}</div>
          <div class="jalousie-content">
            <div class="jalousie-title">{{item.title}}</div>
            <div class="jalousie-detail">
              <div class="ellipsis" v-for="list in item.content"><a href="">{{list.title}}</a></div>
            </div>
            <a href="" class="look-more">查看更多></a>
          </div>
        </div>
      </div>
      <div class="inline-box opening">
        <block-item block-name="开闭幕式">
          <div class="game-content" slot="blockContent">
            <div class="news-lists" v-for="item in indexData.Ceremony">{{item.title}}</div>
          </div>
        </block-item>
      </div>
    </div>
    <block-item class="splendid-box" block-name="精彩图片" more-class="none-bg">
      <div class="splendid" slot="blockContent">
        <div class="pic-show" @mouseenter="stopSwiper" @mouseleave="startSwiper">
          <swiper :options="imgSwiperOption" ref="imgSwiper">
            <!-- slides -->
            <swiper-slide v-for="i in 2" :key="i">
              <div class="img-out" v-for="i in 3">
                <div class="pic-show-box">
                  <img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt="">
                </div>
                <div class="img-introduce">“十四冬”火炬传递现场——包头站</div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </block-item>
    <block-item class="splendid-box" block-name="精彩视频" more-class="none-bg">
      <div class="splendid" slot="blockContent">
        <div class="pic-show">
          <swiper :options="imgSwiperOption" ref="videoSwiper">
            <!-- slides -->
            <swiper-slide v-for="i in 2" :key="i">
              <div class="img-out" v-for="i in 3">
                <div class="pic-show-box video-show">
                  <span class="play-icon"></span>
                  <img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt="">
                </div>
                <div class="img-introduce">“十四冬”火炬传递现场——包头站</div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </block-item>
    <div class="hulun-buir">
      <swiper :options="swiperOption" ref="hulunSwiper">
        <!-- slides -->
        <swiper-slide v-for="i in 3"  :key="i"><img src="../../static/images/snow-forest.png" alt=""></swiper-slide>
      </swiper>
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
  import MsgService from '../components/MsgService/MsgService.vue';
  import BlockItem from '../components/BlockItem/BlockItem';
  import GameContent from '../components/GameContent/GameContent';
  import DailyNews from '../components/DailyNews/DailyNews';
  import CityInterview from '../components/CityInterview/CityInterview';
  import Tabs from '../components/Tabs/Tabs';
  import Bscroll from 'better-scroll';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  let jalousie = [
    {index: '一', title: "即时引语"},
    {index: '二', title: "发布会摘要"},
    {index: '三', title: "综合新闻"},
    {index: '四', title: "赛事前瞻"},
    {index: '五', title: "比赛赛况"},
    {index: '六', title: "背景资料"},
  ];
  let gameTab = [
    {key: 'date', text: '赛事日程'},
    {key: 'game-house', text: '赛事场馆'},
    {key: 'games', text: '比赛项目'},
  ];
	export default {
		name: 'Home',
		data() {
			return {
        swiperOption: {
          autoplay: true,
          loop: true
        },
        imgSwiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        jalousieList: jalousie,
        jalousieIndex: 0,
        gameTab: gameTab,
        indexData: {},
        message: [],
        stick: [],
        dailyNews: [],
      }
		},
    components: {
		  HeaderBar,
	    Footer,
      MsgService,
      BlockItem,
      GameContent,
      DailyNews,
      CityInterview,
      swiper,
      swiperSlide,
      Tabs
    },
    created() {
		  this.getIndexData();
    },
    mounted() {
      this.$nextTick(() => {
        this.scrollInit();
      })
    },
    methods: {
		  getIndexData () {
		    this.$http.getIndex()
          .then((res) => {
            this.indexData = res.data;
            this.jalousieList[0]['content'] = res.data.Instant_quotation;
            this.jalousieList[1]['content'] = res.data.Conference_summary;
            this.jalousieList[2]['content'] = res.data.General_News;
            this.jalousieList[3]['content'] = res.data.Tournament_Preview;
            this.jalousieList[4]['content'] = res.data.Match_status;
            this.jalousieList[5]['content'] = res.data.Background_information;
            this.message = res.data.Message;
            this.stick = res.data.stick;
            this.dailyNews = res.data.Daily_News;
            console.log(res.data)
          })
      },
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
      },
      stopSwiper () {
		    this.$refs.imgSwiper.swiper.autoplay.stop();
      },
      startSwiper () {
		    this.$refs.imgSwiper.swiper.autoplay.start();
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/commom";
@import "../assets/home";
</style>
