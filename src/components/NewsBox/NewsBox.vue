<template>
	<div class="news-box" :class="{'box-show' : pagePath !== '/Login'}">
	  <div class="new-center">
      <div class="news-title">新闻中心</div>
      <div class="news-list">
        <div class="list" v-for="notice in floatNotice" :key="notice.id"><a href="">{{notice.title}}</a></div>
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
        floatNotice: [],
      }
		},
    created() {
      this.getFloatNotice();
    },
    methods: {
      getFloatNotice () {
        this.$http.getNotice()
          .then((res) => {
            this.floatNotice = res.data
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/commom";
@import './newsbox';
</style>
