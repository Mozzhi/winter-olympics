<template>
	<div class="msg-service wrapper clearfix">
    <div class="meet-in-neimoongu"></div>
	  <div class="inline-box msg-left">
      <div class="new-banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in banner"  :key="item.id">
            <img :src="item.thumb" alt="">
            <div class="thumb-title">{{item.title}}</div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
	  <div class="inline-box msg-right" :class="{'no-wish': !message.length}">
      <a href="/blessing" class="wish" v-if="message.length">
        <div class="inline-box">寄语：</div>
        <div class="inline-box wish-run">
          <div class="run-text">{{message[0].details}}</div>
        </div>
      </a>
      <div class="news-content">
        <div class="top-line">
          <div class="line-item" v-for="(item, index) in stickShow">
            <a :href="`/details?id=${item.id}`" target="_blank">
            <div class="line-title">{{item.title}}</div>
            <div class="line-detail">
              {{item.details}}
            </div>
            </a>
          </div>
        </div>
        <div class="topline-list">
          <div class="lines" v-for="(list, index) in stick" :key="list.id" v-if="index > 1"><a :href="`/details?id=${list.id}`" target="_blank">{{list.title}}</a></div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
	export default {
		name: 'MsgService',
    props: ['stick', 'message'],
		data() {
			return {
        swiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        banner: [],
      }
		},
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      stickShow() {
        return this.stick.slice(0,2);
      }
    },
    created () {
		  this.getBanners();
		  console.log(this.message)
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
    },
    methods: {
		  getBanners () {
		    this.$http.getBanner()
          .then((res) => {
            this.banner = res.data;
            console.log(res);
          })
      }
    }
	}
</script>
<style lang="scss" scoped>
@import "../../assets/commom";
@import "./msgservice";
</style>
