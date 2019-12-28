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
		},
	    mounted () {
			  console.log(this)
	    }
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/commom';
.block-title {
	position: relative;
	height: 46px;
	.title{
		width: 178px;
		height: 46px;
		z-index:2;
		position: relative;
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
		    repeat: no-repeat;
		    size:contain;
		    position: center center;
		    image: url("#{$img-base}events/titleBg.png");
		 };
	}
	.bg{
	 	display: block;
	 	z-index:1;
	 	position: absolute;
	 	width: 778px;
	 	height:0.005rem;
	 	margin-left: -389px;
	 	left: 50%;
	 	top: 50%;
	 	background-color: #a3c9f5;
	 }
	
}
</style>
