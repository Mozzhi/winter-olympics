<template>
	<div class="across-calendar">
	  <span class="date-btn across-contr-btn" @click="calendarMove()" v-show="left > 0"></span>
    <div class="date-out-box">
      <div class="date-box" :style="{'left': -(78/192) * left + 'rem'}">
        <div class="date-btn" v-for="(date, index) in Feb" @mouseenter="current = index">
          <div class="date-btn-inner" :class="{'active': index == current}">
          <div class="date-text">{{date}}</div>
          <span class="febb"></span>
          </div>
        </div>
      </div>
    </div>
	  <span class="date-btn across-contr-btn next-btn" @click="calendarMove(1)" v-show="left < 19"></span>
	</div>
</template>
<script>
  let Feb = [];
  for(let i = 1; i < 30; i++){
    let fdate = i < 10 ? '0' + i : i;
    Feb.push(fdate);
  }
	export default {
		name: 'AcrossCalendar',
		data() {
			return {
			  Feb: Feb,
        left: 0,
        clientW: document.documentElement.clientWidth,
        current: 0,
      }
		},
    methods: {
		  calendarMove(direction) {
		    if(direction) {
		      this.left++;
        }else {
		      this.left--;
        }
      }
    }
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
.across-calendar {
  width: 936px;
  padding: 0 78px;
  position: relative;
  height: 78px;
  margin: 40px auto 20px;
  .date-out-box {
    width: 780px;
    overflow: hidden;
    height: 78px;
    position: relative;
    .date-box {
      width: 2262px;
      position: absolute;
      left: 0;
      transition: all 0.3s linear;
      .date-btn {
        width: 78px;
        height: 78px;
        background: white;
        padding: 5px;
        text-align: center;
        .date-btn-inner {
          width: 68px;
          height: 68px;
          display: inline-block;
          background: $normal-bg;
          border-radius: 4px;/*no*/
          &.active {
            width: 72px;
            height: 72px;
            background: $theme-color;
            color: #fff;
            .febb {
              background-image: url("#{$img-base}febw.png");
            }
          }
        }
        &:hover{
          .date-btn-inner{
            width: 72px;
            height: 72px;
            background: $theme-color;
            color: #fff;
            .febb {
              background-image: url("#{$img-base}febw.png");
            }
          }
        }
      }
    }
  }
  .date-btn {
    display: inline-block;
    width: 68px;
    height: 68px;
    border-radius: 4px;/*no*/
    background: $normal-bg;
    text-align: center;
    font-size: 12px;
    color: $theme-color;
    cursor: pointer;
    position: relative;
    .date-text {
      font-size: 38px;
      font-weight: bold;
    }
    .febb {
      display: block;
      position: absolute;
      width: 42px;
      height: 10px;
      left: 50%;
      margin-left: -21px;
      bottom: 15px;
      background: {
        repeat: no-repeat;
        size: 42px 10px;
        position: center center;
        image: url("#{$img-base}febb.png");
      };
    }
  }
  .across-contr-btn {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    background: {
      repeat: no-repeat;
      size: 25px 29px;
      position: center center;
      color: $normal-bg;
    };
    background-image: url("#{$img-base}right-icon.png");
    &.next-btn {
      background-image: url("#{$img-base}left-icon.png");
      left: auto;
      right: 0;
    }
  }
}
</style>
