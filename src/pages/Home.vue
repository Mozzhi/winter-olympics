<template>
	<div class="home">
	  <header-bar active="home"></header-bar>
    <news-box></news-box>
    <msg-service></msg-service>
<<<<<<< HEAD
    <block-item block-name="赛事服务">
=======
    <block-item block-name="赛事服务" more-class="none-bg">
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
      <div class="game-tabs" slot="headCenter">
        <div class="game-tab game-date"><span class="tab-text">赛事日程</span></div>
        <div class="game-tab game-house"><span class="tab-text">赛事场馆</span></div>
        <div class="game-tab games"><span class="tab-text">比赛项目</span></div>
      </div>
      <div class="main-content" slot="blockContent">
        <game-content></game-content>
      </div>
    </block-item>
<<<<<<< HEAD
    <block-item block-name="每日新闻">
      <div class="venue" slot="headCenter">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="i in 4"  :key="i"><img src="../../static/images/training-center.png" alt=""></swiper-slide>
        </swiper>
=======
    <block-item block-name="每日新闻" more-class="none-bg">
      <div class="venue" slot="headCenter">
      
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
      </div>
      <div class="daily" slot="blockContent">
        <daily-news></daily-news>
      </div>
    </block-item>
<<<<<<< HEAD
    <div class="wrapper clearfix">
      <div class="inline-box jalousie">
        <div class="inline-box jalousie-per"
             v-for="(item, index) in jalousieList"
             :class="{'hover-show': index == jalousieIndex}" @mouseenter.stop="jalousieIndex = index">
          <div class="out-title">{{item.index}}<span>{{item.title}}</span></div>
          <div class="which-one">{{item.index}}</div>
          <div class="jalousie-content">
            <div class="jalousie-title">即时引语</div>
            <div class="jalousie-detail">
              <div class="ellipsis" v-for="i in 5"><a href="">国际雪联滑轮世界杯圆满收官 中国选手王强夺冠...</a></div>
            </div>
            <a href="" class="look-more">查看更多></a>
          </div>
        </div>
      </div>
      <div class="inline-box opening">
        <block-item block-name="开闭幕式">
          <div class="game-content" slot="blockContent">
            <div class="news-lists" v-for="i in 5">体育总局竞体司关于调整第十四届全国冬季运动会冰...</div>
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
    <block-item block-name="城市采访线">
=======
    <div class="hulun-buir">
      <img src="../../static/images/snow-forest.png" alt="">
    </div>
    <block-item block-name="城市采访线" more-class="none-bg">
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
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
<<<<<<< HEAD
=======
    <Footer></Footer>
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
	</div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
<<<<<<< HEAD
=======
  import Footer from '../components/Footer/Footer.vue';
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
  import NewsBox from '../components/NewsBox/NewsBox.vue';
  import MsgService from '../components/MsgService/MsgService.vue';
  import BlockItem from '../components/BlockItem/BlockItem';
  import GameContent from '../components/GameContent/GameContent';
  import DailyNews from '../components/DailyNews/DailyNews';
  import CityInterview from '../components/CityInterview/CityInterview';
  import Bscroll from 'better-scroll';
<<<<<<< HEAD
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  let jalousie = [
    {index: '一', title: "即时引语"},
    {index: '二', title: "发布会摘要"},
    {index: '三', title: "综合新闻"},
    {index: '四', title: "赛事前瞻"},
    {index: '五', title: "比赛赛况"},
    {index: '六', title: "背景资料"},
  ]
=======
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
	export default {
		name: 'Home',
		data() {
			return {
<<<<<<< HEAD
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
      }
		},
    components: {
		  HeaderBar,
=======
			  
      }
		},
    components: {
	  HeaderBar,
	  Footer,
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
      NewsBox,
      MsgService,
      BlockItem,
      GameContent,
      DailyNews,
<<<<<<< HEAD
      CityInterview,
      swiper,
      swiperSlide
=======
      CityInterview
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
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
<<<<<<< HEAD
      },
      stopSwiper () {
		    this.$refs.imgSwiper.swiper.autoplay.stop();
      },
      startSwiper () {
		    this.$refs.imgSwiper.swiper.autoplay.start();
=======
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/commom";
@import "../assets/home";
</style>
