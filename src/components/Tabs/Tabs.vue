<template>
	<div class="tabs">
    <div class="game-tab" v-for="(tab, index) in tabArr" :class="{'tab-first': index == 0, 'tab-last': index == tabArr.length - 1, 'tab': index !== 0 && index !== tabArr.length - 1}"><span class="tab-text">{{tab.text}}</span></div>
	</div>
</template>
<script>
	export default {
		name: 'Tabs',
    props: ['tabArr'],
		data() {
			return {
			  
      }
		},
		created() {
		  console.log(this.tabArr)
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/commom";
  .tab-text-hover {
    position: relative;
    &:before {
      @include pseudo-class;
      width: 139px;
      left: 50%;
      transform: translate(-50%, -50%);
      @include base-bg;
      background-image: url("#{$img-base}something.png");
      background-size: 139px auto;
      height: 12px;
    }
  }
  .tabs {
    text-align: center;
    .game-tab {
      display: inline-block;
      height: 36px;
      line-height: 36px;
      color: $theme-color;
      text-align: center;
      box-sizing: border-box;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 2px;
      &.tab-first {
        width: 195px;
        @include base-bg;
        background-image: url("#{$img-base}game-l.png");
        background-size: 195px 36px;
        padding-left: 30px;
        &:hover {
          background-image: url("#{$img-base}game-l-hover.png");
          color: #fff;
          .tab-text{
            @extend .tab-text-hover;
          }
        }
      }
      &.tab {
        width: 163px;
        background: $normal-bg;
        &:hover {
          background: $theme-color;
          color: #fff;
          .tab-text{
            @extend .tab-text-hover;
          }
        }
      }
      &.tab-last {
        @extend .tab-first;
        background-image: url("#{$img-base}game-r.png");
        padding-left: 0;
        padding-right: 30px;
        &:hover {
          background-image: url("#{$img-base}game-r-hove.png");
          color: #fff;
          .tab-text{
            @extend .tab-text-hover;
          }
        }
      }
    }
  }
</style>
