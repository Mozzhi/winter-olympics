<template>
	<div class="breadcrumb">
	  <span class="now-location">当前位置 </span>
    <template>
      > <a :href="breadcrumb[on].link">{{ breadcrumb[on].text }}</a>
    </template>
    <template v-if="tw">
      > <a :href="breadcrumb[tw].link">{{ breadcrumb[tw].text }}</a>
    </template>
    <template v-if="th">
      > <a :href="breadcrumb[th].link">{{ breadcrumb[th]['text'] }}</a>
    </template>
    <template  v-if="current">
      > <a :href="params.path">{{ current }}</a>
    </template>
    <slot></slot>
	</div>
</template>
<script>
  import { breadcrumb } from "../../util/static_data";

  export default {
		name: 'Breadcrumb',
    props: ['current', 'lastPage', 'lastLink'],
		data() {
		  let querys = this.$route.query;
			return {
			  params: this.$route,
        on: querys.on || 0,
        tw: querys.tw || '',
        th: querys.th || '',
        breadcrumb: breadcrumb
      }
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
