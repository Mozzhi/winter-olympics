<template>
	<div class="home">
	  <header-bar active="home"></header-bar>
    <news-box></news-box>
    <a href="/EventServices/4" class="competition">比赛项目> </a>
    <msg-service :stick="stick" :message="message"></msg-service>
    <block-item block-name="赛事服务" link="/EventServices">
      <div class="game-tabs" slot="headCenter">
        <tabs :tab-arr="gameTab" :current-key="currentKey" @switchoverKey="changeKey" class="home-page"></tabs>
      </div>
      <div class="main-content" slot="blockContent">
        <game-content :project-key="currentKey" :games-data="indexData" :day="interviewDateChoose"></game-content>
      </div>
    </block-item>
    <block-item block-name="每日新闻" link="/list_pages/Daily_News">
      <div class="venue" slot="headCenter">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../../static/images/training-center.png" alt=""></swiper-slide>
          <swiper-slide><img src="../../static/images/changg.png" alt=""></swiper-slide>
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
             @mouseenter.stop="jalousieShow(index)">
          <div class="out-title">{{item.index}}<span>{{item.title}}</span></div>
          <div class="which-one">{{item.index}}</div>
          <div class="jalousie-content">
            <div class="jalousie-title">{{item.title}}</div>
            <div class="jalousie-detail">
              <div class="ellipsis" v-for="list in item.content"><a :href="`/details?id=${list.id}&on=0&tw=${item.id}`" target="_blank">{{list.title}}</a></div>
              <div class="no-data" v-if="!item.content.length"><img src="../../static/images/nodata.png" alt=""></div>
            </div>
            <a :href="`/list_pages/msg_service/${item.id}`" class="look-more">查看更多></a>
          </div>
        </div>
      </div>
      <div class="inline-box opening">
        <block-item block-name="开闭幕式" link="/list_pages/Ceremony">
          <div class="game-content open-short" slot="blockContent">
            <a :href="`/details?id=${item.id}&on=0&tw=8`" target="_blank" class="news-lists" v-for="item in indexData.Ceremony">{{item.title}}</a>
          </div>
        </block-item>
      </div>
    </div>
    <block-item class="splendid-box" block-name="精彩图片" more-class="none-bg" link="/splendid_pages/splendid_img">
      <div class="splendid" slot="blockContent">
        <div class="pic-show">
          <Carousel
            v-model="imgIndex"
            :autoplay="true"
            :autoplay-speed="3000"
            dots="inside"
            :radius-dot="false"
            trigger="hover"
            arrow="never">
            <CarouselItem v-for="item in imgNumber"  :key="item">
              <a :href="`/details?id=${img.id}&on=0&tw=5`" target="_blank" class="img-out" v-for="img in showList(item, Wonderful_picture)">
                <div class="pic-show-box">
                  <img :src="img.thumb" alt="">
                </div>
                <div class="img-introduce">{{img.title}}</div>
              </a>
            </CarouselItem>
          </Carousel>
        </div>
        <div class="no-data a-no-data" v-if="!Wonderful_video.length"><img src="../../static/images/nodata.png" alt=""></div>
      </div>
    </block-item>
    <block-item class="splendid-box" block-name="精彩视频" more-class="none-bg" link="/splendid_pages/splendid_video">
      <div class="splendid" slot="blockContent">
        <div class="pic-show">
          <Carousel
            v-model="vadioIndex"
            :autoplay="true"
            :autoplay-speed="3000"
            dots="inside"
            :radius-dot="false"
            trigger="hover"
            arrow="never">
            <CarouselItem v-for="item in videoNumber"  :key="item">
              <a :href="`/details?id=${img.id}&on=0&tw=6`" target="_blank" class="img-out" v-for="img in showList(item, Wonderful_video)">
                <div class="pic-show-box video-show">
                  <span class="play-icon"></span>
                  <img :src="img.thumb" alt="">
                </div>
                <div class="img-introduce">{{img.title}}</div>
              </a>
            </CarouselItem>
          </Carousel>
        </div>
        <div class="no-data a-no-data" v-if="!Wonderful_video.length"><img src="../../static/images/nodata.png" alt=""></div>
      </div>
    </block-item>
    <a href="/hulun_buir" class="hulun-buir">
      <swiper :options="hulunSwiperOption" ref="hulunSwiper">
        <!-- slides -->
        <swiper-slide><img src="../../static/images/snow-forest.png" alt=""></swiper-slide>
        <swiper-slide><img src="../../static/images/forest2.png" alt=""></swiper-slide>
        <swiper-slide><img src="../../static/images/forest3.png" alt=""></swiper-slide>
      </swiper>
      <img src="../../static/images/Hulun.png" class="hunlun-buir-text" />
    </a>
    {{app.interview.length}}
    <block-item block-name="城市采访线" more-class="none-bg" link="/cityline/city_visiting?on=0&tw=12">
      <div class="interview-date-bar" slot="headCenter">
        <span class="inline-box contr-btn" @click="changeDate(-1)" v-show="app.interview.length > 5"></span>
        <div class="inline-box date-lists" ref="dateScroll">
          <div class="content" :style="{left: -dateTo*100/192 + 'rem', width: interviewLength*100/192 + 'rem'}">
            <div class="dates" v-for="(date, index) in app.interview" :date="`2020-${date.month}-${date.date}`" :class="{'active': `2020-${addZero(date.month)}-${addZero(date.date)}` == dateChoose}" @click="chooseDate(`2020-${addZero(date.month)}-${addZero(date.date)}`, index)">{{date.month}}月{{date.date}}日</div>
          </div>
        </div>
        <span class="inline-box contr-btn next-btn" @click="changeDate(1)" v-show="app.interview.length > 5"></span>
      </div>
      <div class="city-view" slot="blockContent">
        <city-interview :city-data="City_Visiting_Line"></city-interview>
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
  import NewsBox from '../components/NewsBox/NewsBox';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import { setDay } from "../libs/auth";
  import { dateInitLeft, addZero } from "../util";

  let jalousie = [
    {content: [], index: '一', title: "媒体通告", id: '16'},
    {content: [], index: '二', title: "即时引语", id: '13'},
    {content: [], index: '三', title: "发布会摘要", id: '14'},
    {content: [], index: '四', title: "综合新闻", id: '15'},
    {content: [], index: '五', title: "赛事前瞻", id: '17'},
    {content: [], index: '六', title: "背景资料", id: '18'},
  ];
  let gameTab = [
    {key: 'date', text: '赛事日程'},
    {key: 'game-house', text: '赛事场馆'},
    {key: 'games', text: '比赛项目'},
  ];
