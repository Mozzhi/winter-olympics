<template>
  <div class="charm-inner-mongolia">
    <header-bar active="hulun_buir"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <div class="Breadcrumb">5555</div>
      <subpage-title block-name="这里是呼伦贝尔"></subpage-title>
      <div class="list-devide">
        <block-item block-name="内蒙古概况" class="">
          <div class="parts clearfix" slot="blockContent">
            <a href="" class="inline-box part-item survey" v-bg="'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'">
              <div class="mask"><span class="mask-text">概况</span></div>
            </a>
            <a href="" class="inline-box part-item">
              <div class="matter" v-bg="'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'">
                <div class="mask-bar"><span class="mask-text">概况</span></div>
              </div>
              <div class="matter" v-bg="'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'">
                <div class="mask-bar"><span class="mask-text">概况</span></div>
              </div>
            </a>
            <a href="" class="inline-box part-item">
              <div class="matter" v-bg="'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'">
                <div class="mask-bar"><span class="mask-text">概况</span></div>
              </div>
              <div class="matter" v-bg="'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'">
                <div class="mask-bar"><span class="mask-text">概况</span></div>
              </div>
            </a>
          </div>
        </block-item>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import HeaderBar from '../components/HeaderBar/HeaderBar.vue';
  import Footer from '../components/Footer/Footer.vue';
  import SubpageTitle from '../components/SubpageTitle/SubpageTitle.vue';
  import BlockItem from '../components/BlockItem/BlockItem.vue';
  import NewsBox from '../components/NewsBox/NewsBox';
  export default {
    name: 'CharmInnerMongolia',
    data() {
      return {
        mainList: [],
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      BlockItem,
      NewsBox
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        let params = {
          column_id: 10,
          p: 1
        };
        this.$http.getArticleList(params)
          .then(res => {
            this.mainList = res.data.list;
            console.log(this.mainList)
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
  @import "../assets/bupu";
</style>
