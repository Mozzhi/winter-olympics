<template>
	<div class="header ">
	  <div class="logo-search inline-box-container">
      <div class="inline-box sports-meet"></div>
      <div class="inline-box search-box">
        <form class="search-form"  autocomplete="off" @submit.prevent="onSubmit">
          <input type="text" class="search" placeholder="搜索" v-model="keyword">
        </form>
      </div>
      <div class="inline-box s-img"></div>
    </div>
	  <div class="tabs wrapper">
      <a class="tab" :class="{'active': active == tab.key }" :href="tab.url" v-for="tab in tabs" v-text="tab.text"></a>
    </div>
	</div>
</template>
<script>
	export default {
		name: 'HeaderBar',
    props: ['active'],
		data() {
			return {
			  tabs: [
          {
            text: '首页',
            url:'/',
            key: 'home'
          },
          {
            text: '信息服务',
            url:'/list_pages/msg_service',
            key: 'msg_service'
          },
          {
            text: '赛事服务',
            url:'/EventServices',
            key: 'eventServices'
          },
          {
            text: '精彩图片',
            url:'/splendid_pages/splendid_img',
            key: 'splendid_img'
          },
          {
            text: '精彩视频',
            url:'/splendid_pages/splendid_video',
            key: 'splendid_video'
          },
          {
            text: '竞赛成绩',
            url:'#',
            key: 'grade'
          },
          {
            text: '每日新闻',
            url:'/list_pages/Daily_News',
            key: 'Daily_News'
          },
          {
            text: '开闭幕式',
            url:'/list_pages/Ceremony',
            key: 'Ceremony'
          },
          {
            text: '魅力内蒙古',
            url:'/charm_inner_mongolia',
            key: 'charm'
          },
          {
            text: '这里是呼伦贝尔',
            url:'/hulun_buir',
            key: 'hulun_buir'
          },
        ],
        keyword: '',
      }
		},
    methods: {
      onSubmit () {
        if(!this.keyword) {
          this.$Message.error('请输入要查找的内容');
        }else {
          let listType = this.$route.params.list_type || '';
          this.$router.push({path: `/cityline/search/${this.keyword}`});
          if(listType == 'city_visiting') {
            window.location.reload();
          }
        }
      }
    }
	}
</script>
<style lang="scss" scoped>
@import '../../assets/commom';
  @import "./haederbar";
</style>