let today = new Date().getDate();
	export default {
		name: 'Home',
    inject: ['app'],
		data() {
			return {
        swiperOption:{
          autoplay: true,
          loop: true,
          clickable: true
        },
        hulunSwiperOption: {
          effect : 'fade',
          autoplay: true,
          loop: true,
          clickable: true
        },
        imgSwiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        imgIndex: 0,
        vadioIndex: 0,
        dateChoose:today,
        interviewDateChoose: today,
        jalousieList: jalousie,
        jalousieIndex: 0,
        gameTab: gameTab,
        indexData: {
          Competition_items: [],
          Tournament_venues: [],
          Competition: [],
        },
        message: [],
        stick: [],
        dailyNews: [],
        Wonderful_picture: [],
        Wonderful_video: [],
        City_Visiting_Line: [],
        currentKey: 'date',
        dateTo: today - 1,
        timer: null,
        interviewLength: this.app.interview.length
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
      Tabs,
      NewsBox
    },
    computed: {
		  imgNumber () {
		    return Math.ceil(this.Wonderful_picture.length / 3);
      },
      videoNumber () {
		    return Math.ceil(this.Wonderful_video.length / 3);
      }
    },
    created() {
		  this.getIndexData();
    },
    mounted() {
		  console.log(this.app.interview)
    },
    methods: {
      addZero,
		  getIndexData () {
        const loading = this.$Message.loading({
          content: '正在加载中...',
          duration: 0
        });
        this.$http.getIndex()
          .then((res) => {
            loading();
            this.setData(res.data);
          })
      },
      getCityLineList(date) {
		    let params = {
          column_id: 12,
          schedule_at: date,
          p: 1,
          psize: 4
        };
		    const msg = this.$Message.loading({
          content: '正在加载中...',
          duration: 0
        });
        this.$http.getArticleList(params)
          .then(res => {
            msg();
            this.City_Visiting_Line = res.data.list;
          })
      },
      setData(data) {
		    let cDateTo = dateInitLeft(this.app.interview, data.day);
        this.indexData = data;
        this.jalousieList[0]['content'] = data.Match_status;
        this.jalousieList[1]['content'] = data.Instant_quotation;
        this.jalousieList[2]['content'] = data.Conference_summary;
        this.jalousieList[3]['content'] = data.General_News;
        this.jalousieList[4]['content'] = data.Tournament_Preview;
        this.jalousieList[5]['content'] = data.Background_information;
        this.message = data.Message;
        this.stick = data.stick;
        this.dailyNews = data.Daily_News;
        this.Wonderful_picture = data.Wonderful_picture;
        this.Wonderful_video = data.Wonderful_video;
        this.City_Visiting_Line = data.City_Visiting_Line;
        this.Competition = data.Competition;
        this.dateChoose = data.day;
        this.interviewDateChoose = data.day;
        this.dateTo = cDateTo > (this.interviewLength - 5) ? (this.interviewLength - 5) : cDateTo;
        setDay(data.day)
      },
      showList (i, data){
        let start = 3*i - 3,
          end = 3*i;
        return data.slice(start, end);
      },
      changeKey (key) {
		    this.currentKey = key;
      },
      changeDate(dir) {
		    if(dir < 0 && this.dateTo > 0) {
		      this.dateTo -= 5;
          this.dateTo = this.dateTo < 0 ? 0  : this.dateTo;
        }else if(dir > 0 && this.dateTo < this.interviewLength - 5){
		      this.dateTo += 5;
		      this.dateTo = this.dateTo > (this.interviewLength - 6) ? (this.interviewLength - 5)  : this.dateTo;
        }
		    console.log(dir, this.dateTo)
      },
      chooseDate(date, index) {
		    this.dateTo = index > (this.interviewLength - 5) ? (this.interviewLength - 5) : (index  < 3 ? 0 : index - 2);
		    this.dateChoose = date;
		    this.getCityLineList(date);
      },
      jalousieShow(index) {
		    clearTimeout(this.timer);
		    this.timer = setTimeout(() => {
		      this.jalousieIndex = index;
        }, 300);
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/commom";
@import "../assets/home";
</style>
