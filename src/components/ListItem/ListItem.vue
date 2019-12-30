<template>
	<div class="list-item clearfix" :class="{'no-img': NoImg}">
    <a href="">
	  <div class="inline-box list-text">
      <div class="list-title">第十四届全国冬季运动会钢架雪车项目比赛在挪威利勒哈默尔圆满落</div>
      <div class="list-detail">为推动中国钢架雪车与世界高水平接轨，提升办赛、参赛水平，此次钢架雪车项目比赛在挪威利勒哈默尔举行，并参照世锦赛及冬季奥运会赛程，设置男、女2个单项，分2天4轮次进行，以4轮次滑行时间之和计总成绩。动中国钢架雪车与世界高水平接轨，提升办赛、参赛水平，此次钢架雪车项目比赛在挪威利勒哈默尔举行，并参照世锦赛及冬季奥运会赛程，设置男、女2个单项，分2天4轮次进行，以4轮次滑行时间之和计总成绩。</div>
      <div class="list-time">2020-02-16  18:30</div>
    </div>
	  <div class="inline-box list-img-show" v-if="!NoImg">
      <img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt="">
    </div>
    </a>
	</div>
</template>
<script>
	export default {
		name: 'ListItem',
    props: ['NoImg'],
		data() {
			return {}
		},
    created() {
		  console.log(this.NoImg)
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
    }
  }
  .list-img-show {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 200px;
    height: 112px;
    overflow: hidden;
  }
}
</style>
