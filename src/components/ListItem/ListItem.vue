<template>
	<div class="list-item clearfix" :class="{'no-img': NoImg}">
    <a :href="`/details?id=${list.id}&on=${querys.on}&tw=${querys.tw}&th=${querys.th}`" target="_blank">
	  <div class="inline-box list-text">
      <div class="list-title">{{list.title}}</div>
      <div class="list-detail">{{list.details}}</div>
      <div class="list-time">{{list.published_at2}}</div>
    </div>
	  <div class="inline-box list-img-show" v-if="!NoImg">
      <img :src="list.thumb" alt="">
    </div>
    </a>
	</div>
</template>
<script>
	export default {
		name: 'ListItem',
    props: ['NoImg', 'list'],
		data() {
		  let querys = this.$route.query;
			return {
        querys: {
          on: querys.on || 0,
          tw: querys.tw || '',
          th: querys.th || ''
        }
      }
		},
    created() {
		  
    }
  }
</script>
<style lang="scss" scoped>
@import '../../assets/commom';
.list-item {
  position: relative;
  padding: 25px 250px 20px 20px;
  min-height: 170px;
  border-bottom: 1px dashed #F0EFF1;
  &.no-img {
    padding-right: 30px;
  }
  .list-text {
    color: $font-g;
    font-size: 14px;//
    .list-title {
      font-size: 18px;
      font-weight: bold;
      color: #303030;
    }
    .list-detail {
      line-height: 30px;
      margin: 10px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      height: 60px;
    }
  }
  .list-img-show {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 168px;
    height: 95px;
    border-radius: 4px;
    overflow: hidden;
  }
  &:hover {
    background: #F0EFF1;
  }
}
</style>
