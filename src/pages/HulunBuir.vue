<template>
  <div class="charm-inner-mongolia">
    <header-bar active="hulun_buir"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <breadcrumb current="这里是呼伦贝尔"></breadcrumb>
      <subpage-title block-name="这里是呼伦贝尔"></subpage-title>
      <div class="list-devide">
        <block-item :block-name="item.name" :small-name="item.intro" class="" v-for="item in hulunData" :key="item.id" :link="`/splendid_pages/splendid_img/${item.id}`">
          <div class="parts clearfix" slot="blockContent" @click="setBreadCrumb(item.name, '/hulun_buir')">
            <a :href="`/details?id=${list.id}`" target="_blank" class="inline-box part-item survey"
               v-for="(list, index) in item.content" v-if="index == 0" :key="list.id">
              <img :src="list.thumb" alt="">
              <div class="mask-texts">{{list.title}}</div>
            </a>
            <div class="inline-box part-item">
              <a :href="`/details?id=${list.id}`" target="_blank" class="matter" v-for="(list, index) in item.content" v-if="index == 1">
                <img :src="list.thumb" alt="">
              </a>
              <a :href="`/details?id=${list.id}`" target="_blank" class="matter" v-for="(list, index) in item.content" v-if="index == 2">
                <img :src="list.thumb" alt="">
              </a>
            </div>
            <div class="inline-box part-item">
              <a :href="`/details?id=${list.id}`" target="_blank" class="matter" v-for="(list, index) in item.content" v-if="index == 3">
                <img :src="list.thumb" alt="">
              </a>
              <a :href="`/details?id=${list.id}`" target="_blank" class="matter" v-for="(list, index) in item.content" v-if="index == 4">
                <img :src="list.thumb" alt="">
              </a>
            </div>
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
  import { hulunData } from "../util/static_data";
  import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';
  import { setBreadCrumb } from "../util";

  export default {
    name: 'CharmInnerMongolia',
    data() {
      return {
        hulunData: hulunData
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      BlockItem,
      NewsBox,
      Breadcrumb
    },
    mounted() {
      this.getData();
    },
    methods: {
      setBreadCrumb: setBreadCrumb,
      getData() {
        this.$http.getHulunbuirData()
          .then(res => {
            this.hulunData[0]['content'] = res.data.Physical_geography;
            this.hulunData[1]['content'] = res.data.Historical_tracing;
            this.hulunData[2]['content'] = res.data.Political_economy;
            this.hulunData[3]['content'] = res.data.Tourism_culture;
            this.hulunData[4]['content'] = res.data.Future_outloo;
            this.hulunData[5]['content'] = res.data.winter_rhyme;
            console.log(this.hulunData)
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
  @import "../assets/bupu";
  .charm-inner-mongolia {
    .parts {
      .survey, .matter {
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .mask-texts {
        width:520px;
        height:60px;
        background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
        border-radius:0px 0px 4px 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        font-size: 16px;
        line-height: 60px;
        text-align: center;
      }
    }
  }
</style>
