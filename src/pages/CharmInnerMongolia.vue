<template>
  <div class="charm-inner-mongolia">
    <header-bar active="charm"></header-bar>
    <news-box></news-box>
    <div class="centerMain wrapper">
      <!--面包屑-->
      <breadcrumb current="魅力内蒙古"></breadcrumb>
      <subpage-title block-name="魅力内蒙古"></subpage-title>
      <div class="list-devide">
        <block-item :block-name="item.name" class="no-more" v-for="item in charmData" :key="item.id">
          <div class="parts clearfix mg" slot="blockContent" v-if="item.id == 47">
            <a :href="`/list_pages/Daily_News_bt/${item.id}?class_id=21&on=0&tw=9&th=${item.id}`" class="inline-box part-item survey bt" v-bg="item.survey_img">
              <div class="mask-bar"><span class="mask-text">概况</span></div>
            </a>
            <div class="inline-box part-item">
              <a :href="`/splendid_pages/mongo_splendid_img/${item.id}?class_id=25&on=0&tw=9&th=${item.id}`" class="matter bt" v-bg="item.dong">
                <div class="mask-bar"><span class="mask-text">冬韵</span></div>
              </a>
              <a :href="`/splendid_pages/mongo_splendid_img/${item.id}?class_id=26&on=0&tw=9&th=${item.id}`" class="matter bt" v-bg="item.video_matter">
                <div class="mask-bar"><span class="mask-text">旅游</span></div>
              </a>
            </div>
            <div class="inline-box part-item">
              <a :href="`/splendid_pages/mongo_splendid_img/${item.id}?class_id=27&on=0&tw=9&th=${item.id}`" class="matter bt" v-bg="item.word_matter">
                <div class="mask-bar"><span class="mask-text">美食</span></div>
              </a>
              <a :href="`/splendid_pages/mongo_splendid_img/${item.id}?class_id=28&on=0&tw=9&th=${item.id}`" class="matter bt" v-bg="item.img_matter">
                <div class="mask-bar"><span class="mask-text">文化</span></div>
              </a>
            </div>
          </div>
          <div class="parts clearfix mg" slot="blockContent" v-if="item.id !== 48 & item.id !== 47">
            <a :href="`/details?id=${item.id}&on=0&tw=9&th=${item.id}`" class="inline-box part-item survey bt" v-bg="item.survey_img">
              <!--<img :src="item.survey_img" alt="">-->
              <div class="mask-bar"><span class="mask-text">概况</span></div>
            </a>
            <a :href="`/splendid_pages/mongo_splendid_video/${item.id}?class_id=24&on=0&tw=9&th=${item.id}`" class="inline-box part-item bt" v-bg="item.video_matter">
              <!--<img :src="item.video_matter" alt="">-->
              <div class="mask-bar"><span class="mask-text">视频素材</span></div>
            </a>
            <div class="inline-box part-item">
              <a :href="`/cityline/article_list?id=${item.id}&class_id=22&on=0&tw=9&th=${item.id}`" class="matter bt" v-bg="item.word_matter">
                <!--<img :src="item.word_matter" alt="">-->
                <div class="mask-bar"><span class="mask-text">文字素材</span></div>
              </a>
              <a :href="`/splendid_pages/mongo_splendid_img/${item.id}?class_id=23&on=0&tw=9&th=${item.id}`" class="matter bt" v-bg="item.img_matter">
                <!--<img :src="item.img_matter" alt="">-->
                <div class="mask-bar"><span class="mask-text">图片素材</span></div>
              </a>
            </div>
          </div>
          <a href="/hulun_buir" class="link-to" slot="headCenter" v-if="item.id == 48">跳转 <img src="../../static/images/ra.png" alt=""></a>
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
  import NewsBox from '../components/NewsBox/NewsBox.vue';
  import { innerMongolia } from '../util/static_data';
  import Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue';
  
  export default {
    name: 'CharmInnerMongolia',
    data() {
      return {
        charmData: innerMongolia
      }
    },
    components: {
      HeaderBar,
      Footer,
      SubpageTitle,
      BlockItem,
      NewsBox,
      Breadcrumb
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/commom";
  @import "../assets/bupu";
  .charm-inner-mongolia {
    .link-to {
      color: $theme-color;
      position: relative;
      padding-left: 40px;
      font-size: 14px;
      img {
        width: 14px;
        height: 28px;
        vertical-align: middle;
      }
      &:before {
        @include pseudo-class;
        width: 50px;
        height: 3px;
        background: {
          repeat: no-repeat;
          size: 50px 3px;
          image: url("#{$img-base1}dashed.png");
        };
        left: -15px;
      }
    }
  }
</style>
