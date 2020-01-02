<template>
	<div class="msg-service wrapper clearfix">
    <div class="meet-in-neimoongu"></div>
	  <div class="inline-box msg-left">
      <div class="new-banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="i in 4"  :key="i"><img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
	  <div class="inline-box msg-right">
      <div class="wish" v-if="message.length">
        <div class="inline-box">寄语：</div>
        <div class="inline-box wish-run">
          <div class="run-text">{{message[0].details}}</div>
        </div>
      </div>
      <div class="news-content">
        <div class="top-line">
          <div class="line-item" v-for="(item, index) in stickShow">
            <div class="line-title">{{item.title}}</div>
            <div class="line-detail">
              {{item.details}}
            </div>
          </div>
        </div>
        <div class="topline-list">
          <div class="lines" v-for="i in 5"><a href="">“十四冬”冰球测试赛落幕了，冠军是谁？“十四冬”冰球测试赛落幕了，冠军是谁？</a></div>
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
        }
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
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
    }
	}
</script>
<style lang="scss" scoped>
@import "../../assets/commom";
@import "./msgservice";
</style>
