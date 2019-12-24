<template>
	<div class="header ">
	  <div class="logo-search inline-box-container">
      <div class="inline-box sports-meet"></div>
      <div class="inline-box search-box">
        <input type="text" class="search" placeholder="搜索">
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
            url:'#',
            key: 'home'
          },
          {
            text: '信息服务',
            url:'#'
          },
          {
            text: '赛事服务',
            url:'#'
          },
          {
            text: '精彩图片',
            url:'#'
          },
          {
            text: '精彩视频',
            url:'#'
          },
          {
            text: '竞赛成绩',
            url:'#'
          },
          {
            text: '每日新闻',
            url:'#'
          },
          {
            text: '开闭幕式',
            url:'#'
          },
          {
            text: '魅力内蒙古',
            url:'#'
          },
          {
            text: '这里是呼伦贝尔',
            url:'#'
          },
        ]
      }
		}
	}
</script>
<style lang="scss" scoped>
@import '../../assets/commom';
  @import "./haederbar";
</style>
