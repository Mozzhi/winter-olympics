<template>
	<div class="home">
	
	</div>
</template>
<script>
	export default {
		name: 'Home',
		data() {
			return {}
		},
    created() {
		  this.$http.getTags()
    }
  }
</script>
<style lang="scss" scoped>

</style>
