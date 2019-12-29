<template>
	<div class="block-item wrapper">
    <div class="block-header-out">
      <div class="block-header">
        <div class="block-name"><img class="img-icon" src="../../../static/images/block-icon.png" alt="">{{blockName}}</div>
        <div class="header-center"><slot name="headCenter"></slot></div>
        <a href="" class="more-entry look-more" v-if="moreClass">查看更多></a>
        <a href="#" class="more-entry" v-else>查看更多 <img src="../../../static/images/more-icon.png" alt="" class="more-icon"></a>
      </div>
    <slot name="blockContent"></slot>
	</div>
  </div>
</template>
<script>
	export default {
		name: 'BlockItem',
    props: ['blockName', 'moreClass'],
		data() {
			return {}
		},
    mounted () {
		  
    }
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
.block-item {
  background: #fff;
  padding: 0 30px 30px;
  margin-top: 30px;
  box-shadow: 0 0 15px rgba(0,0,0,0.05);
  .block-header {
    height: 80px;
    padding: 0 170px 0 200px;
    position: relative;
    line-height: 80px;
    .block-name {
      position: absolute;
      left: 0;
      top: 0;
      height: 80px;
      /*width: 200px;*/
      color: $theme-color;
      font-weight: 700;
      font-size: 30px;
      background: {
        repeat: no-repeat;
        size: 60px 60px;
        position: center center;
        image: url("#{$img-base}namebg.png");
      };
      .img-icon{
        width: 22px;
        height: 22px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .more-entry {
      position: absolute;
      right: 0;
      top: 0;
      height: 80px;
      color: $more-btn-color;
      font-size: 14px;
      .more-icon {
        width: 34px;
        height: 34px;vertical-align: middle;
        margin-left: 10px;
      }
      &.look-more {
        @extend .look-more;
        background-image: url("#{$img-base}more.png");
        margin-top: 20px;
        width: 132px;
        &:hover {
        background-image: url("#{$img-base}mores.jpeg");
      }
      }
    }
    
  }
  &.splendid-box {
    box-shadow: none;
    padding: 0;
    .block-header-out {
      padding: 0 30px;
    }
  }
}
</style>
