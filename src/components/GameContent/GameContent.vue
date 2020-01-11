<template>
  <div class="game-tabs">
    <div class="game-content" v-show="projectKey == 'date'">
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
              <td v-for="(date, index) in febArr" v-if="index <= 7*i && index > 7*(i-1)" :class="{'active': choosed > 5 && choosed == date}"><div class="inner-date" v-if="date">{{date}}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="inline-box game-lists">
        <a href="" v-for="item in gamesData.Competition"><div class="game-list clearfix">
          <span class="game-title"><img class="game-icon" src="../../../static/images/game-icon.png" alt="">{{item.title}}</span>
          <span class="date">02-18 08:30</span>
        </div></a>
      </div>
    </div>
    <div class="game-content house" v-show="projectKey == 'game-house'">
      <swiper :options="swiperOption" ref="houseSwiper">
        <!-- slides -->
        <swiper-slide v-for="item in houseNum" :key="item">
          <div class="game-house" v-for="house in showList(item, gamesData.Tournament_venues, 3)">
            <div class="house-img" v-bg="house.thumb"></div>
            <div class="house-name">{{house.title}}</div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="game-content house project" v-show="projectKey == 'games'">
      <swiper :options="swiperOption" ref="gamesSwiper">
        <!-- slides -->
        <swiper-slide v-for="item in projectNum" :key="item">
          <div class="game-house" v-for="project in showList(item, gamesData.Competition_items, 4)">
            <div class="house-img" v-bg="project.thumb"></div>
            <div class="house-name">{{project.title}}</div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>

</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import { gamesProject } from "../../util/static_data";

  let arr = [,,,,,,];
  for(let i = 1; i < 30; i++) {
    arr.push(i);
  }
  console.log(arr)
	export default {
		name: 'GameContent',
    props: {
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
        choosed: 18,
        value2: 0,
        swiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        gamesProject: gamesProject
      };
    },
    components: {
      swiper,
      swiperSlide,
    },
    computed: {
		  projectNum() {
		    return Math.ceil(this.gamesData.Competition_items.length/4);
      },
		  houseNum() {
		    return Math.ceil(this.gamesData.Tournament_venues.length/3);
      },
    },
    methods: {
      showList (i, data, length){
        let start = length*i - length,
          end = length*i;
        return data.slice(start, end);
      },
    }
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
@import './gamecontent';
</style>
