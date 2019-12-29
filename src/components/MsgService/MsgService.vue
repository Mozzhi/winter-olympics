<template>
	<div class="msg-service wrapper clearfix">
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
      <div class="wish">
        <div class="inline-box">寄语：</div>
        <div class="inline-box wish-run">
          <div class="run-text">精心做好各项筹备工作，全力以赴办好“十四冬”，向党和人民交上一份满意答卷。</div>
        </div>
      </div>
      <div class="news-content">
        <div class="top-line">
          <div class="line-item" v-for="i in 2">
            <div class="line-title">体育总局竞体司关于公示第十四届全国冬届全国冬</div>
            <div class="line-detail">
              各省、自治区、直辖市、新疆生产建设兵团体育局，中央军委训练管理部军事体育训练中心，冬运中心，中国滑冰协会、中国
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
