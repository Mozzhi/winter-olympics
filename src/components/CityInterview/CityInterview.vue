<template>
	<div class="city-interview">
	  <div class="content-item" v-for="i in 4">
      <div class="city-introduce">
        <div class="interview-title">走进蒙古</div>
        <div class="interview-detail">接待保障部召开接待酒店第五次业务指导工作会议接待保障部召开接待酒店第五次业务指导工作会议</div>
        <div class="interview-date">02-18 08:30</div>
      </div>
      <div class="city-img">
        <img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" alt="">
      </div>
    </div>
	</div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {}
		}
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
  .city-interview {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    .content-item {
      padding-right: 230px;
      position: relative;
      width: 570px;
      margin-bottom: 30px;
      padding-left: 50px;
      .city-introduce {
        width: 290px;
      }
      .city-img {
        position: absolute;
        right: 0;
        top: 0;
        img{
          width: 200px;
          height: 112px;
        }
      }
      .interview-title {
        font-size: 16px;
        margin-bottom: 5px;
      }
      .interview-detail {
        font-size: 14px;
        line-height: 30px;
        color: $font-g;
        width: 290px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 60px;
        margin-bottom: 10px;
      }
      .interview-date {
        font-size: 12px;
        color: $date-color;
      }
      &:nth-of-type(2n+1) {
        padding-right: 280px;
        padding-left: 0;
        .city-img {
          right: 50px;
        }
      }
    }
  }
</style>
