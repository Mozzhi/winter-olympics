<template>
  <div class="game-content clearfix">
    <div class="inline-box game-lists">
      <a href="" v-for="item in news5"><div class="game-list clearfix">
        <span class="game-title"><img class="game-icon" src="../../../static/images/point.png" alt="">{{item.title}}</span>
        <span class="date">{{item.published_at1}}</span>
      </div></a>
    </div>
    <div class="inline-box game-lists">
      <a href="" v-for="item in news10"><div class="game-list clearfix">
        <span class="game-title"><img class="game-icon" src="../../../static/images/point.png" alt="">{{item.title}}</span>
        <span class="date">{{item.published_at1}}</span>
      </div></a>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'DailyNews',
    props: ['dailyNews'],
		data() {
			return {}
		},
    computed: {
		  news5 () {
		    return this.dailyNews.slice(0, 6);
      },
		  news10 () {
		    return this.dailyNews.slice(6, 11);
      }
    }
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
  @import '../GameContent/gamecontent';
  .game-content {
    margin-top: 5px;
    min-height: 0;
    background: {
      size: 1140px 14px;
      image: url("#{$img-base}devide.png");
    };
    .game-lists {
      padding-bottom: 0;
      float: left;
      .game-list {
        .game-title {
          .game-icon {
            width: 3px;/*no*/
            height: 3px;/*no*/
          }
        }
      }
    }
  }
</style>
