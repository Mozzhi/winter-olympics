<template>
  <div class="game-content clearfix">
    <div class="inline-box game-lists">
      <a href="" v-for="i in 5"><div class="game-list clearfix">
        <span class="game-title"><img class="game-icon" src="../../../static/images/point.png" alt="">2月18日 08:00 开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式</span>
        <span class="date">02-18 08:30</span>
      </div></a>
    </div>
    <div class="inline-box game-lists">
      <a href="" v-for="i in 5"><div class="game-list clearfix">
        <span class="game-title"><img class="game-icon" src="../../../static/images/point.png" alt="">2月18日 08:00 开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式</span>
        <span class="date">02-18 08:30</span>
      </div></a>
    </div>
  </div>
</template>
<script>
	export default {
<<<<<<< HEAD
		name: 'DailyNews',
=======
		name: '',
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
		data() {
			return {}
		}
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
  @import '../GameContent/gamecontent';
  .game-content {
<<<<<<< HEAD
    margin-top: 5px;
=======
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
    min-height: 0;
    background: {
      size: 1140px 14px;
      image: url("#{$img-base}devide.png");
    };
    .game-lists {
      padding-bottom: 0;
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
