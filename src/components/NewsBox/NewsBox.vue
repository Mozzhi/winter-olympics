<template>
	<div class="news-box" :class="{'box-show' : pagePath !== '/Login'}">
	  <div class="new-center">
      <div class="news-title">新闻中心</div>
      <div class="news-list">
        <div class="list">2月18日扎兰屯：我们用剪纸作品为“十四冬”喝彩！</div>
        <div class="list">2月18日扎兰屯：我们用剪纸作品为“十四冬”喝彩！</div>
      </div>
      <a href="" class="look-more">查看更多></a>
    </div>
    <div class="logout">
      <div class="side-btn logout-btn">退出登录</div>
      <div class="side-btn manage-btn">管理后台</div>
      <div class="side-btn wechat-btn">小程序</div>
    </div>
	</div>
</template>
<script>
	export default {
		name: 'NewsBox',
		data() {
			return {
			  pagePath: '',
      }
		},
    created() {
    
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/commom";
@import './newsbox';
</style>
