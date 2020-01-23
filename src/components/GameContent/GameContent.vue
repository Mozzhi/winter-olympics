<template>
  <div class="game-tabs">
    <div class="game-content game-calendar" v-show="projectKey == 'date'">
      <div class="inline-box calendar-box">
        <div class="feb"><span>2020</span>年<span>2</span>月</div>
        <table class="table">
          <thead>
          <tr>
            <th v-for="week in weekday">{{week}}</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5">
              <td v-for="(date, index) in febArr" v-if="index <= 7*i && index > 7*(i-1)" :class="{'active': choosed == date}" @click="chooseDate(date)"><div class="inner-date" v-if="date">{{date}}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="inline-box game-lists">
        <a :href="`/details?id=${item.id}&on=0&tw=2`" target="_blank" v-for="item in Competition"  v-if="Competition"><div class="game-list clearfix">
          <span class="game-title"><img class="game-icon" src="../../../static/images/game-icon.png" alt="">{{item.title}}</span>
          <span class="date">02-18 08:30</span>
        </div></a>
        <img src="../../../static/images/nodata.png" class="Nodata" v-if="Competition==''"/>
      </div>
    </div>
    <!-- <div class="game-content house" v-show="projectKey == 'game-house'">
      <Carousel
        v-model="houseIndex"
        :autoplay="true"
        :autoplay-speed="3000"
        dots="inside"
        :radius-dot="false"
        trigger="hover"
        v-if="projectKey == 'game-house'"
        arrow="never">
        <CarouselItem v-for="item in 2"  :key="item">
          <a :href="`/details?id=${house.id}on=0&tw=3`" target="_blank" class="game-house" v-for="house in showList(item, gamesData.Tournament_venues, 3)">
            <div class="house-img"><img :src="house.thumb" alt=""></div>
            <div class="house-name">{{house.title}}</div>
          </a>
        </CarouselItem>
      </Carousel>
    </div> -->
    <div class="game-content house project venue" v-show="projectKey == 'game-house'">
      <Carousel
        v-model="houseIndex"
        :autoplay="true"
        :autoplay-speed="3000"
        dots="inside"
        :radius-dot="false"
        trigger="hover"
        v-if="projectKey == 'game-house'"
        arrow="never">
        <CarouselItem v-for="item in houseNum"  :key="item">
          <a :href="`/list_pages/Daily_News_venue/${house.id}?on=100&tw=3&th=${house.id}`"
             target="_blank" class="game-house"
             v-for="(house, index) in showList(item, venueList, 4)">
            <div class="house-img"><img :src="`https://info.dah.isport.nm.cn/d/upload/cg/${4*(item-1) + index + 1}.png`" alt=""></div>
            <div class="house-name">{{house.name}}</div>
          </a>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="game-content house project" v-show="projectKey == 'games'">
      <Carousel
        v-model="gamesIndex"
        :autoplay="true"
        :autoplay-speed="3000"
        dots="inside"
        :radius-dot="false"
        v-if="projectKey == 'games'"
        trigger="hover"
        arrow="never">
        <CarouselItem v-for="item in 2"  :key="item">
          <a :href="`/details?id=${house.id}on=0&tw=4`" target="_blank" class="game-house" v-for="house in showList(item, gamesData.Competition_items, 4)">
            <div class="house-img"><img :src="house.thumb" alt=""></div>
            <div class="house-name">{{house.title}}</div>
          </a>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>
<script>
  import { gamesProject, venueList } from "../../util/static_data";

  let arr = [,,,,,,];
  for(let i = 1; i < 30; i++) {
    arr.push(i);
  }

	export default {
		name: 'GameContent',
    props: {
    	day:"",
		  projectKey: {
		    type: String,
        required: true
     },
      gamesData: {
		    type: Object,
        required: true
      }
    },
    data() {
      return {
        febArr: arr,
        weekday: ['一','二','三','四','五','六','日'],
        choosed: this.day,
        value2: 0,
        houseIndex: 0,
        gamesIndex: 0,
        swiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        gamesProject: gamesProject,
        Competition: [],
        venueList: venueList
      };
    },
    computed: {
		  projectNum() {
		    return Math.ceil(this.gamesData.Competition_items.length/4);
      },
		  houseNum() {
		    return Math.ceil(this.venueList.length/4);
      },
    },
    created() {
		  this.Competition = this.gamesData.Competition;
		  this.choosed = this.gamesData.day;
    },
    watch: {
		  day(newVal,oldVal){
        this.choosed = newVal;
    	}
    },
    mounted() {
		  
    },
    methods: {
      showList (i, data, length){
        let start = length*i - length,
          end = length*i;
        return data.slice(start, end);
      },
      getList(date = today) {
        let params = {
          column_id: 2,
          schedule_at: date,
          p: 1,
          psize: 5
        };
        this.$Message.destroy()
        const msg = this.$Message.loading({
          content: '正在加载中...',
          duration: 0
        });
        this.$http.getArticleList(params)
          .then(res => {
            msg();
            this.Competition = res.data.list;
          })
      },
      chooseDate(date) {
        if(date){
          this.choosed = date;
          this.getList(date);
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
@import './gamecontent';
</style>
