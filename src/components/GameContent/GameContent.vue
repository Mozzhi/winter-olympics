<template>
	<div class="game-content">
    <div class="inline-box calendar-box">
<<<<<<< HEAD
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
=======
      <Calendar
        ref="Calendar"
        :markDateMore="arr"
        :markDate="arr2"
        v-on:isToday="clickToday"
        agoDayHide="1530115221"
        v-on:choseDay="clickDay"
        v-on:changeMonth="changeDate"
      ></Calendar>
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
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
<<<<<<< HEAD
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
=======
  import Calendar from '../Calendar/Calendar.vue'
	export default {
		name: '',
    data() {
      return {
        // arr2: ['2018/6/23'],
        arr2: [],
        arr: [
          {
            date: "2018/8/1",
            className: "mark1"
          },
          {
            date: "2018/8/13",
            className: "mark2"
          }
        ]
      };
    },
    components: {
      Calendar
    },
    methods: {
      clickDay(data) {
        console.log("选中了", data); //选中某天
      },
      clickToday(data) {
        console.log("跳到了本月今天", data); //跳到了本月
      },
      changeDate(data) {
        console.log("左右点击切换月份", data); //左右点击切换月份
      },
      demo() {
        this.$refs.Calendar.ChoseMonth("2018-12-13"); //跳到12月12日选中12月12日
      }
    },
    created() {
      function format(date, index) {
        date = new Date(date);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${index}`;
      }
      setTimeout(() => {
        this.arr = [
          {
            date: format(new Date(), 3),
            className: "mark1"
          },
          {
            date: format(new Date(), 12),
            className: "mark2"
          }
        ];
        this.arr.push({
          date: format(new Date(), 15),
          className: "mark1"
        });
      }, 300);
    }
>>>>>>> cf8acaf34946d01af07f72c1242d8c69350ee8e1
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
@import './gamecontent';
</style>
