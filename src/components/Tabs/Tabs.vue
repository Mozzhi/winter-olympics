<template>
	<div class="tabs">
    <div class="game-tab"
         v-for="(tab, index) in tabArr"
         :class="{'tab-first': index == 0, 'tab-last': index == tabArr.length - 1, 'tab': index !== 0 && index !== tabArr.length - 1, 'active': tab.key == currentKey}" @click="switchover(tab.key)"><span class="tab-text">{{tab.text}}</span></div>
	</div>
</template>
<script>
	export default {
		name: 'Tabs',
    props: ['tabArr', 'currentKey'],
		data() {
			return {
			  
      }
		},
    methods: {
      switchover(key) {
        this.$emit('switchoverKey', key)
      }
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
      font-size: 16px;
      &.tab-first {
        width: 195px;
        @include base-bg;
        background-image: url("#{$img-base}game-l.png");
        background-size: 195px 36px;
        padding-left: 30px;
        &:hover, &.active {
          background-image: url("#{$img-base}game-l-hover.png")!important;
          color: #fff;
          .tab-text{
            /*@extend .tab-text-hover;*/
          }
        }
      }
      &.tab {
        width: 163px;
        background: $normal-bg;
        &:hover, &.active {
          background: $theme-color!important;
          color: #fff;
          .tab-text{
            /*@extend .tab-text-hover;*/
          }
        }
      }
      &.tab-last {
        @extend .tab-first;
        background-image: url("#{$img-base}game-r.png");
        padding-left: 0;
        padding-right: 30px;
        &:hover, &.active {
          background-image: url("#{$img-base}game-r-hove.png")!important;
          color: #fff;
          .tab-text{
            /*@extend .tab-text-hover;*/
          }
        }
      }
    }
  
    &.list-tab {
      .game-tab{
        height: 42px;
        line-height: 42px;
        font-size: 20px;
        color: #fff;
        &.tab-first {
          background-size: 195px 42px;
          background-image: url("#{$img-base}game-ld.png");
        }
        &.tab {
          background: #8AB9F1;
        }
        &.tab-last {
          background-size: 195px 42px;
          background-image: url("#{$img-base}game-rd.png");
        }
        .tab-text{
          &:before {
            display: none!important;
          }
        }
      }
    }
  }
  .tabs.home-page {
    .game-tab {
      &.tab-first {
        &:hover, &.active {
          .tab-text{
            @extend .tab-text-hover;
          }
        }
      }
      &.tab {
        &:hover, &.active {
          .tab-text{
            @extend .tab-text-hover;
          }
        }
      }
      &.tab-last {
        &:hover, &.active {
          .tab-text{
            @extend .tab-text-hover;
          }
        }
      }
    }
  }
</style>
