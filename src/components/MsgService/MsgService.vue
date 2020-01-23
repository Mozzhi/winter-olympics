<template>
	<div class="msg-service wrapper clearfix">
    <div class="meet-in-neimoongu"></div>
	  <div class="inline-box msg-left">
      <div class="new-banner" v-if="banner.length">
        <Carousel
          v-model="value3"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :radius-dot="setting.radiusDot"
          :trigger="setting.trigger"
          arrow="never">
          <CarouselItem v-for="item in banner"  :key="item.id">
            <a :href="item.url">
              <img :src="item.thumb" alt="">
              <div class="thumb-title">{{item.title}}</div>
            </a>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
	  <div class="inline-box msg-right" :class="{'no-wish': !message.length}">
      <a href="/blessing" class="wish" v-if="message.length">
        <div class="inline-box">寄语：</div>
        <div class="inline-box wish-run">
          <div class="run-text">{{message[0].details}}</div>
        </div>
      </a>
      <div class="news-content home-news-content">
        <div class="top-line">
          <div class="line-item" v-for="(item, index) in stickShow">
            <a :href="`/details?id=${item.id}`" target="_blank">
            <div class="line-title">{{item.title}}</div>
            <div class="line-detail" v-html="sliceString(item.details)"></div>
            </a>
          </div>
        </div>
        <div class="topline-list">
          <div class="lines" v-for="(list, index) in stick" :key="list.id" v-if="index > 1"><a :href="`/details?id=${list.id}`" target="_blank">{{list.title}}</a></div>
        </div>
        <div class="no-data" v-if="!stick.length"><img src="../../../static/images/nodata.png" alt=""></div>
      </div>
    </div>
	</div>
</template>
<script>
 
	export default {
		name: 'MsgService',
    props: ['stick', 'message'],
		data() {
			return {
        banner: [],
        value3: 0,
        setting: {
          autoplay: true,
          autoplaySpeed: 3000,
          dots: 'inside',
          radiusDot: false,
          trigger: 'hover',
          arrow: 'hover'
        }
      }
		},
    computed: {
      stickShow() {
        return this.stick.slice(0,2);
      }
    },
    created () {
		  this.getBanners();
    },
    mounted() {
		  
    },
    methods: {
      sliceString(str) {
        return str.slice(0, 57) + '<span class="red">[详情]</span>'
      },
		  getBanners () {
		    this.$http.getBanner()
          .then((res) => {
            this.banner = res.data;
          })
      }
    }
	}
</script>
<style lang="scss" scoped>
@import "../../assets/commom";
@import "./msgservice";
</style>
