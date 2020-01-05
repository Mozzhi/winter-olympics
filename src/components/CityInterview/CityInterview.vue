<template>
	<div class="city-interview">
	  <div class="content-item" v-for="item in cityData">
      <div class="city-introduce">
        <div class="interview-title">{{item.title}}</div>
        <div class="interview-detail">{{item.detail}}</div>
        <div class="interview-date">{{item.published_at}}</div>
      </div>
      <div class="city-img">
        <img :src="item.thumb" alt="">
      </div>
    </div>
	</div>
</template>
<script>
	export default {
		name: 'CityInterview',
    props: ['cityData'],
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
