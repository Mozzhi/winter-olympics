<template>
	<div class="breadcrumb">
	  <span class="now-location">当前位置 ></span>
    <a href="/">首页 ></a>
    <a href="" v-if="lastPage">{{ lastPage }} > </a>
    <a :href="params.path">{{ current }}</a>
    <slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'Breadcrumb',
    props: ['current', 'lastPage'],
		data() {
			return {
			  params: this.$route,
      
      }
		},
    created() {
		  console.log(this.params)
    }
	}
</script>
<style lang="scss" scoped>
  @import "../../assets/commom";
.breadcrumb {
  padding-left: 60px;
  background: url("#{$img-base}563left.png") 30px center no-repeat;
  background-size: 20px 24px;
  color: #303030;
  font-size: 14px;
  margin: 10px 0;
}
</style>
