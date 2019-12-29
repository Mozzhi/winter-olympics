<template>
	<div class="game-content">
    <div class="inline-box calendar-box">
      <div class="feb"><span>2020</span>年<span>2</span>月</div>
      <table class="table">
        <thead>
        <tr>
          <th v-for="week in weekday">{{week}}</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5">
            <td v-for="(date, index) in febArr" v-if="index <= 7*i && index > 7*(i-1)" :class="{'active': choosed > 5 && choosed == date}"><div class="inner-date" v-if="date">{{date}}</div></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="inline-box game-lists">
      <a href="" v-for="i in 5"><div class="game-list clearfix">
        <span class="game-title"><img class="game-icon" src="../../../static/images/game-icon.png" alt="">2月18日 08:00 开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式开幕式</span>
        <span class="date">02-18 08:30</span>
      </div></a>
    </div>
	</div>
</template>
<script>
  let arr = [,,,,,,];
  for(let i = 1; i < 30; i++) {
    arr.push(i);
  }
  console.log(arr)
	export default {
		name: 'GameContent',
    data() {
      return {
        febArr: arr,
        weekday: ['一','二','三','四','五','六','日'],
        choosed: 18
      };
    },
    components: {
		  
    },
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
@import './gamecontent';
</style>
