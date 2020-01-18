<template>
	<div class="block-title">
		<div class="bg"></div>
		<div class="title">{{blockName}}</div>
	 
	</div>
</template>
<script>
	export default {
		name: 'SubpageTitle',
    props: ['blockName'],
		data() {
			return {}
		}
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
.block-title {
	position: relative;
	height: 46px;
  text-align: center;
	.title{
		height: 46px;
		z-index:2;
		position: relative;
    display: inline-block;
    padding: 0 30px;
		line-height: 46px;
		margin: 0 auto;
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		font-size: 24px;
		font-stretch: normal;
		letter-spacing: 0px;
		text-align: center;
		color: #3775bd;
		background: {
			color: #fff;
		    image: url("#{$img-base}events/titleBg.png");
		    repeat: no-repeat;
		    size:100% 46px;
		    position: center center;
		 };
	}
	.bg{
	 	display: block;
	 	z-index:1;
	 	position: absolute;
	 	width: 778px;
	 	height:1px;/*no*/
	 	margin-left: -389px;
	 	left: 50%;
	 	top: 50%;
	 	background-color: #a3c9f5;
	 }
	
}
</style>
