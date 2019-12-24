<template>
	<div class="game-content">
    <div class="inline-box calendar-box">
      <Calendar
        ref="Calendar"
        :markDateMore="arr"
        :markDate="arr2"
        v-on:isToday="clickToday"
        agoDayHide="1530115221"
        v-on:choseDay="clickDay"
        v-on:changeMonth="changeDate"
      ></Calendar>
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
  };
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
@import './gamecontent';
</style>
